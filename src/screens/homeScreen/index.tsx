import {Add, Calendar, Filter} from '@/assets/icons';
import Card from '@/components/card';
import DefaultLayout from '@/components/layout';
import Pin from '@/components/pin';
import {useAppSelector} from '@/hooks/redux';
import dayjs from 'dayjs';
import React from 'react';
import {Dimensions, FlatList, Pressable, Text, View} from 'react-native';
import {styles} from './styles';

function HomeScreen() {
  const {height} = Dimensions.get('window');

  const dataList = useAppSelector(state => state.todoList);

  return (
    <DefaultLayout>
      <View style={styles.screen}>
        <View>
          <Pin />
          <View style={styles.todoList}>
            <Text style={styles.todoList_title}>Việc trong ngày</Text>
            <View style={styles.todoList_subTitle}>
              <View style={styles.filterIcon}>
                <Pressable>
                  <Calendar />
                </Pressable>
                <Text style={styles.todoList_subTitle_text}>
                  {dayjs('2023/04/20').format('DD.MM.YYYY')}
                </Text>
              </View>
              <View style={styles.filterIcon}>
                <Text style={styles.todoList_subTitle_text}>
                  Tất cả dự án (3)
                </Text>
                <Pressable>
                  <Filter />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            ...styles.list,
            height: (height * 50) / 100,
          }}>
          <FlatList
            nestedScrollEnabled
            alwaysBounceVertical={false}
            data={dataList}
            keyExtractor={item => item.id}
            renderItem={item => <Card item={item.item} index={item.index} />}
          />
        </View>
        <View style={styles.addButton}>
          <View style={styles.addButtonMark}>
            <Add />
          </View>
          <Text style={styles.notify}>Nhớ chăm chỉ đấy</Text>
        </View>
      </View>
    </DefaultLayout>
  );
}

export default HomeScreen;
