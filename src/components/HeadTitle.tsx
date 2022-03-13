import React from 'react';
import {StyleSheet, Text} from 'react-native';
import colors from '../constants/colors';
import ResponsiveModule from '../helpers/responsiveModule';
const {responsiveHeight, responsiveWidth, scaleFont} = ResponsiveModule;

const HeadTitle = () => {
  return <Text style={styles.headTitle}>Upayments Store</Text>;
};

export default HeadTitle;

const styles = StyleSheet.create({
  headTitle: {
    color: colors.black,
    fontSize: scaleFont(28),
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
