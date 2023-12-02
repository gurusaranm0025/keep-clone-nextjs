import classes from "./Notes.module.css";

function Notes() {
  return (
    <div className={classes.notesWrapper}>
      <h3 className={classes.title}>Title</h3>
      <p className={classes.notes}>
        Notes..............I am doing this as a fun project
      </p>
    </div>
  );
}

export default Notes;
