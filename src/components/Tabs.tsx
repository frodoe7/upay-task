import React from 'react';
import {FlatList, StyleSheet, Text, Pressable} from 'react-native';
import {ICategory} from '../interfaces/category';
import colors from '../constants/colors';
import ResponsiveModule from '../helpers/responsiveModule';
const {responsiveHeight, responsiveWidth, scaleFont} = ResponsiveModule;

interface IItem {
  item: ICategory;
}

interface IProps {
  categories: ICategory[];
  active: string;
  setActive: (active: string) => void;
}

const Tabs = ({categories, active, setActive}: IProps) => {
  const renderItem = ({item}: IItem) => {
    return (
      <Pressable
        onPress={() => {
          setActive(item.name);
        }}
        style={StyleSheet.flatten([
          styles.itemContainer,
          {
            backgroundColor:
              item.name === active ? colors.transparent : colors.black,
          },
        ])}>
        <Text
          style={StyleSheet.flatten([
            styles.itemLabel,
            {
              color: item.name === active ? colors.black : colors.white,
            },
          ])}>
          {item.name}
        </Text>
      </Pressable>
    );
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      data={categories}
      renderItem={renderItem}
      key="name"
    />
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    marginTop: responsiveHeight(18),
    marginLeft: responsiveWidth(-16),
  },
  itemContainer: {
    borderColor: colors.black,
    borderWidth: 2,
    paddingHorizontal: responsiveWidth(8),
    paddingBottom: responsiveHeight(6),
    marginLeft: responsiveWidth(16),
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemLabel: {
    fontSize: scaleFont(18),
    fontWeight: '600',
    alignSelf: 'center',
  },
});
