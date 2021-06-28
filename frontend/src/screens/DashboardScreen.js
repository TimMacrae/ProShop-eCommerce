import React, { useEffect } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";

export default function DashboardScreen({ children, location, history }) {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const { userInfo } = userState;

  const redirect = location.search ? location.search.split("=")[1] : "/login";
  console.log(redirect);
  useEffect(() => {
    if (!userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  return (
    <div data-uk-grid>
      <div
        className="uk-width-auto uk-height-viewport"
        style={{ backgroundColor: "#343a40" }}
      >
        <Dashboard></Dashboard>
      </div>
      <div
        className="uk-width-expand uk-padding"
        style={{ backgroundColor: "#fff" }}
      >
        {children}
      </div>
    </div>
  );
}
