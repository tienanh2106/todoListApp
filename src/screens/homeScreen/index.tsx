import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import DefaultLayout from '@/components/layout';
import PushPin from '@/assets/icons/ic_pushpin.svg';
import dayjs from 'dayjs';
import Calender from '@/assets/icons/ic_calendar.svg';
import Filter from '@/assets/icons/ic_filter.svg';

function HomeScreen() {
  return (
    <DefaultLayout>
      <View style={{flex: 1, alignContent: 'space-between'}}>
        <View>
          <View style={styles.pin}>
            <PushPin width={61} height={57} style={styles.pinIcon} />
            <Text style={styles.pin_text} numberOfLines={2}>
              Chiều này đi nhậu rồi bida chúng mày nhé. Vương nhớ đặt bàn hộ tao
              cái Chiều này đi nhậu rồi bida chúng mày nhé. Vương nhớ đặt bàn hộ
              tao cái
            </Text>
            <View style={styles.pinSubText}>
              <Text style={styles.pinSubText_text}>
                {dayjs().format('DD.MM.YYYY - HH:MM')}
              </Text>
              <Text style={styles.pinSubText_text}>(3)</Text>
            </View>
          </View>
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
        </View>
        <Text style={styles.notify}>Nhớ chăm chỉ đấy</Text>
      </View>
    </DefaultLayout>
  );
}

export default HomeScreen;
