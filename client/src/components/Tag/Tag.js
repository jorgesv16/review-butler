import React from "react";
import "./Tag.css";

const Tag = ({ score, salience, name }) => {

    if (!name) {
        return <div>Loading...</div>;
    }

    let sentiment;
    if (score > 0.5) {
        sentiment = "positive"
    } else if (score < -0.5) {
        sentiment = "negative"
    }
    return (

        <button className={sentiment}>
			{name}
            {console.log("found a tag")}
		</button>
    );
};

export default Tag;