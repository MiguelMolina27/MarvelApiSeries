import { createCharacter,createComic,createCreator,createSeries,createStory,createListSeries } from "./dependencies.js"

let listSeries = createListSeries()
const cargarDatos = document.getElementById("boton boton__cargarDatos")
cargarDatos.addEventListener("click",()=>{
    let url = "https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=4de666fa026fabff214a0a48a4247413&hash=84d969deeea2d5e6c644f83b7cb129dd"
    fetch(url).then(
        response => response.json()
    ).then(
        data => {
            
            data.data.results.forEach(element => {
                let series = createSeries()
                series.setId(element.id)
                series.setTitle(element.title)
                series.setDescription(element.description)
                series.setStartYear(element.startYear)
                series.setEndYear(element.endYear)
                series.setRating(element.rating)
                series.setModified(element.modified)
                series.setThumbnail(element.thumbnail.path + "." + element.thumbnail.extension)
                
                if(element.creators.items.length !== 0){
                    element.creators.items.forEach(item => {
                        let creator = createCreator()
                        creator.setName(item.name)
                        creator.setRole(item.role)
                        series.addCreators(creator)
                    })
                }
                
                if(element.characters.items.length !== 0){
                    element.characters.items.forEach(item => {
                        let character = createCharacter()
                        character.setName(item.name)
                        series.addCharacters(character)
                    })
                }
                
                if(element.stories.items.length !== 0){
                    element.stories.items.forEach(item => {
                        let story = createStory()
                        story.setName(item.name)
                        story.setType(item.type)
                        series.addStories(story)
                    })
                }

                if(element.comics.items.length !== 0){
                    element.comics.items.forEach(item => {
                        let comic = createComic()
                        comic.setName(item.name)
                        series.addComics(comic)
                    })
                }
                
                listSeries.addSeries(series)

                
            
            });

        }
    )
    console.log(listSeries)
})

const mostrarDatos = document.getElementById("boton boton__mostrarDatos")
mostrarDatos.addEventListener("click",()=>{
    const divCards = document.getElementById("div-div__cards")
    listSeries.getSeries().forEach(element => {
        const divCard = document.createElement("div")
        let thumbnail = document.createElement("img")
        thumbnail.src = element.getThumbnail()
        let id = document.createElement("p")
        id.innerText = "ID:" + element.getId()
        let title = document.createElement("p")
        title.innerText = "TITLE:" + element.getTitle()
        let description = document.createElement("p")
        description.innerText = "DESCRIPTION:" + element.getDescription()
        let startYear = document.createElement("p")
        startYear.innerText = "START YEAR:" + element.getStartYear()
        let endYear = document.createElement("p")
        endYear.innerText = "END YEAR:" + element.getEndYear()
        let rating = document.createElement("p")
        rating.innerText = "RATING:" + element.getRating()
        let type = document.createElement("p")
        type.innerText = "TYPE:" + element.getType()
        let modified = document.createElement("p")
        modified.innerText = "MODIFIED:" + element.getModified()
        let buttonCreators = document.createElement("button")
        buttonCreators.innerText = "Creators"
        buttonCreators.setAttribute("id", element.getId() + "1")
        buttonCreators.classList.add("botones-modal")
        let buttonCharacters = document.createElement("button")
        buttonCharacters.innerText = "Characters"
        buttonCharacters.setAttribute("id", element.getId() + "2")
        buttonCharacters.classList.add("botones-modal")
        let buttonComics = document.createElement("button")
        buttonComics.innerText = "Comics"
        buttonComics.setAttribute("id", element.getId() + "3")
        buttonComics.classList.add("botones-modal")
        let buttonStories = document.createElement("button")
        buttonStories.innerText = "Stories"
        buttonStories.setAttribute("id", element.getId() + "4")
        buttonStories.classList.add("botones-modal")
        divCard.appendChild(thumbnail)
        divCard.appendChild(id)
        divCard.appendChild(title)
        divCard.appendChild(description)
        divCard.appendChild(startYear)
        divCard.appendChild(endYear)
        divCard.appendChild(rating)
        divCard.appendChild(type)
        divCard.appendChild(modified)
        divCard.appendChild(buttonCreators)
        divCard.appendChild(buttonCharacters)
        divCard.appendChild(buttonComics)
        divCard.appendChild(buttonStories)

        divCards.appendChild(divCard)

        
    })
    
    let botones = document.querySelectorAll(".botones-modal")
    seleccionarModal(botones)
})



const seleccionarModal = function(botones){
    botones.forEach((boton)=>{
        boton.addEventListener("click",()=>{
            listSeries.getSeries().forEach(element =>{
                if((element.getId() + "1") == boton.id){
                    cargarModal(element.getCreators(),1)
                }
                if((element.getId() + "2") == boton.id){
                    cargarModal(element.getCharacters(),2)
                }
                if((element.getId() + "3") == boton.id){
                    cargarModal(element.getComics(),3)
                }
                if((element.getId() + "4") == boton.id){
                    cargarModal(element.getStories(),4)
                }
            })
        })
    })
}


let divModal = document.getElementById("div-div__modal")



const limpiarModal = function(divModal){
    while(divModal.firstElementChild)
        divModal.removeChild(divModal.firstElementChild)
}

const cargarModal = function(listaModal,displayType){
    
    divModal.style.opacity = 1
    let botonCierreModal = document.createElement("button")
    botonCierreModal.innerText = "X"
    divModal.appendChild(botonCierreModal)
    
    let title
    
    if((displayType == 2) || (displayType == 3)){
        if(displayType == 2){
            title = "Characters"
        }else{
            title = "Comics"
        }
        let modalTitle = document.createElement("h2")
        modalTitle.innerText = title
        divModal.appendChild(modalTitle)
        listaModal.forEach(item => {
            let name = document.createElement("p")
            name.innerText = "Name:" + item.getName()
            divModal.appendChild(name)
        })
    }
    if(displayType == 1){
        title = "Creators"
        let modalTitle = document.createElement("h2")
        modalTitle.innerText = title
        divModal.appendChild(modalTitle)
       listaModal.forEach(item =>{
            let name = document.createElement("p")
            name.innerText = "Name:" + item.getName()
            let role = document.createElement("p")
            role.innerText = "Role:" + item.getRole()
            divModal.appendChild(name)
            divModal.appendChild(role)
       })
    }
    if(displayType == 4){
        title = "Stories"
        let modalTitle = document.createElement("h2")
        modalTitle.innerText = title
        divModal.appendChild(modalTitle)
        listaModal.forEach(item =>{
            let name = document.createElement("p")
            name.innerText = "Name:" + item.getName()
            let type = document.createElement("p")
            type.innerText = "Type:" + item.getType()
            divModal.appendChild(name)
            divModal.appendChild(type)
        })
    }
    cerrarModal(botonCierreModal)
    
}

const cerrarModal = function(botonCierreModal){
    botonCierreModal.addEventListener("click",()=>{
        limpiarModal(divModal)
        divModal.style.opacity = 0
    })
}


