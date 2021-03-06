import React from 'react';
import { FlatList, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import { getCategoryName } from '../../data/MockDataAPI';

export default function LoginScreen({ navigation }) {
  LoginScreen.navigationOptions = {
    title: 'Inicio',
    headerLeft: (
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    )
  }
  function onPressRecipe(item) {
    navigation.navigate('Recipe', { item });
  }
  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipes}
        renderItem={({ item }) => <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => onPressRecipe(item)}>
          <View style={styles.container}>
            <Image style={styles.photo} source={{ uri: item.photo_url }} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
          </View>
        </TouchableHighlight>}
        keyExtractor={item => `${item.recipeId}`}
      />
    </View>
  );
}
