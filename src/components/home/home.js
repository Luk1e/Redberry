import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import css
import "./home.css";
//to view css with comments please see home.scss

const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="home-main">
      <div className="stars"></div>
      <header>
        <h1>Welcome Rocketeer !</h1>
      </header>
      <button
        onClick={() => {
          navigate("/Form");
        }}
      >
        Start Questionnaire
      </button>
      {/* link to form page */}
      <Link to="/Applications" className="form-link">
        Submitted Applications
      </Link>
      <div className="rocketman"></div>
    </main>
  );
};

export default Home;
