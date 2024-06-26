import React from "react";
import * as Components from "./comps";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import LoadingOverlay from "./loading";

const Login = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [signIn, toggle] = React.useState(true);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    console.log("signin hit")
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://bit-lock.vercel.app/user/login",
        {
          username,
          password,
        }
      );
      console.log(response)
      console.log(response.data);
      const token = response.data.token;
      window.localStorage.setItem("token", token);
      // navigate("/dashboard");
      setIsLoading(false);
      window.location.href="/dashboard"
    } catch (error) {
      setError(error.response.data.msg);
      setTimeout(() => {
        window.location.reload();
        setIsLoading(false);
      }, 1500);
    }
  };

  const handleSignup = async (e) => {
    console.log("signup hit")
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://bit-lock.vercel.app/user/signup",
        {
          username,
          password,
        }
      );
      console.log(response.data);
      handleSignin(e);
      setIsLoading(false);
    } catch (error) {
      setError(error.response.data.msg);
      setTimeout(() => {
        window.location.reload();
        navigate("/signup");
        setIsLoading(false);
      }, 1500);
    }
  };

  return (
    <Components.Bodyy>
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form onSubmit={handleSignup}>
            <Components.Title>Create Account</Components.Title>
            <Components.Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Components.Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Components.Button >
              Sign Up
            </Components.Button>
            {isLoading && <LoadingOverlay />}
            <Alert message={error} />
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form onSubmit={handleSignin}>
            <Components.Title>Sign in</Components.Title>
            <Components.Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Components.Input
              type="Password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Components.Button>
              Sign In
            </Components.Button>
            {isLoading && <LoadingOverlay />}
            <Alert message={error} />
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter Your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </Components.Bodyy>
  );
};

export default Login;
