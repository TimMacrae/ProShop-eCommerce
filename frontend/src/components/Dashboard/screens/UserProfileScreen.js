import React, { useState, useEffect } from "react";
import FormContainer from "../../FormContainer";
import { useDispatch, useSelector } from "react-redux";

export default function UserProfileScreen() {
  //////////////////////////////
  //DISPATCHER AND GLOBAL STATE
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //////////////////
  //COMPONENT STATE
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /////////////
  //USE EFFECT
  useEffect(() => {}, []);

  const submitHandler = () => {
    console.log("Submit");
  };
  return (
    <div>
      <h3 className="dashbordScreens-title">User Profile</h3>
      <FormContainer>
        <form onSubmit={submitHandler}>
          <div class="uk-margin">
            <input
              class="uk-input uk-form-width-medium"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div class="uk-margin">
            <input
              class="uk-input uk-form-width-medium"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div class="uk-margin">
            <input
              class="uk-input uk-form-width-medium"
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
      </FormContainer>
    </div>
  );
}
