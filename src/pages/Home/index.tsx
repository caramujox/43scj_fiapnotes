import { useCallback, useContext, useEffect, useState } from "react";
import CardNote from "../../components/CardNote";
import FabButton from "../../components/FabButton";
import FormNote from "./FormNote";
import Modal from "../../components/Modal";
import { Container } from "./styles";
import { Context } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { FormikHelpers } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../store/index";
import { getNotesRequest } from "../../store/ducks/notes/notes.actions";
import { PostNoteRequest } from "../../store/ducks/notes/notes.types";

function Home() {
  const dispatch = useDispatch();
  const { notes, isLoadingGetNotes, isSuccessPostNote } = useSelector(
    (state: ApplicationState) => state.noteState
  );

  const { handleLogout, authenticated } = useContext(Context);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getNotesRequest());
  }, []);

  useEffect(() => {
    isSuccessPostNote && setShowModal(false);
  }, [isSuccessPostNote]);

  useEffect(() => {
    if (!authenticated) navigate("/");
  }, [authenticated]);

  return (
    <>
      {isLoadingGetNotes && <Loading />}
      {showModal && (
        <Modal
          title="Nova nota"
          handleClose={() => setShowModal(false)}
          style={{ width: "100px" }}
        >
          <FormNote />
        </Modal>
      )}
      <Container>
        {notes.map((note) => (
          <CardNote key={note.id} note={note}></CardNote>
        ))}
        <FabButton position="left" handleClick={() => setShowModal(true)}>
          +
        </FabButton>
        <FabButton position="right" handleClick={handleLogout}>
          <span className="material-icons">logout</span>
        </FabButton>
      </Container>
    </>
  );
}

export default Home;
