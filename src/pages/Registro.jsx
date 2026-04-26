import LogoMix2  from "../assets/Mix.jpg";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "../styles/registro.css";

function Registro() {
  return (
  <>    
    <div className="containerRegistro">
        <img src={LogoMix2} alt="Logo" className="LogoMix2" />
        <div className="card">
            <InputField label="Nombres :" type="text" required placeholder=" Ingrese nombre completo" />
            <InputField label="Apellidos :" type="text" required placeholder=" Ingrese sus apellidos" />
            <InputField label="Documento :" type="number" required placeholder=" Ingrese solo numeros" />
            <InputField label="Correo Electronico :" type="email" required placeholder=" Ingrese email" />
            <InputField label="Contraseña :" type="password" required placeholder=" Ingrese su contraseña" />
            <InputField label="Confirmar Contraseña :" type="password" required placeholder=" Confirme su contraseña" />
            <p>
                <label htmlFor="terminos">Acepta terminos y condiciones</label>
                <input id="terminos" type="checkbox" required />
            </p> 
            <Button text="Registrar Usuario" />
        </div>
    </div>
    </>
  );
}

export default Registro;


      
     
    
        
