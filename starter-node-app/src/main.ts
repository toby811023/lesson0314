import "reflect-metadata";
import { Connection } from "typeorm";

import { DB5Connection, Photo, Photo2,lib} from "./modules";
import { Circle, ExtCircle, ExtCircleThird } from "./circle";


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

function main2():void{
   console.log("test abc2")
}

// main();
main2();


function sayHello(person: string):string {
   if (person=='richard'){
      return 'Good afternoon, 太棒了 !! ' + person;
   } 
   else{
      return 'Good afternoon, ' + person;
   }

   
   
}

let user: string = 'Tom';
let myName: any = 3 ;
if (myName === '3'){
   myName ='123'
}

user ='richard';
let isDone: boolean = false;
if (isDone){
   user = 'John'
   var user3 ='AAA'
 // let user3 ='AAA'
}
user3 ='BBB'


console.log(sayHello(user));
console.log(sayHello(user3))
console.log(sayHello(myName))

const user2 ='Marry';
// user2 ='May'
console.log(`${user2} GOOOOD !!`)

console.log('[static] pi: ' + Circle.pi);

let circle = new Circle("小圓");
let pi = circle.getPI();
console.log('pi : ' + pi +' ['+ circle.name+ ']');

// let circle2 = new Circle("2圓"); 
//console.log('pi 3: ' + circle2.getPI() +' [' + circle2.name+']');

let circle2 = new  ExtCircle("2圓"); 
console.log('pi 2: ' + circle2.getPI() +' [' + circle2.getProted()+']');

let circle3 = new  ExtCircleThird("3圓"); 
console.log('get obj 3: ' + JSON.stringify( circle3.getObj()) +' [' + circle2.getProted()+']');
