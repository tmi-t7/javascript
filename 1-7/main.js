class Taiyaki {
    constructor(food) {
    this.food = food;
    }

    foods() {
        console.log(`中身は${this.food}です`);
    }
}

let anko = new Taiyaki("あんこ");
anko.foods();

let cream = new Taiyaki("クリーム");
cream.foods();

let cheese = new Taiyaki("チーズ");
cheese.foods();