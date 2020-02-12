import React, {Component} from 'react';
import {View} from 'react-native';

export default class MainComponent extends Component{
    render(){
        return (
            // 여러개의 뷰를 배치하려면 가장 큰 뷰가 필요함. return은 1개만 가능
            // 기본적으로 flex 스타일 사용
            // 크기값 숫자의 기본단위: dp, [숫자, %] 또는 flex를 통해서 지정가능
            // <View>
            //     <View style={{width:50, height:50, backgroundColor: 'red'}}></View>
            //     <View style={{width:100, height:100, backgroundColor: 'green'}}></View>
            //     {/* 기본 flex 스타일: flex-direction은 column(세로)방향 */}
            //     <View style={{width:'70%', height:150, backgroundColor: 'blue'}}></View>
            // </View>

            // 전체 사이즈의 높이값 350정도, 뷰3개의 크기 배분을 1:2:4로 배치하기
            // <View style={{height:350}}>
            //     <View style={{flex:1, backgroundColor:"red"}}></View>
            //     <View style={{flex:2, backgroundColor:"green"}}></View>
            //     <View style={{flex:4, backgroundColor:"blue"}}></View>
            // </View>
            // 전체 사이즈의 높이값 match, 뷰3개의 크기 배분을 1:2:4로 배치하기
            // <View style={{height:'100%'}}>
            //     <View style={{flex:1, backgroundColor:"red"}}></View>
            //     <View style={{flex:2, backgroundColor:"green"}}></View>
            //     <View style={{flex:4, backgroundColor:"blue"}}></View>
            // </View>
            // flex로 전체 사이즈의 높이값 match, 뷰3개의 크기 배분을 1:2:4로 배치하기
            // <View style={{flex:1}}}>
            //     <View style={{flex:1, backgroundColor:"red"}}></View>
            //     <View style={{flex:2, backgroundColor:"green"}}></View>
            //     <View style={{flex:4, backgroundColor:"blue"}}></View>
            // </View>

            // flex로 전체 사이즈 match, 뷰3개의 크기 배분을 1:2:4로 배치하기
            // justifyContent 속성: 배치방향과 같은 축의 정렬
            // alignItems 속성: 배치방향과 교차축의 정렬
            // <View style={{flex:1, flexDirection:'column', justifyContent:'space-evenly', alignItems:'stretch'}}>
            //     {/* 자식뷰들의 너비와 높이 저장. 크기를 지정하면 alignItems의 stretch가 적용안됨 */}
            //     <View style={{width:50, height:50, backgroundColor:"red"}}></View>
            //     <View style={{width:100, height:100, backgroundColor:"green"}}></View>
            //     <View style={{width:150, height:150, backgroundColor:"blue"}}></View>
            // </View>

            // <View style={{flex:1, flexDirection:'column'}}>
            //     <View style={{height:50, backgroundColor:'red'}}></View>
            //     {/* 남은 공간을 1:2로 배치 */}
            //     <View style={{flex:1, backgroundColor:'green'}}></View>
            //     <View style={{flex:2, backgroundColor:'blue'}}></View>
            // </View>

            // 중첩 구조
            <View style={{flex:1, flexDirection:'column'}}>
                
                {/* 크게 세로로 2분할 1:2로 */}
                <View style={{flex:1, flexDirection:'row'}}>
                    {/* 좌우 분할 1:2로 */}
                    <View style={{flex:1, backgroundColor:'red'}}></View>
                    <View style={{flex:2, flexDirection:'column'}}>
                        <View style={{flex:1, backgroundColor:'yellow'}}></View>
                        <View style={{flex:2, backgroundColor:'blue'}}></View>
                    </View>
                </View>
                <View style={{flex:2, flexDirection:'row'}}>
                    {/* 좌우 분할 2:1로 */}
                    <View style={{flex:2, flexDirection:'column'}}>
                        <View style={{flex:2, backgroundColor:'gray'}}></View>
                        <View style={{flex:1, backgroundColor:'brown'}}>
                            {/* brown 영역을 기준으로 절대위치로 겹치기 */}
                            <View style={{width:50, height:50, backgroundColor:'white', position:'absolute', left:10, top:10}}></View>
                            <View style={{width:50, height:50, backgroundColor:'purple', position:'absolute', left:20, top:20}}></View>
                        </View>
                    </View>
                    <View style={{flex:1, backgroundColor:'green'}}></View>
                </View>

                {/* 절대위치로 뷰 겹치기 */}
                <View style={{width:50, height:50, backgroundColor:'white', position:'absolute', left:10, top:10}}></View>
                <View style={{width:50, height:50, backgroundColor:'purple', position:'absolute', left:20, top:20}}></View>

                <View style={{width:100, height:100, backgroundColor:'orange', borderRadius:50, bottom:100, right:90, position:'absolute'}}></View>

            </View>
        );
    }
}