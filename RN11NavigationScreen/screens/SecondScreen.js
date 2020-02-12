import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class SecondScreen extends Component{
    render(){
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>SecondScreen</Text>
                <Button color="indigo" onPress={()=>{this.props.navigation.navigate('Home')}} title="Go Back"></Button>
            </View>
        );
    }
}