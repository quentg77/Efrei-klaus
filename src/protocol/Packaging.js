import Toy from "./Toy";

class Packaging {
    /**
     * 
     * @param {boolean} isOpen 
     * @param {Toy} toy 
     */
    constructor(isOpen = false, toy = null) {
        this.isOpen = isOpen;
        this.toy = toy;
    }

    open() {
        if (this.isOpen) {
            console.log("Packaging is already open");
            return null;
        }
        else {
            this.isOpen = true;
            return this.toy;
        }
    }

    insert(toy) {
        this.toy = toy;
        this.isOpen = false;
    }
}

export default Packaging;