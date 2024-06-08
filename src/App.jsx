import NavBar from "./Components/NavBar/NavBar";
import Slider from "./Components/Slider/Slider";
import "./App.css";
import Featured from "./Components/Featured/Featured";
import Product from "./Components/Product/Product";
import Brand from "./Components/Brand/Brand";
import Account from "./Components/Account/Account";
import { Route, Routes } from "react-router-dom";
import toggleContext from "./Components/Context";
import { useState } from "react";

function App() {
  const [account, setAccount] = useState(false);

  return (
    <>
      <div className="main-app-display">
        <toggleContext.Provider value={{ account, setAccount }}>
          <NavBar />
          {account ? (
            <Account />
          ) : (
            <>
              <Slider />
              <Featured />
              <Product />
              <Brand />
            </>
          )}
          <Routes>
            <Route path="/login" element={<Account />} />
          </Routes>
        </toggleContext.Provider>
      </div>
    </>
  );
}

export default App;
