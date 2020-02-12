import React, {Component} from 'react';
import { Container, Content, Footer, Left, Button, Icon, Body, Title, Right, FooterTab, Text, Header, Card, CardItem, Thumbnail } from 'native-base';

// NativeBase 라이브러리 추가하기
// 구글에서 nativebase 검색 (다른 라이브러리 찾으려면 react native component library 검색)
// NativeBase | Essential cross-platform UI components for ... 접속 (https://nativebase.io/)
// DOCS 탭 클릭
// 왼쪽 사이드 메뉴에서 Getting Started 클릭
// Setup with React Native에 나와있는 설치 방법 따라하면 된다
// cmd창에서
// D:\HybridApp\ReactNative>npx react-native init RN23NativeBaseLibrary
// D:\HybridApp\ReactNative>cd RN23NativeBaseLibrary
// D:\HybridApp\ReactNative\RN23NativeBaseLibrary>npm install native-base --save
// D:\HybridApp\ReactNative\RN23NativeBaseLibrary>npx react-native link
// D:\HybridApp\ReactNative\RN23NativeBaseLibrary>npx react-native run-android // 실행해서 에러 여부 확인

export default class Main extends Component{
    render(){
        return (
            // Container: 자동 flex:1 스타일이 적용된 View
            <Container style={{backgroundColor:"green"}}>
                {/* 크게 3개 영역으로 화면 구성 */}
                <Header>
                    <Left>
                        <Button>
                            <Icon name="menu"></Icon>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Native Base</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content style={{padding:16}}>
                    <Button warning><Text>button</Text></Button>
                    <Button info bordered><Text>button</Text></Button>
                    <Button dark rounded><Text>button</Text></Button>
                    <Button block danger><Text>button</Text></Button>
                    <Button>
                        <Icon name="home"></Icon>
                        <Text>Home</Text>
                    </Button>

                    <Card>
                        <CardItem>
                            <Text>Native base</Text>
                        </CardItem>
                        <CardItem button onPress={()=>alert('clicked')}>
                            <Body>
                                <Text>click on any carditem</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Thumbnail source={{uri: 'https://image.fmkorea.com/files/attach/new/20191217/486263/1477584093/2502125534/5f180f22dfa0297d3f9d30577f88bd8c.png'}}></Thumbnail>
                            <Text>Native base</Text>
                        </CardItem>
                        <CardItem button onPress={()=>alert('clicked')}>
                            <Body>
                                <Text>click on any carditem</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
                <Footer>
                    {/* Bottom 탭 */}
                    <FooterTab>
                        <Button>
                            <Text>Tab1</Text>
                        </Button>
                    </FooterTab>
                    <FooterTab>
                        <Button>
                            <Text>Tab2</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}