import { useContext, useEffect } from "react";
import { Mycontext } from "../src/App";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import rabbitdash from "../src/assets/d66278bc50feea307ba525f2d853ece6.png";

function Login() {
  const navigate = useNavigate();
  const { islogin, setislogin } = useContext(Mycontext);

  useEffect(() => {
    setislogin(true);
  }, []);

  return (
    <section className="container">
      <div className="loginsection ">
        <div className="loginform">
          <Link to="https://www.kilograms.in" className="mb-3">
            <img src={rabbitdash} alt="" />
          </Link>

          <div className="adminemail">
            <input type="text" placeholder="Enter Email Address" autoFocus />
          </div>

          <div className="adminemail">
            <input type="text" placeholder="Enter password" />
          </div>
          <Link to="/dashboard" className="w-100 mt-4">
            <Button className="Loginbutton">Login</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
