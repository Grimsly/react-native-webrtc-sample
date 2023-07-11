import React from 'react';

import {MainContainer} from './src/MainContainer';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <MainContainer />
    </GestureHandlerRootView>
  );
}

export default App;
