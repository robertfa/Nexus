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


export async function updateMediaEntry(request, response) {


    const { id } = request.params;
    const { title,cover,synopsis } = request.body;
    const query = ` UPDATE mediaEntry SET title = ?, cover = ?, synopsis = ?  WHERE id = ? `;
    const values = [title,cover,synopsis,id];


    try {
        const result = await db.query(query, values);  // No desestructurar si result no es un array

        // Verifica si `result` tiene `affectedRows` u otra propiedad que puedas utilizar
        if (result.affectedRows === 0) {
            return response.status(404).json({ error: 'Media entry not found' });
        }

        response.json({
            message: 'Media entry updated successfully',
            data: { id, title, cover, synopsis },
        });
    } catch (error) {
        console.error('Error updating media entry:', error.message);
        response.status(500).json({ error: 'Error updating media entry' });
    }
}
