import Toy from "../protocol/Toy";

class Pony extends Toy {
    static _nb = 0;
    id = Math.floor(Math.random() * 10e6);

    constructor() {
        super()
        super.type = `Pony #${this.id}`;

        Pony._nb++;

        console.log(
        `${super.getType()} is singing -->\r\nDou-double poney, j’fais izi money\r\nD’où tu m’connais ? Parle moi en billets violets\r\nDou-double poney, j’fais izi money\r\n`
        );
    }

    isMoved() {
        console.log("Huuuuuuhu!");
        super.isMoved()
    }

    getId() {
        return this.id;
    }
}

export default Pony;