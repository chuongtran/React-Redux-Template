import React from 'react';
import styled from 'styled-components';


const StyledBody = styled.div`
   
`;

const Body = (props) => {
  const { children } = props;
  return (
    <StyledBody>
      {React.Children.toArray(children)}
    </StyledBody>
  );
};

Body.defaultProps = {

};

Body.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
};

export default Body;
