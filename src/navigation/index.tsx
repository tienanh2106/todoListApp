import React from 'react';

import PrivateRouter from './routes/privateRouter';
import PublicRouter from './routes/publicRouter';
import {NavigationContainer} from '@react-navigation/native';
import {useAppSelector} from '../hooks/redux';

function App() {
  const {isLogin} = useAppSelector(state => state.login);

  return (
    <NavigationContainer>
      {isLogin ? <PrivateRouter /> : <PublicRouter />}
    </NavigationContainer>
  );
}

export default App;
