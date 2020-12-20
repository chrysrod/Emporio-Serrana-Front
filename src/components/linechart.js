import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

export default class Graphic extends Component {
  constructor(props) {
    super(props);
    this.data = (canvas) => {
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 0, 100);
      gradient.addColorStop(0, '#fff');
      gradient.addColorStop(1, 'rgba(255,255,255,0.2)');

      const { data: content } = this.props;

      const dataLabels = content.map((e) =>
        new Date(e.timestamp * 1000).getDate()
      );
      // eslint-disable-next-line no-console
      console.log(dataLabels);
      const dataSalesAmount = content.map(
        (e) =>
          // new Intl.NumberFormat('pt', {
          //   style: 'currency',
          //   currency: 'BRL',
          // }).format(e.sales_amount)
          e.sales_amount
      );
      return {
        labels: dataLabels,
        datasets: [
          {
            data: [...dataSalesAmount],
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
          tooltips: {
            callbacks: {
              label(tooltipItem) {
                return `${new Intl.NumberFormat('pt', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(tooltipItem.yLabel)}`;
              },
            },
          },
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

Graphic.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      sales_amount: PropTypes.number,
      timestamp: PropTypes.number,
    })
  ).isRequired,
};
