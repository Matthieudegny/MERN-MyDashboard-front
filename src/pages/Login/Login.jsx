import React, { useState, useContext } from "react";

//import request
import { useLogin } from "../../CustomHooks/useCustomeHook";

//import context
import { DashBoardContext } from "../../Context/Context";

//import composant
import ContainerBox from "../../components/ContainerBox/ContainerBox";

//import style
import "./Login.scss";

//import icons
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaPowerOff } from "react-icons/fa";

const Login = () => {
  const { setToken, token, displayInfoMessage } = useContext(DashBoardContext);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const onSuccessLogin = (user) => {
    if (user.user) {
      localStorage.setItem("user", JSON.stringify(user));
      setToken(user.token);
      displayInfoMessage(" Vous êtes bien connecté", "rgb(6, 181, 230)");
      setpassword("");
      setemail("");
    } else {
      displayInfoMessage(
        " Veuillez vérifier votre adresse mail et mot de passe",
        "#333A56"
      );
    }
  };

  const { mutate: login, data } = useLogin(onSuccessLogin);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const objectToSent = { email, password };
    if (email && password) login(objectToSent);
    else {
      displayInfoMessage(" Vous devez remplir les champs", "#333A56");
    }
  };

  const setLogout = (e) => {
    e.preventDefault();
    displayInfoMessage(" Vous êtes déconnecté", "#333A56");
    localStorage.removeItem("user");
    setToken("");
    // setuserPseudo("Compte visiteur");
  };
  return (
    <ContainerBox>
      {!token ? (
        <>
          <h2 style={{ marginTop: "3vh" }}>Connexion</h2>
          <div className="container_login_form">
            <div className="container_login_form_inputDiv">
              <label>
                <MdOutlineAlternateEmail className="container_login_form_inputDiv_icons" />
                Email:
              </label>
              <div className="container_login_form_inputDiv_inputContainer">
                <input
                  className="container_login_form_inputDiv_inputContainer_input"
                  type="email"
                  placeholder="Entrez votre mot de passe ici"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                />
                <span className="focus-border">
                  <i></i>
                </span>
              </div>
            </div>
            <div className="container_login_form_inputDiv">
              <label>
                <RiLockPasswordLine className="container_login_form_inputDiv_icons" />
                Password:
              </label>
              <div className="container_login_form_inputDiv_inputContainer">
                <input
                  className="container_login_form_inputDiv_inputContainer_input"
                  type="password"
                  placeholder="Entrez votre mot de passe ici"
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                />
                <span className="focus-border">
                  <i></i>
                </span>
              </div>
            </div>

            <button onClick={handleSubmit}>Se connecter</button>
          </div>
        </>
      ) : (
        <div className="container_logout">
          <h3>Vous pouvez vous déconnecter ici</h3>
          <button onClick={(e) => setLogout(e)}>
            <FaPowerOff className="container_logout_icon" />
            Déconnexion
          </button>
        </div>
      )}
    </ContainerBox>
  );
};
export default Login;
