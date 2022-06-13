import { Link } from "react-router-dom";

const InfoComponent = () => {
  return (
    <div className="InfoComponent">
      <p> Hi I'm Satyam </p>

      <Link to="/">
        <button> Go back to PAGE 1 </button>
      </Link>
    </div>
  );
};

export default InfoComponent;
