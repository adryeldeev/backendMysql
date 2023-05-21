import mysql from 'mysql'





const pool = mysql.createPool({
    host:'sql.freedb.tech',
    user:'freedb_mysqlbd',
    password:"MS3AB?unEA$YM@$",
    database:'freedb_mysqlbd'
})

pool.getConnection((err, connection)=>{
    if(err){
        console.log( 'Erro ao  conectar ao banco de dados'+ err.stack)
        return err
    }
    console.log('Conexão bem sucedida, ID da conexão: ' + connection.threadId)
    connection.release()
})

export const consulta = (sql, valores= '',  mensagemReject)=>{
    return new Promise((resolve, reject)=>{
        pool.query(sql, valores, (err, result)=>{
            if(err){
                console.log(err.stack)
                return mensagemReject(err)
                }
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
                })
                })
}


export default pool;