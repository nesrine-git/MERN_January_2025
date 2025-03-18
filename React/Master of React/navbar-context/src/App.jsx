import { useState } from 'react'
import FirstContext from './context/MyContext';
import Wrapper from './components/Wrapper';


function App() {
  const [name, setName] = useState("")
  return (
      <FirstContext.Provider value={{name, setName}}>
          <Wrapper /> 
      </FirstContext.Provider>
  );
}    

export default App
