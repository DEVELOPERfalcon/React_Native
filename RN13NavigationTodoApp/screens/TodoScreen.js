import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class TodoScreen extends Component{
    render(){
        return (
            <View style={style.root}>
                <Text style={style.title}>TODO LIST</Text>

                {/* 우선 Main.js의 todo데이터를 받았는지 확인 (todo 배열의 길이) */}
                <Text>Todo list number: {this.props.screenProps.todo.length}</Text>

                {/* 받은 todo배열을 화면에 리스트로 보여주기 */}
                {
                    this.props.screenProps.todo.map((item, index)=>{
                        return (
                            // 클릭시 todo배열 개수 변경
                            // state는 값 변경 가능, props는 값 변경 불가
                            <TouchableOpacity key={index} style={{margin:8}} onPress={()=>{this.props.screenProps.addDone(index);}}>
                                <Text style={{color:'indigo'}}> {item} </Text>
                            </TouchableOpacity>
                        )
                    })
                }

                {/* 페이지 이동 버튼 */}
                <TouchableOpacity style={{marginTop:24,}} onPress={()=>{this.props.navigation.navigate('Done')}}>
                    <Text style={{color:'blue'}}>Go to Done List</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const style = StyleSheet.create({
    root:{flex:1, justifyContent:'center', alignItems:'center'},
    title:{fontWeight:'bold', margin:16,}
});