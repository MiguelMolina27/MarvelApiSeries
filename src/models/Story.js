export class Story {
    #name
    #type 

    setName(name){
        this.#name = name
    }

    setType(type){
        this.#type = type
    }

    getName(){
        return this.#name
    }

    getType(){
        return this.#type
    }
}