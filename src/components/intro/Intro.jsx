import './intro.scss'


export default function Intro() {
    return (
        <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/elia.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Elia Brown</h1>
          </div>

        </div>
      </div>
    );
  }