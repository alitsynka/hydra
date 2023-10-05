import React from 'react';
import './reset.css';
import './App.css';
import {Header} from "./components/header/Header";
import {DiveInto} from "./components/diveInto/DiveInto";
import {WhatWeDo} from "./components/whatWEDo/WhatWeDo";
import {Form} from "./components/form/Form";
import {Footer} from "./components/footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    return (
        <div className="App">
            <Header/>
            <DiveInto/>
            <WhatWeDo/>
            <Form/>
            <Footer/>
        </div>
    );
}

export default App;
