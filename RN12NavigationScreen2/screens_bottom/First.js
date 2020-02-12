import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

export default class First extends Component{

    // 컴퓨터에 존재하는 아이콘 이미지 사용하기

    static navigationOptions={
        tabBarIcon: ()=>{return <Image source={require('../icons/save.png')} style={{width:24, height:24}}></Image>}
    }

    render(){
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>First Tab</Text>
            </View>
        );
    }
}