import {useState, FC} from 'react';
import {Image, Modal, Row, Col} from 'react-bootstrap';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import "./timothy.css"
import HeroImage from "../../files/photos/timothy/Portfolio_Image.jpg";
import TimResume from "../../files/resumes/Resume - Timothy McReynolds.pdf";
import GitHubLogo from '../../files/logos/icons8-github-64.png';
import LinkedInLogo from '../../files/logos/icons8-linkedin-circled-64.png';
import ResumeIcon from "../../files/logos/icons8-resume-64.png";
import BlenderIcon from "../../files/logos/icons8-blender-3d-64.png";
import CafeRender from "../../files/photos/timothy/CafeRender.png";
import ChristmasRender from "../../files/photos/timothy/ChristmasRender.png";
import IkeaRender1 from "../../files/photos/timothy/IkeaRender1.png";
import IkeaRender2 from "../../files/photos/timothy/IkeaRender2.png";
import HalloweenRender from "../../files/photos/timothy/HalloweenRender.png";

import Backdrop from "../../files/photos/timothy/Transparent_Backdrop.png"

import HexapodHeroPic from "../../files/photos/timothy/HexapodHeroPic.jpg";
export const TimothysPage: FC = () => {
  const [showResume, setShowResume] = useState(false);
  const [showPictures, setShowPictures] = useState(false);

  const handleCloseResume = () => setShowResume(false);
  const handleShowResume = () => setShowResume(true);

  const handleClosePictures = () => setShowPictures(false);
  const handleShowPictures = () => setShowPictures(true);

  return (
    <div className="text-white">       
      {/* Top 2 columns */}       
      <Row className="top-section">         
        <Col className="left">          
          <h1>Timothy Ramsey McReynolds</h1>  
          <p>I am a computer science major at Southeastern Louisiana University.
            I have written programs for LED lights, animatronics, robotics, and web applications.
            My hobbies include programming and making 3D models for 3D printing and rendering. 
            </p> 
          <div className="socials">
            <a href="https://github.com/TimMcR" target="_blank">
              <Image src={GitHubLogo} alt="GitHub Link" />
            </a>
            <a href="https://www.linkedin.com/in/timothy-mcreynolds/" target="_blank">
              <Image className="ms-3" src={LinkedInLogo} alt="LinkedIn Link" />
            </a>
            <button className="image-button" onClick={handleShowResume}>
                <Image className="" src={ResumeIcon} alt="Resume Modal" />
            </button>
            <button className="image-button" onClick={handleShowPictures}>
                <Image className="ms-4" src={BlenderIcon} alt="3D Art Modal" />
            </button>
          </div>
        </Col>       
        <Col className="right">      
          <img src={Backdrop} className="backdrop"/>
          {/* Image by rawpixel.com */}
          <img src={HeroImage} alt="Picture of Tim" className="hero-image"/>
        </Col>    
      </Row>     
      {/* Bottom Row */}      
      <Row className="bottom-section">  
        <h1>My Projects</h1>  
        <div className="top-project">         
          <h2>Bluetooth Controlled Hexapod</h2>
          <img className="project-hero-image" src={HexapodHeroPic} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam cupiditate eaque corporis et dolorum quaerat doloremque porro ipsa tempora placeat!</p>
        </div> 
        <div className="middle-project">
          <h2>Property Management Website for Matilda Stream Management Inc.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatibus voluptatum maiores odio praesentium vitae, molestiae perferendis nulla possimus distinctio.</p>
        </div>
        <div className="bottom-project">
          <h2>Right Project</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eligendi excepturi optio accusantium nulla esse iure sequi cum dignissimos ducimus.</p>
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
      <img src={CafeRender} alt="" />
      <img src={ChristmasRender} alt="" />
      <img src={IkeaRender1} alt="" />
      <img src={IkeaRender2} alt="" />
      <img src={HalloweenRender} alt="" />
    </Modal>
    </div>

  );
};