import React, { useEffect } from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Paper,
  Typography,
  makeStyles,
  Collapse,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { login } from "redux/auth";

const schema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(/img/bg.jpeg)",
    backgroundRepeat: "no-repeat",
    backgroundColor: theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

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

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={7} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
            validationSchema={schema}
          >
            {({ values, errors, handleChange }) => (
              <Form className={classes.form} noValidate>
                <TextField
                  variant="filled"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={values.email}
                  onChange={handleChange}
                  error={Boolean(errors.email)}
                />
                <TextField
                  variant="filled"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={values.password}
                  onChange={handleChange}
                  error={Boolean(errors.password)}
                />
                <Collapse in={Boolean(error)}>
                  <Alert severity="error">
                    This is an error alert — check it out!
                  </Alert>
                </Collapse>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Login
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </div>
      </Grid>
    </Grid>
  );
};

export default withRouter(Login);
