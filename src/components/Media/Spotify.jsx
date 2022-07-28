import React from "react";
import classes from "./Spotify.module.css";

function Spotify() {

    const spotify = <img className={classes.Spotify} src="https://spotify-github-profile.vercel.app/api/view.svg?uid=31qgched3f7lbwpepraj7euaiqvu&cover_image=true&theme=natemoo-re&bar_color=ac50be&bar_color_cover=false)" alt=""></img>

    return (  
        <div>
            {spotify}
        </div>
    );
}

export default Spotify;