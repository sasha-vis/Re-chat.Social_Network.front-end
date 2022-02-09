import Header from './Components/Header.js';
import PageBlock from './Components/PageBlock.js';
import Footer from './Components/Footer.js';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './store/store';
import React from 'react';

import './App.css';


// async function ShowUsers(setData) {

//   let url = 'https://localhost:7103/User';

//   await fetch(url).then(function(response) {
//     return response.json();
//   }).then(function(data) {
//     setData(data);
//     console.log(data);
//   });
// }

function App() {
  // const [data, setData] = useState([]);

  	return (
    	<div className="App">
			<BrowserRouter>
				<Provider store={store}>

					<Header />
					<PageBlock />
					<Footer />

				</Provider>
			</BrowserRouter>
			{/* <button onClick={() => ShowUsers(setData)}>Показать пользователей</button>
			<Users data={data} /> */}
    	</div>
  	);
}

export default App;
