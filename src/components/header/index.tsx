import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {MemeTodo, Menu, Search} from '@/assets/icons';

export function RightHeader() {
  return (
    <View style={stylesHeaderRight.screen}>
      <View style={stylesHeaderRight.menuContainer}>
        <Pressable>
          <Search width={24} height={24} />
        </Pressable>
        <Pressable style={{marginLeft: 16}}>
          <Menu width={24} height={24} />
        </Pressable>
      </View>
    </View>
  );
}

export function LeftHeader() {
  return (
    <View style={stylesHeaderLeft.screen}>
      <MemeTodo width={31} height={25} />
    </View>
  );
}

const stylesHeaderLeft = StyleSheet.create({
  screen: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const stylesHeaderRight = StyleSheet.create({
  screen: {},
  menuContainer: {
    flexDirection: 'row',
  },
});
