import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
 
function App() {
  return (
    <div className="app">
        <Header />
        <div className='row'>
          <Navigation />
          <MainContent />
        </div>
        
    </div>
  );
}
                
export default App;              

