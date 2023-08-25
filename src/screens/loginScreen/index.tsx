import Logo from '@/assets/icons/ic_meme_todo.svg';
import FaceBook from '@/assets/icons/ic_facebook.svg';
import Google from '@/assets/icons/ic_google.svg';
import Apple from '@/assets/icons/ic_apple.svg';

import React from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';
import {useAppDispatch} from '@/hooks/redux';
import {setLogin} from '@/store/reducer/loginSlice';

function LoginScreen() {
  const dispatch = useAppDispatch();
  const onPressIcon = () => {
    dispatch(setLogin({isLogin: true}));
  };
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.icon}>
        <Logo width={80} height={64} />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>Nhấn nhanh mà vào</Text>
        <View style={styles.iconContainer}>
          <Pressable onPress={onPressIcon}>
            <FaceBook />
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
