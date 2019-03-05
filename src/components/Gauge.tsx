import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';

type StyledComponent<T> = {
  [key: string]: T;
};

type WrapperComponent = {
  children?: ReactNode;
  width: string;
  height: string;
  position: string;
  color?: string;
  translateX?: string;
  bottom?: string;
  left?: string;
  transform?: string;
};

type Props = {
  data: number;
};

class Gauge extends Component<Props> {
  render() {
    const velocity: number = this.props.data > 75 ? 75 : this.props.data;
    return (
      <GaugeDiv>
        <HalfCircle width="300px" height="150px" position="relative">
          <EighthCircle color="#C44C51" right="50%" />
          <EighthCircle
            color="#FC7F3C"
            right="50%"
            transformOrigin="100% 100%"
            rotate="45deg"
          />
          <EighthCircle color="#FDD131" left="50%" />
          <EighthCircle
            color="#78A419"
            left="50%"
            transformOrigin="0% 100%"
            rotate="45deg"
          />
          <HalfCircle
            width="240px"
            height="120px"
            position="absolute"
            bottom="0"
            left="50%"
            translateX="-50%"
            color="white"
          >
            <Needle velocity={velocity || 0} />
          </HalfCircle>
        </HalfCircle>
      </GaugeDiv>
    );
  }
}

export default Gauge;

const GaugeDiv = styled.div`
  @media (min-width: 700px) {
    padding-top: 150px;
  }
`;

const HalfCircle = styled.div`
  width: ${(props: WrapperComponent) => props.width};
  height: ${(props: WrapperComponent) => props.height};
  position: ${(props: WrapperComponent) => props.position};
  overflow: hidden;
  border-radius: 400px 400px 0 0;
  bottom: ${(props: WrapperComponent) => props.bottom};
  left: ${(props: WrapperComponent) => props.left};
  transform: translateX(${(props: WrapperComponent) => props.translateX});
  background-color: ${(props: WrapperComponent) => props.color};
`;

const EighthCircle = styled.div`
  position: absolute;
  width: 60%;
  height: 110%;
  bottom: 0;
  border: 2px solid white;
  background-color: ${(props: StyledComponent<string>) => props.color};
  right: ${(props: StyledComponent<string>) => props.right};
  left: ${(props: StyledComponent<string>) => props.left};
  transform-origin: ${(props: StyledComponent<string>) =>
    props.transformOrigin};
  transform: rotate(${(props: StyledComponent<string>) => props.rotate});
`;

const Needle = styled.div`
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMSBUaW55Ly9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLXRpbnkuZHRkIj48c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEycHgiIGhlaWdodD0iMTEzcHgiIHZpZXdCb3g9IjAgMCAxMiAxMTMiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiM2NzY3NjciIGQ9Ik0wLjA2NywxMDYuMzQ0Yy0wLjAxNiwwLjEzNS0wLjAyNCwwLjU0My0wLjAzMiwwLjY4MWwtMC4wMTIsMC40MTFoMC4wMDVjLTAuMDAxLDAtMC4wMTEtMC4xNDYtMC4wMTEtMC4wODFjMC4wMDYsMy4xOSwyLjY4OSw1LjYzNSw1Ljk5NSw1LjYyOWMzLjMwNC0wLjAwNyw1Ljk3OC0yLjY2Niw1Ljk3MS01Ljg1NmMtMC4wMDEtMC40MTUtMC4wNS0wLjg1My0wLjEzNi0xLjI0Mkw2LjAxMiwwLjEyNEwwLjA2NywxMDYuMzQ0eiIvPjwvc3ZnPg==);
  background-size: 100%;
  width: 240px;
  height: 115px;
  transform-origin: bottom;
  transform: rotate(
    ${(props: StyledComponent<number>) => (props.velocity * 180) / 75 - 90}deg
  );
  transition: 1s;
`;
