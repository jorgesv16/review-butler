import React from "react";
import "./Sentence.css";

const Sentence = ({ score, text }) => {
    if (!text) {
        return <span> Review not yet analyzed</span>;
    }

    let sentiment;
    if (score > 0.5) {
        sentiment = "positive"
    } else if (score < -0.5) {
        sentiment = "negative"
    }

    return (
        <span className={sentiment}>
			{text}
		</span>
    );
};

export default Sentence;