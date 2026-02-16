import React from 'react';

function FormToSheet() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "https://script.google.com/macros/s/AKfycbywobQ-W9O-LZ-mUkEnxrHwG6MgKpntNCXMbCKzYTCsjioycyA48jotsAx7D2qh7fdz8w/exec";

    const formData = new URLSearchParams();
    formData.append("Gmail", e.target.gmail.value);
    formData.append("MobileNumber", e.target.mobileNumber.value);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formData.toString()
    })
    .then(res => res.text())
    .then(data => {
      alert("Submitted Successfully!");
      e.target.reset();
    })
    .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>React to Sheet</h1>
      <form onSubmit={handleSubmit}>
        <input name="gmail" placeholder="Gmail" required /><br/>
        <input name="mobileNumber" placeholder="Mobile Number" required /><br/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default FormToSheet;
