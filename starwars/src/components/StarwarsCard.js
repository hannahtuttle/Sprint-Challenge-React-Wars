import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CardComponent from './cardComponent.js'

function StarWarsCard() {
    const [person, setPerson] = useState('')

    useEffect(() => {
        axios
        .get('https://swapi.co/api/people/')
        .then(response => {
            // console.log(response.data.results)
            // const persons = response.data.results
            setPerson(response.data.results)
            
        }).catch(error => {
            console.log('Not getting info from startwars api', error)
        })
    }, [])
        console.log(person)
    return <div>
        {/* {person.map((character, index) => (
            <CardComponent 
            name={character.name}
            key={index}/>))} */}
        
    </div>
}

export default StarWarsCard