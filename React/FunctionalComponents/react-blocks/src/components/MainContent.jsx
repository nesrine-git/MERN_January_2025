import  '../App.css'
import Advertisement from './Advertisement';
import Subcontent from './Subcontent';

function MainContent() {
  return (
    <div className="main">
      <div className='row'>
        <Subcontent />
        <Subcontent />
        <Subcontent />
      </div>
      <Advertisement />
    </div>
  );
}
                
export default MainContent