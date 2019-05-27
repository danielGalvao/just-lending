import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import * as variables from 'utils/variable-style';

export const Button = ({ children, className, ...props }) => (
  <ButtonField className={className} {...props}>
    {children}
  </ButtonField>
);

export const ButtonPrimary = ({ children, ...props }) => (
  <ButtonFieldPrimary {...props}>
    {children}
  </ButtonFieldPrimary>
);

export const ButtonSecondary = ({ children, ...props }) => (
  <ButtonFieldSecondary {...props}>
    {children}
  </ButtonFieldSecondary>
);

export const ButtonCancel = ({ children, ...props }) => (
  <ButtonFieldCancel {...props}>
    {children}
  </ButtonFieldCancel>
);

const ButtonField = styled.button`
  align-items: center;
  background-color: transparent;
  display: flex;
  margin-top: ${props => (props.topDifferent ? '23px' : '0px')}
  justify-content: center;
  width: 100%;
`;
const ButtonFieldPrimary = styled(Button)`
  background-color: ${variables.$green};
  border-radius: 4px;
  color: ${variables.$white};
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  height: 44px;
  padding-left: 16px;
  padding-right: 16px;
  width: auto;
  transition all ${variables.$speed} ease-in-out;
  &:hover {
    box-shadow: ${variables.$shadowButton};
    background-color: ${variables.$greenDark};
  }
`;
const ButtonFieldSecondary = styled(ButtonFieldPrimary)`
  background-color: transparent;
  border: 1px solid ${variables.$orange};
  color: ${variables.$orange};
  margin-right: 16px;
  transition all ${variables.$speed} ease-in-out;
  &:hover {
    box-shadow: ${variables.$shadowButton};
    background-color: ${variables.$orange};
    color: ${variables.$white};
  }
`;
const ButtonFieldCancel = styled(ButtonFieldSecondary)`
  border: 1px solid ${variables.$red};
  color: ${variables.$red};
  &:hover {
    background-color: ${variables.$red};
    color: ${variables.$white};
  }
`;

Button.propTypes = {
  children: propTypes.node,
  className: propTypes.string
};
ButtonPrimary.propTypes = {
  children: propTypes.node
};
ButtonSecondary.propTypes = {
  children: propTypes.node
};
ButtonCancel.propTypes = {
  children: propTypes.node
};
