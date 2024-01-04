import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate(); 
  
    return (
      <>
        <div>
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/about")}>About</button>
          <button onClick={() => navigate("/blog")}>Blog</button>
          <button onClick={() => navigate("/contact")}>Contact</button>
        </div>
      </>
    )
}

export default Navbar