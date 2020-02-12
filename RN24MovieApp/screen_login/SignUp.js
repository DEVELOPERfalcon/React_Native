import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import TabComponent from '../components/TabComponent';
import InputComponent from '../components/InputComponent';

export default class SignUp extends Component{

    constructor(){
        super();
        this.state={
            tabs:["전화번호", "이메일"],   // 탭 라벨을 배열로 저장
            tabIndex:0,   // 현재 선택된 탭 번호 저장 변수
        }
    }

    // 현재 선택된 탭번호(tabIndex)를 변경하는 메소드
    setTabIndex=(index)=>{
        this.setState({tabIndex:index});
    }

    render(){
        return (
            <View style={style.root}>
                {/* 1. 콘텐츠 영역 */}
                <View style={style.content}>
                    {/* 1.1 탭 영역 */}
                    <View style={style.tabContainer}>
                        {/* Tab버튼은 다른 곳에서도 사용하기 때문에 별도의 component로 만들어서 재사용 */}
                        {/* 선택된 탭이 어느 것인지 제어(관리)할 수 있도록 탭들을 배열로 관리하고자 함 */}
                        {/* <TabComponent label={this.state.tabs[0]} selected={this.state.tabIndex==0} onPress={()=>this.setTabIndex(0)}></TabComponent>
                        <TabComponent label={this.state.tabs[1]} selected={this.state.tabIndex==1} onPress={()=>this.setTabIndex(1)}></TabComponent> */}

                        {/* 위 작업을 반복문으로 */}
                        {
                            this.state.tabs.map((item, index)=>{
                                return <TabComponent label={item} selected={this.state.tabIndex==index} onPress={()=>this.setTabIndex(index)} key={"Tab"+index}></TabComponent>
                            })
                        }
                    </View>

                    {/* 1.2 정보입력: 현재탭의 라벨값으로 힌트 제공 */}
                    <InputComponent placeholder={this.state.tabs[this.state.tabIndex]}></InputComponent>

                    {/* 1.3 이메일 탭일 때(tabIndex==1)는 비밀번호 입력칸도 있어야 함 */}
                    {
                        // if(this.state.tabIndex===1)  // jsx에서 자바스크립트 쓸떄 if문 사용 불가

                        // &&연산자를 통해 앞의 조건이 true일 때 && 다음 코드가 실행되도록
                        this.state.tabIndex===1 && <InputComponent placeholder="비밀번호" secureTextEntry={true}></InputComponent>
                    }

                    {/* 1.4 전화번호 탭일 때 다음 버튼 */}
                    {
                        this.state.tabIndex===0 && <View style={{width:'100%', margin:16}}><Button title="다음" onPress={()=>this.setTabIndex(1)}></Button></View>
                    }

                    {/* 1.5 이메일 탭일 때 완료 버튼 */}
                    {
                        this.state.tabIndex===1 && <View style={{width:'100%', margin:16}}><Button title="완료" onPress={()=>this.props.navigation.goBack()}></Button></View>
                    }

                    {/* 1.6 전화번호 탭일 때 안내 메세지 */}
                    {
                        this.state.tabIndex===0 && <Text style={style.telMessage}>Movie App의 업데이트 내용을 SMS로 수신할 수 있으며, 언제든지 수신을 취소할 수 있습니다.</Text>
                    }
                </View>
                {/* 2. Footer 영역 */}
                <View style={style.footer}>
                    <Text style={style.footerMsg}>
                        이미 계정이 있으신가요?
                        {/* goBack(): 무조건 stack의 첫번째 화면으로 이동 */}
                        <Text style={style.goBack} onPress={()=>this.props.navigation.goBack()}>로그인</Text>
                    </Text>
                </View>
            </View>
        );
    }//render

    // 네비게이터 옵션 (static은 새로고침으로 반영되지 않으므로 재실행)
    static navigationOptions={
        headerShown: false,   // 헤더 영역 없애기
    };

}//class

const style = StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF'},
    content:{
        flex: 1,
        width:'100%',
        alignItems:'center', // 가로축 가운데 정렬
        padding:32,
    },
    footer:{
        borderTopWidth:1,
        borderTopColor:'#D3D3D3',
        padding:8,
    },
    footerMsg:{
        color:"#929292",
        textAlign:'center',
    },
    goBack:{
        color:'#3796EF',
    },
    tabContainer:{
        flexDirection:'row',
        marginBottom:16,
    },
    telMessage:{
        textAlign:'center',
        fontSize:12,
        color:'#929292',
        marginLeft:8,
        marginRight:8,
    },
});