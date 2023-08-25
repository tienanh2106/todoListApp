import {Pressable, StyleSheet, View} from 'react-native';
import Search from '@/assets/icons/ic_outline-search.svg';
import Menu from '@/assets/icons/ic_menu.svg';
import React from 'react';

export default function RightHeader() {
  return (
    <View style={styles.screen}>
      <View style={styles.menuContainer}>
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

const styles = StyleSheet.create({
  screen: {},
  menuContainer: {
    flexDirection: 'row',
  },
});
