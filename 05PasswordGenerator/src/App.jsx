import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

export function App() {
  const [charAllow, setCharAllow] = useState(false);
  const [numAllow, setNumAllow] = useState(false);
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += '!@#$%^&*()_+":?<>';

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [charAllow, numAllow, length, passwordGenerator]);

  return (
    <>
      <div>
        <input
          placeholder="Password"
          value={password}
          type="text"
          readOnly
        />
      </div>

      <div>
        <label className="text-white">Length : {length}</label>x
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="Characters" className="text-white">Characters</label>
        <input
          type="checkbox"
          defaultChecked={charAllow}
          onChange={() => {
            setCharAllow((prev) => !prev);
          }}
        />
      </div>

      <div>
          <label htmlFor="Numbers"
          className="text-white"
          >Numbers</label>
        <input
          type="checkbox"
          defaultChecked={numAllow}
          onChange={() => {
              setNumAllow((prev) => !prev);
            }}
        />
      </div>
    </>
  );
}
