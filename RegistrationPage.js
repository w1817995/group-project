import React, { useState } from "react";
import { Button, InputField, LabelText, Page } from "govuk-react";
import $ from "jquery";

function RegistrationPage() {
  const [nhsNumber, setNhsNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    $.ajax({
      url: "your_registration_php_file.php",
      type: "POST",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify({ nhsNumber, email, password }),
      success: function (data) {
        // Process the response from the PHP file
      },
      error: function (jqXHR, textStatus, errorThrown) {
        // Handle any errors
      },
    });
  };

  return (
    <Page>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <LabelText>NHS Number:</LabelText>
        <InputField
          value={nhsNumber}
          onChange={(e) => setNhsNumber(e.target.value)}
        />

        <LabelText>Email:</LabelText>
        <InputField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <LabelText>Password:</LabelText>
        <InputField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">Register</Button>
      </form>
    </Page>
  );
}

export default RegistrationPage;
