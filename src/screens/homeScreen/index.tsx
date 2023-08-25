import Calender from '@/assets/icons/ic_calendar.svg';
import Filter from '@/assets/icons/ic_filter.svg';
import Card from '@/components/card';
import DefaultLayout from '@/components/layout';
import Pin from '@/components/pin';
import {useAppSelector} from '@/hooks/redux';
import dayjs from 'dayjs';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';

function HomeScreen() {
  const {height} = Dimensions.get('window');
  const isIos = Platform.OS === 'ios';
  console.log(height);
  const dataList = useAppSelector(state => state.todoList);

  return (
    <DefaultLayout>
      <View style={{flex: 1}}>
        <Pin />
        <View style={styles.todoList}>
          <Text style={styles.todoList_title}>Việc trong ngày</Text>
          <View style={styles.todoList_subTitle}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Pressable>
                <Calender />
              </Pressable>
              <Text style={styles.todoList_subTitle_text}>
                {dayjs('2023/04/20').format('DD.MM.YYYY')}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.todoList_subTitle_text}>
                Tất cả dự án (3)
              </Text>
              <Pressable>
                <Filter />
              </Pressable>
            </View>
          </View>
        </View>
        <View
          style={{
            ...styles.list,
            height: isIos ? (height * 55) / 100 : (height * 50) / 100,
          }}>
          <FlatList
            alwaysBounceVertical={false}
            data={dataList}
            keyExtractor={item => item.id}
            renderItem={item => <Card item={item.item} index={item.index} />}
          />
        </View>
        <Text style={styles.notify}>Nhớ chăm chỉ đấy</Text>
      </View>
    </DefaultLayout>
  );
}

export default HomeScreen;
