import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {styles} from './styles';

export default function DefaultLayout({children}: {children: React.ReactNode}) {
  return (
    <View style={styles.screen}>
      <SafeAreaView>
        <ScrollView alwaysBounceVertical={false}>
          <View style={{...styles.content}}>{children}</View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
