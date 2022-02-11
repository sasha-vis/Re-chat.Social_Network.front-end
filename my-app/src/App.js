import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import {store} from './store/store';

import Header from './Components/Architecture/Header/Header.js';
import Main from './Components/Architecture/Main/Main.js';
import Footer from './Components/Architecture/Footer/Footer.js';

import './App.css';

function App() {
  	return (
    	<div className="App">
			<BrowserRouter>
				<Provider store={store}>

					<Header />
					<Main />
					<Footer />

				</Provider>
			</BrowserRouter>
    	</div>
  	);
}

export default App;
