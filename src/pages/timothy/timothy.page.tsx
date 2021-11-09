import {useState, FC } from 'react';
import {Image, Modal, Row, Col} from 'react-bootstrap';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import "./timothy.css"
import heroImage from "../../files/photos/timothy/Portfolio_Image.jpg";
import TimResume from "../../files/resumes/Resume - Timothy McReynolds.pdf";
import ResumeIcon from '../../files/logos/icons8-resume-40.png';
export const TimothysPage: FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="text-white">       
      {/* Top 2 columns */}       
      <Row className="top-section">         
        <Col className="left">          
          <h1>Timothy Ramsey McReynolds</h1>   
          <button className="image-button" onClick={handleShow}>
              <Image src={ResumeIcon} alt="Resume Modal" />
          </button>
        </Col>       
        <Col className="right">      
          <img src={heroImage} alt="Picture of Tim" width="55%"/>
        </Col>    
      </Row>     
      {/* Bottom Row */}      
      <Row className="bottom-section">    
        <Col>         
          <p>This is the Timothys Page.</p>
        </Col> 
      </Row> 

      {/* Resume Modal */}
    <Modal show={show} onHide={handleClose}>
      <Document className="get-rid-of-extra-space-at-bottom" file={TimResume}>
        <Page pageNumber={1} />
      </Document>
    </Modal>
    </div>

  );
};
