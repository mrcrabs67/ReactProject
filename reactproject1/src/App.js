import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Technologies from './components/Technologies.js'

const App = () => {
    return (
        <div>
            <Header />
            <div>
                Simple Dimple Popit
                <ul>
                    <li>Один</li>
                    <li>Два</li>
                    <li>Три</li>
                </ul>
            </div>

            <Technologies />
        </div>
    );
}

export default App;
