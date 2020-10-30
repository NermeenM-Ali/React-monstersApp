import React from 'react'
import './SearchBox.styles.css'


const SearchBox = (props)=> {
    const {placeholder, onValueChange } = props
    return(
        <input
            className='search'
            type='search'
            placeholder={placeholder}
            onChange={onValueChange}
        />
    )
}

export default SearchBox