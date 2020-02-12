import React, {Component} from 'react';
import {View, Text, Image, Button} from 'react-native';

// 구글에서 react native image picker 검색
// react-native-community/react-native-image-picker: A ... - GitHub 접속 (https://github.com/react-native-community/react-native-image-picker)
// Getting Started보고 라이브러리 설치하기 (옵션 값 등에 대해 더 알고 싶으면 Notes의 API Reference 클릭)
// cmd창에서 설치할 폴더(D:/HybridApp/ReactNative/RN15ImagePicker)로 이동 후 yarn add react-native-image-picker을 npm install react-native-image-picker로 바꿔서 입력

// ImagePicker 라이브러리
import ImagePicker from 'react-native-image-picker';

export default class Main extends Component{

    constructor(){
        super();
        this.state={
            img: {uri:"https://cdn.pixabay.com/photo/2017/10/31/09/47/good-night-2904747_960_720.jpg"},
        }
    }

    render(){
        return (
            <View style={{flex:1, padding:16}}>
                <Button title="show Picker" onPress={this.showPicker}></Button>
                {/* 옵션을 none으로 하면 에러지만 시간상 각자 하기 */}
                <Button title="CAMERA" onPress={()=>{ImagePicker.launchCamera(null, ()=>{});}}></Button>
                <Button title="GALLERY" onPress={()=>{ImagePicker.launchImageLibrary(null, ()=>{})}}></Button>
                <Text style={{margin:8,}}> {this.state.img.uri} </Text>
                <Image source={this.state.img} style={{marginTop:8, flex:1}}></Image>
            </View>
        );
    }

    showPicker = ()=>{
        // ImagePicker를 이용해서 카메라 or 사진선택앱을 선택하여 이미지 가져오기
        // 카메라를 다루려면 Camera, External storage 퍼미션이 필요함
        // Android의 경우 퍼미션을 주려면 Android/app/src/main/AndroidManifest.xml에서 직접 작성
        // <uses-permission android:name="android.permission.CAMERA" />
        // <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        // 퍼미션이 됬는지 확인하려면 다시 run을 해야 한다

        // PickerDialog의 옵션객체
        const options = {
            title: 'Select Picker', // 다이얼로그의 제목
            // Select Picker의 글씨 바꾸기
            takePhotoButtonTitle: '카메라',
            chooseFromLibraryButtonTitle: '이미지선택',
            cancelButtonTitle: '취소',
            // 내가 만든 선택 항목
            customButtons:[
                {name:'fb', title:'페이스북 이미지 선택'},
                {name:'kb', title:'카카오 이미지 선택'},
            ],

            storageOption:{
                skipBackup: true, //ios에서 icloud에 백업할 것인가? (안드로이드에서는 무시됨)
                path:'images',  // 카메라 캡쳐시에 저장될 폴더명 (Pictures/[path] 경로)
            },
        };

        // 위에서 만든 옵션을 기준으로 다이얼로그 보이기 [showImagePicker의 파라미터: 옵션, 응답받으면 발동하는 함수]
        ImagePicker.showImagePicker(options, (response)=>{
            if(response.didCancel){
                alert('사용자가 취소하였습니다.');
            }else if(response.error){
                alert('에러: ', response.error);
            }else if(response.customButton){
                alert('커스텀버튼 선택: '+response.customButton);
            }else{
                // 이곳에 왔다면 이미지가 잘 선택된 것임

                // 선택된 이미지의 경로 uri 얻어오기
                const uri={uri:response.uri};
                this.setState({img:uri});
            }
        });

    }

}