import React, { useState } from "react";
import { Button, Input, LabelText, Page } from "govuk-react";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";

function LoginPage() {
  const [data, setData] = useState({
    nhs: "",
    email: "",
    pass: ""
  });

  const history = useNavigate();

  const handleInputChange = event => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };

  var url_login = "http://localhost:4000/Login.php";

  const handleSubmit = (e) => {
	e.preventDefault();
  
	var UserData = {
	  nhs: data.nhs,
	  email: data.email,
	  pass: data.pass
	};
  
	$.ajax({
	  url: url_login,
	  method: "POST",
	  data: JSON.stringify(UserData),
	  contentType: 'application/json',
	  dataType: 'json',
	  success: (response) => {
		console.log("Server response:", response);
		if (response === "User identified") {
		  console.log("Navigating to /Homepage");
		  history({ pathname: '/Homepage' });
		} else {
		  console.log("Login failed");
		  // You can handle login failure here, e.g., show an error message
		}
	  },
	  error: error => console.log("Server error:", error)
	});
  };
  
  

  return (
    <Page>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <LabelText>NHS Number:</LabelText>
        <Input
          name="nhs"
          value={data.nhs}
          onChange={handleInputChange}
        />

        <LabelText>Email:</LabelText>
        <Input
          type="email"
          name="email"
          value={data.email}
          onChange={handleInputChange}
        />

        <LabelText>Password:</LabelText>
        <Input
          type="password"
          name="pass"
          value={data.pass}
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
