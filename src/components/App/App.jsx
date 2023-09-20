import React from 'react';
import {ToastContainer} from "react-toastify";
import AppRoutes from "../Routes/routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollToTop from "../../utils/ScrollToTop";

const App = () => {
    return (
        <div className="app">
            <ToastContainer></ToastContainer>

            <Header/>

            <div className="container">
                <AppRoutes/>
            </div>

            <Footer/>

            <ScrollToTop/>
        </div>
    );
};

export default App;