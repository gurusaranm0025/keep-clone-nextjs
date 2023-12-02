"use client";

import { useState } from "react";
import classes from "./NotesInpForm.module.css";
import { insertToDB } from "@/actions/serverActions";

function NotesInpForm() {
  const [notes, setNotes] = useState({ title: "", notes: "" });
  const [emptyMsg, setEmptyMSg] = useState({ title: false, notes: false });

  function checkEmpty() {
    if (notes.title.trim().length === 0 && notes.notes.trim().length === 0) {
      setEmptyMSg((preValue) => {
        return { ...preValue, title: false, notes: false };
      });
    } else if (notes.title.trim().length === 0) {
      setEmptyMSg((preValue) => {
        return { ...preValue, title: true };
      });
    } else if (notes.notes.trim().length === 0) {
      setEmptyMSg((preValue) => {
        return { ...preValue, notes: true };
      });
    } else {
      setEmptyMSg((preValue) => {
        return { ...preValue, title: false, notes: false };
      });
    }
  }

  function titleChangeHandler(e) {
    setNotes((prevValue) => {
      return { ...prevValue, title: e.target.value };
    });
    checkEmpty();
  }

  function notesChangeHandler(e) {
    setNotes((prevValue) => {
      return { ...prevValue, notes: e.target.value };
    });
    checkEmpty();
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    if (emptyMsg.title || emptyMsg.notes) return;
    await insertToDB(notes);
    console.log("trying to submit whatever you have written!!@@");
  };

  return (
    <div className={classes.wrapper}>
      <form className={classes.notesForm} onSubmit={() => submitHandler}>
        <input
          placeholder="Title"
          type="text"
          className={classes.notesHeading}
          onChange={titleChangeHandler}
        />
        <textarea
          className={classes.notes}
          rows="6"
          placeholder="notes here..."
          onChange={notesChangeHandler}
        ></textarea>
        <button onClick={submitHandler} className={classes.submitButton}>
          <span>+</span>
        </button>
      </form>
      {(emptyMsg.title || emptyMsg.notes) && (
        <p
          style={{ color: "red", fontSize: ".8rem", padding: "0", margin: "0" }}
        >
          Give a title or fill the notes area
        </p>
      )}
    </div>
  );
}

export default NotesInpForm;
