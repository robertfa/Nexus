import db from '../config/db.js'
export async function findAll(request, response) {
    const mediaEntry=await db.query('SELECT * FROM mediaEntry');
    response.json(mediaEntry)
}

export async function findOne(request, response) {
    const id = request.params.id; // Obtener el ID de los parámetros de la ruta
    const query = 'SELECT * FROM mediaEntry WHERE id = ?';

    try {
        // Ejecutar la consulta pasando el ID como un valor en un array
        const [mediaEntry] = await db.query(query, [id]);
        response.json(mediaEntry);
    } catch (error) {
        console.error('Error al obtener la entrada:', error);
        response.status(500).send('Error al obtener la entrada');
    }
}

export async function insertMediaEntry(request, response) {
    /*const mediaEntry=await db.query('INSERT INTO mediaEntry');
    response.json(mediaEntry)*/

    const { title,cover,synopsis } = request.body;

    const query = 'INSERT INTO mediaEntry (title,cover,synopsis) VALUES (?, ?, ?)';
    const values = [title,cover,synopsis];

    try {
        const result = await db.query(query, values);
        response.json({
            title,
            cover,
            synopsis,
        });
    } catch (error) {
        response.status(500).json({ error: 'Error inserting media entry' });
    }
}