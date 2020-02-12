import React, {Component} from 'react';
import {View, Text, Linking} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

// 구글에서 react native map 검색
// react-native-community/react-native-maps: React ... - GitHub 접속 (https://github.com/react-native-community/react-native-maps)
// Installation의 See Installation Instructions 글씨에서 Installation Instructions클릭
// 이동된 페이지의 Installation에 npm install react-native-maps --save-exact 입력해서 설치하라고 되어있다.
// 만약 cmd창에서 npm install react-native-maps --save-exact 입력해서 설치 후 실행했을때 에러가 난다면
// github에 있는거 자체를 가져와야 한다.
// 그러므로 이전 페이지인 https://github.com/react-native-community/react-native-maps에서 
// Clone or download 클릭 -> use SSH(구글 로그인을 해야 이게 나타남) 클릭 -> Clone with SSH의 주소를 복사해서
// cmd창에서 npm install --save git+https:// 입력 후 뒤에 붙여넣기
// 그리고 경로의 : 는 / 로 바꿔준다.
// npm install --save git+https://git@github.com/react-native-community/react-native-maps.git
// 입력 후 실행해서 에러 있는지 확인
// 임포트는 General Usage의 import MapView from 'react-native-maps'; 추가

// 사이트의 Component API에 쓸수 있는 컴포넌트들이 나와있으니 참고

export default class Main extends Component{

    constructor(){
        super();

        this.state={
            region:{
                latitude: 37.562087,
                longitude: 127.035192,
                // 얼마의 위도경도 차이까지 지도에 표시되는가?(zoom 설정)
                latitudeDelta: 0.007,
                longitudeDelta: 0.007,
            },

            // 마커정보들 배열
            markers : [
                { 
                    latlng : {latitude:37.562516, longitude:127.035679},
                    title : "희망약국",
                    description : "왕십리에 있는 약국"
                },
                { 
                    latlng : {latitude:37.561155, longitude:127.034560},
                    title : "이수프라자약국",
                    description : "왕십리에 있는 약국"
                },
                { 
                    latlng : {latitude:37.560710, longitude:127.035978},
                    title : "연세우리약국",
                    description : "왕십리에 있는 약국"
                },
                { 
                    latlng : {latitude:37.562162, longitude:127.032171},
                    title : "왕십리약국",
                    description : "왕십리에 있는 약국"
                }

            ],

        };

    }

