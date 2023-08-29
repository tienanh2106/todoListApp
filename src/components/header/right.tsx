import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {Menu, Search} from '@/assets/icons';

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
