export class Creator {
    #name
    #role

    setName(name){
        this.#name = name
    }

    setRole(role){
        this.#role = role
    }

    getName(){
        return this.#name
    }

    getRole(){
        return this.#role
    }
}