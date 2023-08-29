import React from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';
import {useAppDispatch} from '@/hooks/redux';
import {setLogin} from '@/store/reducer/loginSlice';
import {Apple, Facebook, Google, MemeTodo} from '@/assets/icons';

function LoginScreen() {
  const dispatch = useAppDispatch();
  const onPressIcon = () => {
    dispatch(setLogin({isLogin: true}));
  };
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.icon}>
        <MemeTodo width={80} height={64} />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>Nhấn nhanh mà vào</Text>
        <View style={styles.iconContainer}>
          <Pressable onPress={onPressIcon}>
            <Facebook />
          </Pressable>
          <Pressable onPress={onPressIcon}>
            <Google />
          </Pressable>
          <Pressable onPress={onPressIcon}>
            <Apple />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;
