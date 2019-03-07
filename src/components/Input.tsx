import React, { Component } from 'react';
import styled from 'styled-components';

type Props = {
  handleInput: (userInput: string) => void;
  resetInput: boolean;
  text: string;
  newInput: () => void;
};

type State = {
  value: string;
};

class Input extends Component<Props, State> {
  state = {
    value: '',
  };

  componentDidUpdate(prevProps: Props) {
    if (!prevProps.resetInput && this.props.resetInput) {
      this.setState({
        value: '',
      });
      this.props.newInput();
    }
  }

  onInputUser = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.props.handleInput(e.target.value);
    this.setState({
      value: e.currentTarget.value,
    });
  };

  render() {
    return (
      <InputDiv>
        <Text>{this.props.text}</Text>
        <InputText onChange={this.onInputUser} value={this.state.value} />
      </InputDiv>
    );
  }
}

export default Input;

const InputDiv = styled.div`
  margin: 30px 10px;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

const Text = styled.div`
  flex: 1;
  align-self: center;

  @media (min-width: 700px) {
    max-width: 45%;
  }
`;

const InputText = styled.textarea`
  flex: 1;
  line-height: 1.5em;
  margin: 10px auto;
  padding: 10px;
  width: 100%;
  height: 200px;

  @media (min-width: 700px) {
    max-width: 45%;
  }
`;
