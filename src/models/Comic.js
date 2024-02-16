export class Comic {
    #name

    setName(name){
        this.#name = name
    }

    getName(){
        return this.#name
    }
}