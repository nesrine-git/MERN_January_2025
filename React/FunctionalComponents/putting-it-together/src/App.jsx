import './App.css'
import PersonCard from './components/PersonCard'


function App() {
  
return (
  <div className='app'>
    <PersonCard firstName ="Doe" lastName="Jane" age={43} hairColor="Black" />
    <PersonCard firstName ="Smith" lastName="John" age={86} hairColor="Brown" />
  </div>
)
}

export default App
