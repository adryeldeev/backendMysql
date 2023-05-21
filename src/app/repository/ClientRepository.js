import { consulta } from "../database/pool.js"


class ClientRepository{
   findAll(){
    const sql = 'SELECT * FROM userclient'
     return consulta(sql, 'Não foi possível localizar!')
   }
   findById(id){
    const sql = 'SELECT * FROM userclient WHERE id = ?'
    return consulta(sql, id, 'Não possível localizar!')
   }
   create(values){
    const sql = 'INSERT INTO userclient (name, email, password) VALUES (?, ?, ?)'
    return consulta (sql, values, 'Não foi possível cadastrar!')
   }
   update(id, name, email, numero){
    const sql = 'UPDATE userclient SET name = ?, email = ?, password = ? WHERE id = ?'
    const values =[id, name, email, numero]
    return consulta( sql, values, 'Não foi possível atualizar!')
   }
   delete(id){
    const sql = 'DELETE FROM userclient WHERE id = ?'
    return consulta( sql, id, 'Não foi possível atualizar!')
   }


}

export default ClientRepository