import React, { Component } from 'react';
import { Doughnut, Chart } from 'react-chartjs-2';
import PropTypes from 'prop-types';

export default class Graphic extends Component {
  constructor(props) {
    super(props);
    this.data = (canvas) => {
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 0, 100);
      gradient.addColorStop(0, '#f60085');
      gradient.addColorStop(1, '#7a51c9');

      return {
        labels: [props.label],
        datasets: [
          {
            data: [props.percent],
            backgroundColor: gradient,
            borderColor: gradient,
            borderWidth: 1,
          },
        ],
        text: `${props.percent}%`,
      };
    };
  }

  componentDidMount() {
    const originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
    Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
      draw() {
        // eslint-disable-next-line prefer-rest-params
        originalDoughnutDraw.apply(this, arguments);

        const { chart } = this;
        const { width } = chart.chart;
        const { height } = chart.chart;
        const { ctx } = chart.chart;

        // eslint-disable-next-line no-console
        // console.log(width, height);

        const fontSize = (height / 114).toFixed(2);
        ctx.font = `${fontSize}rem sans-serif`;
        ctx.textBaseline = 'middle';

        const { text } = chart.config.data;
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 1.9;

        ctx.fillText(text, textX, textY);
      },
    });
  }

  render() {
    const { percent } = this.props;
    return (
      <Doughnut
        width={100}
        height={100}
        data={this.data}
        options={{
          circumference: (2 * Math.PI * percent) / 100,
          legend: {
            display: false,
          },
        }}
      />
    );
  }
}

Graphic.propTypes = {
  label: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
};
