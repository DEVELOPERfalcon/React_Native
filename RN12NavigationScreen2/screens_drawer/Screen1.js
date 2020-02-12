import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Screen1 extends Component{

    render(){
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>screen #1</Text>

                <View style={{margin:8}}>
                    <Button title="open drawer" onPress={this.openDrawer}></Button>
                </View>
            </View>
        );
    }

    openDrawer = ()=>{
        this.props.navigation.openDrawer();
    }

}