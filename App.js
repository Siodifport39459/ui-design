import React,{useState} from 'react';
import {View,Image,Text,TextInput, SafeAreaView} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { createStackNavigator, createAppContainer } from 'react-navigation';
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
  <View style={{padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,backgroundColor:'#e86f13',flexDirection:'row',flex:1}}>
    <Text style={{fontSize: 10}}>{ title}</Text>
    <Text style={{fontSize: 10}}>{price}</Text>
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
      <View style={{padding:20}}>
        
         <View style={{flex:1,flexDirection:'row',padding:10}}>
            <Image source={require('./assets/favicon.png')} style={{width:30,height:30,padding:50}}/>
            <Text style={{fontSize:20,fontWeight:'bold',textAlign:'right',paddingLeft:'50%'}} onPress={onPressPrivacy}>Privacy Policy</Text>
            <Text style={{fontSize:20,fontWeight:'bold',textAlign:'right',paddingLeft:'20%'}} onPress={onPressContacts}>Contacts</Text>
              
          </View>
      

       <View style={{flex:1,flexDirection:'column'}}>
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
        <View stye={{flex:2,flexDirection:'row',}}>
          <Text style={{fontSize:50,fontWeight:'bold'}}>Trending Products</Text>
          <Text style={{fontSize:10,fontWeight:'bold'}} onPress={onPressMore}>see all</Text>
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
