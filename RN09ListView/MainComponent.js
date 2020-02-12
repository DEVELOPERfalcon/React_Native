import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableWithoutFeedback, Image} from 'react-native';

export default class MainComponent extends Component{

    // react-native에서 ListView 용도의 2가지 컴포넌트
    // 1. FlatList
    // 2. SectionList

    constructor(){
        super();

        this.state={
            // 리스트에 보여줄 대량의 데이터
            datas:["aaa", "bbb", "ccc", "ddd"],

            // key 프로퍼티를 가진 대량의 데이터
            datas2:[
                {key:"0", data:"aaa"},
                {key:"1", data:"bbb"},
                {key:"2", data:"ccc"},
                {key:"3", data:"ddd"},
                {key:"4", data:"eee"},
                {key:"5", data:"fff"},
                {key:"6", data:"ggg"},
                {key:"7", data:"hhh"},
                {key:"8", data:"iii"},
                {key:"9", data:"jjj"},
                {key:"10", data:"kkk"},
                {key:"11", data:"lll"},
            ],

            // RN08ListLayout2 예제의 모양 만들어보기
            datas3:[
                {name:"sam", message:"Hello world", img:require('./images/img01.jpg')},
                {name:"robin", message:"Hello RN", img:require('./images/img02.png')},
                {name:"hong", message:"Hello react", img:require('./images/img03.jpg')},
                {name:"kim", message:"Hello hybrid", img:require('./images/img04.jpg')},
                {name:"rosa", message:"Hello ios", img:require('./images/img05.jpg')},
                {name:"moana", message:"Hello tom", img:require('./images/img06.jpg')},
                {name:"jack", message:"Hello native", img:require('./images/img07.jpg')},
                {name:"merry", message:"Hello android", img:require('./images/img08.jpg')},
                {name:"lee", message:"Hello good", img:require('./images/img09.png')},
                {name:"rm", message:"Hello web", img:require('./images/img10.jpg')},
            ],
        };
    }

    render(){

        // 구조분해할당
        // p={name:"aaa",age:20}
        // let {name} = p;  // p의 name 속성만 빼서 저장

        // 대량의 데이터의 각 아이템에 [key]라는 이름의 속성이 존재해야만 함.
        // 하지만 일일이 쓰면서 노가다 하는것은 비효울적이고, 이미 있는 데이터를 그냥 가져오는 경우가 있으므로
        // 기존의 배열 요소 객체들의 key라는 이름의 속성(멤버변수)를 추가하기
        // 배열의 요소 개수 만큼 요소들을 순회하면서 파라미터로 전달된 콜백함수 호출하는 forEach() 사용
        // this.state.datas3.forEach((element, index, array)=>{
        //     element.key = index;    // 배열요소에 새로운 멤버 key 추가(index값 대입)
        // });
        // 다른 방법으로는 FlatList의 속성

        return (
            <View style={style.root}>
                <Text style={style.titleText}>FlatList Test</Text>

                {/* 1. FlatList */}
                {/* 필수속성 2가지 */}
                {/* 1) data - FlatList가 보여줄 대랴으이 데이터 */}
                {/* 2) renderItem - 아이템 하나의 모양(컴포넌트)을 만들어서 리턴하는 콜백함수 지정 */}
                {/* <FlatList 
                    data={this.state.datas}
                    // renderItem의 함수 파라미터에 전달된 객체(obj)는
                    // 위 this.state.datas 배열의 하나하나 요소의 값과 인덱스번호를
                    // 멤버로 가지고 있는 상태로 전달됨
                    // renderItem={(obj)=>{return <Text> {obj.item}, {obj.index} </Text>}}>
                    // 그 객체의 멤버인 item, index를 구조분해 할당으로 파라미터로 받기
                    renderItem={({item, index})=>{return <Text> {item}, {index} </Text>}}>
                </FlatList> */}

                {/* key가 있는 데이터 사용 */}
                {/* <FlatList 
                    data={this.state.datas2}
                    renderItem={({item})=>{return <Text> {item.data}, {item.key} </Text>}}>
                </FlatList> */}

                {/* 아이템 터치되게 만들기 */}
                {/* <FlatList
                    data={this.state.datas2}
                    renderItem={({item})=>{
                        return (
                            <TouchableOpacity onPress={()=>{alert(item.data);}}>
                                <View style={{borderWidth:1, borderRadius:8, padding:8, margin:8}}>
                                    <Text> {item.key} </Text>
                                    <Text> {item.data} </Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}>
                </FlatList> */}

                {/* 생략문법 */}
                {/* <FlatList
                    data={this.state.datas2}
                    renderItem={({item})=>
                        <TouchableOpacity onPress={()=>{alert(item.data);}}>
                            <View style={{borderWidth:1, borderRadius:8, padding:8, margin:8}}>
                                <Text> {item.key} </Text>
                                <Text> {item.data} </Text>
                            </View>
                        </TouchableOpacity>
                    }>
                </FlatList> */}

                {/* 예제 RN08ListLayout2 모양 똑같이 만들기 */}
                <FlatList
                    data={this.state.datas3}
                    renderItem={this.renderItem}
                    // FlatList의 속성: 각 요소에 키를 추출해주는 콜백함수 지정 (키를 추가한게 아니다)
                    // keyExtractor={(item)=>{return item.name;}} // renderItem과 다르게 item은 요소만 전달
                    // 생략형
                    keyExtractor={item=>item.name}
                    >
                </FlatList>
            </View>
        );
    }//render method

    // 멤버메소드 - FlatList의 renderItem용
    renderItem= ({item})=>{
        return <TouchableOpacity style={style.itemView} onPress={()=>{alert(item.name);}}>
                    <Image source={item.img} style={style.itemImg}></Image>
                    <View style={{flexDirection:'column'}}>
                        <Text style={style.itemName}> {item.name} </Text>
                        <Text style={style.itemMsg}> {item.message} </Text>
                    </View>
                </TouchableOpacity>
    }

}//MainComponent class

const style = StyleSheet.create({
    root:{flex:1, padding:16,},
    titleText:{
        fontSize:24, 
        fontWeight:'bold', 
        textAlign:'center',
        paddingBottom:16,
    },
    itemView:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:4,
        padding:8,
        marginBottom:12,
    },
    itemImg:{
        width:120,
        height:100,
        resizeMode:'cover',
        marginRight:8,
    },
    itemName:{
        fontSize:24,
        fontWeight:'bold',
    },
    itemMsg:{
        fontSize:16,
        fontStyle:'italic',
    }
});