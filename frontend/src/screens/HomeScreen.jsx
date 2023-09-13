import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product";
import axios from 'axios';


export default function HomeScreen() {
    // const [products, setProducts] = useState([]);

    // useEffect(()=> {

    //     const fetchProducts = async() => {
    //         try {
    //             const { data } = await axios.get('http://127.0.0.1:8000/api/products/')
    //             console.log('data', data);
    //             setProducts(data);
    //         } catch(e) {
    //             console.error(e)
    //         }
    //     }
    //     fetchProducts();
    // }, []);
    
    return (
        <div>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => (
                    <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}