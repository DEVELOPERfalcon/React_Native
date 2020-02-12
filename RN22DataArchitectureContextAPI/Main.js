import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Second2 from './Second2';

// flux패턴(일종의 전역변수 사용 패턴)을 구현한 Context API 사용

// Context 객체 만들기 (React클래스의 메소드로 되어 있음)
export const MyContext = React.createContext(); // 다른 js문서에서 사용하기 위해 export

export default class Main extends Component{
    // Main의 state데이터
    state={data:"Hello"};

    changeData = (data)=>{
        // this.setState({data: data}); 
        // 키값과 변수명이 같으면 생략가능
        this.setState({data});
    }

    render(){
        return (
            // 자식들에게 데이터를 전달하지 않고 값을 제공하는
            // 제공자 컴포넌트(Context 안의 Provider) 사용
            // Provider 컴포넌트의 자식들은 어느 계층에서든
            // Consumer(소비자)로서 Provider의 value속성값을 사용할 수 있음
            <MyContext.Provider
                value={
                    // 여기가 일종의 젼역변수 만드는 영역
                    {
                        data: this.state.data,   // 데이터
                        onPress: this.changeData  // 메소드
                    }
                }>
                <View style={{padding:16,}}>
                    <Text>Main의 데이터: {this.state.data} </Text>

                    {/* 자식컴포넌트 - 데이터 전달X */}
                    <First></First>
                </View>
            </MyContext.Provider>
        );
    }
}

class First extends Component{
    render(){
        return (
            <View style={{marginTop:16, backgroundColor:'lightgreen', padding:16}}>
                <Text>First: </Text>
                {/* Main의 Provider에 의해 저장된 value를 사용하고 싶다면 */}
                {/* Consumer(소비자) 컴포넌트 사용 */}
                <MyContext.Consumer>
                    {/* 이 Consumer 컴포넌트가 보여줄 뷰를 return하는 콜백 화살표 함수 실행문 작성 */}
                    {
                        // Consumer가 자동으로 호출해주는 함수
                        (value)=>{  // 파라미터: Provider의 value 속성 값
                            return <Text>Main의 전역 데이터: {value.data}</Text>
                        }
                    }
                </MyContext.Consumer>

                {/* 손자컴포넌트 - 데이터 전달X */}
                <Second></Second>

                {/* 별도의 js문서(Second2)의 컴포넌트 사용 - 데이터 전달X */}
                <Second2></Second2>
            </View>
        );
    }
}

class Second extends Component{
    render(){
        return (
            <View style={{marginTop:16, backgroundColor:'blue', padding:16}}>
                <Text style={{color:'white'}}>Second: </Text>

                {/* Main의 전역 value 사용하기 */}
                <MyContext.Consumer>
                    {
                        (value)=>{
                            return (
                                <View>
                                    <Text style={{color:'yellow'}}>Main의 전역 데이터: {value.data}</Text>
                                    <Button title="change data" color="orange" onPress={()=>{value.onPress('Nice')}}></Button>
                                </View>
                            );
                        }
                    }
                </MyContext.Consumer>
            </View>
        );
    }
}