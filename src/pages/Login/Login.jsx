import React, { useEffect } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { Form, Formik, ErrorMessage } from "formik";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import {
//   Alert,
//   Button,
//   Box,
//   Col,
//   colors,
//   FormGroup,
//   Label,
//   Row,
//   StoqoLogo,
//   TextInput,
//   Typography,
// } from '@stoqo/complib';

import { login } from "redux/auth";

const schema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

const Login = (props) => {
  const { isAuthenticated, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { history, location } = props;

  useEffect(() => {
    if (isAuthenticated) {
      const { from } = location.state || { from: { pathname: "/" } };

      history.replace(from);
    }
  }, [isAuthenticated, history]);

  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  return (
    <div>Login Page</div>
    // <Wrapper>
    //   <Box display="flex" height="100%">
    //     <LoginImage />
    //     <LoginContainer>
    //       <LoginContent>
    //         <Row middle="xs">
    //           <Col xs>
    //             <LogoContainer height="40px">
    //               <img src={codLogo} alt="COD Logo" />
    //               <CODHeader>
    //                 COD <br />
    //                 Dashboard
    //               </CODHeader>
    //             </LogoContainer>
    //           </Col>
    //           <Col xs={6}>
    //             <LogoContainer height="55px">
    //               <StoqoLogo />
    //             </LogoContainer>
    //           </Col>
    //         </Row>

    //         <Description>
    //           Dashboard untuk mempermudah Collector dalam mengumpulkan uang COD
    //           dari Driver.{" "}
    //         </Description>

    //         <Formik
    //           initialValues={{ email: "", password: "" }}
    //           onSubmit={handleSubmit}
    //           validationSchema={schema}
    //         >
    //           {({ values, errors, handleChange }) => (
    //             <Form>
    //               <FormGroup>
    //                 <Label>Email</Label>
    //                 <TextInput
    //                   type="email"
    //                   placeholder="Input email"
    //                   name="email"
    //                   autoFocus
    //                   value={values.email}
    //                   onChange={handleChange}
    //                   hasError={Boolean(errors.email)}
    //                 />
    //                 <ErrorMessage name="email" />
    //               </FormGroup>

    //               <FormGroup>
    //                 <Label>Password</Label>
    //                 <TextInput
    //                   type="password"
    //                   placeholder="Input password"
    //                   name="password"
    //                   value={values.password}
    //                   onChange={handleChange}
    //                   hasError={Boolean(errors.password)}
    //                 />
    //                 <ErrorMessage name="password" />
    //               </FormGroup>

    //               <Alert
    //                 visible={Boolean(error)}
    //                 variant="danger"
    //                 title="Error:"
    //                 dismissable={false}
    //                 controlled
    //               >
    //                 There was an error logging into the application, please
    //                 check your username and password.
    //               </Alert>

    //               <Button type="submit" variant="primary">
    //                 Login
    //               </Button>
    //             </Form>
    //           )}
    //         </Formik>
    //       </LoginContent>
    //     </LoginContainer>
    //   </Box>
    // </Wrapper>
  );
};

// const Wrapper = styled.div`
//   height: 100%;
//   background-color: white;
// `;

// const LoginImage = styled.div`
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
//   background-image: url("/img/bg.jpg");
//   flex: 1;

//   @media (max-width: 64em) {
//     display: none;
//   }
// `;

// const LoginContainer = styled.div`
//   position: relative;
//   flex: 1;

//   ::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 1.25rem;
//     background-color: ${colors.purple[90]};
//   }
// `;

// const LoginContent = styled(Box).attrs(() => ({
//   height: "100%",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   maxWidth: "30rem",
//   margin: "auto",
// }))`
//   padding: ${isBrowser ? "6.25rem 3.125rem" : "6.25rem 1.5rem"};
// `;

// const LogoContainer = styled(Box).attrs(() => ({
//   display: "flex",
//   alignItems: "center",
// }))`
//   img {
//     max-height: ${(props) => props.height};
//   }
// `;

// const Description = styled(Typography).attrs(() => ({
//   variant: "heading",
// }))`
//   font-weight: normal;
//   margin: 0.5rem 0 1.25rem 0;
// `;

// const CODHeader = styled(Typography).attrs(() => ({
//   variant: "heading",
// }))`
//   line-height: 1.25rem;
//   margin-left: 0.5rem;
//   margin-bottom: 0;
// `;

export default withRouter(Login);
