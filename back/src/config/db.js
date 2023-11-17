// get the client
import mysql from 'mysql2/promise'

// create the connection to database
class Database {
 async init() {
  if(!this.connection){
    this.connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '123321',
      database: 'nexusdb',
    })
  }
  }
  async query(sql, values) {
    // Ejecutar la consulta y devolver el resultado
    try {
      const [rows, fields] = await this.connection.execute(sql, values);
      return rows;
    } catch (err) {
      console.error('Error al realizar la consulta:', err);
      throw err; // Propaga el error para manejarlo en el lugar donde se realiza la consulta
    }
  }
}

// Exportar una instancia única del objeto Database
// module.exports = new Database();
export default new Database();
