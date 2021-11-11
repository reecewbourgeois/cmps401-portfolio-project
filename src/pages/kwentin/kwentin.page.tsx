/**
 * Notes:
 *
 * All JSX elements need to be in a return tag
 * Must be one parent div
 */

import { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./kwentin.css";
import { Image } from "react-bootstrap";

import kwenPortPic from "../../files/photos/kwentin/kwenPortPic.jpeg";

export const KwentinsPage: FC = () => {
  return (
    <div className="parent">
      <div className="row">
        <div className="col">
          <div className="left-side">
            <div className="top-left-side">
              {/*<Image className="kwen-img" src={kwenPortPic} />*/}
              <p>this is a test</p>
            </div>

            <div className="bottom-left-side">
              <p>this is a test</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="right-side">
            <p>this is a test</p>
          </div>
        </div>
      </div>
    </div> //parent div
  ); //return
}; //KwentinsPage
