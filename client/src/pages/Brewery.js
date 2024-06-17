import { useEffect,useState } from "react"

import {useParams} from "react-router-dom"
import axios from "axios"

function Brewery(){
    let {id}=useParams()
    const [breweryObject,setBreweryObject]=useState({})
    const[reviewsList,setReviewsList]=useState([])
    const [newReview,setNewReview]=useState("")
    const [newRating,setNewRating]=useState("")
    useEffect(()=>{
        axios.get(`http://localhost:3007/breweries/byId/${id}`).then((response)=>{
            setBreweryObject(response.data);
        })
        axios.get(`http://localhost:3007/reviews/${id}`).then((response)=>{
            setReviewsList(response.data)
        })
    },[id])
    const addReviewandRating=()=>{
        
        axios.post("http://localhost:3007/reviews",

            {
                reviewBody:newReview,
                rating:newRating,
                BreweryId:id,
                
            },
            {
                headers:{
                    accessToken:sessionStorage.getItem("accessToken"),
                },
            }
        ).then((response)=>{
            if(response.data.error){
                alert(response.data.error)
            }else{
                const reviewToAdd={
                    reviewBody:newReview,
                    rating:newRating,
                }
                setReviewsList([...reviewsList,reviewToAdd])
            }
        })
    }
    return(
        <div className="breweryPage">
            <div className="leftSide">
                <div className="brewery" id="individual">
                        <p className="elements">{breweryObject.name}</p>
                        <p className="elements">{breweryObject.street}</p>
                        <p className="elements">{breweryObject.websiteUrl}</p>
                        <p className="elements">{breweryObject.phone}</p>
                        <p className="elements">{breweryObject.city}</p>
                    
                </div>
            </div>
            <div className="rightSide">
                <div className="reviewContainer">
                    <input type="text" placeholder="review..." autoComplete="off" onChange={(e)=>{
                        setNewReview(e.target.value)
                    }}/>
                    <input type="text" placeholder="rating..." autoComplete="off" onChange={(e)=>{
                        setNewRating(e.target.value)
                    }}/>
                    <button type="button" onClick={addReviewandRating}>Add Review</button>
                </div>
                <div className="listOfReviews">
                
                    {reviewsList.map((review,key)=>{
                        return <div key={key} className="review">
                            
                            <p>{review.reviewBody}</p>
                            <p>rating:{review.rating}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Brewery