import React, { Component } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';

type State = {
  data: number[];
};

type Props = {
  data: number[];
};

class Chart extends Component<Props, State> {
  state = {
    data: [],
  };

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (prevState.data.length !== nextProps.data.length) {
      return {
        data: nextProps.data,
      };
    }

    return null;
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.data.length !== this.state.data.length) {
      this.drawChart();
    }
  }

  drawChart = () => {
    const w = 250;
    const h = 300;

    d3.select('svg').remove();

    const svg = d3
      .select('.Chart')
      .append('svg')
      .attr('width', w)
      .attr('height', h);

    svg
      .selectAll('rect')
      .data(this.state.data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * (window.innerWidth / this.props.data.length))
      .attr('y', (d, i) => h - 2 * d)
      .attr('width', window.innerWidth / this.props.data.length)
      .attr('height', (d, i) => d * 2)
      .attr('fill', 'green');
  };

  render() {
    return <ChartDiv className="Chart" />;
  }
}

export default Chart;

const ChartDiv = styled.div`
  min-width: 250px;
  margin: 0 20px;
`;
