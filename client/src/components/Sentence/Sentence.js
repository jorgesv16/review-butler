import React from "react";
import "./Sentence.css";

const ReviewDetail = ({ score, text }) => {
  console.log('ReviewDetail', 'score:', score, 'text:', text)
    if (!text) {
        return <div>Loading...</div>;
    }

    let sentiment;
    if (score > 0.5) {
        sentiment = "positive"
    } else if (score < -0.5) {
        sentiment = "negative"
    }

    return (
        <div className={sentiment}>
			{text}
		</div>
    );
};

export default ReviewDetail;