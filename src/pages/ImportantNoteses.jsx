import { NotesCard } from "../components/NotesCard";
import { useNotes } from "../contexts/notes.context"
import { Fragment } from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

export const ImportantNotese = () => {
    const { notes } = useNotes();
    const importantNotes = notes.filter(note => note.isPinned && !note.isArchived);
    return (
       <Fragment>
       <Navbar />
       <main className="flex">
          <Sidebar />
          <div>
             <div className="p-10 flex flex-wrap gap-4">
             {
                 importantNotes.map(note => <NotesCard key={note.id} note={note}/>)
             }
           </div>
          </div>
       </main>
       
       </Fragment>
    )
}