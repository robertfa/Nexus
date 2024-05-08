import db from '../config/db.js'
export async function findAll(request, response) {
    const mediaEntry=await db.query('SELECT * FROM mediaEntry');
    response.json(mediaEntry)
}

export async function insertMediaEntry(request, response) {
    const mediaEntry=await db.query('SELECT * FROM mediaEntry');
    response.json(mediaEntry)
}