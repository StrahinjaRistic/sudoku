import Layout from 'components/layout/Layout';
import GlobalStyle from 'theme/globalStyles';

import RouterAll from 'allRoutes/Router';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <RouterAll />
      </Layout>
    </>
  );
};

export default App;
