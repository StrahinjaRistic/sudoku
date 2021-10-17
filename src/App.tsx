import Layout from 'components/layout/Layout';
import GlobalStyle from 'theme/globalStyles';

import RouterAll from 'allRoutes/Router';
import { Suspense } from 'react';

// lazy suspense

const Loader = () => <div>Loading....</div>

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <GlobalStyle />
      <Layout>
        <RouterAll />
      </Layout>
    </Suspense>
  );
};

export default App;
