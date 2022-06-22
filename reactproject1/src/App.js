import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

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

const Header = () => {
    return (
        <div>
            <a href= '#s'>Home</a>
            <a href= '#s'>News Feed</a>
            <a href= '#'>Messages</a>
        </div>
    );
}

const Technologies = () => {
    return (
        <div>
            <ul>
                <li>html</li>
                <li>css</li>
                <li>js</li>
            </ul>
        </div>
    );
}

export default App;
