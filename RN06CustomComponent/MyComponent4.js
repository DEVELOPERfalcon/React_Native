import React, {Component} from 'react';
import {View, Button} from 'react-native';

export default class MyComponent4 extends Component{
    render(){
        return (
            <View style={{margin:16}}>
                {/* 전달받은 속성을 한방에 적용하기 */}
                {/* 스프레드 연산자: ... (구조분해할당) */}
                <Button {...this.props}></Button>
            </View>
        );
    }
}