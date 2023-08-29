import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {styles} from './styles';
import ModalCustom from '../modal';

const DefaultLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <View style={styles.screen}>
      <SafeAreaView>
        <ScrollView nestedScrollEnabled alwaysBounceVertical={false}>
          <View style={{...styles.content}}>{children}</View>
        </ScrollView>
      </SafeAreaView>
      <ModalCustom />
    </View>
  );
};

export default DefaultLayout;
