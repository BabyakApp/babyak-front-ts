import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Redirect() {
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");
  const scope = searchParams.get("scope");
  const authuser = searchParams.get("authuser");
  const hd = searchParams.get("hd");
  const prompt = searchParams.get("prompt");

  let navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://3.36.207.252:8080/oauth/google/redirect?",
          {
            params: {
              code: code,
              scope: scope,
              authuser: authuser,
              hd: hd,
              prompt: prompt,
            } as any,
          }
        );
        console.log(response);

        // setting user info from jwt ....
        const userInfo = JSON.stringify(response.data);
        localStorage.setItem("userInfo", userInfo);

        navigate("/post");
      } catch (e) {}
    };
    fetchUser();
  }, []);
  return <>loading...</>;
}
