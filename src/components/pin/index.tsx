import PushPin from '@/assets/icons/ic_pushpin.svg';
import {styles} from './styles';
import {Text, View} from 'react-native';
import dayjs from 'dayjs';
import React from 'react';

export default function Pin() {
  return (
    <View style={styles.pin}>
      <PushPin width={61} height={57} style={styles.pinIcon} />
      <Text style={styles.pin_text} numberOfLines={2}>
        Chiều này đi nhậu rồi bida chúng mày nhé. Vương nhớ đặt bàn hộ tao cái
        Chiều này đi nhậu rồi bida chúng mày nhé. Vương nhớ đặt bàn hộ tao cái
      </Text>
      <View style={styles.pinSubText}>
        <Text style={styles.pinSubText_text}>
          {dayjs().format('DD.MM.YYYY - HH:MM')}
        </Text>
        <Text style={styles.pinSubText_text}>(3)</Text>
      </View>
    </View>
  );
}
