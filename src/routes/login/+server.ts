import { db } from '$lib/server/db'
import { users } from '$lib/server/db/schema'
import { json } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import crypto from 'crypto'

async function emailSend(email) {
    const code = crypto.randomInt(10000, 100000);

    const result = await db.select()
    .from(users)
    .where(eq(users.email, email));

    try {
        if (result.length >= 1)
        {
            await db.update(users)
            .set({
                code: code,
                sessionExpiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 16),
            })
            .where(eq(users.email, email));
        } else 
        {
            await db.insert(users)
            .values({
                email: email,
                code: code,
                sessionExpiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 16),
            });
        }
    } catch {
        return false
    }
    console.log(code)
    return true
}

async function codeSend(mail, code) {
    const userResult = await db.select()
                        .from(users)
                        .where(eq(users.email, mail))
                        
    if (userResult.length == 0) 
    {
        return false
    }
    
    
    if (code != userResult[0].code)
    {
        return false
    }
    
    return true
}

export async function POST({ request, cookies }) {
    const { message, email, code=undefined } = await request.json();
    const mail = email.toLowerCase();

    if (message == 'email')
    {
        if (!await emailSend(mail)) 
        {
            return json({ email: 'No', error: 'Nem helyes a formátum',}, { status: 201 })
        }
        
    } else if ( message == 'code' )
    {   
        if (! await codeSend(mail, code))
        {
            return json({ email: 'No', error: 'Nem egyezik a kod' }, { status: 201 })
        }
        
        let session;
        while (true)
        {
            session = crypto.randomBytes(32).toString('hex');

            const result = await db.select()
            .from(users)
            .where(eq(users.session, session))
            if (result.length == 0) { break }
        }

        try 
        {
            await db.update(users)
                                .set({
                                    session: session,
                                    sessionExpiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 16),
                                })
                                .where(eq(users.email, mail))
        } catch 
        {
            return json({ email: 'No', error: 'Fura Kezdje ujra elolrol!'})
        }


        cookies.set('user', session, {
        path: '/',
        httpOnly: true,
        secure: true,
        maxAge: 1000 * 60 * 60 * 24 * 16
        });

        const result = await db.select()
        .from(users)
        .where(eq(users.session, session))

        if (await result[0].role == 'seller')
        {
            return json({ email: 'seller', redirect: 'manager' }, { status: 201 })
        }

    }
    return json({ email:mail, error:'it hasnt error' }, { status: 201});
}

export async function GET({ cookies }) {

    const result = await db.select()
    .from(users)
    .where(eq(users.session, cookies.get('user')))

    if (result.length == 0)
    {
        return json({ login: false }, { status: 201 })
    }

    return json({ email:result[0].email, login: true, role: result[0].role == 'seller' }, { status: 201 });
}