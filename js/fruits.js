// //Funciรณn auto ejecutable IIFE

// (() => {
//     const fruit = "๐";
//     console.log(fruit);
// })();

const melon = "๐";
export default melon; //exportacion por defecto

/*export*/ function pintarPlatano(){ //exportacion con nombre
    console.log("๐");
};

/*export*/ const frutilla = () => {
    console.log("๐");
};

/*export*/ class Fruit{

    constructor(name){
        this.name = name;
    };

};

export {
    pintarPlatano, frutilla, Fruit
};
