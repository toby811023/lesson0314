import "reflect-metadata";
import { Connection } from "typeorm";

import { DB5Connection, Photo, Photo2,lib} from "./modules";


async function transferData(conn:Connection, srcTableName:string , targetTableName:string){
    let allDatas = await conn.query(`select * from ${srcTableName}`);
    
     let columns = await lib.getAllColumns(conn,targetTableName);
     // console.log('target:'+JSON.stringify(columns));
    
      for (let row of allDatas) {
         let newRow ={};
         for( let p of columns){
             if (p==='id') continue;
             if(  (row as Object).hasOwnProperty(p)){
                newRow[p]=row[p];
             }
         }
         await conn.getRepository(targetTableName).save(newRow);
         console.log(`save Ok [id:${newRow['id']}]`)  ;
      }
}

async function main() {
  let conn = await DB5Connection();
  await transferData(conn,'Photo','Photo2');
   
  process.exit();
}

main();
