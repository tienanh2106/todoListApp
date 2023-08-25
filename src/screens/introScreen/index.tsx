import {View, ImageBackground} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Images} from '@/themes';

function IntroScreen() {
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={Images.introImage}
        resizeMode="cover"
        style={styles.image}
      />
    </View>
  );
}

export default IntroScreen;
