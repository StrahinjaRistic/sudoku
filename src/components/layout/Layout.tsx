import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  min-width: 270px;
  margin: 0 auto;
  padding: 0 10px;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
