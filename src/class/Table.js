import Furniture from "../protocol/Furniture";
import Obj from "./Object";

class Table extends Furniture {
    constructor() {
        super([]);
        this.content = []; // max 10
        this.isBroken = false;
    }

    /**
     * Take last object or  at specific index
     * @param {number} index index of objet to remove
     */
    take(index = this.content.length - 1) {
        const obj = this.content.splice(index, 1)[0];
        super.content = obj;
        return obj;
    }

    /**
     * Put object on table
     * @param {Obj} obj 
     */
    put(obj) {
        if (this.content.length < 10 && !this.isBroken) {
            this.content.push(obj);
            super.content = this.content;
        }
        else {
            this.content = [];
            super.content = [];
            this.isBroken = true
            console.log("Table is broken");
        }
    }
}

export default Table;