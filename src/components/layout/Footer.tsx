import styled from 'styled-components';

const Bottom = styled.footer`
  color: var(--color-grey);
  font-weight: 400;
  margin: 80px;
  text-align: center;
  font-size: 14px;
  a {
    color: var(--color-blue);
    text-decoration: none;
    padding-bottom: 0px;
    border-bottom: 2px dotted var(--color-blue);
  }
  a:visited {
    color: var(--color-blue);
  }
`;

const Footer = () => {
  return (
    <Bottom>
      <p>
        &#169; 2021 Strahinja - Sudoku-game. Source code on{' '}
        <a href="https://github.com/StrahinjaRistic/sudoku">Github</a>
      </p>
    </Bottom>
  );
};

export default Footer;
