// 구글에서 react navigation 검색 -> React Navigation · Routing and navigation for your React ... 접속 (https://reactnavigation.org/) -> READ GUIDES 버튼 클릭 -> 설치 방법 따라하기

// 설치시 필수 항목: react-navigation, react-native-gesture-handler, react-native-safe-area-context
// TabNavigator 사용시에는 반드시 추가할 항목:  react-native-reanimated, react-native-screens

// cmd창에서 
// npm install react-navigation react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
// 입력. android의 build.gradle에 해당하는 package.json에서 dependencies에 추가된다. 1번 실행해서 잘됬는지 확인
// 참고로 devDependencies는 개발 할때만 필요한 모듈들이다.

// StackNavigator를 사용하려면 cmd창에서
// npm install react-navigation-stack @react-native-community/masked-view
// 입력. pachage.json에서 추가되었는지 확인 후 실행 되는지도 확인

import React, {Component} from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./screens/HomeScreen";
import SecondScreen from './screens/SecondScreen';

import {createAppContainer} from 'react-navigation';

// StackNavigator 객체 생성
const stackNav = createStackNavigator(
    {
        Home: {screen: HomeScreen},  // HomeScreen이라는 화면을 Home이라고 부르고, StackNavigator에 넣겠다
        Second: {screen: SecondScreen, navigationOptions:{headerShown:false}}, //툴바를 없애려면 navigationOptions:{header:null} 사용
    }
);

// 내비게이터 객체를 가지고 있는 AppContainer 객체 생성 - 컴포넌트 객체
const Container = createAppContainer(stackNav);

export default class MainComponent extends Component{
    render(){
        return <Container theme="light"></Container>;
    }
}
