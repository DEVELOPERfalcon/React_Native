import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';

export default class MainComponent extends Component{
    render(){

        // 지역변수
        const aaa = <Text>Nice</Text>;  // 태그문 문자열을 저장한 것이 아니라 Text컴포넌트 저장
        const bbb = <View style={{marginTop:16,}}>
                        <Text>Hello React Native</Text>
                        <Button title="button"></Button>
                    </View>;
        //배열변수
        const arr= [aaa, bbb, bbb];

        // 원래 배열을 출력하면 각 요소를 구별하는 key속성이 없으면 경고
        const arr2 = [
            <View key="a">{aaa}</View>,
            <View key="b">{bbb}</View>,
            <View key="c">{bbb}</View>,
        ];

        // 실제 앱에서는 배열에 저장된 대량의 데이터가 컴포넌트가아니라 데이터들일 것임
        // 예) 공공 API 파싱, 서버데이터 fetch
        let datas = ["aaa", "bbb", "ccc"];

        return (
            <ScrollView>
                <View style={style.root}>
                    <Text style={style.title}>List Layout Text</Text>
                    {/* 변수에 저장된 컴포넌트 사용 */}
                    {aaa}

                    {bbb}

                    {/* 메소드 호출 */}
                    {this.showItemView()}
                    {this.showItemView2("sam", "press", "indigo")}
                    {this.showItemView2("robin", "press", "green")}

                    {/* 배열에 저장된 컴포넌트들 출력 */}
                    {arr}
                    {/* 원래는 위처럼 하면 배열의 요소들을 구분하는 식별자 key 속성이 없다고 경고가 표시됨 */}
                    {arr2}

                    {/* 데이터는 컴포넌트가 아니므로 직접 출력 불가 */}
                    {/* 데이터(String)의 개수만큼 <Text>를 만들고 그 안에 데이터를 출력 */}
                    {/* 배열 객체의 map()메소드: 배열 요소 개수만큼 반복하면서 요소값 제어 후 새로운 배열을 리턴 */}
                    {
                        datas.map(function(value, index, array){
                            return (
                                <View key={index} style={{margin:16,}}>
                                    <Text> {value} </Text>
                                </View>
                            );
                        })
                    }
                </View>
            </ScrollView>
        );
    }// render method

    // 메소드
    showItemView(){
        return (
            <View style={{marginTop:16}}>
                <Text>Nice world</Text>
                <Button title="click me" color="orange"></Button>
            </View>
        );
    }

    showItemView2(name, title, color){
        return (
            <View style={{marginTop:16}}>
                <Text>Nice {name}</Text>
                <Button title={title} color={color}></Button>
            </View>
        );
    }

}// MainComponent class

const style=StyleSheet.create({
    root:{flex:1, padding:16,},
    title:{fontSize:24, fontWeight:'bold'},
});