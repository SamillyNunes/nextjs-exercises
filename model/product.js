export default class Product{
    // Usando o # na frente dos atributos indica que sera um atributo privado!
    #id;
    #name;
    #price;

    constructor(id, name, price){
        this.#id=id;
        this.#name=name;
        this.#price=price;
    }

    get id(){
        return this.#id;
    };

    get name(){
        return this.#name;
    };

    get price(){
        return this.#price;
    };

}