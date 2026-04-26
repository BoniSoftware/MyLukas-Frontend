import LogoMix1  from "../assets/Mix.jpg";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "../styles/login.css";

function Login() {
  return (
      <><div className="logo-container">
          <img src={LogoMix1} alt="Logo" className="LogoMix1"/>
      </div><div className="container">
              <div className="card">
                  <InputField label="Documento de Identidad " type="ID" placeholder=" Ingrese su documento"/>
                  <InputField label="Contraseña " type="password" placeholder=" Ingrese su contraseña"/>
                  <p>
                    <Button text="Iniciar Seccion"/>
                  </p>
                  <p className="forgot">
                    ¿Olvidaste tu contraseña? <button type="button" className="link-button">Restablecer contraseña</button>
                  </p>
              </div>
          </div></>
  );
}

export default Login;