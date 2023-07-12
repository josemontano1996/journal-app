import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, TextField, Typography, Link } from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';

const formData = {
  email: '',
  password: '',
  displayName: '',
};

const formValidations = {
  email: [(value) => value.includes('@'), 'Email must have an @.'],
  password: [
    (value) => value.length >= 6,
    'Password must have at least 6 characters.',
  ],
  displayName: [(value) => value.length >= 1, 'Name is mandatory.'],
};

export const RegisterPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    emailValid,
    passwordValid,
    displayNameValid,
  } = useForm(formData, formValidations);

  console.log(displayNameValid);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    console.log(formState);
  };

  return (
    <AuthLayout title='Register'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Full name'
              type='name'
              placeholder='Your Name'
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Email'
              type='email'
              placeholder='email@google.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            ></TextField>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Password'
              type='password'
              placeholder='Your password'
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            ></TextField>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button type='submit' variant='contained' fullWidth>
                Create Account
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}> Already an account?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Log in
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
