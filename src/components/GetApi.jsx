import React, {useEffect, useState} from 'react'
import  {createClient}  from 'contentful'
import { useNavigate, useParams } from 'react-router-dom'


const GetApi = () => {
const [post, setPost]=useState([]);
const navigate = useNavigate();
const { id } = useParams();
const apiKey =  import.meta.env.VITE_REACT_CONTENTFUL_ACCESS_TOKEN
const spaceId = import.meta.env.VITE_REACT_CONTENTFUL_SPACE_ID

//console.log(apiKey, spaceId)

const client = createClient({
        space:  spaceId,
        accessToken: apiKey
    });

useEffect(()=>{
    client.getEntries()
    .then((entries) => setPost(entries.items))
    .catch(console.error)


},[id])

//console.log(post)

return (
    
    <div className='parent'>
    {post.length ? post.map((item)  => (
        <div key={item.sys.id}> 
        <h3 >{item.fields.authorName} </h3>
    {Object.keys(item.fields).length && Object.keys(item.fields.authorImage.fields).length ?
    <img src={`https:${item.fields.authorImage.fields.file.url}`}  className='images' onClick={() => navigate(`singlepost/${item.sys.id}`)}/>
    :null
    }
        </div>
    )):null}

    </div>
)
}

export default GetApi;