
import {Connection} from 'typeorm';
export class Lib {
    async  getAllColumns(conn:Connection,tableName:string):Promise<Array<string>>{
        let columns =await conn.getRepository(tableName).metadata.columns;
        let aRet=[];
        columns.forEach(element => {
            aRet.push(element.propertyName);
        });
        return aRet;
    }
}

export const lib = new Lib();