// import { useState } from 'react';
import './App.css';

// import Users from './Components/Users.js';
import Header from './Components/Header.js';
import PageBlock from './Components/PageBlock.js';

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
			
			<Header />

			<PageBlock />


			{/* <button onClick={() => ShowUsers(setData)}>Показать пользователей</button>
			<Users data={data} /> */}
    	</div>
  	);
}

export default App;
