import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// asyncstorage에 대해 알기위해 react native asyncstorage 검색
// AsyncStorage · React Native - Facebook Open Source 접속 (https://facebook.github.io/react-native/docs/asyncstorage)
// 그러면 Deprecated. Use react-native-community/react-native-async-storage instead.라고 기존꺼 쓰지말고 커뮤니티꺼 사용하라고 나온다
// react-native-community/react-native-async-storage를 클릭해서 https://github.com/react-native-community/async-storage 접속
// Getting Started의 Install을 따라한다 (우리는 yarn을 쓰는게 아니므로 yarn add를 npm install로 바꿔서 사용)
// cmd창에서 설치할 폴더로 이동(cd D:\HybridApp\ReactNative\RN17AsyncStorage) 후
// npm install @react-native-community/async-storage 입력
// package.json에서 설치 되었는지 확인 후 에러 없는지 1번 실행

export default class Main extends Component{

    constructor(){
        super();

        this.state={
            inputText: "",
            text: "",
        }
    }

    render(){
        return (
            <View style={styles.root}>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Enter some text here"
                    onChangeText={this.changeText}
                    value={this.state.inputText}>
                </TextInput>
                <Button title="save data" onPress={this.saveData}></Button>

                {/* 간격 띄우기용 View */}
                <View style={{marginTop:16}}></View>

                <Button title="load data" color="orange" onPress={this.loadData}></Button>
                <Text style={styles.text}> {this.state.text} </Text>

                <Button title="storage data" color="indigo" onPress={this.storageData}></Button>
                <Button title="get data" color="green" onPress={this.getData}></Button>
            </View>
        );
    }

    // 텍스트인풋에 값이 변경될 때마다 호출되는 메소드
    changeText = (value)=>{ // 파라미터: 변경된 데이터
        this.setState({inputText:value});
    }

    // 데이터를 저장하는 메소드
    saveData = ()=>{
        // state.inputText변수에 저장된 입력값을 영구적으로 저장하기 위해
        // AsyncStorage에 저장 [Android의 SharedPreference와 거의 같음]
        // AsyncStorage 임포트시 @react-native-community/async-storage 로 되는지 확인 (react-native가 아니다)
        AsyncStorage.setItem('Data', this.state.inputText); // [키, 값]
        alert('saved data');

        // 다음 입력이 편하도록 TextInput에 써있는 글씨 제거
        this.setState({inputText:""}); // <TextInput>이 value 속성으로 this.state.inputText를 가지고 있어야 한다
    }

    // 데이터를 로드하는 메소드
    loadData = ()=>{
        // 키값을 이용해서 저장된 값 읽어오기
        // 비동기 방식이므로 명령을 호출하자마자 결과가 오지 않음
        // 즉, 리턴으로 결과를 받기 전에 다음 줄로 넘어가서 원하는 결과를 얻지 못함
        // 그래서 promiss문법 사용. [then()메소드 사용]
        AsyncStorage.getItem('Data').then( (value)=>{this.setState({text:value})} );
    }

    storageData = async ()=>{
        // ECMA7 버전에서 도입된 문법: async await 문법. then()처럼 작업이 끝날때까지 진행 안되게 한다.
        await AsyncStorage.setItem('msg', "Hello React Native");
        alert('saved Data');
        this.setState({inputText:""});
    }

    getData = async ()=>{
        const msg = await AsyncStorage.getItem('msg');
        if(msg != null) this.setState({text:msg});
    }

}

const styles = StyleSheet.create({
    root:{flex:1, padding:16},
    textInput:{
        paddingLeft:16,
        paddingRight:16,
        borderWidth:1,
        borderRadius:8,
        borderColor:'black',
        marginBottom:16,
    },
    text:{
        marginTop:16,
        padding:8,
        fontWeight:'bold',
    }
});