import React, {Component} from 'react';
import {View, Button} from 'react-native';

export default class MainComponent3 extends Component{

    // props가 전달되지 않았을 때를 대비하여 defaultProps 설정
    static defaultProps={
        title: "untitled",
        color: 'orange',
        onPress: ()=>{},
    }

    render(){
        return (
            <View style={{margin:16}}>
                <Button title={this.props.title} color={this.props.color} onPress={this.props.onPress}></Button>
            </View>
        );
    }
}