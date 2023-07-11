import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { Google } from '@mui/icons-material';
import { Button, Grid, TextField, Typography, Link } from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth';

export const LoginPage = () => {
  const { status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'josema@google.com',
    password: '123456',
  });

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();

    console.log(email, password);
    dispatch(checkingAuthentication());
  };

  const onGoogleSignIn = () => {
    console.log('ongoogle sing in');
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Email'
              type='email'
              placeholder='email@google.com'
              fullWidth
              name='email'
              onChange={onInputChange}
              value={email}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Password'
              type='password'
              placeholder='Your password'
              fullWidth
              name='password'
              onChange={onInputChange}
              value={password}
            ></TextField>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                type='submit'
                variant='contained'
                fullWidth
                disabled={isAuthenticating}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={onGoogleSignIn}
                variant='contained'
                fullWidth
                disabled={isAuthenticating}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Create an account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
