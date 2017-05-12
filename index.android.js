import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, Image, View} from 'react-native';

class HelloWorld extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Text>Hello world!</Text>
                <Bananas></Bananas>
                <LotsOfGreeting></LotsOfGreeting>
                <Blink text='dummy'></Blink>
                <LotsOfStyles></LotsOfStyles>
            </View>

        );
    }
}

class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
        return (
          <Image source={pic} style ={{
            width: 193,
            height: 100
        }}/>
      );
    }
}

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!
            </Text>
        );
    }
}

class LotsOfGreeting extends Component {
    render() {
        return (
            <View>
                <Greeting name='Lorum'></Greeting>
                <Greeting name='Ipsum'></Greeting>
                <Greeting name='Dolor'></Greeting>
            </View>

        );
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: true
        };

        setInterval(() => {
            this.setState({showText: !this.state.showText});
          }, 1000);

    }

    render() {
        let emptyText = ' ';
        let display = this.state.showText
            ? this.props.text
            : emptyText;
        return (
            <Text>{display}</Text>
        );
    }

}


const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
  }
}



AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
