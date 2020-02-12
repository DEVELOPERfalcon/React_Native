import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from './screen_login/Login';
import SignUp from './screen_login/SignUp';
import ResetPassword from './screen_login/ResetPassword';

import MovieList from './screen_movie/MovieList';
import MovieDetail from './screen_movie/MovieDetail';

import Community from './screen_community/Community';

import CheckLogin from './CheckLogin';

// cmd창에서
// C:\Users\user>d:
// D:\>cd hybridapp
// D:\HybridApp>cd reactnative
// D:\HybridApp\ReactNative>npx react-native init RN24MovieApp
// D:\HybridApp\ReactNative>cd RN24MovieApp
// D:\HybridApp\ReactNative\RN24MovieApp>npm install react-navigation react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
// D:\HybridApp\ReactNative\RN24MovieApp>npm install react-navigation-stack
// D:\HybridApp\ReactNative\RN24MovieApp>npm install react-navigation-drawer
// D:\HybridApp\ReactNative\RN24MovieApp>npm install @react-native-community/async-storage
// D:\HybridApp\ReactNative\RN24MovieApp>npx react-native run-android

// 로그인화면 3개를 가진 stackNavigator 생성 (제목줄 또는 화면이동시 백스택에 남기고 싶을 때 사용)
const loginStackNav = createStackNavigator({
    Login:{screen: Login},
    SignUp:{screen: SignUp},
    ResetPW:{screen: ResetPassword},
});

// 영화관련 화면 2개를 가진 StackNavigator 생성
const movieStackNav = createStackNavigator({
    MovieList,   //screen의 컴포넌트명과 Navigator의 별명이 같다면, 컴포넌트명만 작성할 수 있다.
    MovieDetail,
});

// community화면 관련 StackNavigator 생성
const communutyStackNav = createStackNavigator({
    Community,
});

// Drawer로 영화소개 화면과 Communuty 화면으로 이동하기 위해 Navigator 생성
const drawerNav = createDrawerNavigator(
    {  // 경로
        movieStackNav,
        communutyStackNav,
    }, 
    {  // drawer 옵션
        drawerPosition:'right',  // 나오는 곳의 위치
        drawerType:'slide', // drawer클릭시 나오는 효과
    }
);

// 빽스택에 화면을 보관하지 않고 화면을 전환시켜주는 SwitchNavigator 생성
const switchNav = createSwitchNavigator(
    {
        CheckLogin,
        loginStackNav,
        drawerNav,
    },
    {
        initialRouteName:'CheckLogin',  // 처음 시작 화면 설정
    }
);

// Navigator를 가진 AppContainer 객체 생성
const AppContainer = createAppContainer(switchNav);

// Main컴포넌트에 AppContainer 보이기
export default class Main extends Component{
    render(){
        return <AppContainer></AppContainer>;
    }
}