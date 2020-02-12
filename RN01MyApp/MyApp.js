// 리엑트 라이브러리 사용
import React, { Component } from 'react';   // import하고 사용안하면 흐린 색으로 되어 있다
// 리엑트 네이티브 라이브러리 클래스들 import
import {Text, View, Button, StyleSheet, Image} from 'react-native';

// 리엑트 네이티브에서는 Component를 상속받은 클래스들이 화면에 보여질 수 있음
class MyApp extends Component{
    // 리엑트의 Component클래스가 화면에 보여줄 뷰를 그려내는 작업 메소드(onDraw같은 메소드)
    // 이 메소드 안에서 JSX(Javascript XML)언어로 뷰를 설계하고 이를 return해주면 됨
    render(){

        //render()메소드 안에 지역변수 선언
        let name = "SAM";
        let btnTitle = "click me";

        let a = require('./images/moana01.jpg');
        let b = require('./images/moana02.jpg');

        // return <Text>Hello ReactNative</Text>;  // 버전업되면서 ; 생략가능
        // 여러줄로 xml을 작성하려면 ()가 필요함
        return (
            // <Text>Hello React Native</Text>

            // return{} 안에 2개 이상의 Component는 리턴할 수 없음
            //<Text>Hello React Native</Text>   // error

            // 2개 이상을 리턴하려면 ViewGroup의 역할을 수행하는 Component가 있어야 함(웹에서의 <div>같은 역할)
            // 안드로이드와 다르게 Layout을 사용하지 않고, 그냥 View컴포넌트 사용
            // View를 import해야함
            // <View>
            //     <Text>Hello React Native</Text>
            //     <Text>nice to meet you</Text>
            //     <Button title="button"></Button>
            // </View>

            // 텍스트에 보여줄 글씨를 변수의 값으로 보여주기
            // JSX언어의 특징은 <>태그문 중간에 Javascript의 변수 사용이 가능하다는 것임
            // {} -> Javascript의 $ 역할
            // <View>
            //     <Text>Hello {name}</Text>
            //     <Text>nice to meet you</Text>
            //     <Button title={btnTitle}></Button>
            // </View>

            // 그냥 만들면 안이쁘므로, 스타일 적용하기
            // React Native는 flex 스타일을 주력으로 사용 (Web/Day07_flex 예제 참고)
            // style속성을 통해 꾸미기 = 속성 값 적용 방법이 css와 다소 다름
            // style속성의 값은 객체로 제공되어야 
            // style={{}} 에서 바깥쪽 {}는 Javascript를 사용하겠다는 선언이고, 안쪽 {}는 객체사용을 뜻함
            // flex:1 -> 안드로이드의 match_parent
            // <View style={ {backgroundColor: '#AAFFCC', flex:1} }>
            //     <Text>Hello {name}</Text>
            //     <Text>nice to meet you</Text>
            //     <Button title={btnTitle}></Button>
            // </View>

            // style로 인한 복잡해보이는 코드를 변수에 객체를 대입하므로써 바꾸기
            // <View style={ rootContainerStyle }>
            //     <Text style={textStyle}>Hello {name}</Text>
            //     <Text style={plainTextStyle}>nice to meet you</Text>
                
            //     {/* Button컴포넌트는 style속성이 존재하지 않음. 그래서 적용안됨 */}
            //     {/* <Button title={btnTitle} style={btnStyle}></Button> */}
                
            //     {/* 버튼의 색상은 color속성으로 */}
            //     <Button title={btnTitle} color="#841584"></Button>
            //     {/* 굳이 margin같은 스타일을 적용하려면, 버튼을 감싸는 뷰를 이용함 */}
            //     <View style={{marginTop: 10, width: 150}}>
            //         <Button title={btnTitle} color="orange"></Button>
            //     </View>
                
            // </View>

            // 스타일 여러개를 하나의 객체에 모두 설정하여 사용하므로써 가독성 높이기
            // styleSheet클래스 애용
            // <View style={styles.root}>
            //     <Text style={styles.mainText}>Hello RM</Text>
            //     <Text style={styles.plainText}>Nice to meet you</Text>
            //     <Button title={btnTitle} color="orange"></Button>
            // </View>

            // 이미지 컴포넌트 사용하기[Image컴포넌트도 사용하려면 import]
            <View style={styles.root}>
                <Text style={styles.mainText}>Hello RM</Text>
                <Text style={styles.plainText}>Nice to meet you</Text>
                <Button title={btnTitle} color="orange"></Button>

                {/* 이미지 */}
                {/* 이미지의 경로명 작성시 문자열 결합 +를 이용하면 에러 */}
                {/* 내 휴대폰에 있는 이미지 가져오려면 require 사용 */}
                <Image source={require('./images/moana01.jpg')} style={styles.img}></Image>
                {/* 결합연산자를 못 쓰므로 이미지를 바꾸려면 require('./images/moana01.jpg') 들을 통째로 변수에 넣고, source의 변수를 바꿔서 적용 */}
                <Image source={a} style={styles.img}></Image>
                <Image source={b} style={styles.img}></Image>
            </View>
        );
    }// render

} // class

// MyApp 클래스를 다른 문서에서 사용하려면 export 해줘야 함 (index.js에서 처음 실행되는 Component로 등록하고자 함)
export default MyApp;

// MyApp 클래스 밖에 변수를 선언하면 전역변수(물론, 이 MyApp.js안에서만)
const rootContainerStyle={
    backgroundColor: '#AAFFCC',
    flex: 1,
    // 단위 안쓰면 기본 dp라고 보면 된다.
    padding: 16,

    // 컴포넌트들을 가로 축 가운데 정렬하고 싶다면
    // 현재 flex-direction에 해당하는 세로방향의 반대쪽 정렬인 align-items속성 사용
    alignItems: 'center',
}

// 글씨 스타일 객체
const textStyle={
    color: '#FF0000',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
    // 마지막 , 는 있어도 되고 없어도 됨
}

// 일반 글씨 스타일
const plainTextStyle={
    margin: 8,
    color: "#333333",
}

// 버튼 스타일
const btnStyle={
    margin: 50,
    color: '#FF0000',
}

// 스타일 변수들을 하나의 객체에 모아서 만들기
const styles = StyleSheet.create({
    root: {
        backgroundColor: '#AAFFCC',
        flex: 1,
        padding: 16,
    },
    mainText: {
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 16,
    },
    plainText: {
        marginTop: 8,
        color: '#333333',
    },
    img: {
        margin: 4,
        flex: 1,
        width: null, // 가로사이즈를 화면 사이즈로
        resizeMode: 'contain', //contain: 가로사이즈에 맞춰 사이즈조절, cover: 뷰사이즈에 맞게 이미지 잘림
    },
});