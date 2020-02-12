import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import First from './screens_toptab/First';
import Second from './screens_toptab/Second';
import Third from './screens_toptab/Third';

//스와이핑 관련 라이브러리 import
import ViewPagerAdapter from 'react-native-tab-view-viewpager-adapter';

const toptapNav = createMaterialTopTabNavigator(
    {
        First: {screen:First},
        Second: {screen:Second, navigationOptions:{tabBarIcon: ()=> <Icon name="search" size={20} color="white"></Icon>}},
        Third: {screen:Third, navigationOptions:{tabBarIcon: ()=> <Icon name="music" size={20} color="white"></Icon>}},
    },
    {
        tabBarPosition: 'bottom', // 탭바를 아래로 이동
        tabBarOptions:{
            showIcon: true,  // 아이콘 표시 여부
            activeTintColor: '#FFFF00', // 선택된 탭의 글씨 색상
            inactiveTintColor: '#FFFFFF', // 선택 안된 탭 글씨 색상
            style:{
                backgroundColor:'#633689',
            },
            indicatorStyle:{
                borderBottomColor:'#FFFFFF', // 탭 선택시 밑줄 색상
                borderBottomWidth: 8, // 탭 선택시 밑줄 두께
            },
        },

        // 기본 뷰페이져 사용
        // cmd창에 npm install react-native-tab-view-viewpager-adapter 입력
        // 라이브러리 import (import ViewPagerAdapter from 'react-native-tab-view-viewpager-adapter';)
        // pagerComponent 속성에 ViewPagerAdapter 넣기
        // 이렇게 하고 실행하면 에러
        // 커뮤니티 사이트에서 @react-native-community/viewpager를 가져다 쓰라고 에러문구가 뜬다
        // react native viewpager 검색 후 react-native-community/react-native-viewpager ... - GitHub 접속 (https://github.com/react-native-community/react-native-viewpager)
        // Getting started에 있는 걸(yarn add @react-native-community/viewpager) 복사해서
        // cmd 창에서
        // npm install @react-native-community/viewpager 입력
        // 앱 실행
        swipeEnabled: true,
        pagerComponent: ViewPagerAdapter,
        // 실행해보면 스와이프는 빠르지만, 탭 클릭시 페이지 전환이 느리다

    }
);

const AppContainer = createAppContainer(toptapNav);

export default class TopTabMainComponent extends Component{
    render(){
        return <AppContainer></AppContainer>
    }
}