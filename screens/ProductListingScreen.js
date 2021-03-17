import React from 'react';
import {View,Text,FlatList,Image,TextInput} from 'react-native';

export default function ProductListingScreen(){
    return(
        <View>
            <Text style={{fontSize:50,backgroundColor:'green',alignItems:'center'}}>Product Listing</Text>
        </View>

    );

};








/*import React from 'react';
import {View,Image} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default function HomeScreen(){
    return(
        <View>
            <Image source={require('../assets/icon.png')} style={{width:20,height:30}}/>
        </View>
    ); 

 }*/
    /*static navigationOptions = {  
        title: 'Home',  
        headerStyle: {  
            backgroundColor: '#f4511e',  
        },  
        //headerTintColor: '#0ff',  
        headerTitleStyle: {  
            fontWeight: 'bold',  
        }, 
    }   
  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>Home Screen</Text>  
                <Button  
                    title="Go to Profile"  
                    onPress={() => this.props.navigation.push('Profile')}  
                />  
            </View>  
        );  
    }  
}; */
