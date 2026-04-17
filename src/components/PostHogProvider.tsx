'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
    const fullUrl = window.location.origin + url;

    const send = () => {
      const ph = (window as any).posthog;
      if (ph?.__loaded) {
        ph.capture('$pageview', { $current_url: fullUrl });
      } else {
        // PostHog pas encore prêt — on réessaie dans 300ms
        setTimeout(send, 300);
      }
    };

    send();
  }, [pathname, searchParams]);

  return null;
}

// Suspense requis par Next.js pour useSearchParams dans un layout
export default function PostHogProvider() {
  return (
    <Suspense fallback={null}>
      <PostHogPageView />
    </Suspense>
  );
}
