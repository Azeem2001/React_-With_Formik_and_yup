import "./App.css";
import styled from "styled-components";
import { ErrorMessage, useFormik } from "formik";
import { signUpSchema } from "./schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

function App() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  console.log(errors);

  return (
    <div className="App">
      <h1>FORM USING WITH FORMIK AND YUP</h1>
      <Container>
        <form onSubmit={handleSubmit}>
          <Item>
            <Label htmlFor="name">Name</Label>
            <Input
              type="name"
              autoComplete="off"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <Message>{errors.name}</Message>
            ) : null}
          </Item>
          <Item>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <Message>{errors.email}</Message>
            ) : null}
          </Item>
          <Item>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <Message>{errors.password}</Message>
            ) : null}
          </Item>
          <Item>
            <Label htmlFor="confirm_password">Confirm Password</Label>
            <Input
              type="confirm_password"
              autoComplete="off"
              name="confirm_password"
              id="confirm_password"
              placeholder="Enter Your Confirm_Password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirm_password && touched.confirm_password ? (
              <Message>{errors.password}</Message>
            ) : null}
            <Message>{errors.confirm_password}</Message>
          </Item>
          <Wrapper>
            <Button type="submit">Submit Form</Button>
          </Wrapper>
        </form>
      </Container>
    </div>
  );
}

export default App;
const Container = styled.div`
  width: 31%;
  border: 2px solid gray;
  border-radius: 25px;
  padding: 1.5rem;
`;
const Item = styled.div`
  width: 100%;
`;
const Label = styled.label`
  display: block;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: sans-serif;
  line-height: 3rem;
`;
const Input = styled.input`
  width: calc(100% - 2rem);
  height: 60px;
  font-size: 1.5rem;
  border-radius: 8px;
  border-color: green;
  outline: none;
  padding: 0 1rem;
`;
const Wrapper = styled.div`
  width: 90%;
  padding-top: 1rem;
  margin: 0 auto;
`;
const Button = styled.button`
  width: 100%;
  height: 3rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 25px;
  background-color: lightcoral;

  &:hover {
    background-color: coral;
    border: 1px solid;
  }
`;
const Message = styled.p`
  color: red;
`;
