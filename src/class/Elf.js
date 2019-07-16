import Packaging from "../protocol/Packaging";
import Toy from "../protocol/Toy";

class Elf {
	constructor(nickname) {
		this.nickname = nickname;
	}

    /**
     * Pack a toy in packaging
     * @param {Packaging} packaging 
     * @param {Toy} toy 
     */
	pack(packaging, toy) {
		if (packaging.toy) {
			console.log("Sorry this package already filled");
		}
		else if (!packaging.isOpen) {
			console.log("Sorry this package is not open");
		}
		else {
			packaging.insert(toy);
			console.log(`Yeaaaah! Just packing the toy ~~ ${toy.type} ~~`);
		}
	}

    /**
     * Unpack a package
     * @param {Packaging} packaging 
     */
	unpack(packaging) {
		if (packaging.isOpen || !packaging.toy) {
			console.log("Sorry this package is already empty");
		}
		else {
			const toy = packaging.open();
			console.log(`Ooooooh! Just unpacking the toy ~~ ${toy.type} ~~`);
			return toy;
		}
	}
}

export default Elf;