import React, {Component} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

export default class SubCatalogList extends Component{

    constructor(){
        super();
        this.state={
            data: [],
        }
    }

    render(){
        return (
            <View style={style.container}>
                {/* 서브타이틀 제목 */}
                <View style={style.titleContainer}>
                    <Text style={style.title}>{this.props.title}</Text>
                </View>
                <FlatList
                    horizontal={true}
                    data={this.state.data}
                    renderItem={(obj)=>{
                        return (
                            <TouchableOpacity 
                                style={style.item} 
                                activeOpacity={0.9}
                                onPress={()=>{this.props.onPress(obj.item.id)}}>
                                <Image 
                                    source={{uri: obj.item.large_cover_image}} 
                                    style={{width:140, height:200}}>
                                </Image>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={(item, index)=>{return "Sub"+index}}>
                </FlatList>
            </View>
        );
    }

    loadData= ()=>{
        fetch(this.props.url)
        .then(response=>response.json())
        .then(responseJson=>this.setState({data:responseJson.data.movies}))
    }

    componentDidMount(){
        if(this.props.url) this.loadData();
    }

}

const style=StyleSheet.create({
    container:{marginTop:8, marginBottom:8,},
    titleContainer:{padding:8},
    title:{fontSize:16, fontWeight:'bold',},
    item:{paddingLeft:4, paddingRight:4,}
});