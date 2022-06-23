import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
//import Header from './components/Header.js'
//import Technologies from './components/Technologies.js'
//import Footer from './components/Footer.js'

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>

            </header>
            <nav className='nav'>
                <div><a>Home</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
            </nav>

            <div className='content'>
                <img src='https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'></img>


                <div className='avatar'>
                    ava + description
                </div>

                <div className='posts'>
                    posts
                    <div> new posts</div>
                </div>

            </div>

        </div>
    );
}

export default App;
