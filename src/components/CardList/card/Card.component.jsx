import React from 'react'
import './Card.styles.css'


const Card = (props)=>{
    const {monster} = props
    const {name, email, id} = monster
    return(
        <div className='card'>
            <img
                src={`https://robohash.org/${id}?set=set2&size=180x180`} alt='monster'
            />
            <h4>{name}</h4>
            <p>{email}</p>
        </div>
    )
}

export default Card