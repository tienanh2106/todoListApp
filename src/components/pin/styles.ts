import {Colors} from '@/themes';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  pin: {
    position: 'relative',
    borderRadius: 10,
    backgroundColor: '#FFFBDC',
    paddingLeft: 21,
    paddingRight: 21,
    paddingTop: 20,
    paddingBottom: 18,
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  pinIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  pinSubText: {flexDirection: 'row', justifyContent: 'space-between'},
  pin_text: {
    color: Colors.black,
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 20,
  },
  pinSubText_text: {
    color: Colors.additional.gray,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 20,
  },
});
