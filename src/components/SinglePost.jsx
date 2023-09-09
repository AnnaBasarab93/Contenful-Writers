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
<div className="container mt-4">
    <div key = {`post.sys.${id}`}>
  {Object.keys(post).length  ?
    <div className="row">
      <h2 className='title_author'>{post.authorName}</h2>
          <div className="col-md-6">
    <img src={`https:${post.authorImage.fields.file.url}`} className='singleImg' />
    <h3 className ='biography'>Biography</h3>
    <p>{post.biography}</p>
    </div>
    <div className="col-md-6">
    <h3 className='must_read'>Must read by this author</h3>
    <h3 className='bookTitle'>{post.bookTitle}</h3>


  
    <img src={`https:${post.bookImages.fields.file.url}`} style={{ maxWidth: '30%' }}  className="img-fluid fluid" />
    <p className="flex-grow-1 bookinfo">{post.bookInformation}</p>
  
  <a href={post.buyBookUrl} className="btn btn-primary"> <FontAwesomeIcon icon={faBasketShopping} className="mr-2" />  BUY BOOK HERE!</a>
    </div>
    </div>
  :null
  }
  </div>

</div>
  );
};

export default SinglePost
