import React from 'react'
import './loader.css'

const Loader = () => {
    return (
        <div>
            <h2>Loading...</h2>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader
