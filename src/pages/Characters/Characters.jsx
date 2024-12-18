import React, { useEffect, useState } from 'react'
import './characters.css'
import { Link } from 'react-router-dom'

const Characters = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://digimon-api.vercel.app/api/digimon')
      .then((res) => res.json())
      .then((res) => setCharacters(res))
  }, [])
  return (
    <div className='characters'>
      {characters.map((character) => (
        <Link to={`/characters/${character.name}`} key={character.name}>
          <div className='card'>
            <img src={character.img}></img>
            <h3>{character.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Characters
