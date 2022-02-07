let numbers = [2,5,12,13,15,18,22];

function isEven(num) {
    for(let i = 0; i < numbers.length; i ++){
    if( num[i] % 2 ===0){
    console.log(num[i] +"は偶数です");
    }
}
}
isEven(numbers);


class car {
    constructor(content, contents){
        this.content= content;
        this.contents= contents;
    }

    getNumGas() {
        console.log(`ガソリンは${this.content}です。ナンバーは${this.contents}です`);
    }
}
 let gas = new car("ハイオク","1234");
 gas.getNumGas();
 