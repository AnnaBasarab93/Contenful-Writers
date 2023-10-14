import React, {useEffect, useState} from 'react'
import  {createClient}  from 'contentful'
import { useNavigate, useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import axios from 'axios';



const GetWriters = () => {
const [post, setPost]=useState([]);
const navigate = useNavigate();
const { id } = useParams();

const getFetch =async ()=> {
try {
  let config = {
    url: "http://localhost:8000",
    method: "get",
    credentials: "include",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Credentials": "true"
    },
  }
  const response = await axios(config);
  console.log(response.data);
  setPost(response.data);

} catch (error) {
  console.log("Error fetching data:", error);
} finally {
  setPost("");
}
};
useEffect(()=>{
  getFetch();
},[])

//console.log(post)

return (


    <div className='parent'>
    <h1 className='logo_name'>The Blog on Authors</h1>
    <img src='./src/img/blog-slider.jpg' />
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


export default GetWriters;