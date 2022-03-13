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
    paddingBottom: responsiveHeight(96),
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
});

export default styles;
