import React from "react";
import {IconContext} from "react-icons";
import {MdOutlineNavigateBefore} from 'react-icons/md';
import {MdOutlineNavigateNext} from 'react-icons/md';
import "./MediaAd.css";


const MediaAd = () => {
    return(
    <div className="mediaAd">
    <i className="navigation-button1"><MdOutlineNavigateBefore/></i>
    <div className="text">
        <span><h2>Pokémon the Movie: Secrets of the Jungle</h2></span>
        <h5>Original title: Gekijouban Poketto monsutâ: koko<br/>
        Writers
        Satoshi TajiriAtsuhiro Tomioka, Tetsuo Yajima
        </h5>
    <p>In the Forest of Okoya, the Mythical Pokémon Zarude finds an infant boy in a cradle washed up on a riverbank. Unable to leave the child on his own, Zarude adopts him as a son, giving him the name "Koko". Koko decides to leave to explore the human world and become the bridge between humans and Pokémon, taking the photograph of his parents along with him. As he and Ash leave the Forest of Okoya, they see Zarude turn the healing springs into a geyser to send Koko off. Cheered up by this, Koko goes forth into his future, embracing his dual identity as a Zarude and a human. At the Great Tree, Zarude who raised Koko sees a Shiny Celebi, which observes Zarude now living in harmony with the other Pokémon.</p>
    </div>
    <div className="mediaImage">
    <img src="https://i.ytimg.com/vi/tKpHE3hmJz0/maxresdefault.jpg" alt=""/>
    </div><br/>
    <i className="navigation-button2"><MdOutlineNavigateNext/></i>
    </div>
    );
};

export default MediaAd;