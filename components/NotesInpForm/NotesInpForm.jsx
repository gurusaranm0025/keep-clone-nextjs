"use client";

import classes from "./NotesInpForm.module.css";

function NotesInpForm() {
  function submithandler() {
    console.log("Notes submitted");
  }

  return (
    <div className={classes.wrapper}>
      <form className={classes.notesForm} onSubmit={submithandler}>
        <input
          placeholder="Title"
          type="text"
          className={classes.notesHeading}
        />
        <textarea
          className={classes.notes}
          rows="6"
          placeholder="notes here..."
        ></textarea>
        <button onClick={submithandler} className={classes.submitButton}>
          <span>+</span>
        </button>
      </form>
    </div>
  );
}

export default NotesInpForm;
