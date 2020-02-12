import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

// 구글에서 react native geolocation 검색
// Geolocation · React Native - Facebook Open Source 접속 (https://facebook.github.io/react-native/docs/geolocation.html)
// Geolocation의 클릭되는 글씨인  react-native-geolocation-service 클릭
// Installation에서 자신에게 맞는걸로 설치. 우리는 npm을 쓰므로 cmd창에서 해당폴더로 이동(D:\HybridApp\ReactNative\RN18Geolocation) 후
// npm install react-native-geolocation-service 입력
// package.json에서 추가됬는지 확인
// 에러 확인 위해 1번 실행
// Usage의 import Geolocation from 'react-native-geolocation-service'; 로 임포트

export default class Main extends Component{

    constructor(){
        super();

        this.state={
            currPos:{latitude: 0.0, longitude: 0.0}, //최초 좌표 객체(위도, 경도)
        }
    }

    render(){
        return (
            <View style={styles.root}>
                {/* 1) 현재 내 위치 한번 얻어오기 */}
                <Button title="get my location" onPress={this.clickBtn}></Button>

                {/* 2) 내 위치 실시간 업대이트 */}
                <View style={styles.update}>
                    <Button title="watch my location" color="green" onPress={this.clickBtn2}></Button>
                    <Button title="stop my location" color="red" onPress={this.clickBtn3}></Button>
                </View>

                <View style={styles.output}>
                    <Text style={styles.text}>latitude: {this.state.currPos.latitude}</Text>
                    <Text style={styles.text}>longitude: {this.state.currPos.longitude}</Text>
                </View>
            </View>
        );
    }

    clickBtn = ()=>{
        // Geolocation 객체에게 현재위치 얻어오기 (Web의 코드와 거의 비슷)
        Geolocation.getCurrentPosition(
            (position)=>{
                // 성공했을때 실행되는 영역
                // 파라미터로 받은 info객체 안에 좌표객체(coords) 정보 있음
                this.setState({currPos: position.coords});
            }, (error)=>{
                // 퍼미션이 없으면 에러. AndroidMenifest.xml에서 직접 입력
                // API26버전부터 동적퍼미션이 추가됨
                // Geolocation은 동적퍼미션을 자동으로 해주지 않으므로 직접 동적퍼미션도 추가 (render 메소드 밖에서 추가)
                alert('error: '+error.message);
            }
        );  // 파라미터: 성공시 호출되는 함수, 에러시 호출되는 함수 (세번째로 옵션도 넣을 수 있다.)
    }

    // 동적퍼미션
    async requestLocationPermission(){
        try{  // 예외처리 하는 것을 권장
            // 퍼미션 요청 다이얼로그 보이기
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION); // PermissionsAndroid: 안드로이드 전용

            if(granted == PermissionsAndroid.RESULTS.GRANTED){
                alert('위치정보 사용을 허가하셨습니다.');
            }else{
                alert('위치정보 사용을 거부하셨습니다. \n앱의 기능 사용이 제한됩니다.');
            }
        }catch(error){
            alert('퍼미션 작업 에러');
        }
    }

    // 화면이 시작될 때 퍼미션 받도록 라이프사이클 메소드 이용
    async componentDidMount(){ 
        await this.requestLocationPermission();  //비동기 방식이므로 async await 사용
    }

    clickBtn2 = ()=>{
        // 기존에 watch하던 것이 있다면 지우도록
        Geolocation.clearWatch(this.state.id); // 만약 watch한적이 없어서 id가 없다면 무시됨

        const id = Geolocation.watchPosition(
            (position)=>{
                this.setState({currPos: position.coords});
            },
            (error)=>{
                alert('error: '+error.message);
            }
        );

        // watchID를 state에 저장하기
        //this.setState({id: id}); // 새로운 id프로퍼티 추가 (키: 변수)
        this.setState({id}); //변수명과 키 값이 같다면 변수명만 기입하면 키값은 자동 변수명으로 적용
    }

    clickBtn3 = ()=>{
        Geolocation.clearWatch(this.state.id);
        this.setState({currPos:{latitude:0.0, longitude:0.0}}); // 멈췄는지 눈으로 확인 가능하도록 초기화
    }

}

const styles = StyleSheet.create({
    root:{flex:1, padding:16,},
    update:{flexDirection:'row', marginTop:16, justifyContent:'space-between'},
    output:{flex:1, justifyContent:'center', alignItems:'center'},
    text:{fontWeight:'bold', fontSize:20, padding:8},
});