import { HTMLAttributeAnchorTarget, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formatDate } from '../../services/utils'
import { ApplicationState } from '../../store'
import Modal from '../../components/Modal'
import FormNote from '../../pages/Home/FormNote'
import {
  deleteNoteRequest,
  editNoteRequest
} from '../../store/ducks/notes/notes.actions'
import { Note } from '../../store/ducks/notes/notes.types'
import { Container } from './styles'

interface NoteProps {
  note: Note
}

function CardNote({ note }: NoteProps) {
  const dispatch = useDispatch()

  const containerRef = useRef<HTMLDivElement>(null)
  const [showModal, setShowModal] = useState(false)

  const { isLoadingDeleteNote, deleteNoteId } = useSelector(
    (state: ApplicationState) => state.noteState
  )

  const handleDelete = (noteId: number) => {
    dispatch(deleteNoteRequest(noteId))
  }

  const handleEdit = (nodeId: number) => {
    // console.log('Editando ${noteId}')
    dispatch(editNoteRequest(nodeId))
  }

  if (deleteNoteId === note.id && containerRef?.current)
    containerRef.current.style.opacity = '0.5'

  return (
    <>
      {showModal && (
        <Modal
          title="Editar nota"
          handleClose={() => setShowModal(false)}
          style={{ width: '100px' }}
        >
          <FormNote note={note} />
        </Modal>
      )}
      <Container ref={containerRef}>
        <p>{formatDate(new Date(note?.date))}</p>
        <p>{note.text}</p>
        {note.urgent && (
          <span className="material-icons" id="priority">
            priority_high
          </span>
        )}

        <span
          className="material-icons"
          id="edit_note"
          onClick={() => {
            console.log(note)
            setShowModal(true)
          }}
        >
          edit_note
        </span>
        {isLoadingDeleteNote && deleteNoteId === note.id ? (
          <span className="material-icons spin">cached</span>
        ) : (
          <span
            className="material-icons"
            onClick={() => handleDelete(note.id)}
          >
            delete_forever
          </span>
        )}
      </Container>
    </>
  )
}

export default CardNote
