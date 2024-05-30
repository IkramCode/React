import React from "react";
import data from "./data";
import { useState } from "react";
import "./style.css";

export function Index() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelction, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultipleSelection = (getCurrentId) => {
    let copyMultiple = [...multiple];
    const findIndexofCurrentId = copyMultiple.indexOf(getCurrentId);

    if (findIndexofCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexofCurrentId, 1);

    setMultiple(copyMultiple);
  };

  return (
    <>
      <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelction)}>
          Enable Multi Selection
        </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem ) => (
              <div className="item">
                <div
                  onClick={
                    enableMultiSelction
                      ? () => handleMultipleSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {selected === dataItem.id ||
                multiple.indexOf(dataItem.id) !== -1 ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null}
              </div>
            ))
          ) : (
            <div>No data found!</div>
          )}
        </div>
      </div>
    </>
  );
}
