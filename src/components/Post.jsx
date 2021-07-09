import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import ReactStars from "react-rating-stars-component";

export default function Post(props){

    return(
        <div className="post">
            <div id="date">{props.date}</div>
            <div className="album-info">
                <img src={props.coverUrl} alt="album" />
                <div className="album-desc">
                    <label className="album-title">{props.albumTitle}</label>
                    <div className="album-artist">
                        <label>{props.artist}</label>
                        <label><GoPrimitiveDot/></label>
                        <label>{props.year}</label>
                    </div>
                    <div className="album-rating">
                    <ReactStars
                        count={5}
                        value={props.rating}
                        edit={false}
                        isHalf={true}
                        a11y={false}
                        size={24}
                        activeColor="#858585"
                        color="#dddddd"
                    />
                    </div>
                    <div className="album-quote">
                        "{props.quote}"
                    </div>
                </div>
            </div>
            <div className={props.font === 'sans' || props.font === null ? "review" : "review-serif"}>
                {
                    props.review.map((e) => (<p>&emsp;{e}</p>))
                }
            </div>
        </div>
    );
}