import GoogleLogin from "react-google-login";

const GoogleButton = () => {
  const handleLogin = async (googleData) => {};

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Continue with Google"
      onSuccess={handleLogin}
      onFailure={handleLogin}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleButton;
