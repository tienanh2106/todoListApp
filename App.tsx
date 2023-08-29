import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import store from './src/store';

import RootNavigation from './src/navigation';
import IntroScreen from '@/screens/introScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

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
      <GestureHandlerRootView style={{flex: 1}}>
        <RootNavigation />
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;
