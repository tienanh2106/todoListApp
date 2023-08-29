import {StyleSheet} from 'react-native';

export const stylesModals = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    position: 'relative',
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    paddingBottom: 22,
    paddingTop: 40,
    paddingHorizontal: 26,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 18,
  },
  buttonConfirm: {
    backgroundColor: '#E53935',
  },
  buttonSuccess: {
    backgroundColor: '#388E3C',
  },
  textStyle: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 15,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalContent: {
    marginVertical: 15,
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    color: '#000',
    textAlign: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Comic Sans MS',
    lineHeight: 28,
    color: '#000',
    textAlign: 'center',
  },

  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
});
