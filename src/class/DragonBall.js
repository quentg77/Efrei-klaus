import DBHeroes from "../enum/DBHeroes";
import Figurine from "../protocol/Figurine"


class DragonBall extends Figurine {
    /**
     * Create Character
     * @param {DBHeroes} character 
     */
    constructor (character) {
        super()
        this._character = character;

        super.type = `Dragon Ball figurine ${this._character}`;
        console.log(
            `${super.getType()} is singing -->\r\nCHA-LA HEAD CHA-LA\r\nNani ga okite mo kibun wa heno-heno kappa\r\nCHA-LA HEAD CHA-LA\r\nMune ga pachi-pachi suru hodo\r\nSawagu Genki-Dama --Sparking !\r\n`
        )
    }

    isMoved() {
        console.log("Kamé Hamé Ha!");
        super.isMoved();
    }
}

export default DragonBall;