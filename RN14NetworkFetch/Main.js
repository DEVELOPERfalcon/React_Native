import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';

export default class Main extends Component{

    constructor(){
        super();
        this.state={
            text:"",
            // movies 배열 저장 변수
            movies: [],
        };
    }

    render(){
        return (
            <View style={style.root}>
                {/* <Button title="fetch data from network" onPress={this.fetchData}></Button> */}
                <Button title="fetch data from network" onPress={this.fetchData2}></Button>
                <ScrollView style={style.scroll} horizontal>
                    <Text style={style.text}>{this.state.text}</Text>
                    {/* movies 배열 데이터 보여주기: ListView 작업 */}
                    {/* 배열의 map()메소드 이용해서 List형태 만들기 */}
                    {
                        this.state.movies.map((item, index)=>{
                            return <View key={index} style={{flexDirection:'row'}}>
                                       <Text> {item.id} </Text>
                                       <Text> {item.title} </Text>
                                       <Text> {item.releaseYear} </Text>
                                   </View>
                        })
                    }
                </ScrollView>
            </View>
        );
    }

    // network작업을 하는 메소드
    fetchData = ()=>{
        // 1. Javascript에서 HTTP통신(네트워크)을 담담하는 XMLHttpRequest객체 생성
        let request = new XMLHttpRequest(); //android의 HttpUrlConnection 역할

        // 서버의 응답(response)을 받는 콜백메소드 지정 (반드시 send()보다 먼저 만들어져 있어야 함. send 후에 만들면 만드는 속도 때문에 못 받음)
        // 서버로부터 응답을 받으면 자동으로 실행되는 메소드
        // request.onreadystatechange= function(){
        //     // 서버의 응답이 올바른지 검사
        //     if(request.status==200 && request.readyState==4){    // 200: 정상이라는 응답. 4: 응답 종료
        //         // 응답된 데이터를 text컴포넌트에 보이기 위해 Text컴포넌트가 보여주는 this.state.text변수 값을 변경
        //         this.setState(); //this가 function이 되서 안됨.
        //         // onreadystatechange에 화살표함수를 사용해야 this가 클래스를 가리킴
        //     }
        // }
        request.onreadystatechange= ()=>{
            // 서버의 응답이 올바른지 검사
            if(request.status==200 && request.readyState==4){    // 200: 정상이라는 응답. 4: 응답 종료
                // 응답된 데이터를 text컴포넌트에 보이기 위해 Text컴포넌트가 보여주는 this.state.text변수 값을 변경
                this.setState({text:request.responseText}); //화살표 함수로 해야 됨
            }
        }

        // 서버주소 연결
        request.open('GET', 'http://developer3.dothome.co.kr/index.js'); //연결   // 파라미터: 통신 방식, 주소
        request.send(); //요청보내기(request)
    }

    // XML파싱 안에서 또 파싱하는 경우가 있는데, 이러면 코드가 굉장히 복잡해진다.(파싱지옥이라고 부른다)

    // 위 XMLHttpRequest를 좀 더 편하게 사용하기 위한 라이브러리
    // Fetch 라이브러리: Volley같은 녀석, ReactNative에 기본 내장되어 있음
    fetchData2 = ()=>{
        // fetch()함수 사용 (open과 send를 한번에 처리) - jquery ajax()와 비슷
        // 프로미스[promiss:약속] 문법 - 비동기 처리에 많이 사용
        // .then()메소드: 비동기 처리가 끝나면 실행되는 메소드 (응답받기)
        // fetch('http://developer3.dothome.co.kr/index.js')
        // .then((response)=>{ //fetch()가 끝나면 실행
        //     // 파라미터로 전달된 응답객체에게 결과 Data를 텍스트(String)로 변경해 달라고 요청
        //     //let a = response.text();    // =을 쓰면 동기 처리
        //     return response.text();    // 비동기 처리방식
        // }).then( (responseText)=>{  // then은 계속 이어서 사용 가능
        //     // 파라미터 exponseText: 변환된 String 데이터
        //     this.setState({text:responseText}); // 값 변경
        // });

        // fetch: 연결 후 요청 보내기
        // 첫번째 then: String으로 바꾸기
        // 두번째 then: 변수에 받은 데이터 대입

        // 요약
        // fetch('http://developer3.dothome.co.kr/index.js')
        // .then(response=>response.text())
        // .then(responseText=>this.setState({text:responseText}));

        // 예외처리
        // fetch('http://developer3.dothome.co.kr/index.js')
        // .then(response=>aaa())  // 없는 aaa()를 넣어서 에러
        // .then(responseText=>this.setState({text:responseText}))
        // .catch((error)=>{alert(error)});

        // 어떤 문서든 가능 (텍스트 문서 받기)
        // fetch('http://developer3.dothome.co.kr/test.txt')
        // .then(response=>response.text())
        // .then(responseText=>this.setState({text:responseText}));

        // json데이터를 받는 것도 가능 [연습으로 facebook의 연습 json데이터 가져오기]
        // fetch('https://facebook.github.io/react-native/movies.json')
        // .then(response=>response.text())
        // .then(responseText=>{
        //     // 결과로 받은 Json문자열 데이터를 파싱
        //     let json = JSON.parse(responseText);
        //     let title = json.title;

        //     //이런식으로 파싱하면 되는데 더 좋은 방법이 있음
        // });

        // fetch('https://facebook.github.io/react-native/movies.json')
        // .then(response=>response.json())  //json으로 받기
        // .then(responseJson=>{
        //     // responseJson: json 객체임
        //     let title = responseJson.title;
        //     this.setState({text:title});
        //     this.setState({movies:responseJson.movies});
        // });

        // 서버에 데이터를 보내고 받는 작업 (GET, POST 방식)
        // GET
        // let name="sam";
        // let msg="Hello world";
        // fetch(`http://developer3.dothome.co.kr/php/getMethod.php?name=${name}&msg=${msg}`) // ``(빽틱 - 키보드의 ~물결모양 버튼을 shift 없이 누른것)를 사용하면 문자열을 끊어서 +하지 않아도 된다
        // .then(response=>response.text())
        // .then(responseText=>this.setState({text:responseText}))
        // .catch(error=>alert(error));
        // POST
        // let name="robin";
        // let msg="Hello React native";
        // fetch(`http://developer3.dothome.co.kr/php/postMethod.php`, {
        //     method:'POST',
        //     headers:{"Content-Type": "application/x-www-form-urlencoded"},
        //     body:"name="+name+"&msg="+msg,  // 보내는 데이터
        // }).then(response=>response.text())
        // .then(responseText=>this.setState({text:responseText}))
        // .catch(error=>alert(error));

        // 서버와 데이터를 주고받을 때 일반 문자열보다는 json문자열을 선호함
        // 보낼 데이터가 객체로 되어있는 경우가 더 많을 것임
        let dataObj = {name:"son", age:20,address:"seoul"};
        fetch('http://developer3.dothome.co.kr/php/jsonRequest.php', {
            method:"POST",
            header:{"Content-Type":"application/json"}, // 보낼데이터가 json임을 알려주는 헤더 정보
            body:JSON.stringify(dataObj), // 객체를 -> JSON 문자열로 변환 (parse와 반대)
        }).then(response=>response.json())
        .then(responseJson=>{
            let name = responseJson.name;
            let age = responseJson.age;
            let address = responseJson.address;
            this.setState({text:name+", "+age+", "+address});
        });

    }

}

const style= StyleSheet.create({
    root:{flex:1, padding:16},
    scroll:{marginTop:16, backgroundColor:'gray'},
    text:{padding:8, color:'white',},
});