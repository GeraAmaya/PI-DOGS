import React, { useState } from "react";

const Search = (props) => {
    const [id, setId] = useState('')

    const handleChange = (e) =>{
        setId(e.target.value)
    }

    const {onSearch} = props;
    return (
        <div>

            <input type="search" placeholder="Write a id.. 🐶" onChange={handleChange} value={id} />
            <button onClick={ () => onSearch (id)}>Buscar</button>

        </div>
    )
}

export default Search;