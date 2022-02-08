let numbers = [2, 5, 12, 13, 15, 18, 22];

function isEven(num) {
    for(let i = 0; i < numbers.length; i ++) {
        if(num[i] % 2 ===0){
            console.log(num[i] + "は偶数です");
        }
    }
}

isEven(numbers);


class Car {
    constructor(gass, number){
        this.gass = gass;
        this.number = number;
    }

    getNumGas(){
        console.log(`ガソリンは${this.gass}です。ナンバーは${this.number}です`);
    }
}

let content = new Car("ハイオク","1234");
content.getNumGas();