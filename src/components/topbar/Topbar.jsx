
import "./topbar.scss";
import { AcUnit, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            My Portfolio
          </a>
          <div className="itemContainer">
            <AcUnit className="icon" />
            <span></span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>brownelijah143@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}