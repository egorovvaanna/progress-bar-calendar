import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Status } from "./components/Verification/Status";

import { Step2 } from "./components/Verification/Step2";
import { Step3 } from "./components/Verification/Step3";
import { Step4 } from "./components/Verification/Step4";
import { Step5 } from "./components/Verification/Step5";
import { Verification } from "./components/Verification/Verification";
import { Form } from "./components/Verification/Form";
import { Start } from "./components/Start";
import { Ui } from "./components/Material/Ui";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/verify/*" element={<Verification />}>
            <Route path="1" element={<Form />} />
            <Route path="2" element={<Step2 />} />
            <Route path="3" element={<Step3 />} />
            <Route path="4" element={<Step4 />} />
            <Route path="5" element={<Step5 />} />
          </Route>
          <Route path="/ui" element={<Ui />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
