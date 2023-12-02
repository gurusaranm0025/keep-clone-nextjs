"use client";

import classes from "./Notes.module.css";
import { deleteFromDB } from "@/actions/serverActions";

function Notes({ id, title, notes }) {
  function deleteHandler(id) {
    deleteFromDB(id);
  }
  return (
    <div className={classes.notesWrapper}>
      <h3 className={classes.title}>{title || "Title"}</h3>
      <p className={classes.notes}>
        {notes || "Notes..............I am doing this as a fun project"}
      </p>
      {id != "sudo" && (
        <button
          className={classes.delButton}
          name="del"
          type="submit"
          value={id}
          onClick={() => deleteHandler(id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            style={{ height: "20px", width: "20px" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default Notes;
