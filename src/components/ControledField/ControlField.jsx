import React, { useState } from "react";

const ControlField = () => {
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  console.log(password);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ControlField;
