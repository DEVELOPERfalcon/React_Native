/**
 * @format
 */

//  자바의 import와 같은 역할
import {AppRegistry} from 'react-native';
import App from './App'; //App.js - js는 생략가능
import MyApp from './MyApp';   // MyApp.js 가져오기
import {name as appName} from './app.json';

// 처음 실행되는 Component를 지정
// Compoent: 안드로이드의 Activity와 View를 구분하지 않고 1개로 만든 최상위 객체
// AppRegistry.registerComponent(appName, () => App); //첫번째 파라미터: 프로젝트 이름, 두번째 파라미터: 처음 실행할 컴포넌트를 리턴해주는 콜백함수(리턴이 생략되어 안보임)
AppRegistry.registerComponent(appName, () => MyApp);  //MyApp.js 실행