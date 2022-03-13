import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, View, FlatList} from 'react-native';
import {fetchCategories, setActive} from '../store/slices/category';
import {fetchProducts, filterProducts} from '../store/slices/product';
import Icon from 'react-native-vector-icons/AntDesign';
import Product from '../components/Product';
import HeadTitle from '../components/HeadTitle';
import Tabs from '../components/Tabs';
import {IProduct} from '../interfaces/product';
import {RootState} from '../store/store';
import styles from './styles';
import colors from '../constants/colors';
import {navigate} from '../RootNavigation';

const App = () => {
  const dispatch = useDispatch();
  const {categories, active} = useSelector(
    (state: RootState) => state.category,
  );

  const {products, allProducts} = useSelector(
    (state: RootState) => state.product,
  );

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    dispatch(filterProducts(allProducts, active));
  }, [allProducts, active]);

  const renderProduct = ({item}: {item: IProduct}) => {
    return (
      <Product
        id={item.id}
        avatar={item.avatar}
        category={item.category}
        name={item.name}
        price={item.price}
        description={item.description}
      />
    );
  };

  return (
    <SafeAreaView style={styles.homeContainer}>
      <HeadTitle />
      <Icon
        onPress={() => {
          navigate('CreateProduct', {});
        }}
        style={styles.addIcon}
        name="pluscircleo"
        size={48}
        color={colors.black}
      />
      <View />
      <Tabs
        active={active}
        categories={categories}
        setActive={current => {
          dispatch(setActive(current));
        }}
      />
      <View style={styles.marginTop16} />
      <FlatList
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.listRow}
        contentContainerStyle={styles.listContent}
        data={products}
        numColumns={2}
        key="id"
        renderItem={renderProduct}
      />
    </SafeAreaView>
  );
};

export default App;
