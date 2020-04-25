import React, { useLayoutEffect } from 'react';
import { Hi, Stala } from './Hi';
import { Nav } from './Nav';

const List = (props) =>{
    
  return(
    <ul>
      <li>{props.stala}</li>
      <li>{props.wym}</li>
      <li>{Stala}</li>
      <li>lista</li>
      <li>lista</li>
    </ul>

  );
}

const Header =()=> <h1>Nagłówek</h1>

const Footer = () => <h4> jhkjhkjhkj</h4>

const Button = () => <button>click</button>;
// każdy komponent nazywamy z dużej litery

const App = () => {
  return (
    <div>
      <Header />
      <List stala="WSB" wym="hgvhvhhgv" />
      <List stala="PWR" wym="dasdad"/>
      <List stala="UMK" wym="dddd" />
      {/* <Button></Button>  tak tez działa*/}
      <Button />
      <Hi />
      <Footer /> 
      <Nav/>

    {/* jezeli nie zamkniemy w czyms to nie będzie działać temu zakmnielismy w div    */}
    </div>
  );
}

export default App;
