/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import renderIf from './renderIf';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  TouchableHighlight,
  View
} from 'react-native';

export default class HigherOrLower extends Component {
  constructor() {
    super();
    let number = (Math.random() * 100).toFixed();
    let newNumber = 0;
    this.state = {
      number: number,
      score: 0,
    };
  }

  onHigherButtonPress() {
    newNumber = (Math.random() * 100).toFixed();
    if (newNumber > this.state.number) {
      this.setState({number: newNumber});
      this.state.score += 1;
    } else {
      this.setState({number: "You're wrong. It was " + newNumber});
    }
  }

  onLowerButtonPress() {
    newNumber = (Math.random() * 100).toFixed();
    if (newNumber < this.state.number) {
      this.setState({number: newNumber});
      this.state.score += 1;
    } else {
      this.setState({number: "You're wrong. It was " + newNumber});
    }
  }

  onResetButtonPress() {
    number = (Math.random() * 100).toFixed();
    this.setState({
      number: number,
      score: 0,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Higher or Lower?
        </Text>
        <Text style={styles.number}>
          {this.state.number}
        </Text>
        <View style={styles.buttonContainer}>
          <Button title="Higher" onPress={this.onHigherButtonPress.bind(this)}/>
          <Button title="Lower" onPress={this.onLowerButtonPress.bind(this)}/>
        </View>
        <Text style={styles.score}>
          Your score: {this.state.score}
        </Text>
        <Button title="Reset" onPress={this.onResetButtonPress.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    color: 'red',
    textAlign: 'center',
    margin: 10,
  },
  number:{
    fontSize: 70,
    color: 'blue',
    textAlign: 'center',
    margin: 40,
  },
  score:{
    fontSize: 30,
    color: 'blue',
    textAlign: 'center',
    margin: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50
  }
});

AppRegistry.registerComponent('HigherOrLower', () => HigherOrLower);
