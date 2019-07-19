import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Card, Icon, Image } from 'semantic-ui-react'
import CardComponent from './cardComponent.js'

function StarWarsCard() {
    const [person, setPerson] = useState('')

    useEffect(() => {
        axios
        .get('https://swapi.co/api/people/')
        .then(response => {
            // console.log(response.data.results)
            const persons = response.data.results
            setPerson(persons)
            console.log(persons)
        }).catch(error => {
            console.log('Not getting info from startwars api', error)
        })
    }, [])
    return <div>
        {}
        <CardComponent />
    </div>
}

export default StarWarsCard