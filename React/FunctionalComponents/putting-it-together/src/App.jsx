import PersonCard from './components/PersonCard'


function App() {
  
return (
  <div className='container d-flex flex-column justify-content-center align-items-center vh-100'>
    <PersonCard firstName ="Doe" lastName="Jane" age={43} hairColor="Black" />
    <PersonCard firstName ="Smith" lastName="John" age={86} hairColor="Brown" />
  </div>
)
}

export default App
