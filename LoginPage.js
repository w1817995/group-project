import React, { useState } from "react";
import { Button, InputField, LabelText, Page } from "govuk-react";
import { Link } from "react-router-dom";
import $ from "jquery";

function LoginPage() {
  const[data, setData] = useState("");
  const [nhsNumber, setNhsNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleInputChange = event =>{
	const {name, value} = event.target;
	setData(prevData => ({...prevData, [name] : value}));
 }

  var url_login = "http://localhost:4000/Login.php";

  const handleSubmit = (e) => {
    e.preventDefault();

    $.ajax({
      url: url_login,
      type: "POST",
      data: data,
      success: function (data) {
        // Process the response from the PHP file
		console.log(data);
      },
      error: error => console.log(error)
    });
  };

  return (
    <Page>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <LabelText>NHS Number:</LabelText>
        <InputField
          onChange={handleInputChange}
        />

        <LabelText>Email:</LabelText>
        <InputField
          onChange={handleInputChange}
        />

        <LabelText>Password:</LabelText>
        <InputField
          onChange={handleInputChange}
        />

        <Button type="submit">Login</Button>
      </form>
	  
      <p>
	  Don't have an account? <Link to="/registration">Register here</Link>
      </p>
    </Page>
  );
}

export default LoginPage;
