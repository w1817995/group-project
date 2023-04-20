import React, { useState } from "react";
import { Button, InputField, LabelText, Page, Select } from "govuk-react";
import $ from "jquery";

function RegistrationPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
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
      data: JSON.stringify({
        firstName,
        lastName,
        gender,
        dateOfBirth,
        nhsNumber,
        email,
        password,
      }),
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
        <LabelText>First Name:</LabelText>
        <InputField
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <LabelText>Last Name:</LabelText>
        <InputField
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <LabelText>Gender:</LabelText>
        <Select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Select>

        <LabelText>Date of Birth:</LabelText>
        <InputField
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />

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

      </form>
    </Page>
  );
}

export default RegistrationPage;
