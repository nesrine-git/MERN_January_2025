import React from 'react'
import { useParams } from 'react-router-dom'
import Form from '../components/Form'
import PeopleDisplay from '../components/PeopleDisplay'
import PlanetsDisplay from '../components/PlanetsDisplay'

const Main = () => {
    const { idValue, selectedOption } = useParams();
    return (
    <div className='container d-flex flex-column justify-content-center align-items-start gap-5 p-5 mt-3'>
        {/* Form will stay on top of every route */}
      <Form />

        {/* Conditionally render PeopleDisplay or PlanetsDisplay based on selected option */}
        {selectedOption === 'people' ? (
          <PeopleDisplay idValue={idValue} />
        ) : selectedOption === 'planets' ? (
          <PlanetsDisplay idValue={idValue} />
        ) : (
         ""
        )}
        </div>
        );
};


export default Main