import React,{useState} from 'react';
import {View,Image,Text,TextInput, SafeAreaView} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import './styles';
import {Header} from './components/header'
const DATA=[
  {
    id:"1" ,
    title:"item1",
    picture:"https://randomuser.me/api/portraits/men/42.jpg", 
    price:"50",
  },
  {
   id:'2' ,
   title:'item1',
   picture:'https://randomuser.me/api/portraits/men/42.jpg', 
   price:'50'
  },
  {
   id: '3',
   title:'item1',
   picture:'https://randomuser.me/api/portraits/men/42.jpg', 
   price:'50'
  },
  {
   id: '4',
   title:'item1',
   picture:'https://randomuser.me/api/portraits/men/42.jpg', 
   price:'50'
  },
  {
    id: '5',
    title:'item1',
    picture:'https://randomuser.me/api/portraits/men/42.jpg', 
    price:'50'
  },
  {
   id: '6',
   title:'item1',
   picture:'https://randomuser.me/api/portraits/men/42.jpg', 
   price:'50'
  },

 
];
const Item = ({ title, picture, price }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{ title}</Text>
    <Text style={styles.title}>{price}</Text>
    <Image source={{uri:picture,height:30,width:30}}/>
  </View>
);



const App = () =>{
  const [text,onChangeText]=useState('');

 const onPressPrivacy= () =>{
    console.log('clicked privacy');
    
  };
  const onPressContacts= () =>{
    console.log('clicked on contacts');
  };
  const onPressMore= () =>{
    console.log('clicked to see all');
  };
  const renderItem = ({ item }) => (
    <Item title={item.title} picture={item.picture} price={item.price}/>
  );
  

    return(
      <View style={styles.container}>
        <header/>
        
         <View style={styles.header}>
            <Image source={require('./assets/favicon.png')} style={styles.image}/>
            <Text style={styles.privacy} onPress={onPressPrivacy}>Privacy Policy</Text>
            <Text style={styles.contact} onPress={onPressContacts}>Contacts</Text>
          </View>
      

       <View style={styles.search}>
         <TextInput
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1}}
              placeholder='Find something'
              valu={text}
              onChangeText={onChangeText}
              />
        </View>
        <View style={styles.itemlist}>
          <Text style={styles.heading}>Trending Products</Text>
          <Text style={styles.seeall} onPress={onPressMore}>see all</Text>
          <SafeAreaView>
          <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={/*({itemData}) => (
          <View style={{flex:2,flexDirection:'row',backgroundColor:'#e86f13'}}>
            
            style={{borderRadius:100}}
            />
            <Text style={{fontSize:10}}>{itemData.title + itemData.price}</Text>
          </View>)
          */renderItem}
          />
        </SafeAreaView>
        </View>
        </View>
    ); 

 };
 export default App;
