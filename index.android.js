import React, {Component} from 'react';
import { AppRegistry, Text, Image, View } from 'react-native';

class HelloWorld extends Component {
  render(){
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello world!</Text>
        <Bananas></Bananas>
        <LotsOfGreeting></LotsOfGreeting>
      </View>

    );
  }
}

class Bananas extends Component {
  render(){
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return(
      <Image source={pic} style ={{width: 193, height: 100}}/>
    );
  }
}

class Greeting extends Component {
  render(){
    return(
      <Text>Hello {this.props.name}! </Text>
    );
  }
}

class LotsOfGreeting extends Component {
  render (){
    return (
      <View>
        <Greeting name = 'Lorum'></Greeting>
        <Greeting name = 'Ipsum'></Greeting>
        <Greeting name = 'Dolor'></Greeting>
      </View>

    );
  }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
