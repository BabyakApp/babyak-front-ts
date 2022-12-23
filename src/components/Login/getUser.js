import axios from "axios";
import { useEffect, useState } from "react";
import { Users } from "react-feather";

//3.36.207.252 8080
export default function Login() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setError(null);
        setUser(null);
        setLoading(true);
        const response = await axios.get(
          "http://3.36.207.252:8080/oauth/google"
        );
        setUser(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!user) return null;
  return <>user.email</>;
}
