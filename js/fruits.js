// //Función auto ejecutable IIFE

// (() => {
//     const fruit = "🍐";
//     console.log(fruit);
// })();

const melon = "🍉";
export default melon; //exportacion por defecto

/*export*/ function pintarPlatano(){ //exportacion con nombre
    console.log("🍌");
};

/*export*/ const frutilla = () => {
    console.log("🍓");
};

/*export*/ class Fruit{

    constructor(name){
        this.name = name;
    };

};

export {
    pintarPlatano, frutilla, Fruit
};
