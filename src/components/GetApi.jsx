import React, {useEffect, useState} from 'react'
import  {createClient}  from 'contentful'
import { useNavigate, useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';



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
    <h1 className='logo_name'>The Blog on Authors</h1>
    <img src='./src/img/blog_slider.jpg' />
    <h5 className='quote'>“If a nation loses its storytellers, it loses its childhood.”
    ~ Peter Handke</h5>
    <Row xs={1} md={2} className="g-4"  >
    {post.length ? post.map((item)  => (
        <div key={item.sys.id}> 
        {Object.keys(item.fields).length && Object.keys(item.fields.authorImage.fields).length ?
    <Card.Img src={`https:${item.fields.authorImage.fields.file.url}`}  className='images' onClick={() => navigate(`singlepost/${item.sys.id}`)}/>
    :null
    }
    <Card.Body >
    <Card.Title as="h5">{item.fields.authorName} </Card.Title>
    </Card.Body>
        </div>
    )):null}
   </Row>
    </div>
)
}

export default GetApi;