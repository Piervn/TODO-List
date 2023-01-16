import React, { useState } from "react";
import tick from "./assets/tick.png";
import redo from "./assets/redo.png";
import cross from "./assets/cross.png";

export interface ITODO {
  id: number;
  text: string;
  done: boolean;
}

interface TODOProps {
  todo: ITODO;
  onRemove: () => void;
  onDoneChange: () => void;
}

export const TODO = (props: TODOProps) => {
  return (
    <div className={"todo " + (props.todo.done ? "done" : "")}>
      <div className="todo__text">{props.todo.text}</div>
      <img
        src={props.todo.done ? redo : tick}
        alt="tick"
        className="todo__action"
        onClick={props.onDoneChange}
      />
      <img
        src={cross}
        alt="cross"
        className="todo__action"
        onClick={props.onRemove}
      />
    </div>
  );
};
