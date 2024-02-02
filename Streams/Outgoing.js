import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AntDesign } from '@expo/vector-icons';

function Outgoing() {
  const navigation = useNavigation();

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
    <FlatList
      data={[
        {name: "Charles", streamed: 500, elapsed: "1", time: "3"}, 
        {name: "Diana", streamed: 1000, elapsed: "2", time: "3"},
        {name: "Esther", streamed: 500, elapsed: "1", time: "3"}, 
        {name: "Francis", streamed: 1000, elapsed: "2", time: "3"},
        {name: "Grace", streamed: 500, elapsed: "1", time: "3"}, 
        {name: "Humphrey", streamed: 1000, elapsed: "2", time: "3"},
        {name: "Ivy", streamed: 500, elapsed: "1", time: "3"}
      ]}
      renderItem={({item}) => {
        return(
          <TouchableOpacity
            style={{
                paddingVertical: 18,
                flexDirection: 'row',
                flex: 3,
                alignItems: 'center'
              }}
            onPress={() => navigation.navigate('SingleStream', {type: 'outgoing', name: item.name, elapsed: item.elapsed, streamed: item.streamed})}>
            <View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{width: 48, height: 48, backgroundColor: '#E7E7E7', borderRadius: 32, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: '#989CB0', fontSize: 24, fontFamily: 'Rubik', fontWeight: '600'}}>{item.name.charAt(0)}</Text>
              </View>
            </View>
            <View style={{flex: 1.3, flexDirection: 'column'}}>
              <Text style={{color: isDarkMode ? Colors.white : "#686C80", fontSize: 18, fontFamily: 'Rubik', fontWeight: '400', lineHeight: 26}}>{item.name}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#15D828', fontSize: 14, fontFamily: 'Rubik', fontWeight: '300', lineHeight: 18}}>{item.elapsed}</Text>
                <Text style={{color: isDarkMode ? Colors.white : "#686C80", fontSize: 14, fontFamily: 'Rubik', fontWeight: '300', lineHeight: 18}}> / {item.time} hrs</Text>
              </View>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#15D828', fontSize: 15, fontFamily: 'Rubik', fontWeight: '500'}}>{item.streamed}</Text>
              <Text style={{color: isDarkMode ? Colors.white : "#686C80", fontSize: 15, fontFamily: 'Rubik', fontWeight: '500'}}> / 1500 cUSD</Text>
            </View>
          </TouchableOpacity>
        )
      }}
      ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ececec'}}></View>}
      ListFooterComponent={() => <View style={{ height: 75}}/>}
      style={backgroundStyle}/>
      <TouchableOpacity 
        style={{
          right: 32,
          bottom: 44,
          width: 54,
          height: 54,
          borderRadius: 9999,
          position: 'absolute',
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: '#15D828',
          elevation: 10
        }}
        onPress={() => navigation.navigate('CreateStream')}>
        <AntDesign name="plus" size={30} color="white" />
      </TouchableOpacity>
    </>
  );
};

export default Outgoing;