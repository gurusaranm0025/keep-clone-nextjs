import classes from "./NotesList.module.css";
import Notes from "../Notes/Notes";

function NotesList() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.notesWrapper}>
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
      </div>
    </div>
  );
}

export default NotesList;
