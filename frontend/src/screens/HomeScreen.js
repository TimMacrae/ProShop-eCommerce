import React, { Fragment, useEffect } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Product from "../components/Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProductsAction } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Slideshow from "../components/Slideshow/Slideshow";
import ModalTriggerBtn from "../components/Modal/ModalTriggerBtn";
import Modal from "../components/Modal/Modal";
export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProductsAction());
  }, [dispatch]);
  return (
    <Fragment>
      <Modal title="This is a test Modal" id="testModal"></Modal>
      <h1 className="mt-5">Latest Products</h1>
      <Slideshow></Slideshow>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : products ? (
        <Row>
          {products
            ? products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product}></Product>
                </Col>
              ))
            : null}
        </Row>
      ) : (
        <h3>We have some Problems</h3>
      )}
      <ModalTriggerBtn btnText="Click" id="testModal"></ModalTriggerBtn>
    </Fragment>
  );
}
