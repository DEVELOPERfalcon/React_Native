import React, {Component} from 'react';
import {View, Text, Button, Image} from 'react-native';

export default class Screen3 extends Component{

    static navigationOptions={
        drawerLabel: 'Screen #3',
        drawerIcon: ()=><Image source={require('../icons/newyork.jpg')} style={{width:30, height:30, borderRadius:15}}></Image>
    }

    render(){
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>screen #3</Text>

                <View style={{margin:8}}>
                    {/* 무조건 첫번째 스크린으로 이동 */}
                    <Button title="Go home" color="indigo" onPress={()=>this.props.navigation.goBack()}></Button>
                </View>
            </View>
        );
    }
}