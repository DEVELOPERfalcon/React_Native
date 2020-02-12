import React, {Component} from 'react';   // jsx를 사용하기위해 필요
import {Text, View, TextInput, Button, StyleSheet, Alert} from 'react-native'; // 모든 react-native의 컴포넌트들을 사용할 때는 import해야함

// 다른 문서에서 사용할 것이므로 class를 선언하면서 곧바로 export까지
export default class MainComponent extends Component{

    // 생성자: MainComponent클래스가 만들어질 때 자동으로 실행되는 메소드
    constructor(){
         //상속받았을때는 반드시 부모 클래스의 생성자를 호출하는 super()호출이 있어야함. [ 생략하면 ERROR ]
        super();
        // 특별한 멤버변수 만들기 (변경시 화면이 자동 갱신되는)
        this.state = {  // state 객체를 통해 멤버변수 선언
            text: "Hello",
            text2: "",
            msg:"",
        };

        // 일반 멤버변수 (사용자 입력값을 저장하는 함수 - 이 변수값이 변해도 화면은 자동 갱신되지 않음)
        this.inputText='';
        this.inputText2='';
    }

    render(){
        const {msg2} = this.state;   // 실무에서 쓰는 구조분해할당 방법
        return (
            <View style={style.root}>  {/* 아무 속성이 없으면 화면에서 영역도 인지할 수 없어서 스타일링 */}
                {/* TextInput: 기본적으로는 한줄입력 - 애뮬레이터에서 테스트할 때는 엔터키로 submit키보드 역할 됨 */}
                {/* onChangeText 속성: 글씨가 바뀔때마다 콜백함수 실행 */}
                {/* onSubmitEditing속성: [완료:submit]키를 눌렀을 때 실행. */}
                <TextInput style={style.textInput} onChangeText={this.changeText} onSubmitEditing={this.submitEdit.bind(this)}></TextInput>
                
                {/* 입력된 글씨를 보여주는 Text컴포넌트 */}
                <Text style={style.plainText}>{this.state.text}</Text>

                {/* 버튼을 눌렀을 때 Text가 입력된 값으로 변경되도록 */}
                <View style={{marginTop:16, marginBottom:16,}}>
                    <Button title="완료" onPress={this.clickBtn}></Button>
                </View>
                <Text style={style.plainText}>{this.state.text2}</Text>

                {/* 여러줄 입력 */}
                {/* true라는 boolean값은 JS문법이므로 */}
                {/* <TextInput onChangeText={(value)=>{this.inputText2=value}} multiline={true} numberOfLines={4} style={style.textInput2}></TextInput>
                <TextInput onChangeText={value=>{this.inputText2=value}} multiline={true} numberOfLines={4} style={style.textInput2}></TextInput> */}
                <TextInput onChangeText={value=>this.inputText2=value} multiline={true} numberOfLines={4} style={style.textInput2}></TextInput>
                <Button title="입력완료" onPress={ ()=>this.setState({msg:this.inputText2, msg2:this.inputText2}) }></Button>
                <Text style={style.plainText}> {this.state.msg} </Text>
                <Text style={style.plainText}> {msg2} </Text>
            </View>
        );
    }

    // TextInput의 onChangeText속성에 지정한 콜백함수
    // 이 함수는 TextInput의 글씨가 변경 될때마다 발동하면서
    // 매개변수로 변경된 글씨를 전달함
    changeText = (value)=>{
        // 파라미터 value: TextInput에 써져있는 글씨문자열
        this.setState({text:value});

        // 일반멤버변수에 입력값 저장
        this.textInput = value;
    }

    // 버튼클릭시 함수
    clickBtn = ()=>{
        // 입력값을 저장하고 있는 변수 this.textInput의 값을
        // Text컴포넌트가 보여주고 있는 state변수 text에 대입
        this.setState({text2:this.textInput});
    }

    // 키보드의 완료버튼 클릭시 반응
    submitEdit = function(){
        // 익명함수 안에서 bind()로 전달된 객체가 이 함수안에서 this가 됨
        this.setState({text: this.textInput});
    }

}

// 스타일 객체
const style= StyleSheet.create({
    root:{
        flex:1,
        padding:16,
    },
    textInput:{
        borderWidth:2,
        backgroundColor:'white',
        borderColor:"green",
        borderRadius: 8,
        paddingLeft:16,
        paddingRight:16,
        height:40,
    },
    plainText:{
        marginTop:16,
        fontWeight:'bold',
        paddingLeft:10,
        paddingRight:10,
    },
    textInput2:{
        borderWidth:2,
        borderColor:'blue',
        borderRadius:8,
        padding:16,

        // TextInput이 일정사이즈 이상 되지 않도록 설정 (설정한 값보다 길어지면 자동 스크롤)
        maxHeight: 150,
    }
});