import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Form } from "react-bootstrap";
import Rating from "../components/Product/Rating";
import { listProductDetailsAction } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";

export default function ProductScreen({ history, match }) {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productDetails);
  const { loading, error, productDetails } = productList;

  useEffect(() => {
    dispatch(listProductDetailsAction(match.params.id));
  }, [dispatch, match.params.id]);

  const addToCardHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <Fragment>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : productDetails ? (
        <Row>
          <Col md={8}>
            <Image
              src={productDetails.image}
              alt={productDetails.name}
              fluid
            ></Image>
          </Col>
          <Col md={4}>
            <ListGroup variant="fluid" className="mb-4">
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
              {productDetails.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(productDetails.counInStock).keys()].map(
                          (x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          )
                        )}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Row>
                  <Button
                    className="btn-block btn-dark"
                    type="button"
                    disabled={productDetails.countInStock === 0 ? true : false}
                    onClick={addToCardHandler}
                  >
                    Add to Card
                  </Button>
                </Row>
              </ListGroup.Item>
            </ListGroup>

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
        </Row>
      ) : null}
    </Fragment>
  );
}
