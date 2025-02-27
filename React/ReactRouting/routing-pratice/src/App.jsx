import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import './App.css'

function App() {
  
  // Display Home
  const Home = () => <h1>Welcome</h1>;

  // Display value 
  const DisplayValue = () => {
    const { value } = useParams();
  //When we retrieve value from useParams(), it’s a string by default.
  //The + operator tries to convert it into a number.
      if(isNaN(+value))  {
       return <h1>The word is: {value}</h1>
      }else{
        return  <h1>The number is: {+value}</h1>
     } ;
  };


  //Display Styled Word 
  const StyledWord = () => {
    const { word, textColor, bgColor } = useParams();
    const style = {
      color: textColor,
      backgroundColor: bgColor,
      border: "2px solid black"
    };
    return <h1 style={style}>The word is: {word}</h1>;
  };
  
  

  return (
    <div className="text-center p-5">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:value" element={<DisplayValue />} />
        <Route path="/:word/:textColor/:bgColor" element={<StyledWord />} />
      </Routes>
    </div>
  )
}

export default App
