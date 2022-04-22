import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import useFeed from './UseFeed';
import {style} from './FeedStyle';


const Feed = ({navigation}) => {
  const data = useFeed();
  
  const Item = ({ title, image }) => (
    <TouchableOpacity onPress={()=>navigation.navigate('Redirect')} >
    <View style={style.card}>
      <Text style={style.title}>Title:{title}</Text>
      <View style={style.imageContainer}>
        <Image
          style={style.image}
          source={{uri:image}}
          alt="image"
        />
      </View>
    </View>
  </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} image={item.image} />
  );

  return (
    <View   style={style.container}>
       <FlatList
         showsVerticalScrollIndicator ={false}
         showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Feed;
