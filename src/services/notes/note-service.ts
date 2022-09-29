import { Note, PostNoteRequest } from '../../store/ducks/notes/notes.types'
import { api } from '../api'

export const NotesService = {
  getNotes: () => api.get<Note[]>('/notes'),
  postNotes: (payload: PostNoteRequest) => api.post<Note>('/notes', payload),
  deleteNote: (id: number) => api.delete(`/notes/${id}`),
  editNote: (id: number) => api.patch(`/notes/${id}`)
}
