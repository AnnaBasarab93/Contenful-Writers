import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import  {createClient}  from 'contentful'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBasketShopping} from '@fortawesome/free-solid-svg-icons'


const SinglePost = ({ }) => {
const { id } = useParams();
const [post, setPost] = useState([]);
const apiKey =  import.meta.env.VITE_REACT_CONTENTFUL_ACCESS_TOKEN
const spaceId = import.meta.env.VITE_REACT_CONTENTFUL_SPACE_ID

    const client = createClient({
  space:  spaceId,
  accessToken: apiKey
});

    useEffect(()=>{
client.getEntry(id)
  .then((entry) => setPost(entry.fields))

},[])

console.log(post)

  return (
<div className='singleParent'>
    <div key = {`post.sys.${id}`}>
  {Object.keys(post).length  ?
<div>
    <h2>{post.authorName}</h2>
    <img src={`https:${post.authorImage.fields.file.url}`} className='singleImg' />
    <h3>Biography</h3>
    <p>{post.biography}</p>
    <h3>Must read by this author</h3>
    <h3 className='bookTitle'>{post.bookTitle}</h3>
  <div className ='bookContainer'>
    <img src={`https:${post.bookImages.fields.file.url}`} width= '30%'  className='flexItem'/>
    <p className='flexItem'>{post.bookInformation}</p>
  </div> 
  <a href={post.buyBookUrl}> <FontAwesomeIcon icon={faBasketShopping} style={{color: "#020203"}} />  BUY BOOK HERE!</a>
    </div>
  :null
  }
  </div>
</div>
  );
};

export default SinglePost
