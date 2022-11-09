// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const nayoks = ['Razzak', , 'Salman', 'Shuvo']
  const persons = [
      {name: 'Saddam Hossain', profession: 'Software Engineer'},
      {name: 'Sakib Al Hasan', profession: 'Player'},
      {name: 'Rubel Hossain',  profession: 'Player'}, 
  ]

  const products = [
    {name: 'PhotoShop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'Pdf Reader', price: '$6.99'},
    {name: 'Premier Elements', price: '$249.99'},
  ]

  const languages = [
    {name: 'Java', level: 'Hard'},
    {name: 'Python', level: 'Easy'},
    {name: 'JavaScript', level: 'Super Easy'},
    {name: 'Go', level: 'Easy and efficient'},
  ]


  
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        
          <ul>
            {
              nayoks.map(nayok => <li>{nayok}</li>)
            }
            {
              products.map(product => <li>{product.name}</li>)
            }
            
          </ul>
          {
            products.map(product => <Product product={product}></Product>)
          }
          
        {
          languages.map(language => <Language language={language}></Language>)
        }
        <Counter></Counter>
        <Users></Users>
        {/* <Product product={products[0]}></Product> */}
        {/* <Product product={products[1]}></Product> */}
        <Person name={persons[0].name} profession={persons[0].profession}></Person>
        <Person name={persons[1].name} profession={persons[1].profession}></Person>
        <Person name={persons[2].name} profession={persons[2].profession}></Person>
      </header>
    </div>
  );
}

function Language(props){
  const languageStyle ={
    borderRadius:'5px',
    backgroundColor: 'lightgreen',
    color: 'Black',
    height: '200px',
    width: '300px',
    margin: '10px'
  }
  const {name, level} = props.language;
  return(
    <div style={languageStyle}>
      <h2>{name}</h2>
      <h3>{level}</h3>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  // const handleIncrease = () => setCount(count + 10)
    // const newCount = count + 10;
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onMouseMove={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.lenngth}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '10px'
  }
  const {name, price} = props.product;
  // console.log(name, price);
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy now</button>
    </div>
  )
}

function Person(props){
  const personStyle = {
    border: '2px solid red',
    margin: '10px',
    backgroundColor: 'lightblue'
    

  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Profession: {props.profession}</h3>
    </div>
  )
}

export default App;
