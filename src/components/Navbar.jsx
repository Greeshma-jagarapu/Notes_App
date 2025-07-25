import logo from '../assets/notesLogo.png';

export const Navbar = () => {
    return (
        <header className="px-4 py-2 border-b-2 border-solid border-grey-500">
            <div className="h-10 w-10 flex items-center gap-x-2">
                <img className='h-full w-full' src={logo} />
                <h1 className='text-2xl text-indigo-800 font-medium'>NoteIt</h1>
            </div>
        </header>
    )
}