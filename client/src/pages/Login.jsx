import React, { useState } from 'react'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material";

import CameraAltIcon from '@mui/icons-material/CameraAlt';

import { VisuallyHiddenInput } from '../components/styles/StyledComponent';

import { useFileHandler, useInputValidation, useStrongPassword } from '6pp';
import { usernameValidator } from '../utils/validators';


const Login = () => {

    const [isLogin, setIsLogin] = useState(true);

    const toggleLogin = () => {
        setIsLogin(prev => !prev);
    }

    const name = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("", usernameValidator);
    const password = useInputValidation("");
    const avatar = useFileHandler("single");

    const [loginError , setLoginError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (!username.value || !password.value) {
            setLoginError("Please fill in all fields.");
            return;
        }
    };

    const handleSignUp = (e) => {
        e.preventDefault();
    };

    return (
        <div
            style={{
                backgroundImage:
                "linear-gradient(rgb(241, 109, 162),rgba(249,115,193,1))",
            }}

        >

            <Container component={"main"}
                maxWidth="xs"
                sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <Paper
                    elevation={3}
                    sx={{
                        padding: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    {isLogin ?

                        <>

                            <Typography variant="h5">Login</Typography>
                            <form style={{

                                width: "100%",
                                marginTop: "1rem",

                            }}
                                onSubmit={handleLogin}

                            >
                                <TextField required fullWidth
                                    label="Username"
                                    margin='normal'
                                    variant='outlined'
                                    value={username.value}
                                    onChange={username.changeHandler}
                                />


                                <TextField required fullWidth
                                    label="Password"
                                    type="password"
                                    margin='normal'
                                    variant='outlined'
                                    value={password.value}
                                    onChange={password.changeHandler}
                                />

                                <Button
                                    sx={{ marginTop: 2 }}
                                    variant='contained'
                                    color='primary'
                                    type='submit'
                                    fullWidth
                                >
                                Login

                                </Button>

                                {loginError && (
                                   <Typography 
                                   color="error"       
                                   variant="caption"
                                    textAlign="center">
                                            {loginError}
                                        </Typography>
                                    )}

                                <Typography textAlign={"center"} m={"1rem"}>
                                    Or

                                </Typography>

                                <Button

                                    fullWidth
                                    variant='text'

                                    onClick={toggleLogin}
                                >
                                    Go to Sign Up

                                </Button>


                            </form>



                        </>

                        :
                        <>

                            <Typography variant="h5">Sign Up</Typography>
                            <form style={{

                                width: "100%",
                                marginTop: "1rem",

                            }}

                                onSubmit={handleSignUp}

                            >

                                <Stack
                                    position={"relative"}
                                    width={"10rem"}
                                    margin={"auto"} >

                                    <Avatar
                                        sx={{
                                            width: "10rem",
                                            height: "10rem",
                                            objectFit: "contain",
                                        }}

                                        src={avatar.preview}
                                    />



                                    <IconButton
                                        sx={{
                                            position: "absolute",
                                            bottom: "0",
                                            right: "0",
                                            color: "white",
                                            bgcolor: "rgba(0,0,0,0.5)",
                                            ":hover": {
                                                bgcolor: "gba(0,0,0,0.8)",
                                            },

                                        }}
                                        component="label"

                                    >


                                        <>
                                            <CameraAltIcon />
                                            <VisuallyHiddenInput type="file" onChange={avatar.changeHandler}

                                            />


                                        </>
                                    </IconButton>
                                </Stack>

                                {
                                    avatar.error && (
                                        <Typography m={"1rem"}
                                            widith={"fit-content"}
                                            display={"block"}

                                            color="error"
                                            variant="caption">

                                            {avatar.error}</Typography>
                                    )

                                }





                                <TextField required fullWidth
                                    label="Name"
                                    margin='normal'
                                    variant='outlined'
                                    value={name.value}
                                    onChange={name.changeHandler}
                                />

                                <TextField required fullWidth
                                    label="Bio"
                                    margin='normal'
                                    variant='outlined'
                                    value={bio.value}
                                    onChange={bio.changeHandler}

                                />

                                <TextField required fullWidth
                                    label="Username"
                                    margin='normal'
                                    variant='outlined'
                                    value={username.value}
                                    onChange={username.changeHandler}


                                />


                                {
                                    username.error && (
                                        <Typography color="error" variant="caption">

                                            {username.error}</Typography>
                                    )

                                }




                                <TextField required fullWidth
                                    label="Password"
                                    type="password"
                                    margin='normal'
                                    variant='outlined'
                                    value={password.value}
                                    onChange={password.changeHandler}
                                />






                                <Button
                                    sx={{ marginTop: "1rem" }}
                                    variant='contained'
                                    color='primary'
                                    type='submit'
                                    fullWidth
                                >
                                    Sign Up

                                </Button>

                                <Typography textAlign={"center"} m={"1rem"}>
                                    Or

                                </Typography>

                                <Button

                                    fullWidth
                                    variant='text'

                                    onClick={toggleLogin}
                                >
                                    Go to Login 

                                </Button>


                            </form>



                        </>



                    }
                </Paper>
            </Container>

        </div>

    );

};

export default Login;