import {StyleSheet} from 'react-native';
import ResponsiveModule from '../helpers/responsiveModule';
import colors from '../constants/colors';

const {responsiveHeight, responsiveWidth, scaleFont} = ResponsiveModule;

const styles = StyleSheet.create({
  container: {
    padding: responsiveHeight(16),
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
});

export default styles;
