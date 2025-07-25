import { Navbar } from "../components/Navbar";
import { Fragment } from "react";
import { Sidebar } from "../components/Sidebar";
import { NotesCard } from "../components/NotesCard";
import { useNotes } from "../contexts/notes.context";

const Home = () => {
  
  const {title,text,notes,notesDispatch} = useNotes();

  const onTitleChange = (e) => {
    notesDispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  };

  const onTextChange = (e) => {
    notesDispatch({
      type: "TEXT",
      payload: e.target.value,
    });
  };

  const onAddClick = () => {
    notesDispatch({
      type: "ADD_NOTE",
    });

    notesDispatch({
      type: "CLEAR",
    });
  };

  console.log(notes);

  const pinnedNotes = notes.filter(({isPinned,isArchived}) => isPinned && !isArchived);
  const otherNotes = notes.filter(({isPinned,isArchived}) => !isPinned && !isArchived);

  console.log(pinnedNotes);
  console.log(otherNotes);

  return (
    <Fragment>
      <Navbar />
      <main className="flex">
        <Sidebar />
        <div className="p-5 flex-1">
          <div className="border-2 flex flex-col w-96 p-2 relative mx-auto mt-3 rounded-t-md">
            <input
              className="outline-none border-b-2"
              value={title}
              onChange={onTitleChange}
              placeholder="Enter title"
            />
            <textarea
              className="h-20 outline-none"
              value={text}
              onChange={onTextChange}
              placeholder="Enter text"
            />
            <button
              className="h-7 w-7 flex items-center justify-center absolute bottom-0 right-0 bg-indigo-800 text-white rounded-full"
              disabled={title.length === 0}
              onClick={onAddClick}
            >
              <span className="material-icons-outlined">add</span>
            </button>
          </div>
          <div className="mt-16">
          <p className="my-3 font-medium text-xl">{pinnedNotes?.length > 0 && 'Pinned Notes'}</p>
           <div className="flex flex-wrap gap-4">
           {
              pinnedNotes?.length > 0 && pinnedNotes.map(note => <NotesCard key={note.id} note={note}/>)
            }
           </div>
           <p className="mt-10 mb-3 font-medium text-xl">{pinnedNotes?.length > 0 && otherNotes?.length > 0 && 'Other Notes'}</p>
           <div className="flex flex-wrap gap-4">
           {
             otherNotes?.length > 0 && otherNotes.map(note => <NotesCard key={note.id} note={note}/>)
              
            }
           </div>   
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
