import React from 'react'
//import { Link } from 'react-router-dom'
import CardsContainer from './CardsContainer'
import Form from './Form'

export default function Home () {
  return (
    <div>
        {/* <Link to="/createCharacter">
            <button>Create</button>
        </Link> */}
        <Form />
        <CardsContainer />
    </div>
  )
}
