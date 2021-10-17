import { ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavLink = styled(Link)`
  &:hover,
  &:active {
    cursor: pointer;
    opacity: 0.8;
    text-decoration: none;
    font-weight: bold;
    color: black;
  }
`;

interface INavLink {
  to: string;
  children: ReactNode;
};

const NavLink: React.FC<INavLink> = (props) => {
  return <StyledNavLink {...props} />;
};

export default NavLink;
