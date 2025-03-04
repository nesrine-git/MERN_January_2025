import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Display from './components/display'

function App() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' })

  const addForm =(data) => {
    setForm(data)
  }
  return (
    <div className='container d-flex flex-column '>
      <Form addForm = {addForm}/>
      <Display form={form} />
    </div>
  )
}

export default App
