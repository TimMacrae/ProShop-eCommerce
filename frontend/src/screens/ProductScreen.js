import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import Rating from "../components/Product/Rating";
import { listProductDetailsAction } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";

export default function ProductScreen({ match }) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, productDetails } = productList;

  useEffect(() => {
    dispatch(listProductDetailsAction(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : productDetails ? (
        <Row>
          <Col md={5}>
            <Image src={productDetails.image} alt={productDetails.name}></Image>
          </Col>
          <Col md={4}>
            <ListGroup variant="fluid">
              <ListGroup.Item>
                <h3>{productDetails.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={productDetails.rating}
                  text={productDetails.numReviews}
                ></Rating>
              </ListGroup.Item>
              <ListGroup.Item>Price: ${productDetails.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {productDetails.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant="fluid">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${productDetails.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {productDetails.countInStock > 0
                      ? "In Stock"
                      : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Button
                    className="btn-block btn-dark"
                    type="button"
                    disabled={productDetails.countInStock === 0 ? true : false}
                  >
                    Add to Card
                  </Button>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      ) : null}
    </>
  );
}
