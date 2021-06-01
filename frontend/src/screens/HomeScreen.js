import React, { Fragment, useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Product from "../components/Product/Product";
import { getAllProducts } from "../api/apiProductsController";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts()
      .then((products) => {
        if (products && products.lenght !== 0) {
          setProducts(products);
        }
      })
      .catch((err) => {
        return err;
      });
  }, []);
  return (
    <Fragment>
      <h1 className="mt-5">Latest Products</h1>
      <Row>
        {products
          ? products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product}></Product>
              </Col>
            ))
          : null}
      </Row>
    </Fragment>
  );
}
