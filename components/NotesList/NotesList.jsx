import classes from "./NotesList.module.css";
import Notes from "../Notes/Notes";

function NotesList({ notes }) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.notesWrapper}>
        {notes &&
          notes.map((note) => {
            return (
              <Notes
                id={notes.id}
                key={note.id}
                title={note.title}
                notes={note.notes}
              />
            );
          })}
      </div>
    </div>
  );
}

export default NotesList;
