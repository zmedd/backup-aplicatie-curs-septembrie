import React, { useState } from "react";
import {
  Container,
  Title,
  Input,
  Wrapper,
  Button,
  Error,
} from "./LoginPage.style";

const LoginPage = ({ logUserIn }) => {
  const [values, setValues] = useState({
    email: "curs@its.ro",
    pass: "parola",
    error: "",
  });

  function handleInputChange(type, val) {
    if (type === "email") {
      setValues({
        ...values,
        email: val,
        error: "",
      });
    } else if (type === "pass") {
      setValues({
        ...values,
        pass: val,
        error: "",
      });
    }
  }

  function handleSubmit() {
    if (values.email === "curs@its.ro" && values.pass === "parola") {
      logUserIn();
    } else {
      setValues({
        ...values,
        error: "Incorrect email / password.",
      });
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>Log in</Title>
        {values.error !== "" && <Error>{values.error}</Error>}
        <Input
          placeholder="Email address"
          type="email"
          value={values.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <Input
          placeholder="Password"
          type="password"
          value={values.pass}
          onChange={(e) => handleInputChange("pass", e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <Button onClick={() => handleSubmit()}>Log me in!</Button>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
