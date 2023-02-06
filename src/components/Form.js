import React, { useState } from "react";



const Form = (props) => {
    const [city, setCity] = useState('')
    const [property, setProperty] = useState('')
    const [price, setPrice] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: Date.now(),
            city,
            property,
            price: Number(price)
        }
        console.log(formData)
        setCity('')
        setProperty('')
        setPrice('')
    }

    const handleChange = (e) => {
        if (e.target.name === 'city') {
            setCity(e.target.value)
        } else if (e.target.name === 'property') {
            setProperty(e.target.value)
        } else if (e.target.name === 'price') {
            setPrice(e.target.value)
        }
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="City/Street" value={city} onChange={handleChange} name="city" />
                <input type="text" placeholder="Property Type" value={property} onChange={handleChange} name="property" />
                <input type="text" placeholder="Price Range" value={price} onChange={handleChange} name="price" />

                <input type="submit" value="search" />



            </form>
           

        </div>
    )
}

export default Form
