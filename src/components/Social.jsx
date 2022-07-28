import React from "react";
import classes from "./Social.module.css";

function Social() {

    const socialLinks = [
        {href: "tg://resolve?domain=MHE_XYEBO_A_BAM/", class: "mdi mdi-telegram"},
        {href: "https://github.com/hahah-eto-ya-maga/", class: "mdi mdi-github"},
        {href: "https://discord.gg/8JhYcpF3cH", class: "mdi mdi-discord"},
        {href: "https://steamcommunity.com/id/Omegapogchamp/", class: "mdi mdi-steam"},
        {href: "https://www.donationalerts.com/r/y4spermaglot", class: "mdi mdi-handshake"},
        {href: "https://open.spotify.com/user/31qgched3f7lbwpepraj7euaiqvu?si=69fc32a2b4b14a64", class: "mdi mdi-spotify"},
    ]


    return ( 
        <div>
        {socialLinks.map((link, index) =>
            <a 
            href={link.href} 
            className={classes.MyIcon} 
            target="_blank" 
            rel="noreferrer" 
            key={index}>
                <span 
                className={link.class}
                />
            </a>,
            )}
        </div>
    );
}

export default Social;