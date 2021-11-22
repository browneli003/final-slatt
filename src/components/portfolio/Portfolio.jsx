import './portfolio.scss'

export default function Portfolio() {
    return (
        <div className="portfolio" id='portfolio'>
            <h2>Projects</h2>
            <div className="projects">
                <div className="imgContainer">
                <a href="https://github.com/Sdillon215/Weekender">
                    <img src='assets/weekender.png' alt=''/>
                    </a>
                    </div>
                    <a href='https://github.com/browneli003/Top-5' >
                <img src='assets/Top5.jpeg' alt=''/>
                </a>     
                <a href='https://github.com/Zunaty/dataverse'>
                    <img src='assets/dataverse.png' alt=''/>
                    </a>             
            </div>
        </div>
    )
}
