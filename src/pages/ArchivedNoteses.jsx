import { Fragment } from "react";
import { NotesCard } from "../components/NotesCard"
import { useNotes } from "../contexts/notes.context"
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

export const ArchivedNoteses = () => {
    const { notes } = useNotes();
    const archivedNotes = notes.filter(note => {return note.isArchived});
    console.log(archivedNotes);
    return (
        <Fragment>
        <Navbar />
        <main className="flex">
           <Sidebar />
           <div>
              <div className="p-10 flex flex-wrap gap-4">
              {
                  archivedNotes.map(note => <NotesCard key={note.id} note={note}/>)
              }
            </div>
           </div>
        </main>   
        </Fragment>
        
    )
}