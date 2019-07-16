import Pony from "./class/Pony";
import DragonBall from "./class/DragonBall";
import DBHeroes from "./enum/DBHeroes";
import Box from "./class/Box";
import Elf from "./class/Elf";
import GiftWrap from "./class/GiftWrap";

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


// let pony = new Pony();

// let box = new Box();
// box.open();
// box.insert(pony);
// box.open();