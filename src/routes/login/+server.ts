import { db } from '$lib/server/db'
import { users } from '$lib/server/db/schema'
import { json } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import crypto from 'crypto'

async function email(email_, cookies) {
    const email = email_.toLowerCase();
    const code = crypto.randomInt(10000, 100000);
    let session;
    while (true)
    {
        session = crypto.randomBytes(32).toString('hex');

        const result = await db.select()
        .from(users)
        .where(eq(users.session, session))
        if (result.length == 0) { break }
    }

    const result = await db.select()
    .from(users)
    .where(eq(users.email, email));

    try {
        if (result.length >= 1)
        {
            await db.update(users)
            .set({
                code: code,
                session: session,
                sessionExpiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 16),
            })
            .where(eq(users.email, email));
        } else 
        {
            await db.insert(users)
            .values({
                email: email,
                code: code,
                session: session,
                sessionExpiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 16),
            });
        }
    } catch {
        return false
    }
    console.log(code)
    cookies.set('user', session, {
    path: '/',
    httpOnly: true,
    secure: true,
    maxAge: 1000 * 60 * 60 * 24 * 16
    });
    return true
}



export async function POST({ request, cookies }) {
    const { message, me } = await request.json();

    if (message == 'email')
    {
        if (!await email(me, cookies)) {
            return json({ email: 'No', error: 'Nem helyes a formátum',}, { status: 201 })
        }
        
    } else if ( message == 'code' )
    {
        
    }

    return json({ email:me, error:'it hasnt error' }, { status: 201});
}