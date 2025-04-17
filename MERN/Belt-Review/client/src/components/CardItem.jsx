import React from 'react'

const CardItem = ({element,  handleNavigate, deleteNote, showEdit = true}) => {
    return (
        <div className="card border border-2 bg-warning">
            <div className="card-body">
                <h5 className="card-title">{element.title}</h5>
                <p className="card-text">{element.content}</p>
                <div className='d-flex justify-content-between align-item-center'>
                    <span> {new Date(element.createdAt).toLocaleDateString('en-CA')} </span>
                    <span className="d-flex gap-3">
                        {showEdit &&
                        <button className="btn border border-2 bg-white" 
                                onClick={() => handleNavigate(element._id)}>
                                Edit
                        </button>
                        }
                        <button className="btn border border-2 bg-white" 
                                onClick={() => deleteNote(element._id)}>
                                Delete
                        </button>
                    </span>
                    </div>  
                </div>
        </div>

    )
}

export default CardItem