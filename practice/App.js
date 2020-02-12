import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

class Greeting extends Component{
  render(){
    return (
      <View style={styles.greatingRoot}>
        {/* Props란? properties의 약어이며, 컴포넌트를 생성할 때, 파라미터를 받아서 생성하는 경우가 많은데, 이렇게 받아온 데이터를 사용하는 것을 말한다. */}
        <Text>Hello {this.props.name}</Text>
      </View>
    );
  }
}

export default class Practice extends Component{
  render(){
    let pic = { uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' };
    return (
      <View style={styles.practiceRoot}>
        <Image source={pic} style={styles.picImage}></Image>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  greatingRoot: {
    alignItems: 'center',
  },
  practiceRoot: {
    alignItems: 'center',
    top: 50,
  },
  picImage: {
    width: 193,
    height: 110,
  },
});