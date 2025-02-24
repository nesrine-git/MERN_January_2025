import { useState } from 'react'
import TabHeader from './components/TabHeader'
import TabDisplay from './components/TabDisplay'
import './App.css'

const  App = () => {
  const tabs = [
    { "label": "Tab 1", "content": "Tab 1 content is showing here." },
    { "label": "Tab 2", "content": "Tab 2 content is showing here." },
    { "label": "Tab 3", "content": "Tab 3 content is showing here." }
]  
  const [activeTab, setActiveTab] = useState (tabs[0].content);
  const [isActive, setIsActive] = useState(0);
  

  const toggleContent = (index) => {
    setActiveTab(tabs[index].content)
    setIsActive (index)
    
  }

  return (
    <div className='container d-flex flex-column gap-4 p-4'>
      <div className='d-flex gap-3'>
        { tabs.map((tab, index) =>  
          <TabHeader key={index} index={index} toggleContent= {toggleContent} isActive={index === isActive}> 
            <div>{tab.label}</div> 
          </TabHeader> 
        )}
      </div>
      <TabDisplay activeTab= {activeTab}/> 
    </div>
  )
}

export default App
