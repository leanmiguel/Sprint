import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 7.5px;
  background: #f6f6f6;
  border-radius: 6px;
  padding: 10px;
  label {
    font-size: 18px;
  }
`;

const upcoming = (task: string, isDone: boolean) => {
  return (
    <Container>
      <input type="checkbox" id="done" name="done" />
      <label>{task}</label>
    </Container>
  );
};

export default upcoming;
