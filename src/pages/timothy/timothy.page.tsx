import {useState, FC} from "react";
import {Image, Modal, Row, Col} from "react-bootstrap";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import "./timothy.css"
import HeroImage from "../../files/photos/timothy/PortfolioImage_Transparent.png";
import TimResume from "../../files/resumes/Resume - Timothy McReynolds.pdf";
import GitHubLogo from "../../files/logos/icons8-github-64.png";
import LinkedInLogo from "../../files/logos/icons8-linkedin-circled-64.png";
import ResumeIcon from "../../files/logos/icons8-resume-64.png";
import BlenderIcon from "../../files/logos/icons8-blender-3d-64.png";
import CafeRender from "../../files/photos/timothy/CafeRender.png";
import ChristmasRender from "../../files/photos/timothy/ChristmasRender.png";
import IkeaRender1 from "../../files/photos/timothy/IkeaRender1.png";
import IkeaRender2 from "../../files/photos/timothy/IkeaRender2.png";
import HalloweenRender from "../../files/photos/timothy/HalloweenRender.png";

import MSM from "../../files/photos/timothy/MSM_Slide.jpg"
import HexapodHeroPic from "../../files/photos/timothy/HexapodHeroPic.jpg";

export const TimothysPage: FC = () => {
  const [showResume, setShowResume] = useState(false);
  const [showPictures, setShowPictures] = useState(false);
  const [showHexapod, setShowHexapod] = useState(false);
  const [showMSM, setShowMSM] = useState(false);

  const handleCloseResume = () => setShowResume(false);
  const handleShowResume = () => setShowResume(true);

  const handleClosePictures = () => setShowPictures(false);
  const handleShowPictures = () => setShowPictures(true);

  const handleCloseHexapod = () => setShowHexapod(false);
  const handleShowHexapod = () => setShowHexapod(true);

  const handleCloseMSM = () => setShowMSM(false);
  const handleShowMSM = () => setShowMSM(true);

  return (
    <div className="page">       
      {/* Top 2 columns */}       
      <Row className="top-section">         
        <Col className="left">          
          <h1>Timothy McReynolds</h1> 
          <p className="Major">Computer Science Major</p>
          <p className="Minor">I.T. Minor</p>
          <p className="Minor">Math Minor</p>
          <div className="socials">
            <a href="https://github.com/TimMcR" target="_blank">
              <Image src={GitHubLogo} alt="GitHub Link" />
            </a>
            <a href="https://www.linkedin.com/in/timothy-mcreynolds/" target="_blank">
              <Image className="ms-3" src={LinkedInLogo} alt="LinkedIn Link" />
            </a>
            <button className="image-button" onClick={handleShowResume}>
              <Image src={ResumeIcon} alt="Resume Modal" />
            </button>
            <button className="image-button" onClick={handleShowPictures}>
              <Image className="ms-4" src={BlenderIcon} alt="3D Art Modal" />
            </button>
          </div>
        </Col>       
        <Col className="right">      
          <img src={HeroImage} alt="Picture of Tim" className="hero-image"/>
        </Col>    
      </Row>     
      {/* Middle Row */}      
      <Row className="middle-section">  
        <h1>My Favorite Projects</h1>  
        <div className="left-project" >         
          <h2>Bluetooth Controlled Hexapod</h2>
          <img className="project-hero-image" src={HexapodHeroPic} alt="Picture of Hexapod Project" onClick={handleShowHexapod}/>
          
        </div> 
        <div className="right-project">
          <h2>Property Management Website</h2>
          <img src={MSM} className="project-hero-image" alt="Picture of Property Management Website" onClick={handleShowMSM}/>
        </div>
      </Row> 
      {/* Bottom Row */}
      <Row className="bottom-section">
        <h1>More About Me</h1>
        <p>I am a computer science major at Southeastern Louisiana University.
            I am also minoring in Information Technology and Math.
            I have written programs for LED light strips, animatronics, robotics, and web applications.
            My hobbies include programming and making 3D models for 3D printing and rendering. 
        </p> 
        <div className="icon-credit">
          Icons by{' '}
          <a href="https://icons8.com">Icons8</a>
        </div>
      </Row>

      {/* Resume Modal */}
      <Modal show={showResume} onHide={handleCloseResume}>
        <Document className="get-rid-of-extra-space-at-bottom" file={TimResume}>
          <Page pageNumber={1} />
        </Document>
      </Modal>

      {/* 3D Art Modal */}
      <Modal show={showPictures} onHide={handleClosePictures}>
        <img src={CafeRender} alt="#d render of donut and coffee cup" />
        <img src={ChristmasRender} alt="3D render of house during Christmas" />
        <img src={IkeaRender1} alt="3D render of Ikea chair" />
        <img src={IkeaRender2} alt="3D render of Ikea chairs and table" />
        <img src={HalloweenRender} alt="3D render of haunted house" />
      </Modal>

      {/* Hexapod Project Modal */}
      <Modal show={showHexapod} onHide={handleCloseHexapod}>
        <div className="description">
          <p>I repurposed a robotic hexapod for my High School as my senior project.
              I reprogrammed the leg movement and kinematics as well as the controls for a PS2 controller. 
              I would bring the project to many different community outreach events, including multiple times at the Smoothie King Center in New Orleans. 
              I even got to show it off to New Orleans Pelicans player Frank Jackson for a Smoothie King Center commercial. 
              Eventually I got tired of using the PS2 controller and reprogrammed the hexapod to be controlled through Bluetooth controls on an iPhone for easier use.
          </p>
          <a href="https://github.com/TimMcR/SeniorProjectHexapod" target="_blank">
            <Image src={GitHubLogo} alt="GitHub Link" />
          </a>
        </div>
      </Modal>

      {/* MSM Project Modal */}
      <Modal show={showMSM} onHide={handleCloseMSM}>
        <div className="description">
          <p>I was the team leader as well as a backend developer for my Software Engineering class project. 
              The project was a property management website made using .NET and REACT. 
              The website was able to let the company Matilda Stream Management Inc. manage their owned properties as well as give ratings to different attributes of the property based on how damaged they were. 
              Additionally, the website was able to track when the properties were added/edited and which user edited the properties.
          </p>
          <a href="https://github.com/TimMcR" target="_blank">
            <Image src={GitHubLogo} alt="GitHub Link" />
          </a>
        </div>
      </Modal>
    </div>

  );
};