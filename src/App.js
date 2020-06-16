import React from "react";
import "./styles.css";
import Button from "./Button";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Button size="large" color="primary" border="solid" shape="bullet">
          CLICK
        </Button>
        <Button size="large" color="success" border="solid" shape="bullet">
          Boobs
        </Button>
        <Button size="medium" color="warning" border="solid" shape="bullet">
          Create New
        </Button>
        <Button size="large" color="danger" border="solid" shape="bullet">
          CLICK
        </Button>
        <Button size="small" color="primary-outline" shape="block">
          Small button
        </Button>
        <Button
          size="large"
          color="warning-outline"
          border="solid"
          shape="block"
        >
          CLICK
        </Button>
        <Button
          size="large"
          color="success-outline"
          border="solid"
          shape="bullet"
        >
          CLICK
        </Button>
        <Button size="large" color="danger-outline" border="solid" shape="box">
          CLICK
        </Button>
      </div>
    </div>
  );
}
