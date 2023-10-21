import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import axios from 'axios';




const GetWriters = () => {
const [post, setPost]=useState([]);
const [loading, setLoading]=useState(false)
const navigate = useNavigate();
const { id } = useParams();

useEffect(()=>{
  getFetch();
},[])

const getFetch =async ()=> {
  try{
    setLoading(true);
    let config = {
      url: "http://localhost:8000/api/writers",
      method: "get",
      credentials: "include",
      headers: {
      },
}
    const response = await axios(config)
    console.log(response.data)
    setPost(response.data)
}catch(error){
  console.log("Error to fetch data")
}finally{
  setLoading(false)
}
}

console.log(post)
return (
  <div className='parent'>
  {loading ? (
  <p>Loading...</p>) : (
  <>
  <h1 className='logo_name'>The Blog on Authors</h1>
  <img src='./src/img/blog-slider.jpg' />
  <h5 className='quote'>“If a nation loses its storytellers, it loses its childhood.”
  ~ Peter Handke</h5>
  <Row xs={1} md={2} className="g-4"  >
  {post.length ? post.map((item)  => (
      <div> 
      {Object.keys(item).length ?
  <Card.Img src={`${item.authorImage}`}  className='images' />
  :null
  }
  <Card.Body >
  <Card.Title as="h5">{item.authorName} </Card.Title>
  </Card.Body>
      </div>
  )):null} 
  </Row>
  </> 
  )}
  </div>
)
}

export default GetWriters