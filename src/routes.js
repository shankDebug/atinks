import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Awards from "./Pages/Awards/Awards";
import AboutUs from "./Pages/AboutUs/AboutUs";
// import Page3 from "./pages/Page-3";
import Dashboard from "./Pages/Dashboard/Dashboard";
// import NotFound from "./pages/NotFound";

function Router() {
    return (
        // <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Dashboard/>}/>
                <Route path="/Awards" element={<Awards/>}/>
                <Route path="/AboutUs" element={<AboutUs/>}/>
                {/* // <Route path="/page-3" component={Page3}/> */}
            </Routes>
        /* </BrowserRouter> */
    )
}

export default Router;