import React, {Component} from 'react';
import {View, Text} from 'react-native';
// import { Icon } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/FontAwesome'; // icon을 {}로 감싸면 안됨


export default class Second extends Component{

    // 라이브러리로 아이콘 사용
    // 탭 아이콘 지정
    // 구글에 react native icon 검색
    // 가장 유명한 oblador/react-native-vector-icons: Customizable ... - GitHub 접속 (https://github.com/oblador/react-native-vector-icons)
    // cmd 창에서
    // npm install react-native-vector-icons 입력 (설치)
    // npx react-native link react-native-vector-icons 입력 (링크)
    // 사용시 Icon을 import한다

    // 사용할 icon들의 목록을 보려면
    // 구글에 react-native-vector-icons 검색
    // react-native-vector-icons directory - GitHub Pages 접속 (https://oblador.github.io/react-native-vector-icons/)
    // 사용하고자하는 Icon의 그룹명(AntDesign, FontAwesome(많이 사용) 같은 그룹명)을 Icon 임포트할 때 /그룹명 으로 넣고, <Icon>에 name 속성으로 아이콘 이름을 넣으면 된다
    // navigationOptions을 static으로 만들었으므로 종료 후 재실행해야 적용된걸 확인 가능

    static navigationOptions={
        tabBarIcon: ()=>{return <Icon name="home" size={24} color="orange"></Icon>}
    }

    render(){
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>Second Tab</Text>
            </View>
        );
    }
}