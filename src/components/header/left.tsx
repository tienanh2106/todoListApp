import Logo from '@/assets/icons/ic_meme_todo.svg';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function LeftHeader() {
  return (
    <View style={styles.screen}>
      <Logo width={31} height={25} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
