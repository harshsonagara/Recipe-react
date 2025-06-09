import React from 'react'
import { Link } from 'react-router-dom'

const Recipecard = (props) => {
    const {id , url ,title, step , chef ,instruction,ingredient } = props.recipe
  return (
    <Link className='block w-[23vw] rounded overflow-hidden'>
      <img className="object-cover w-full h[20vh] " src={url} alt="image" />
      <h1>{title}</h1>
      <small>{chef}</small>
      <p>
        {instruction.slice(0,100)}...{""}
        <small>more</small>
      </p>
    </Link>
  )
}

export default Recipecard