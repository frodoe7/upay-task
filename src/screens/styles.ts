import {StyleSheet} from 'react-native';
import ResponsiveModule from '../helpers/responsiveModule';
import colors from '../constants/colors';

const {responsiveHeight, responsiveWidth, scaleFont} = ResponsiveModule;

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
  },
  homeContainer: {
    paddingHorizontal: responsiveWidth(16),
  },
  createProductContainer: {
    paddingHorizontal: responsiveWidth(16),
  },
  headTitle: {
    color: colors.black,
    fontSize: scaleFont(28),
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  marginTop16: {
    marginTop: responsiveHeight(16),
  },
  listRow: {
    justifyContent: 'space-between',
    marginVertical: responsiveHeight(8),
  },
  listContent: {
    paddingBottom: responsiveHeight(108),
  },
  image: {
    width: responsiveWidth(240),
    height: responsiveHeight(300),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: responsiveHeight(64),
  },
  infoHead: {
    width: '100%',
    backgroundColor: colors.black,
    paddingLeft: responsiveWidth(16),
    paddingVertical: responsiveHeight(8),
    borderRadius: 12,
  },
  infoLabel: {
    color: colors.white,
    fontSize: scaleFont(24),
    fontWeight: '600',
  },
  infoDesc: {
    color: colors.white,
    fontSize: scaleFont(16),
    marginTop: responsiveHeight(8),
  },
  infoTitle: {
    color: colors.white,
    fontSize: scaleFont(24),
    fontWeight: 'bold',
  },
  infoModal: {
    width: '100%',
    minHeight: responsiveHeight(360),
    overflow: 'scroll',
    paddingBottom: responsiveHeight(8),
    backgroundColor: colors.black,
    paddingVertical: responsiveHeight(8),
    paddingHorizontal: responsiveWidth(16),
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    position: 'absolute',
    bottom: 0,
  },
  paddedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: responsiveHeight(12),
  },
  addIcon: {
    position: 'absolute',
    top: responsiveHeight(750),
    right: responsiveWidth(19),
    zIndex: 2,
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 12,
    paddingHorizontal: responsiveWidth(12),
    fontSize: scaleFont(14),
  },
  textArea: {
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 12,
    paddingHorizontal: responsiveWidth(12),
    fontSize: scaleFont(14),
    textAlignVertical: 'top',
    justifyContent: 'flex-start',
  },
  button: {
    backgroundColor: colors.black,
    paddingHorizontal: responsiveWidth(12),
    paddingVertical: responsiveHeight(8),
    marginLeft: responsiveWidth(16),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: responsiveHeight(750),
  },
  buttonText: {
    color: colors.white,
  },
});

export default styles;
