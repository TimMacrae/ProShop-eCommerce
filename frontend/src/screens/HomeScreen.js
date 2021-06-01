import React, { Fragment } from "react";
import products from "../products";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Product from "../components/Product/Product";

export default function HomeScreen() {
  return (
    <Fragment>
      <h1 className="mt-5">Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}></Product>
          </Col>
        ))}
      </Row>
    </Fragment>
  );
}
