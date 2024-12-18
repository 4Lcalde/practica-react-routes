import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const CharacterByName = () => {
  const { name } = useParams()

  const [character, setCharacter] = useState(null)

  useEffect(() => {
    fetch('https://digimon-api.vercel.app/api/digimon/name/' + name)
      .then((res) => res.json())
      .then((res) => {
        setCharacter(res)
        console.log(res)
      })
  }, [])
  return (
    character && (
      <div className='card'>
        <img src={character[0].img}></img>
        <h3>{character[0].name}</h3>
      </div>
    )
  )
}

export default CharacterByName
