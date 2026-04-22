import LogoMix1 from "../assets/Mix.jpg";
import "../styles/login.css";

function Index() {
  return (
    <>
      <div className="logo-container">
        <p>
          <img src={LogoMix1} alt="Logo" className="LogoMix1" />
        </p>
      </div>
    </>
  );
}

export default Index;