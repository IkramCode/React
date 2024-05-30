import React, { useState } from "react";

export function ShowHidePass() {
  const [passwordType, setPasswordtype] = useState("password");

  const handlePassword = () => {
    setPasswordtype(passwordType === "password" ? "text" : "password");
  };
  return (
    <>
      <div>
        <input
          type={passwordType}
        />
        <span className="toggle-icon" onClick={handlePassword}>
          {passwordType === "password" ? "👁️" : "🙈"}
        </span>
      </div>
    </>
  );
}
