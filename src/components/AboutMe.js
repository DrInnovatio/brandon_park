import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import JW from "../images/JW.png";
import { useSpring, animated as a } from "react-spring";
import "./aboutMe.css";

const useStyles = makeStyles(theme => ({

  body: {
	width: "100%",
	height: "92vh",
  margin: "auto",
  padding: "auto",

	background: "#ddd6f3 ",
  background: "-webkit-linear-gradient(to right, #faaca8, #ddd6f3)",
  background: "linear-gradient(to right, #faaca8, #ddd6f3)"

},  
  avatar: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      width: "100px",
      height: "100px",
      marginLeft: "47%"
    }
  },
  about:{
    textAlign: "center",
    marginTop: "0"
  }
}));


function ImageAvatar() {
  const classes = useStyles();

  return (
    <div className={classes.avatar}>
      <Avatar alt="JaewooBrandonPark" src={JW} />
    </div>
  );
}

function Cards() {
  const classes = useStyles();
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  return (
    <div className={classes.cards} onClick={() => set(state => !state)}>
      <a.div
        class="c front"
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      />
      <a.div
        class="c back"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`)
        }}
      />
    </div>
  );
}

function SecondMainApp() {
  const classes = useStyles();
	return (
		<div class={classes.body}>

				<Zoom top>
					<h1 className={classes.about} id="aboutMe">
						About Me
					</h1>
				</Zoom>
				<Flip>
					<ImageAvatar />
				</Flip>

			<Grid col={12}>
			    <Cards />
          <Cards />
          <Cards />
          <Cards />
			</Grid>

		</div>
	);
}

export default SecondMainApp;

