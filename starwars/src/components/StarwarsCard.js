import React, {useState, useEffect} from 'react'
import axios from 'axios'

function StarWarsCard() {
    const [person, setPerson] = useState('')

    useEffect(() => {
        axios
        .get('https://swapi.co/api/people/')
        .then(response => {
            console.log(response.data)
        })
    })
}