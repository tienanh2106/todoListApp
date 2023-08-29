import {todoListSliceTypes} from '@/store/reducer/todoListSlice';
import dayjs from 'dayjs';
import React, {useCallback, useState} from 'react';
import {
  Dimensions,
  LayoutChangeEvent,
  Pressable,
  Text,
  View,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {styles} from './styles';
import {useAppDispatch} from '@/hooks/redux';
import {setCloseModal, setModal} from '@/store/reducer/modalSlice';
import {stylesModals} from '../modal/styles';

type props = {item: todoListSliceTypes; index: number};

const BUTTON_WIDTH = 90;
const BUTTON_COLOR = {
  right: '#388E3C',
  left: '#F19D60',
};

const border_left_radius = {
  borderTopLeftRadius: 10,
  borderBottomLeftRadius: 10,
};

const border_right_radius = {
  borderTopRightRadius: 10,
  borderBottomRightRadius: 10,
};

const Card = ({item, index}: props) => {
  const {width: widthDevice} = Dimensions.get('window');
  const [componentWidth, setComponentWidth] = useState<number>(0);
  const onLayout = (event: LayoutChangeEvent) => {
    const {width} = event.nativeEvent.layout;
    setComponentWidth(width);
  };

  const dispatch = useAppDispatch();

  const rightButtonClick = useCallback(() => {
    const onClick = () => {
      dispatch(setCloseModal());
    };
    const buttonModal = (
      <Pressable
        style={[stylesModals.button, stylesModals.buttonSuccess]}
        onPress={onClick}>
        <Text
          style={{
            ...stylesModals.textStyle,
            width: (widthDevice * 70) / 100,
          }}>
          Tao chắc choán
        </Text>
      </Pressable>
    );

    dispatch(
      setModal({
        content: 'Mài chắc xong rồi chứ?',
        title: 'Xác nhận',
        button: buttonModal,
      }),
    );
  }, [dispatch, widthDevice]);

  const leftButtonClick = useCallback(() => {
    const onClick = () => {
      dispatch(setCloseModal());
    };
    const buttonModal = (
      <Pressable
        style={[stylesModals.button, stylesModals.buttonConfirm]}
        onPress={onClick}>
        <Text
          style={{
            ...stylesModals.textStyle,
            width: (widthDevice * 70) / 100,
          }}>
          Ờ, để mai làm
        </Text>
      </Pressable>
    );
    dispatch(
      setModal({
        content: 'Để mai làm à? Chưa xong à?',
        title: 'Xác nhận',
        button: buttonModal,
      }),
    );
  }, [dispatch, widthDevice]);

  const RightButton = useCallback(() => {
    return (
      <RectButton style={styles.relative}>
        <View
          style={{
            ...styles.buttonMark,
            width: componentWidth - BUTTON_WIDTH,
            backgroundColor: BUTTON_COLOR.right,
            left: -(componentWidth - BUTTON_WIDTH),
            ...border_left_radius,
          }}
        />
        <View
          style={{
            ...styles.button,
            width: BUTTON_WIDTH,
            backgroundColor: BUTTON_COLOR.right,
            ...border_right_radius,
          }}>
          <Text style={styles.rightButton_text}>{`Xong\nbéng`}</Text>
        </View>
      </RectButton>
    );
  }, [componentWidth]);

  const LeftButton = useCallback(() => {
    return (
      <RectButton activeOpacity={0} style={styles.relative}>
        <View
          style={{
            ...styles.buttonMark,
            width: componentWidth - BUTTON_WIDTH,
            backgroundColor: BUTTON_COLOR.left,
            right: -(componentWidth - BUTTON_WIDTH),
            ...border_right_radius,
          }}
        />
        <View
          style={{
            ...styles.button,
            width: BUTTON_WIDTH,
            backgroundColor: BUTTON_COLOR.left,
            ...border_left_radius,
          }}>
          <Text style={styles.leftButton_text}>{`Mai\nlàm`}</Text>
        </View>
      </RectButton>
    );
  }, [componentWidth]);

  return (
    <View style={styles.screen}>
      <Swipeable
        renderRightActions={RightButton}
        renderLeftActions={LeftButton}
        onSwipeableOpen={direction =>
          direction === 'left' ? leftButtonClick() : rightButtonClick()
        }>
        <View style={styles.card} onLayout={onLayout}>
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
          <View
            style={{
              ...styles.dot,
              backgroundColor: item.status,
            }}
          />
        </View>
      </Swipeable>
    </View>
  );
};

export default Card;
