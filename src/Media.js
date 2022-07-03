import React from 'react';
import "./Media.css";

const Media = ({img}) => {
return(
<div className="media">
<img className="media-image" src={img} alt=""/>
</div>
);
};

export default Media;