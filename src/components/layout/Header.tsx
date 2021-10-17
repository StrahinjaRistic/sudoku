import { useContext } from 'react';
import { Link } from 'react-router-dom';
import GameContext from 'context/game-context';
import styled from 'styled-components';

const Head = styled.header`
  position: relative;
  border-bottom: 2px solid var(--color-grey);
  padding: 0 20px;
  h1 {
    float: left;
    font-size: 24px;
    font-weight: 600;
    line-height: 2.75;
    color: var(--color-grey);
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
  }
  :after {
    content: '';
    display: block;
    clear: both;
  }
`;
const NavLink = styled(Link)`
  float: right;
  font-size: 18px;
  font-weight: 400;
  line-height: 2;
  color: var(--color-grey);
  padding-top: 30px;
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
`;

const Header = () => {
  const { isAuth } = useContext(GameContext);
  return (
    <Head>
      <h1>SUDOKU</h1>
      {isAuth && <NavLink to="/logout">LOGOUT</NavLink>}
    </Head>
  );
};

export default Header;
