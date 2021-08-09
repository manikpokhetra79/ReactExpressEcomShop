import React,{useState,useEffect} from 'react';
// component level state for products fetching
import{ Row, Col } from 'react-bootstrap';
// import products from '../products';
import Product from '../components/Products';
import axios from 'axios';
// In a function component, we have no this, 
// so we can’t assign or read this.state. Instead,
//  we call the useState Hook directly inside our component:

const HomeScreen = () => {
    const [products,setProducts] = useState([]); //adding state

useEffect(()=>{
    const fetchProducts = async () =>{
        const {data} = await axios.get('/api/products');
        
        setProducts(data);
    }
    fetchProducts();
},[])

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                     <Col key={product._id}sm={12} md={6} lg={4} xl={3}>
                     <Product product={product} />
                     </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
