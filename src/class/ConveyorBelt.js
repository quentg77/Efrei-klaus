import Furniture from "../protocol/Furniture";
import Obj from "./Object";

class ConveyorBelt extends Furniture {
	constructor(isBusy = false) {
		super();
		this.isBusy = isBusy;
		this.obj =  null;
	}

	/**
	 * Put object on Conveyor
	 * @param {Obj} obj 
	 */
	put(obj) {
		if (!this.isBusy) {
			this.obj = obj;
			this.isBusy = true;
		}
	}

	take() {
		let obj = this.obj;
		this.obj = null;
		return obj;
	}
}

export default ConveyorBelt;