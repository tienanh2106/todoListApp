import {todoListSliceTypes} from '@/store/reducer/todoListSlice';
import dayjs from 'dayjs';
import React from 'react';
import {Text, View} from 'react-native';
import Swipeable from 'react-native-swipeable';
import {styles} from './styles';

export default function Card({
  item,
  index,
}: {
  item: todoListSliceTypes;
  index: number;
}) {
  const onSwipeLeft = () => {
    console.log('Swiped left');
  };

  const onSwipeRight = () => {
    console.log('Swiped right');
  };

  function RightButton() {
    return (
      <View
        key={'done'}
        style={{
          width: '100%',
          flex: 1,
          alignItems: 'flex-start',
        }}>
        <View
          style={{
            ...styles.button,
            backgroundColor: '#388E3C',
          }}>
          <Text style={styles.rightButton_text}>{`Xong\nbéng`}</Text>
        </View>
      </View>
    );
  }

  function LeftButton() {
    return (
      <View
        key={'delete'}
        style={{
          width: '100%',
          flex: 1,
          alignItems: 'flex-end',
        }}>
        <View
          style={{
            ...styles.button,
            backgroundColor: '#F19D60',
          }}>
          <Text style={styles.leftButton_text}>{`Mai\nlàm`}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Swipeable
        rightActionActivationDistance={200}
        leftActionActivationDistance={200}
        onLeftActionRelease={onSwipeLeft}
        onRightActionRelease={onSwipeRight}
        rightButtons={[RightButton()]}
        leftButtons={[LeftButton()]}>
        <View style={styles.card}>
          <Text style={styles.numberOrder}>
            {index + 1 < 10 && '0'}
            {index + 1}
          </Text>
          <View style={styles.content}>
            <Text style={styles.title} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.subTitle}>
              Dự tính:{' '}
              <Text style={styles.time}>
                {dayjs(item.timeStart).format('HH.MM')}-
                {dayjs(item.timeEnd).format('HH.MM')}
              </Text>
            </Text>
          </View>
          <View style={styles.dot} />
        </View>
      </Swipeable>
    </View>
  );
}
