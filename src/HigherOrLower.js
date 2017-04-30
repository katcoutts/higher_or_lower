import React, { Component } from 'react';
import renderIf from '../renderIf';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  TouchableHighlight,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Navigation!</Text>
        <Button
          onPress={() => navigate('Game')}
          title='Higher or Lower?'
        />
      </View>
    )
  }
}

class GameScreen extends React.Component {
  static navigationOptions = {
    title: 'Higher or Lower?',
  };
  constructor() {
    super();
    let number = (Math.random() * 100).toFixed();
    let newNumber = 0;
    this.state = {
      number: number,
      score: 0,
      wrong: false,
      draw: false,
    };
  }

  onHigherButtonPress() {
    newNumber = (Math.random() * 100).toFixed();
    if (+newNumber > +this.state.number) {
      this.setState({number: newNumber});
      this.state.score += 1;
    } 
    else if (+newNumber == +this.state.number){
      this.setState({number: newNumber, wrong: true, draw: true})
    }
    else {
      this.setState({number: newNumber, wrong: true});
    }
  }

  onLowerButtonPress() {
    newNumber = (Math.random() * 100).toFixed();
    if (+newNumber < +this.state.number) {
      this.setState({number: newNumber});
      this.state.score += 1;
    } 
    else if (+newNumber == +this.state.number){
      this.setState({number: newNumber, wrong: true, draw: true})
    }
    else {
      this.setState({number: newNumber, wrong: true});
    }
  }

  onResetButtonPress() {
    newNumber = (Math.random() * 100).toFixed();
    this.setState({
      number: newNumber,
      score: 0,
      wrong: false,
      draw: false,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Higher or Lower?
        </Text>
        {renderIf(!this.state.wrong,
          <Text style={styles.number}>
            {this.state.number}
          </Text>
        )}
        {renderIf(this.state.wrong && !this.state.draw,
          <Text style={styles.wrong}>
            You're wrong. It was {this.state.number}
          </Text>
        )}
        {renderIf(this.state.draw,
          <Text style={styles.wrong}>
            Unlucky. It's {this.state.number} again!
          </Text>
        )}
        {renderIf(!this.state.wrong,
        <View style={styles.buttonContainer}>
          <Button title="Higher" onPress={this.onHigherButtonPress.bind(this)}/>
          <Button title="Lower" onPress={this.onLowerButtonPress.bind(this)}/>
        </View>
        )}
        <Text style={styles.score}>
          Your score: {this.state.score}
        </Text>
        {renderIf(this.state.wrong,
        <Button title="Reset" onPress={this.onResetButtonPress.bind(this)} />
        )}
      </View>
    );
  }
}

const HigherOrLower = StackNavigator({
  Home: { screen: HomeScreen },
  Game: {screen: GameScreen},
});

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
  wrong:{
    fontSize: 50,
    color: 'tomato',
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