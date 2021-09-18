// import logo from './physics.png';
import { createPortal } from 'react-dom';
import './App.css';

function App() {
  return (
    <div className="App">
     <Person name="sakib al hasan1" team="BD1"></Person>
     <Person name="androw" team="DD2"></Person>
     <Person name="rassel" team="BBD3"></Person>
     <Person name="lass" team="BCD4"></Person>
     <Person name="sakib al hasan5" team="BFFD5"></Person>
     <Person name="sakib al hasan6" team="BDCD6"></Person>
     <Userinfo></Userinfo>
    </div>
  );
}

function Person(props){
  const person = {
    backgroundColor: 'coral',
    border: '2px solid gray',
    margin:'20px',
    borderRadius: '20px',
   
  }
  return (
    <div style={person}>
    <h1> {props.name}</h1>
    <h4>country :{props.team}</h4>
  </div>
  );
}


function Userinfo(){
  const bg = {
    backgroundColor:'skyblue',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: '50px',
    margin:'20px',

  }
  return(
    <div style={bg}>
      <h3>player info</h3>
      <h4>Age:32</h4>
    </div>
  );
}

export default App;
