import React from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import colors from '../constants/colors';
import {navigate} from '../RootNavigation';
import {IProduct} from '../interfaces/product';
import ResponsiveModule from '../helpers/responsiveModule';
const {responsiveHeight, responsiveWidth, scaleFont} = ResponsiveModule;

const Product = ({name, price, description, avatar, category}: IProduct) => {
  const trunc = (val: string, limit: number) => {
    return val.length > limit ? val.substring(0, limit) + '..' : val;
  };

  return (
    <Pressable
      onPress={() => {
        navigate('Product', {name, price, avatar, description, category});
      }}
      style={styles.container}>
      <Image style={styles.image} source={{uri: avatar}} />
      <View style={styles.infoHead}>
        <Text style={styles.infoLabel}>{trunc(name, 16)}</Text>
        <Text style={styles.infoLabel}>${price}</Text>
      </View>
    </Pressable>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 12,
    width: '45%',
    marginLeft: responsiveWidth(12),
  },
  image: {
    width: responsiveWidth(120),
    height: responsiveHeight(200),
    resizeMode: 'contain',
    alignSelf: 'center',
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
    fontSize: scaleFont(16),
    fontWeight: '600',
  },
});
