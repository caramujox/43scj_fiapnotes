import {
  ActionType,
  Note,
  NotesActionsTypes,
  PayloadActionType,
  PostNoteRequest
} from './notes.types'
import { action } from 'typesafe-actions'

export const getNotesRequest = (): ActionType =>
  action(NotesActionsTypes.GET_NOTES_REQUEST)

export const getNotesSuccess = (response: Note[]): ActionType =>
  action(NotesActionsTypes.GET_NOTES_SUCCESS, response)

export const postNoteRequest = (newNote: PostNoteRequest): PayloadActionType =>
  action(NotesActionsTypes.POST_NOTE_REQUEST, newNote)

export const postNoteSuccess = (response: Note): PayloadActionType =>
  action(NotesActionsTypes.POST_NOTE_SUCCESS, response)

export const postNoteFailure = (): ActionType =>
  action(NotesActionsTypes.POST_NOTE_FAILURE)

export const deleteNoteRequest = (noteId: number): ActionType =>
  action(NotesActionsTypes.DELETE_NOTE_REQUEST, noteId)

export const deleteNoteSuccess = (noteId: number): ActionType =>
  action(NotesActionsTypes.DELETE_NOTE_SUCCESS, noteId)

export const editNoteRequest = (noteId: number): PayloadActionType =>
  action(NotesActionsTypes.EDIT_NOTE_REQUEST, noteId)

export const editNoteSuccess = (noteId: number): ActionType =>
  action(NotesActionsTypes.EDIT_NOTE_SUCCESS, noteId)
