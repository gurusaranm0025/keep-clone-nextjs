import classes from "./NotesList.module.css";
import Notes from "../Notes/Notes";

function NotesList({ notes }) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.notesWrapper}>
        <Notes
          id="sudo"
          key={"sudo"}
          title={"Welcome"}
          notes={
            "This is a simple Google Keep Web Clone I've done to learn Next.JS and PostgreSQL and some responsive frontend design."
          }
        />
        {notes &&
          notes.map((note) => {
            return (
              <Notes
                id={note.id}
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
