import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { email, firstName, template } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email manquant' }, { status: 400 });
    }

    const databaseId = process.env.NOTION_SUBSCRIBERS_DB_ID;
    if (!databaseId) {
      console.error('[subscribe] NOTION_SUBSCRIBERS_DB_ID non défini');
      return NextResponse.json({ error: 'Configuration manquante' }, { status: 500 });
    }

    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Email: {
          type: 'title',
          title: [{ type: 'text', text: { content: email } }],
        },
        Prénom: {
          type: 'rich_text',
          rich_text: [{ type: 'text', text: { content: firstName ?? '' } }],
        },
        Template: {
          type: 'rich_text',
          rich_text: [{ type: 'text', text: { content: template ?? 'Général' } }],
        },
        'Date inscription': {
          type: 'date',
          date: { start: new Date().toISOString().split('T')[0] },
        },
        Statut: {
          type: 'select',
          select: { name: 'Nouveau' },
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[subscribe]', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
