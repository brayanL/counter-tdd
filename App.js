/**
 * Sample Counter with TDD
 */

import React, {Component} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

const ZERO_COUNT = 0;

export default class App extends Component {
  constructor() {
    super();
    this.state = {counter: ZERO_COUNT};
  }

  onPressButtonIncrement() {
    this.setState({counter: ++ this.state.counter});
  }

  onPressButtonReset() {
    this.setState({counter: ZERO_COUNT});
  }


  render() {
    return (
      <View style={styles.container}>
        <Text id="text-counter">{this.state.counter}</Text>
        <Button id="button-increment" color='green' title='Increment' onPress={() => this.onPressButtonIncrement()}/>
        <Button id="button-reset" color='red' title="Reset" onPress={() => this.onPressButtonReset()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
