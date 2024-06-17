import axios from "axios";

import {useEffect,useState} from "react"
import { useNavigate } from "react-router-dom";



function Home(){
    const [listOfBreweries,setBreweriesList]=useState([])
    const [searchQuery,setSearchQuery]=useState("")
    const [searchParams,setSearchParams]=useState("")
   
    let navigate=useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:3007/breweries/search?city=${searchParams}`,).then((response)=>{
            setBreweriesList(response.data)
        })
        axios.get(`http://localhost:3007/breweries/search?name=${searchParams}`,).then((response)=>{
            setBreweriesList(response.data)
        })
        axios.get(`http://localhost:3007/breweries/search?breweryType=${searchParams}`,).then((response)=>{
            setBreweriesList(response.data)
        })
    },[searchParams])
    
        
        
    

    const handleSearch=(event)=>{
        event.preventDefault();
        setSearchParams(searchQuery)
        
        
    }
    return(
        <div>
        <form onSubmit={handleSearch}>
        
        <input
          type="search"
          name="searchQuery"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter search query"
        />
        <button type="submit">Search</button>
      </form>
        <div className="breweryContainer">{listOfBreweries.map((brewery,key)=>{

            return <div key={key} className="brewery" onClick={()=>{
                navigate(`/breweries/${brewery.id}`)
            }}>
                    <p>Name:{brewery.name}</p>
                    <p>Address:{brewery.street}</p>
                    <p>Website:<span>{brewery.websiteUrl}</span></p>
                    <p>Phone:{brewery.phone}</p>
                    <p>City:{brewery.city}</p>
                </div>
                
        })}</div>
        </div>
    )
}
export default Home