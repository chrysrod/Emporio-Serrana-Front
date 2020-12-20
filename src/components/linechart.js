import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
// import PropTypes from 'prop-types';

export default class Graphic extends Component {
  constructor(props) {
    super(props);
    this.data = (canvas) => {
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 0, 100);
      gradient.addColorStop(0, '#fff');
      gradient.addColorStop(1, 'rgba(255,255,255,0.2)');

      return {
        labels: ['test1', 'test2', 'sdf', 'asdgf', 'asdfa'],
        datasets: [
          {
            data: [13, 34, 15, 67, 78],
            fill: true,
            backgroundColor: gradient,
            borderColor: '#fff',
            borderWidth: 2,
          },
        ],
      };
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Line
        data={this.data}
        options={{
          legend: {
            display: false,
          },
          scales: {
            yAxes: [
              {
                gridLines: {
                  display: false,
                },
                ticks: {
                  beginAtZero: true,
                  fontColor: '#fff',
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  color: '#fff',
                  drawBorder: false,
                  zeroLineColor: '#fff',
                },
                ticks: {
                  fontColor: '#fff',
                },
              },
            ],
          },
        }}
      />
    );
  }
}

// Graphic.propTypes = {
//   label: PropTypes.string.isRequired,
// };
