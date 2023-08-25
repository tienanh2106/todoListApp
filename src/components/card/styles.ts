import {Colors} from '@/themes';
import colors from '@/themes/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    marginBottom: 10,
  },
  card: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 11,
    paddingRight: 23,
    paddingLeft: 7,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  content: {
    paddingHorizontal: 10,
    flex: 1,
  },
  numberOrder: {
    color: '#D1E5ED',
    fontFamily: 'Impact',
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 20,
  },
  title: {
    color: Colors.black,
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 20,
  },
  subTitle: {
    color: '#6D7679',
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 16,
  },
  time: {
    color: '#6D7679',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 16,
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 100,
    backgroundColor: '#000',
  },
  button: {
    flex: 1,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  rightButton_text: {
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.white,
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 16,
  },
  leftButton_text: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 16,
  },
});
