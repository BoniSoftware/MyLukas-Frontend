import LogoMix2  from "../assets/Mix.jpg";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "../styles/registro.css";

function Registro() {
  return (
  <>
             <p></p>
              <p></p>
      <div className="containerRegistro">
                <p><img src={LogoMix2} alt="Logo" className="LogoMix2" /></p>
          <div className="card">
            <p><InputField label="Nombres " type="text" required placeholder=" Ingrese nombre completo" />
                <p><InputField label="Apellidos " type="text" required placeholder=" Ingrese sus apellidos" /></p>
                <InputField label="Documento " type="number" required placeholder=" Ingrese solo numeros" />
                <p><InputField label="Correo Electronico " type="email" required placeholder=" Ingrese email" /></p>
                <InputField label="Contraseña " type="password" required placeholder=" Ingrese su contraseña" />
                <InputField label="Confirmar Contraseña " type="password" required placeholder=" Confirme su contraseña" />
            </p>
              <p> <label htmlFor="terminos">Acepta terminos y condiciones</label>
                  <input id="terminos" type="checkbox" required />
              </p>
              <Button text="Registrar Usuario" />
              <p></p>
              <p></p>
          </div>
      </div>
      </>
  );
}

export default Registro;


      
     
    
        
