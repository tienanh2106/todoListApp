import React, {useState} from 'react';
import {Animated, Dimensions, PanResponder} from 'react-native';

const Draggable = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index?: number;
}) => {
  const pan = new Animated.ValueXY();

  const [display, setDisplay] = useState<'none' | 'flex'>('flex');
  const {height} = Dimensions.get('window');

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
    onPanResponderRelease: (e, gestureState) => {
      if (gestureState.moveY > height - 100) {
        Animated.timing(pan, {
          toValue: {x: 0, y: 800},
          duration: 300,
          useNativeDriver: true,
        }).start(() => setDisplay('none'));
      } else {
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
        }).start();
      }
    },
  });

  return (
    <Animated.View
      key={index || 0}
      {...panResponder.panHandlers}
      style={[
        {
          transform: [{translateX: pan.x}, {translateY: pan.y}],
          display: display,
        },
      ]}>
      {children}
    </Animated.View>
  );
};

export default Draggable;
