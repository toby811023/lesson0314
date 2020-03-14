
import {createConnection, Connection} from 'typeorm';

export async function DB5Connection():Promise<Connection>{
    return  await createConnection({
        type: 'mssql',
        host: '127.0.0.1',  //正式環境
        port: 1433,
        username: 'XXX',
        password: 'XXXX',
        database: 'rs5',
        entities: [
          __dirname + '/../**/**.entity{.ts,.js}',
          
        ],
        synchronize:true
      });
}
