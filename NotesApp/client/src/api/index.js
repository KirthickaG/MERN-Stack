import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000',
})

export const insertNote = payload => api.post(`/articles`, payload)
export const getAllNotes = () => api.get(`/articles`)
//export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
export const deleteNoteById = id => api.delete(`/articles/${id}`)
export const getNoteById = id => api.get(`/articles/${id}`)

const apis = {
    insertNote,
    getAllNotes,
    deleteNoteById,
    getNoteById,
}

export default apis