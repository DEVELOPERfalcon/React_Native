import React, {Component} from 'react';
import {View, Text, Button, Image} from 'react-native';

export default class HomeScreen extends Component{

    // 툴바 모양 설정하기
    // 특별한 static 변수를 지정하면 됨 (정해져 있는 이름인 navigationOptions)
    // static 이라서 앱을 다시 실행 해야 적용이 됨
    // static navigationOptions={
    //     title: "HomeScreen", //제목
    //     headerStyle:{
    //         backgroundColor:'#f4511e', // 헤더바 배경색
    //     },
    //     headerTintColor: '#fff', //헤더 글씨 색상
    //     headerTitleStyle:{
    //         fontWeight:'bold', //제목 스타일
    //     },
    // }
    // 이미지를 가진 헤더 만들기
    // static navigationOptions={
    //     // headerTitle: ()=>{return <logoTitle></logoTitle>;}
    //     hederTitle: ()=><logoTitle></logoTitle>,
    //     headerStyle:{backgroundColor:'green'},
    //     title:"aaaa", //이건 무시됨
    // }

    // 툴바를 없애고 싶다면
    static navigationOptions={headerShown:false}

    render(){
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>HomeScreen</Text>
                <Button title="Go to the Second screen" onPress={this.gotoSecond}></Button>
            </View>
        );
    }

    // SecondScreen으로 넘어가는 메소드
    gotoSecond= ()=>{
        // navigator에 의해 보여지는 컴포넌트들은 자동으로 this.props 변수 안에 navigation이라는 객체(navigate 할 수 있는 객체)가 전달됨
        this.props.navigation.navigate('Second');
    }
}

class logoTitle extends Component{
    render(){
        return (
            <View style={{flexDirection:'row', padding:8, alignItems:'center'}}>
                <Image style={{width:30, height:30}} source={require('../images/img01.jpg')}></Image>
                <Text style={{color:'white', fontWeight:'bold', fontSize:24, marginLeft:16}}>Home</Text>
            </View>
        );
    }
}
