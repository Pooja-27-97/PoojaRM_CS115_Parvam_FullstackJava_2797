import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes"; // your routes file
import Header from "./components/shared/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <div className="flex-grow-1 p-3">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
};

export default App;
