import { useNotes } from "../contexts/notes.context";

export const NotesCard = ({ note }) => {
  const { id, title, text, isPinned, isArchived, isDeleted } = note;

  const { notesDispatch } = useNotes();

  const onPinnedClick = (id) => {
    notesDispatch({
      type: "PIN",
      payload: id,
    });
  };

  const onArchivedClick = (id) => {
    notesDispatch({
      type: "ARCHIVE",
      payload: id,
    });
  };

  // const onDeleteClick = (id) => {
  //   notesDispatch({
  //     type: 'DELETE',
  //     payload: id
  //   })
  // }

  const onDeleteClick = (id) => {
    !isDeleted
      ? notesDispatch({
          type: "DELETE",
          payload: id,
        })
      : notesDispatch({
          type: "REMOVE FROM BIN",
          payload: id,
        });
  };

  return (
    <div className="px-3 py-1 w-80 border-2 border-gray-300 rounded-md">
      <div className="relative py-2 border-b-2 border-gray-300">
        <p className="font-medium">{title}</p>
        {!isArchived && !isDeleted && (
          <span
            onClick={() => onPinnedClick(id)}
            className={`${
              isPinned ? "material-icons" : "material-icons-outlined"
            } absolute right-0 top-2`}
          >
            push_pin
          </span>
        )}
      </div>
      <div className="py-1">
        <p>{text}</p>
        <div className="flex justify-end">
          {!isDeleted && (
            <button>
              <span
                onClick={() => onArchivedClick(id)}
                className={`${
                  isArchived ? "material-icons" : "material-icons-outlined"
                }`}
              >
                archive
              </span>
            </button>
          )}
          <button>
            {/* <span onClick={() => !isDeleted ? onDeleteClick(id) : alert("Don't worry! It will be deleted within 7 days")} className="material-icons-outlined">delete</span> */}
            <span
              onClick={() => onDeleteClick(id)}
              className="material-icons-outlined"
            >
              delete
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
