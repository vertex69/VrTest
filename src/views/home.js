import React from 'react'
import backgroundimg from '../components/backgroundimage'

const home = () => {
    const background = "https://res.cloudinary.com/iboom/image/upload/v1613804519/pacific/2017-05-12-10-49-53_bkt7h2.jpg"
    return (
        <>
            <h1>home</h1>
            <backgroundimg backgroundImg={background} ></backgroundimg>
        </>
    )
}

export default home
