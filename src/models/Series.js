export class Series {
    #id
    #title
    #description
    #startYear
    #endYear
    #rating
    #type
    #modified
    #thumbnail
    #creators = []
    #characters = []
    #stories = []
    #comics = []
   

    setId(id){
        this.#id = id
    }

    setTitle(title){
        this.#title = title
    }

    setDescription(description){
        this.#description = description
    }

    setStartYear(startYear){
        this.#startYear = startYear
    }

    setEndYear(endYear){
        this.#endYear = endYear
    }

    setRating(rating){
        this.#rating = rating
    }

    setType(type){
        this.#type = type
    }

    setModified(modified){
        this.#modified = modified
    }

    setThumbnail(thumbnail){
        this.#thumbnail = thumbnail
    }

    addCreators(creator){
        this.#creators.push(creator)
    }

    addCharacters(character){
        this.#characters.push(character)
    }

    addStories(story){
        this.#stories.push(story)
    }

    addComics(comic){
        this.#comics.push(comic)
    }

    getId(){
        return this.#id
    }

    getTitle(){
        return this.#title
    }

    getDescription(){
        return this.#description
    }

    getStartYear(){
        return this.#startYear
    }

    getEndYear(){
        return this.#endYear
    }

    getRating(){
        return this.#rating
    }

    getType(){
        return this.#type
    }

    getModified(){
        return this.#modified
    }

    getThumbnail(){
        return this.#thumbnail
    }

    getCreators(){
        return this.#creators
    }

    getCharacters(){
        return this.#characters
    }

    getStories(){
        return this.#stories
    }

    getComics(){
        return this.#comics
    }

}   