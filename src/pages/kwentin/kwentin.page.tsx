import { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./kwentin.css";
import { Image, Row } from "react-bootstrap";

/* Tutorial */
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
import useStyles from "./kwentin-styles";

/* Icons */
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";

/* Photos */
import kwenPortPic from "../../files/photos/kwentin/kwenPortPic.jpeg";
import kwenPortPicCropped from "../../files/photos/kwentin/kwenPortPicCropped.jpeg";
import LIGOlogo from "../../files/photos/kwentin/LIGOlogo.jpg";
import geekSquad from "../../files/photos/kwentin/geekSquad.png";
import verapro from "../../files/photos/kwentin/verapro.png";
import homeDepot from "../../files/photos/kwentin/homeDepot.png";
import southeastern from "../../files/photos/kwentin/southeastern.jpg";
import { ClassNames } from "@emotion/react";

export const KwentinsPage: FC = () => {
  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    /* Main Page */
    <div className="page">
      {/* Right Section */}
      <div className="right-col">
        <>
          <CssBaseline />
          <div className={classes.container}>
            <Container maxWidth="sm" style={{ marginTop: "25px" }}>
              <Typography
                variant="h4"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Work Experience
              </Typography>
              <hr />
              <Typography variant="h5" align="left">
                Hello everyone. This is a photo album and I am truing to make a
                very long sentence to display the functionality of this.
              </Typography>
              <Grid container spacing={2} justify="center"></Grid>
            </Container>
            <Container className={classes.cardGrid} maxWidth="sm">
              <Grid container spacing={4}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={LIGOlogo}
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5">
                          Heading
                        </Typography>
                        <Typography>
                          This is a media card. With some text in it.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>
                        <Button size="small" color="primary">
                          Edit
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
            <footer className={classes.footer}>
              <Typography variant="h6" align="center" gutterBottom>
                Footer
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                color="textSecondary"
              >
                Something here to give the footer a purpose.
              </Typography>
            </footer>
          </div>
        </>

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
          <p>
            <Image src={kwenPortPicCropped} className="kwen-img" />
            Hey, I am Kwentin Ransom. A computer science major with a scientific
            concentration.
          </p>
        </div>
        <div className="mt-3">
          <span title="GitHub">
            <a href="https://github.com/Kwentin-Ransom" target="_blank">
              <GitHubIcon color="primary" fontSize="large" />
            </a>
          </span>
          <a
            href="https://www.linkedin.com/in/kwentin-ransom-b07b931a9/"
            target="_blank"
          >
            <LinkedIn fontSize="large" />
          </a>
        </div>
        <div className="bottom-left">
          <p>test</p>
        </div>
      </div>
    </div> //main: page div
  ); //return
}; //KwentinsPage
