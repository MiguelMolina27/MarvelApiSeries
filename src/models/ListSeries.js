export class ListSeries {
    #listSeries = []

    addSeries(series){
        this.#listSeries.push(series)
    }

    getSeries(){
        return this.#listSeries
    }
}