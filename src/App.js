import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import Axios from 'axios';


function App() {

const [habs,setHabs] = useState([])

useEffect(() => {
  fetchHabs();

}, [])
useEffect(() => {
  console.log(habs)
}, [habs])

const fetchHabs = async () => {
  const response = await Axios('./public/nytreats.json');
  setHabs(response.data)

}
return (
  <div className="App">
    {
      habs && habs.map(hab=>{
        return(
          <div key={hab.PROVIDER_NUMBER} style={{alignItems:'center',margin:'20px 60px'}}>
          <h4>{hab.PROVIDER_CITY}</h4>
          <p>{hab.PROVIDER_NAME}</p>
        </div>
        )

      })
    }
  </div>
 
  );
}




export default App;
