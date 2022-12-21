import axios from "axios";

const onGoogleSignInSuccess = (res) => {
  const params = new URLSearchParams();
  params.append("id_token", res.tokenId);

  const googleLogin = async () => {
    const res = await axios.post(
      "http://localhost:8080/api/auth/google",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    localStorage.setItem("accessToken", res.data.accessToken);
    localStorage.setItem("refreshToken", res.data.refreshToken);
  };
  googleLogin();
};

export default function StartPage() {
  return <div className="App"></div>;
}
