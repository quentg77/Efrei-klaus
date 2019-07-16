import Obj from "../class/Object";

class Toy extends Obj {
    constructor(type = "") {
        super();
        this.type = type;
    }

    getType() {
        return this.type;
    }

    isMoved() {
        //console.log("isMoved");
    }
}

export default Toy;