import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-xl w-full text-center border border-gray-200">
        <div className="text-6xl mb-4">⚠️</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Website Offline
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          This website is currently unavailable.
        </p>
        <p className="text-sm text-gray-500">
          Please check back later or contact the site administrator.
        </p>
      </div>
    </div>
  </React.StrictMode>,
);
