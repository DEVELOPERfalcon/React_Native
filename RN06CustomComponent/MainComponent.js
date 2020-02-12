import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import MyComponent2 from './MyComponent2';
import MyComponent3 from './MyComponent3';
import MyComponent4 from './MyComponent4';

export default class MainComponent extends Component{
    
    // 특별한 멤버변수
    state = {msg:"Hello wolrd"}
    
    // 이 컴포넌트를 사용하면서 전달한 속성들은 모두 특별한 멤버변수에 저장됨
    // 그 특별한 멤버변수는 this.props 이다.
    render(){
        return (
            <ScrollView>
                <View style={style.root}>
                    <Text> {this.state.msg} </Text>

                    {/* 나만의 Component를 만들어 보여주기 */}
                    {/* property(속성)를 이용해서 값을 전달할 수 있음 */}
                    <MyComponent name="sam" title="click me"></MyComponent>
                    <MyComponent name="robin" title="button"></MyComponent>

                    {/* 별도의 .js의 컴포넌트 사용: import필요 */}
                    {/* 버튼 콜백함수를 전달할 수 있음 */}
                    <MyComponent2 onPress={this.changeMessage} aaa="kim" title="press" color="orange"></MyComponent2>

                    <MyComponent3 onPress={()=>{alert('click')}} title="hong" color="indigo"></MyComponent3>
                    <MyComponent3 onPress={()=>{alert('click')}} title="hong"></MyComponent3>
                    {/* 필수 속성이 없으면 에러 - title은 버튼의 필수속성 */}
                    {/* defaultProps를 설정하면 에러 안남 */}
                    <MyComponent3 onPress={()=>{alert('click')}}></MyComponent3>
                    <MyComponent3 title="hong" color="indigo"></MyComponent3>
                    <MyComponent3></MyComponent3>

                    <MyComponent4 title="press me" color="green" onPress={this.changeMessage}></MyComponent4>
                </View>
            </ScrollView>
        );
    }// render method

    // state msg를 변경하는 메소드
    changeMessage = ()=>{
        this.setState({msg:"nice"});
    }

}// MainComponent class

// 나만의 컴포넌트 클래스
class MyComponent extends Component{
    render(){
        return (
            <View style={{marginTop:16,}}>
                <Text style={{marginBottom:8,}}>Hello {this.props.name}</Text>
                <Button title={this.props.title}></Button>
            </View>
        );
    }
}

// 스타일 객체
const style = StyleSheet.create({
    root:{
        flex:1,
        padding:16,
    }
});