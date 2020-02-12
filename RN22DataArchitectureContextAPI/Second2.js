import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

// Main.js에 있는 MyContext객체 import
import {MyContext} from './Main';  // MyContext가 default가 아니므로 중괄호 사용

export default class Second2 extends Component{
    render(){
        return (
            <MyContext.Consumer>
                {
                    (value)=>{
                        return (
                            <View style={{marginTop:16, padding:16, backgroundColor:'indigo'}}>
                                <Text style={{color:'white'}}>Main의 전역데이터: {value.data} </Text>
                                <Button title="button" color="green" onPress={()=>{value.onPress('Good')}}></Button>
                            </View>
                        );
                    }
                }
            </MyContext.Consumer>
        );
    }
}