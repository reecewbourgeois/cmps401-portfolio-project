/**
 * Notes:
 *
 * All JSX elements need to be in a return tag
 * Must be one parent div
 */

import { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./kwentin.css";
import { Image, Row } from "react-bootstrap";

import kwenPortPic from "../../files/photos/kwentin/kwenPortPic.jpeg";
import LIGOlogo from "../../files/photos/kwentin/LIGOlogo.jpg";
import geekSquad from "../../files/photos/kwentin/geekSquad.png";
import verapro from "../../files/photos/kwentin/verapro.png";
import homeDepot from "../../files/photos/kwentin/homeDepot.png";
import southeastern from "../../files/photos/kwentin/southeastern.jpg";

export const KwentinsPage: FC = () => {
  return (
    /* Main Page */
    <div className="page">
      {/* Right Section */}
      <div className="right-col">
        <br />
        <p className="font">Work experience</p>
        <hr className="kwen-hr" />
        <Image src={LIGOlogo} className="scroll-img" />
        <br />
        <Image src={geekSquad} className="scroll-img" />
        <br />
        <Image src={verapro} className="scroll-img" />
        <br />
        <Image src={homeDepot} className="scroll-img" />
        <br />
        <Image src={southeastern} className="scroll-img" />
      </div>

      {/* Left Section */}
      <div className="left-col">
        <div className="top-left">
          <p>test</p>
          <Image src={kwenPortPic} className="kwen-img" />
        </div>
        <div className="bottom-left">
          <p>test</p>
        </div>
      </div>
    </div> //main: page div
  ); //return
}; //KwentinsPage
