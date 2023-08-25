import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import store from './src/store';

import RootNavigation from './src/navigation';
import IntroScreen from '@/screens/introScreen';

function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <IntroScreen />;
  }

  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

export default App;
