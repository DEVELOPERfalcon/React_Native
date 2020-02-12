import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import TodoScreen from './screens/TodoScreen';
import DoneScreen from './screens/DoneScreen';
import { createAppContainer } from 'react-navigation';

// cmd창에
// npm install react-navigation react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context 입력 (네비게이션 사용시 필요한 것들 추가)
// npm install react-navigation-stack @react-native-community/masked-view 입력 (StackNavigator 추가)
// npx react-native run-android 입력 (라이브러리를 추가하면 실행을 해서 확인해보자)

// StackNavigator 생성
const stackNav = createStackNavigator(
    {
        Todo: {screen:TodoScreen},
        Done: {screen:DoneScreen},
    }
);

// AppContainer
const AppContainer = createAppContainer(stackNav);

export default class Main extends Component{

    // 스크린(컴포넌트) 간에 데이터를 전달 할 수 없어서
    // 스크린들을 Navigator로 가지고 있는 이 Main.js에서 데이터를 만들고
    // 이를 스크린들에 전달하여 사용하도록 해야 함
    constructor(){
        super();

        this.state={
            todo: ['study Android', 'study ReactNative', 'travel', 'health'],
            done: [],
        }
    }

    render(){
        return <AppContainer 
                    screenProps={
                        {
                            todo: this.state.todo,
                            done: this.state.done,

                            // 배열을 변경하는 addDone메소드도 전달
                            addDone: this.addDone,
                        }
                    }
                >
               </AppContainer>
    }// render method

    // TodoScreen에서 항목을 클릭했을 때 todo배열요소를 done배열로 옮기는 기능
    addDone= (index)=>{
        //전달받은 index번호의 항목을 todo배열에서 제거
        // splice(제거할 index번호, 제거할 요소 개수)메소드 (ex. splice(0, 2) -> 0번 인덱스부터 2개 제거) 
        // let element = this.state.todo.splice(index, 1); //todo배열에서 제거한 index번호 1개 요소를 리턴

        // // 빼내온 요소 element를 done배열에 추가
        // this.state.done.push(element);

        // // 제거된 배열로 state.todo배열을 변경
        // this.setState({
        //     todo: this.state.todo,  // 갱신
        //     done: this.state.done,  // 갱신
        // });

        // 별도 추가.. 위의 코드를 조금 다르게 간결하게
        const {todo, done} = this.state;
        let element = todo.splice(index, 1);
        done.push(element);
        this.setState({
            // todo:todo,
            // done:done,
            // 프로퍼티명과 값을 가지고 있는 변수명이 같다면 변수명만 써도됨
            todo,
            done,
        });
    }

}// Main class