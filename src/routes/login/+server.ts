import { json } from '@sveltejs/kit';

export async function POST({ request, cookies })
{
    return json({ id:'hi!' }, { status: 201})
}