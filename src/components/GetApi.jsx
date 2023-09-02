import React, {useEffect, useState} from 'react'
import  {createClient}  from 'contentful'

const GetApi = () => {
const [post, setPost]=useState([]);
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


},[])

console.log(post)

return (
    <div className='parent'>
    {post.length ? post.map((item, index)  => (
        <div key={index}> 
        <h3>{item.fields.authorName} </h3>
    {Object.keys(item.fields).length && Object.keys(item.fields.authorImage.fields).length ?
    <img src={`https:${item.fields.authorImage.fields.file.url}`}  className='images'/>
    :null
    }
        </div>
    )):null}

    </div>
)
}

export default GetApi;