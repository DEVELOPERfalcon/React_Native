import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Main extends Component{

    state={text:"nice"};

    // 라이프 사이클 메소드들
    // 1. 생성자
    constructor(){
        super();

        // 화면에 보이기(render) 전에 실행되는 메소드이기에 화면에 출력 못함
        console.log('constructor!!!!!'); //로그 찍기 (앱 실행시 뜨는 node창에 로그가 찍힘 + 디바이스에서 ctrl+m -> debug 선택 -> chrome창이 뜨면 F12(개발자모드) -> console탭에서 확인)
    }

    // 2. 화면에 보여지기 전에 자동 호출되는 콜백메소드(안드로이드의 onCreate()와 비슷)
    //componentWillMount(){}  //deprecate method되서 경고가 뜨며 비권장 되었다
    UNSAFE_componentWillMount(){
        console.log('will mount!!!!!');
    } // 권장하지 않는 메소드

    // 3. 화면에 그려내는 메소드
    render(){
        console.log('render.........');
        return <View style={{padding:16}}>
                   <Text> {this.state.text} </Text>
                   <Button title="button" onPress={()=>{this.setState({text:"Hello"})}}></Button>
               </View>
    }

    // 4. 화면에 그려낸 후 딱 1번 호출되는 메소드
    componentDidMount(){  // 중요한 메소드
        // 보통 이 메소드 안에서 DB읽어오기나 네트워크로 데이터 불러오기 등의 작업 수행
        console.log('component did mount......');
    }

    // 5. 화면이 갱신(re-render)될때마다 호출되는 메소드
    componentDidUpdate(){
        console.log('component did update......');
    }

    // 6. 이 컴포넌트가 종료될 때 자동 실행
    componentWillUnmount(){
        console.log('component will unmount......');
    }
}