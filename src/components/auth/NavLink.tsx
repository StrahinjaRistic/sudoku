import { ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLink = styled(Link)`
  &:hover,
  &:active {
    cursor: pointer;
    opacity: 0.8;
    text-decoration: none;
    font-weight: bold;
    color: black;
  }
`;

type Props = {
  to: string;
  children: ReactNode;
};

const navLink: React.FC<Props> = ({ to, children }) => {
  return (
    <>
      <NavLink to={to}>{children}</NavLink>
    </>
  );
};

export default navLink;
