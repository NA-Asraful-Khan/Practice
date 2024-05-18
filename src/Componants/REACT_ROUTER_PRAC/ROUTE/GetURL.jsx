import React, { useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

const GetURL = () => {
    const location = useLocation()
    console.log(`${location.pathname}${location.search}`)
    const [searchParams, setSearchParams] = useSearchParams()
    const initialUserData = {
        Name: "",
        City: "",
        Country: "",
        Job: ""
    }
    const [userData, setUserData] = useState(initialUserData)

    const handleSubmit = (e) => {
        e.preventDefault()
        // Convert current search params to an object
        const currentParams = Object.fromEntries([...searchParams])
        // Filter out empty values from userData
        const filteredUserData = Object.entries(userData)
            .filter(([key, value]) => value.trim() !== "")
            .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
        // Merge current params with filtered user data
        const newParams = { ...currentParams, ...filteredUserData }
        // Set the new search parameters
        setSearchParams(newParams)
        // Clear the input fields after setting the search parameters
        setUserData(initialUserData)
    }

    return (
        <>
            <h1>Get URL Params</h1>
            <h3>Name is: {searchParams.get("Name")}</h3>
            <h3>Job is: {searchParams.get("Job")}</h3>
            <h3>City is: {searchParams.get("City")}</h3>
            <h3>Country is: {searchParams.get("Country")}</h3>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Name' 
                    value={userData.Name}
                    onChange={(e) => setUserData({ ...userData, Name: e.target.value })} 
                />
                <br />
                <input 
                    type="text" 
                    placeholder='Job' 
                    value={userData.Job}
                    onChange={(e) => setUserData({ ...userData, Job: e.target.value })} 
                />
                <br />
                <input 
                    type="text" 
                    placeholder='City' 
                    value={userData.City}
                    onChange={(e) => setUserData({ ...userData, City: e.target.value })} 
                />
                <br />
                <input 
                    type="text" 
                    placeholder='Country' 
                    value={userData.Country}
                    onChange={(e) => setUserData({ ...userData, Country: e.target.value })} 
                />
                <br />
                
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default GetURL
