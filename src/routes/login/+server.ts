import { db } from '$lib/server/db'
import { user } from '$lib/server/db/schema'
import { json } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export async function POST({ request, cookies }) {
    const { message, me } = await request.json();

    if (message == 'email')
    {
        const email = me.toLowerCase();
        const result = await db.select().from(user).where(eq(user.email, email));
        if (result.length >= 1)
        {
            return json({ email:'', error:'Mar van ilyen felhasznalo' }, { status: 201});
        }
    }
    return json({ email:me, error:'error' }, { status: 201});
}