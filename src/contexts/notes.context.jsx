import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "../reducers/notesReducer";

const notesContext = createContext();

const NotesProvider = ({ children }) => {
  const initialState = {
    title: "",
    text: "",
    notes: [],
    deletedNotes: [],
  };

  const [state, notesDispatch] = useReducer(notesReducer, initialState);

  return (
    <notesContext.Provider
      value={{
        title: state.title,
        text: state.text,
        notes: state.notes,
        deletedNotes: state.deletedNotes,
        notesDispatch,
      }}
    >
      {children}
    </notesContext.Provider>
  );
};

const useNotes = () => useContext(notesContext);

export { useNotes, NotesProvider };
