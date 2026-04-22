
import LogoMix1 from "../assets/Mix.jpg";
import "../styles/home.css";



function Home() {
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

export default Home;