import React from "react";
import * as Components from "./comps";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signIn, toggle] = React.useState(true);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://bit-lock-g5oz6lwht-hinatashoyo1s-projects.vercel.app/user/login", {
        username,
        password,
      });
      console.log(response.data)
      const token =response.data.token
      localStorage.setItem('token', token)
      navigate("/");
    } catch (error) { 
      console.log(error)}
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://bit-lock-g5oz6lwht-hinatashoyo1s-projects.vercel.app/user/signup", {
        username,
        password,
      });
      console.log(response.data)
      navigate("/");
    } catch (error) {
      console.log(error)
      navigate("/", { replace: true });
    }
  };

  return (
    <Components.bodyy>
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form>
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
            <Components.Button onClick={handleSignup}>
              Sign Up
            </Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form>
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
            <Components.Button onClick={handleSignin} >Sigin In</Components.Button>
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
    </Components.bodyy>
  );
};

export default Login;
