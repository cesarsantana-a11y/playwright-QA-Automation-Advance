import { test, expect } from '@playwright/test';

test('account has exactly one note - A', async ({ request }) => {
   test.skip(!process.env.NOTES_EMAIL, 'NOTES_EMAIL / NOTES_PASSWORD not set');

    const login = await request.post('/notes/api/users/login', {
        form: { email: process.env.NOTES_EMAIL!, password: process.env.NOTES_PASSWORD! },
    });
    const token = (await login.json()).data.token;
    const headers = { 'x-auth-token': token };

    // CHANGE 1: unique title, so this test can recognize its own note
    const myTitle = `Note A ${Date.now()}`;

    // CHANGE 2: no more delete-all. Create the note and keep its id
    const created = await request.post('/notes/api/notes', {
        headers,
        form: { title: myTitle, description: 'parallel test', category: 'Home' },
    });
    const myNote = (await created.json()).data;

    // CHANGE 3: check only MY note, not the total count
    const after = (await (await request.get('/notes/api/notes', { headers })).json()).data;
    const mine = after.filter((note: { title: string }) => note.title === myTitle);
    expect(mine).toHaveLength(1);

    // CHANGE 4: clean up only MY note
    await request.delete(`/notes/api/notes/${myNote.id}`, { headers });
});


test('account has exactly one note - B', async ({ request }) => {
   test.skip(!process.env.NOTES_EMAIL, 'NOTES_EMAIL / NOTES_PASSWORD not set');

    const login = await request.post('/notes/api/users/login', {
        form: { email: process.env.NOTES_EMAIL!, password: process.env.NOTES_PASSWORD! },
    });
    const token = (await login.json()).data.token;
    const headers = { 'x-auth-token': token };

    // CHANGE 1: unique title, so this test can recognize its own note
    const myTitle = `Note B ${Date.now()}`;

    // CHANGE 2: no more delete-all. Create the note and keep its id
    const created = await request.post('/notes/api/notes', {
        headers,
        form: { title: myTitle, description: 'parallel test', category: 'Home' },
    });
    const myNote = (await created.json()).data;

    // CHANGE 3: check only MY note, not the total count
    const after = (await (await request.get('/notes/api/notes', { headers })).json()).data;
    const mine = after.filter((note: { title: string }) => note.title === myTitle);
    expect(mine).toHaveLength(1);

    // CHANGE 4: clean up only MY note
    await request.delete(`/notes/api/notes/${myNote.id}`, { headers })
});
