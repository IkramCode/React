import React from "react";
import Data from "./Data";
import { useState } from "react";
import "./styles.css";

export function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multipleSelection, setMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function onClickHandler(currId) {
    setSelected(currId === selected ? null : currId);
  }

  function handleMultipleSelection(currId) {
    let cpyMultiple = [...multiple];
    const findIndex = cpyMultiple.indexOf(currId);

    if (findIndex === -1) cpyMultiple.push(currId);
    else cpyMultiple.splice(findIndex, 1);

    setMultiple(cpyMultiple)
  }

  return (
    <>
      <div className="wrapper">
        <button onClick={() => setMultipleSelection(!multipleSelection)}>
          Enable Multi Selection
        </button>
        <div className="accordian">
          {Data.map((dataitem) => (
            <div className="item">
              <div
                onClick={
                  multipleSelection
                    ? () => handleMultipleSelection(dataitem.id)
                    : () => onClickHandler(dataitem.id)
                }
                className="title"
              >
                <h3>{dataitem.question}</h3>
                <span>+</span>
                {selected === dataitem.id ||
                multiple.indexOf(dataitem.id) !== -1 ? (
                  <div className="content">{dataitem.answer}</div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
