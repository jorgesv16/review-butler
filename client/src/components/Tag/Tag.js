import React from "react";
import "./Tag.css";
import Chip from 'material-ui/Chip';

const Tag = ({ score, salience, name }) => {

    const styles = {
  chip: {
    margin: 4,
  }
};

    if (!name) {
        return <div>Loading...</div>;
    }

    let bgColor;
    if (score > 0.5) {
        bgColor = "#4c8c4a"
    } else if (score < -0.5) {
        bgColor = "#f9683a"
    }
    return (

        <Chip backgroundColor={bgColor} style={styles.chip}>
			{name}
		</Chip>
    );
};

export default Tag;
