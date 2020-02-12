import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

// 다른 문서에서 이 컴포넌트를 알수 있도록 export
export default class MainComponent2 extends Component{
    render(){
        return (
            <View style={{margin:16,}}>
                <Text> {this.props.aaa} </Text>
                <Button onPress={this.props.onPress} title={this.props.title} color={this.props.color}></Button>
            </View>
        );
    }

    clickBtn= ()=>{
        alert('clicked');
    }

}

