import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class DoneScreen extends Component{
    render(){
        return (
            <View style={style.root}>
                <Text style={style.title}>DONE LIST</Text>

                {/* Main.js로부터 받은 done배열 개수 출력 */}
                <Text>Done list number: {this.props.screenProps.done.length}</Text>

                {/* done배열 출력 */}
                {
                    this.props.screenProps.done.map(
                        (item, index)=>
                            <TouchableOpacity key={index} style={{margin:8}}>
                                <Text style={{color:'green'}}> {item} </Text>
                            </TouchableOpacity>
                    )
                }
            </View>
        );
    }
}

const style = StyleSheet.create({
    root:{flex:1, justifyContent:'center', alignItems:'center'},
    title:{fontWeight:'bold', margin:16,}
});