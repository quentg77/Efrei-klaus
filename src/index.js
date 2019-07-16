import Pony from "./class/Pony";
import DragonBall from "./class/DragonBall";
import DBHeroes from "./enum/DBHeroes";
import Box from "./class/Box";
import Elf from "./class/Elf";
import GiftWrap from "./class/GiftWrap";
import Table from "./class/Table";
import ConveyorBelt from "./class/ConveyorBelt";

console.log("--- STEP #1 ---");
let pony = new Pony();
let goku = new DragonBall(DBHeroes.SANGOKU);
pony.isMoved()
goku.isMoved()


console.log("--- STEP #2 ---");

let majdi = new Elf("makiboto");
let box = new Box();
majdi.pack(box, goku);
box.open()
majdi.pack(box, goku);

let paper = new GiftWrap();
majdi.pack(paper, pony);
majdi.pack(paper, pony);

let toy = majdi.unpack(paper);
console.log(toy === pony);
let r = majdi.unpack(paper);
console.log(r == null);

console.log("--- STEP #3 ---");

var table = new Table();
var conveyor = new ConveyorBelt();

majdi.put(table, paper);
majdi.put(table, pony);
majdi.put(table, box);

table.look();



// let pony = new Pony();

// var table = new Table([pony, pony]);
// console.log(table.take());
// table.look();




// let pony = new Pony();

// let box = new Box();
// box.open();
// box.insert(pony);
// box.open();