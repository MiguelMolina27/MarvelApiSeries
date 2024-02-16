import { Character } from "../models/Character.js";
import { Comic } from "../models/Comic.js";
import { Creator } from "../models/Creator.js";
import { Story } from "../models/Story.js";
import { Series } from "../models/Series.js";
import { ListSeries } from "../models/ListSeries.js";

export const createCharacter = function(){
    let character = new Character()
    return character
}

export const createComic = function(){
    let comic = new Comic()
    return comic
}

export const createCreator = function(){
    let creator = new Creator()
    return creator
}

export const createStory = function(){
    let story = new Story()
    return story
}

export const createSeries = function(){
    let series = new Series()
    return series
}

export const createListSeries = function(){
    let listSeries = new ListSeries()
    return listSeries
}