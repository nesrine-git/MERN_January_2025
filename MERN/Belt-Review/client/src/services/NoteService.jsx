import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000/api',
});

const NoteService = {
  createNote: (noteData) => {
    return http.post('/notes/create', noteData)
      .then(response => response.data)
      .catch(err => { throw err });
  },
  getAllNote: () =>{
    return http.get('/notes')
        .then(response => response.data)
        .catch(err => {
            throw err;
        })
  },
  getOneNote: (id) => {
    return http.get(`/notes/${id}`)
        .then(response => response.data)
        .catch(err => {throw err })
  },
  updateOneNote: (note) => {
    return http.put(`/notes/${note._id}/edit`, note)
        .then(response => response.data)
        .catch(err => { throw err })
  },
  deleteOneNote: (id) => {
    return http.delete(`/notes/${id}/delete`)
        .then(response => response.data)
        .catch(err => { throw err })
  }

}



export default NoteService