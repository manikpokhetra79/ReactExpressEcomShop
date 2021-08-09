import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';

const ProductScreen = ({match}) => {
const [product,setProduct] = useState({});
useEffect(()=>{
    const fetchProduct = async () =>{
        const {data} = await axios.get(`/api/products/${match.params.id}`);
       
        setProduct(data);
    }
    fetchProduct();
  },[match])
    return (
        <>
           <Link className="btn btn-secondary my-3" to='/'>
               Go Back
           </Link>
           <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col md={3}>
    {/* flush variant to remove outer borders and rounded corners to render list group items edge-to-edge in a parent container*/}
            <ListGroup variant="flush"> 
                <ListGroup.Item variant="info" >
                <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item variant="info" >
                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </ListGroup.Item>
                <ListGroup.Item variant="info" >
                    Price : ${product.price}
                </ListGroup.Item>
                <ListGroup.Item variant="info" >
                    <strong>Description</strong> : {product.description}
                </ListGroup.Item>
            </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant="flush">
                    <ListGroup.Item >
                        <Row>
                            <Col> Price : </Col>
                            <Col><strong>${product.price}</strong> </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item >
                        <Row>
                            <Col> Status : </Col>
                            <Col>
                            {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                             </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-grid gap-2">
                        <Button 
                        className="btn" 
                        type="button" 
                        variant="info"
                        disabled={ product.countInStock === 0 }>
                            Add to Cart
                        </Button>
                    </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
           </Row>
        </>
    )
}

export default ProductScreen
