import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import  {createClient}  from 'contentful'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBasketShopping} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'


const SinglePost = ({ }) => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [loading, setLoading]=useState(false);
  
 
  const getFetch =async ()=> {
    try{
      setLoading(true);
      let config = {
        url: `http://localhost:8000/api/writers/${id}`,
        method: "get",
        credentials: "include",
        headers: {
        },
  }
      const response = await axios(config)
      console.log('API response', response.data)
      setPost(response.data)
  }catch(error){
    console.log("Error to fetch data")
  }finally{
   setLoading(false)
  }
  }

  useEffect(()=>{
    getFetch();
  },[id])
  


  
    return (
  <div className="container mt-4">
   {loading ? (
      <p>Loading</p>):(
     <div>
    {Object.keys(post).length  ?
      <div className="row">
        <h2 className='title_author'>{post.authorName}</h2>
            <div className="col-md-6">
      <img src={`${post.authorImage}`} className='singleImg' />
      <h3 className ='biography'>Biography</h3>
      <p>{post.authorBiography}</p>
      </div>
      <div className="col-md-6">
      <h3 className='must_read'>Must read by this author</h3>
      <h3 className='bookTitle'>{post.bookTitle}</h3>

      <img src={`${post.bookImage}`} style={{ maxWidth: '30%' }}  className="img-fluid fluid" />
      <p className="flex-grow-1 bookinfo">{post.bookInfo}</p>
    
    <a href={post.bookURL} className="btn btn-primary"> <FontAwesomeIcon icon={faBasketShopping} className="mr-2" />  BUY BOOK HERE!</a>
      </div>
      </div>
    :null
    })
    </div> 
      )}
  </div>
    );
  };


export default SinglePost
