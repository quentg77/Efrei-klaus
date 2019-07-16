class Furniture {
    constructor(content) {
        this.content = content;
    }

    put() {}
    take() {}
    look() {
        let res = [];
        this.content.forEach(element => {
            res.push(element.constructor.name.toString())
        });
        console.log(res);
    }
}

export default Furniture;