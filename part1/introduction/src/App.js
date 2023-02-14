// import './App.css';
const Footer = () => {
  return (
    <div>
      Greeting app created by <a href ='https://github.com/juliabraga'>GitHub da Julia</a>
    </div>
  )
}

const Hello = (props) => {
  // console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = 'Enrique'
  const age = 10
  const children = [
    {name: 'Lara', age: 4},
    {name:'Hudar', age: 9}
  ]
  const friends = ['Peter', 'Maya']
  return (
    <>
      <h1>Greetings</h1>
      <Hello name='Julia' age={26 + 10}/>
      <Hello name={name} age= {age}/>
      <Footer />
      <p>{children[0].name}, {children[0].age}</p>
      <p>{children[1].name}, {children[1].age}</p>
      <p>{friends}</p>
    </>
  );
}

export default App;
