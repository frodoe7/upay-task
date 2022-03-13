import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addProduct as _addProduct} from '../store/slices/product';
import {SafeAreaView, View, Pressable, Text, TextInput} from 'react-native';
import {RootState} from '../store/store';
import styles from './styles';
import Tabs from '../components/Tabs';

const App = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const {categories} = useSelector((state: RootState) => state.category);
  const _categories = [...categories].splice(1);

  const validate = () => {
    if (name.length === 0) return false;
    if (price === 0) return false;
    if (description.length === 0) return false;
    if (image.length === 0) return false;
    if (category.length === 0) return false;

    return true;
  };

  const addProduct = () => {
    let validated = validate();
    if (!validated) {
      alert('All fields are required');
      return;
    }

    dispatch(
      _addProduct({
        name,
        category,
        avatar: image,
        price,
        description,
      }),
    );
  };

  return (
    <SafeAreaView style={styles.createProductContainer}>
      <View style={styles.marginTop16} />
      <TextInput
        style={styles.textInput}
        placeholder="Product title"
        value={name}
        onChangeText={setName}
      />
      <View style={styles.marginTop16} />
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        placeholder="Price"
        value={price.toString()}
        onChangeText={(_price: string) => {
          if (_price.length === 0) setPrice(0);
          else setPrice(parseFloat(_price));
        }}
      />
      <View style={styles.marginTop16} />
      <TextInput
        style={styles.textArea}
        placeholder="Description"
        value={description}
        multiline
        numberOfLines={6}
        onChangeText={setDescription}
      />
      <View style={styles.marginTop16} />
      <TextInput
        style={styles.textInput}
        placeholder="Image Link"
        value={image}
        onChangeText={setImage}
      />
      <View style={styles.marginTop16} />
      <Tabs
        setActive={setCategory}
        categories={_categories}
        active={category}
      />

      <Pressable onPress={addProduct} style={styles.button}>
        <Text style={styles.buttonText}>Add Product</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;
