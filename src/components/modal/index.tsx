import {Close} from '@/assets/icons';
import {useAppDispatch, useAppSelector} from '@/hooks/redux';
import {setCloseModal} from '@/store/reducer/modalSlice';
import React from 'react';
import {Modal, Pressable, Text, View} from 'react-native';
import {stylesModals} from './styles';

const ModalCustom = () => {
  const {isOpen, button, title, content, buttonType} = useAppSelector(
    state => state.modal,
  );
  const dispatch = useAppDispatch();

  return (
    <View style={stylesModals.centeredView}>
      <Modal animationType="fade" transparent={true} visible={isOpen}>
        <View style={stylesModals.centeredView}>
          <View style={stylesModals.modalView}>
            <Pressable
              style={stylesModals.closeButton}
              onPress={() => dispatch(setCloseModal())}>
              <Close />
            </Pressable>
            <View>
              <Text style={stylesModals.modalTitle}>{title}</Text>
            </View>
            <View style={stylesModals.modalContent}>
              <Text>{content ? content : 'content'}</Text>
            </View>
            {button ? (
              <Text>{button}</Text>
            ) : (
              <Pressable
                style={[
                  stylesModals.button,
                  buttonType === 'success'
                    ? stylesModals.buttonSuccess
                    : stylesModals.buttonConfirm,
                ]}
                onPress={() => dispatch(setCloseModal())}>
                <Text style={stylesModals.textStyle}>Close</Text>
              </Pressable>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalCustom;
