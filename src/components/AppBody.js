import React from "react";

const AppBody = () => {
  const name = "is Working!";

  return (
    <div className="app">
      <h1>React - Redux Application Boilerplate</h1>
      <p>
        Application:
        {name}
      </p>
    </div>
  );
};

export default AppBody;
