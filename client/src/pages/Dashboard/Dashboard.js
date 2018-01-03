import React, { Component } from "react";
import API from "../../utils/API";
import Sidebar from "../../components/Sidebar";
import StarIcon from "../../components/StarIcon";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  Label,
  BarChart,
  Bar
} from "recharts";
//import Graph from "../../components/Graph";

import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      selectedReview: null
    };
    this.loadReviews();
  }

  loadReviews() {
    API.getReviews()
      .then(res =>
        this.setState({
          reviews: res.data,
          selectedReview: res.data[0]
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    var data = [];
    var totalRating = 0;
    for (var i = 0; i < this.state.reviews.length; i++) {
      totalRating += this.state.reviews[i].rating;
      var mini = {};
      mini.name = i + 1;
      mini.value = this.state.reviews[i].rating;
      data.push(mini);
    }
    const totalReviews = this.state.reviews.length;
    var average = totalRating / totalReviews;
    var averageStars = Math.floor(totalRating / this.state.reviews.length);
    var ones = 0;
    var twos = 0;
    var threes = 0;
    var fours = 0;
    var fives = 0;
    for (var j = 0; j < data.length; j++) {
      if (data[j].value === 1) {
        ones++;
      }
      if (data[j].value === 2) {
        twos++;
      }
      if (data[j].value === 3) {
        threes++;
      }
      if (data[j].value === 4) {
        fours++;
      }
      if (data[j].value === 5) {
        fives++;
      }
    }
    var data2 = [];
    data2.push(
      { name: "1 Star", count: ones },
      { name: "2 Stars", count: twos },
      { name: "3 Stars", count: threes },
      { name: "4 Stars", count: fours },
      { name: "5 Stars", count: fives }
    );

    //render the average star rating with star icons
    let stars = [];
    for (var k = averageStars - 1; k >= 0; k--) {
      stars.push(<StarIcon key={k} size="large" />);
    }

    return (
      <div>
        <div className="flex-wrapper">
          <div className="columns">
            <Sidebar />
            <div className="full-height dashboard-detail">
            <h2>Dashboard</h2>
            <br/>
            <div className="star-rating">Average Rating: {stars} - {average.toFixed(2)} from {totalReviews} Reviews</div>
              <div className="flex-row">
                <ResponsiveContainer width="45%" aspect={4.0 / 3.0} className="graph-box">
                  <LineChart data={data}>
                    <XAxis dataKey="name">
                      <Label
                        value="Most Recent Reviews"
                        offset={10}
                        position="bottom"
                      />
                    </XAxis>
                    <YAxis
                      type="number"
                      domain={[0, "dataMax"]}
                      padding={{ top: 50 }}
                      scale="linear"
                    >
                      <Label
                        value=""
                        offset={5}
                        position="insideLeft"
                        width={20}
                      />
                    </YAxis>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <ReferenceLine
                      y={average}
                      stroke="green"
                      strokeDasharray="3 3"
                    />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="45%" aspect={4.0 / 3.0} className="graph-box">
                  <BarChart data={data2}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
