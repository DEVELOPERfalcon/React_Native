import React, {Component} from 'react';
import {View} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import First from './screens_bottom/First';
import Second from './screens_bottom/Second';
import Third from './screens_bottom/Third';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

// BottomTabNavigator 생성
const bottomNav = createBottomTabNavigator(
    {
        First: {screen: First},
        Second: {screen: Second},
        Third: {
            screen: Third, 
            navigationOptions:{  // 화면 추가하면서 탭 아이콘 넣기
                // tabBarIcon:()=>{return <Icon name="heart" size={24} color="indigo"></Icon>} 
                tabBarIcon:()=><Icon name="heart" size={24} color="indigo"></Icon> 
            }
        },
    },
    // TabNavigatorConfig
    {
        initialRouteName: 'Second',  //초기 시작 지점 지정
        tabBarOptions:{
            showLabel: true, // 탭이름 보일지 설정
            showIcon: true, // 아이콘 보일지 설정
            labelStyle:{  //라벨 스타일 지정
                fontSize: 20,  //글씨 크기
            },
            style:{
                backgroundColor:'white', //탭의 기본 배경색
            },
            activeTintColor: 'red', // 탭 선택시 글씨 색깔
            activeBackgroundColor: 'green', // 선택된 탭의 배경색
            tabStyle:{
                borderTopWidth: 1, // 탭의 위쪽 경계선
                borderBottomWidth: 1, // 탭의 아래쪽 경계선
                borderLeftWidth: 0.5, // 탭의 왼쪽 경계선
                borderRightWidth: 0.5, // 탭의 오른쪽 경계선
                borderColor:'black', // 경계선 색깔
                paddingTop:8, // 탭사이즈가 커지진 않고 안에 내용물이 조금 내려감
            }
        },
    }
);

// Navigator를 감싸는 AppContainer 생성
const AppContainer = createAppContainer(bottomNav);

export default class MainComponent extends Component{
    render(){
        return <AppContainer></AppContainer>
    }
}