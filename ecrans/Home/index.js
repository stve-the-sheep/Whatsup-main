/* eslint-disable prettier/prettier */

import { View, Text, ScrollView, Image, FlatList} from 'react-native'
import React from 'react';
import dashboardStyles from './style.js';
import { FakeActivity } from '../../fakeData/fakeActivity.js';

const Home = () => {
  return (
  <ScrollView>
    {/*Debut du header*/}
    <View style={dashboardStyles.header}>
      <Text style={dashboardStyles.userName}>Mar1 Steve</Text>
      <Image source={require('./../../assets/profil.jpg')} style={dashboardStyles.userImg} />
    </View> 

    {/*Fin du header*/}

    {/*Liste des activitées*/}

    <FlatList 
      data={FakeActivity}
      keyExtractor={item=>item.id} 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>{
        return(
          <View>
          <Text>{item.mainText}</Text>
        </View>
        );
      }}
    />
    {/*Fin Liste des activitées*/}
  </ScrollView>
  );
};

export default Home;