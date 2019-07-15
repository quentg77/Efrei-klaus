import Pony from "./class/Pony";
import DragonBall from "./class/DragonBall";
import DBHeroes from "./enum/DBHeroes";

console.log(Pony._nb);
var pony = new Pony();
console.log(Pony._nb);
var goku = new DragonBall(DBHeroes.SANGOKU);
pony.isMoved()
goku.isMoved()