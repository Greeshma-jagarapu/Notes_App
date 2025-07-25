import { useNotes } from "../contexts/notes.context"
import { Fragment } from "react"
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"
import { NotesCard } from "../components/NotesCard"

export const DeletedNotes = () => {
    const { deletedNotes } = useNotes();
    return (
        <Fragment>
        <Navbar />
        <main className="flex">
           <Sidebar />
           <div>
              <div className="p-10 flex flex-wrap gap-4">
              {
                  deletedNotes.map(note => <NotesCard key={note.id} note={note}/>)
              }
            </div>
           </div>
        </main>
        
        </Fragment>
    )
}