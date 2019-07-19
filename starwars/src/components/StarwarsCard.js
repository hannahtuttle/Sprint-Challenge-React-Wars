import React, {useState, useEffect} from 'react'
import axios from 'axios'
//import CardComponent from './cardComponent.js'
import CardContainer from './cardContainer'

function StarWarsCard() {
    const [person, setPerson] = useState([])

    useEffect(() => {
        axios
        .get('https://swapi.co/api/people/?page=1')
        .then(response => {
            // console.log(response.data.results)
            // const persons = response.data.results
            setPerson(response.data.results)
            
        }).catch(error => {
            console.log('Not getting info from startwars api', error)
        })
    }, [])
        console.log(person)
    return (<div>
        {/* {person.map(character => (
            t 
            key={character.name}
            character={character}/>))} */}
        <CardContainer person ={person}/>
    </div>)
}

export default StarWarsCard