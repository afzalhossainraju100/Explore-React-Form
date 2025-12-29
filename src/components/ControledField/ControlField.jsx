import React, { useState } from "react";

const ControlField = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    else{
        setError("");
    }

    console.log("Form submitted successfully", { email, password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            e.target.value.length < 6 
              ? setError("Password must be at least 6 characters long") 
              : setError("");
          }}
          required
        />
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ControlField;
