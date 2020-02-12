import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

// 단순 스타일링된 TextInput을 만들것이어서 별도의
// state가 필요해 보이지 않으므로 간단하게 stateless컴포넌트 사용
const InputComponent = (props)=>{  // 파라미터로 property(속성)을 전달받음
    return (
        <View style={style.container}>
            {/* secureTextEntry: 입력 글씨 가려지는 속성 */}
            {/* selectionColor: 글씨를 드레그해서 잡았을 때 색깔 */}
            {/* autoCapitalize: 자동 첫글자 대문자로 변환 */}
            {/* autoCorrect: 자동 글자 교정 기능 여부 */}
            {/* placeholder: 써야 할 글자에 대한 힌트 */}
            {/* placeholderTextColor: placeholder 색깔 */}
            {/* onChangeText: 글씨 변경시 호출되는 메소드 설정 */}
            <TextInput 
                style={style.input}
                secureTextEntry={props.secureTextEntry}  // 사용하는 곳으로부터 속성을 전달받아 사용
                selectionColor="#292929"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder={props.placeholder}   // 사용하는 곳으로부터 props로 받아 사용
                placeholderTextColor="#c3c2c8"
                // 실제 앱의 기능을 구현할 때는 입력된 글씨를 저장하는 메소드가 있어야 함
                // onChangeText={props.onChangeText}
                >
            </TextInput>
        </View>
    );
}

const style= StyleSheet.create({
    container:{
        width:'100%',
        height:40,
        paddingLeft:16,
        paddingRight:16,
        borderWidth:1,
        borderColor:'#D3D3D3',
        backgroundColor:'#FAFAFA',
        marginTop:8,
        marginBottom:8,
    },
    input:{
        flex:1,  // TextInput의 높이를 container높이인 40으로 맞추기
        color:'#292929',
    }
});

// 외부에서 사용할 수 있도록
export default InputComponent;