    render(){
        return (
            <View style={{flex:1, padding:16,}}>
                <Text style={{padding:8,}}>Map Test</Text>

                {/* manifest.xml로 가서 구글지도 사용을 위한 API 키 등록 */}
                {/* https://developers.google.com/ 접속 */}
                {/* Products의 maps platform 클릭 */}
                {/* 문서 탭 클릭 */}
                {/* Maps SDK for Android 클릭 */}
                {/* 왼쪽 사이드 메뉴에서 Get an API key 클릭 */}
                {/* Get the API key의 Google Cloud Platform Console 클릭 */}
                {/* 프로젝트 선택창에서 새 프로젝트 클릭 */}
                {/* RNGoogleMap 이라는 이름으로 프로젝트 만들기 */}
                {/* 만든 프로젝트 선택가 저절로 선택되서 열리지 않는 경우가 있으므로 프로젝트 선택창에서 만든 프로젝트 선택 */}
                {/* 삼선메뉴 클릭 -> API 및 서비스 -> 라이브러리 -> Maps SDK for Android 클릭 -> 사용설정 클릭 -> 사용자 인증 정보 */}
                {/* 또는 삼선 메뉴 클릭 -> API 및 서비스 -> 사용자 인증 정보 클릭 */}
                {/* 사용자 인증 정보 만들기 클릭 -> API 키 -> 키 제한 클릭 또는 API key 이름 클릭)  */}
                {/* Android 앱 선택, 항목 추가(패키지 이름: 키를 쓰고자 하는 앱의 manifest.xml의 package 값 복사/붙여넣기, SHA-1 인증서는 cmd창에서  */}
                {/* D:\HybridApp\ReactNative\RN19GoogleMapTest>cd android */}
                {/* D:\HybridApp\ReactNative\RN19GoogleMapTest\android>dir 해보면 gradlew라는게 있다는걸 알 수 있다. */}
                {/* D:\HybridApp\ReactNative\RN19GoogleMapTest\android>gradlew signingReport */}
                {/* 그러면 노란색 글씨로 비슷해보이는 것들이 여러개 나오는데, 그 중에서 다음과 같이 나오는 부분의 SHA-1 복사/붙여넣기해서 키제한을 한다. */}
                {/* Variant: debug
                    Config: debug
                    Store: D:\HybridApp\ReactNative\RN19GoogleMapTest\android\app\debug.keystore
                    Alias: androiddebugkey
                    MD5: 20:F4:61:48:B7:2D:8E:5E:5C:A2:3D:37:A4:F4:14:90
                    SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
                    SHA-256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C
                    Valid until: 2052년 5월 1일 수요일 */}
                {/* 끝났으면 해당 API키를 다음과 같이 manifest.xml에 붙여넣기 */}
                {/* <meta-data
                    android:name="com.google.android.geo.API_KEY"
                    android:value="AIzaSyD5uU9FT7rQQS5L487Qh7lBE-HI5knnYPU"/> */}
                    
                {/* 1. 기본 맵 보여주기 - 별도의 위치지정이 없으면 줌레벨 1의 기본 위치지도 보여짐 */}
                <MapView 
                    style={{flex:1}}
                    provider={PROVIDER_GOOGLE}
                    Region={this.state.region}>
                </MapView>

                {/* 2. 초기 맵의 중심 위치 지정 */}
                {/* <MapView 
                    style={ {flex:1} }
                    provider={PROVIDER_GOOGLE}
                    // 교육원 위치 지정
                    initialRegion={{
                        latitude: 37.562087, 
                        longitude: 127.035192,
                        // 얼마의 위도경도 차이까지 지도에 표시되는가 여부(줌과 연관됨)
                        latitudeDelta: 0.0922, //0.00922로 하면 줌업됨
                        longitudeDelta: 0.0421, //0.00421로 하면 줌업됨
                      }}>
                </MapView> */}

                {/* 3. state를 이용해서 region 설정 */}
                {/* <MapView 
                    style={ {flex:1} }
                    provider={PROVIDER_GOOGLE}
                    region={ this.state.region }
                    // 지도를 드래그 할때마다 좌표의 변화에 반응하는 콜백함수
                    // [드래그 할때마다마다 호출되어 너무 빈번하게 실행되므로 굳이 실습X]
                    // onRegionChange= { this.onRegionChange }
                    >                    
                </MapView> */}
               

                {/* 3. 맵에 마커 지정 */}
                <MapView 
                    style={ {flex:1} }
                    provider={ PROVIDER_GOOGLE }
                    region= { this.state.region} >

                    {/*3.1 마커 만들기 */}
                    <Marker 
                        coordinate={ this.state.region }
                        title="미래능력개발교육원"
                        description="http://www.mrhi.or.kr"></Marker>

                    {/*3.2 마커를 또 추가하고 싶다면 */}
                    <Marker 
                        coordinate={ {latitude:37.561727, longitude:127.036370} }
                        title="성동경찰서"
                        description="https://www.smpa.go.kr/"></Marker>

                    {/*3.3 마커 여러개를 보여주고 싶다면  */}
                    {/* 마커정보들 배열의 map()메소드 사용하여 개수만큼 <Marker> 생성 */}
                    {
                        this.state.markers.map( (marker, index)=> (
                            <Marker 
                                coordinate={ marker.latlng }
                                title={ marker.title }
                                description={ marker.description }
                                //map()의 childComponent는 반드시 key 속성을 가져야 경고가 없음
                                key= {index}
                                //아이콘 이미지설정
                                image={ require('./images/icon.png') }
                            ></Marker>
                        ))
                    }

                    {/* 3.4 마커 Collout(툴팁박스) 클릭반응하기 */}
                    <Marker
                        coordinate={ {latitude:37.563341, longitude:127.036909} }
                        title="성동구청"
                        description="http://www.sd.go.kr/"
                        onCalloutPress={ this.clickMakerCallout }>
                    </Marker>
                </MapView>

                

                {/* 더 많은 기능은 https://github.com/react-native-community/react-native-maps 사이트 참고할 것 */}

            </View>
        );
    }

     // 3.4실습에서 사용할 멤버 메소드
     clickMakerCallout(){
        //alert('http://www.sd.go.kr/');

        // 특정 URL의 웹문서를 디바이스의 웹브라우저를 통해 열기
        //Linking클래스 - URL과 연결해 주는 클래스 [ canOpenURL()- 웹브라우저를 열수 있는가? 즉, 웹브라우저 있는가?  URL이 잘못된 것은 상관없음 ]
        Linking.canOpenURL('http://www.sd.go.kr/').then( supprted=>{ //파라미터 supprted : 웹 브라우저의 지원여부

            //Linking.openURL()- 브라우저를 열어주는 메소드
            if(supprted) Linking.openURL('http://www.sd.go.kr/');
            else alert('Do not know how to open URL');

        })
    }
}