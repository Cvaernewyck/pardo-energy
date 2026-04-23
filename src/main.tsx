import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="min-h-screen bg-black text-red-500 flex items-center justify-center p-6">
      <div className="max-w-xl w-full border border-red-600 rounded-2xl shadow-2xl p-8 text-center bg-zinc-900">
        <div className="text-6xl mb-4">⚠️</div>
        <h1 className="text-4xl font-bold tracking-wide mb-4">
          VIRUS DETECTED
        </h1>
        <p className="text-lg text-red-300 mb-6">
          Critical threats have been found on your system.
        </p>
        <div className="bg-black border border-red-700 rounded-xl p-4 text-left text-sm text-red-400 mb-6">
          <p>• Trojan.Win32.Generic</p>
          <p>• Spyware.Keylogger.Agent</p>
          <p>• Ransomware.LockX</p>
        </div>
        <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition">
          Scan Now
        </button>
      </div>
    </div>
  </React.StrictMode>,
);
