import React from 'react'
import "./HeroSignup.css"
import consoleImg from "../../assets/signup.png"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const HeroSignup = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <div className='container outerHeroSignupDiv' style={{ paddingTop: "9rem", paddingBottom: "6rem" }}>
      <div className='innerHeroSignupDiv1'>
        <img src={consoleImg} />
      </div>
      <div className='innerHeroSignupDiv2'>
        <h3>
          Signup Now
        </h3>
        <form action="http://localhost:8080/signup" method='POST'>
          <Box className='SignupBox1'
            sx={{
              '& > :not(style)': { width: '80%' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="standard-basic" label="Email" variant="standard" name="email"/>
          </Box>
          <Box className='SignupBox2'
            sx={{
              '& > :not(style)': { width: '80%' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="standard-basic" label="Username" variant="standard" name="username"/>
          </Box>
          <FormControl className='SignupBox3' sx={{ width: '80%' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="standard-adornment-password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <button>Sign Up Now</button>
        </form>

      </div>
    </div>
  )
}

export default HeroSignup
