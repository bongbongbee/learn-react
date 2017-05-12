import React, {Component} from 'react';
import {AppRegistry, StyleSheet,ScrollView, Text,TextInput, Image, View} from 'react-native';

class HelloWorld extends Component {
    render() {
        return (
            <View style={{}}>
              <PizzaTranslator/>
                <Text>Hello world!</Text>
                <Bananas></Bananas>
                <LotsOfGreeting></LotsOfGreeting>
                <Blink text='dummy'></Blink>
                <LotsOfStyles></LotsOfStyles>
                <FlexDimensionsBasics/>
                <IScrolledDownAndWhatHappenedNextShockedMe/>

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

// class FixedDimensionsBasics extends Component {
//   render() {
//     return (
//       <View>
//         <View style={{width: 10, height: 10, backgroundColor: 'powderblue'}} />
//         <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
//         <View style={{width: 110, height: 110, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }

class FlexDimensionsBasics extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{width: 10, height: 10, backgroundColor: 'powderblue'}} />
        <View style={{width: 10, height: 10, backgroundColor: 'skyblue'}} />
        <View style={{width: 10, height: 10, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
      return (
        <ScrollView style={{height: 200}}>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={pic} style ={{
  width: 193,
  height: 100
}}/>
          <Image source={pic} style ={{
  width: 193,
  height: 100
}}/>
          <Image source={pic} style ={{
  width: 193,
  height: 100
}}/>
          <Image source={pic} style ={{
  width: 193,
  height: 100
}}/>
          <Image source={pic} style ={{
  width: 193,
  height: 100
}}/>
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={pic} style ={{
  width: 193,
  height: 100
}}/>
          <Image source={pic} style ={{
  width: 193,
  height: 100
}}/>
          <Image source={pic} style ={{
  width: 193,
  height: 100
}}/>
          <Image source={pic} style ={{
  width: 193,
  height: 100
}}/>
          <Image source={pic} style ={{
  width: 193,
  height: 100
}}/>
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={pic} style ={{
  width: 193,
  height: 100
}}/>
          <Image source={pic} style ={{
  width: 193,
  height: 100
}}/>
          <Image source={pic} style ={{
  width: 193,
  height: 100
}}/>
          <Image source={pic} style ={{
  width: 193,
  height: 100
}}/>
          <Image source={pic} style ={{
  width: 193,
  height: 100
}}/>
          <Text style={{fontSize:96}}>What's the best</Text>
          <Image source={pic} style ={{
  width: 193,
  height: 100
}}/>
          <Image source={pic} style ={{
  width: 193,
  height: 100
}}/>
          <Image source={pic} style ={{
  width: 193,
  height: 100
}}/>
          <Image source={pic} style ={{
  width: 193,
  height: 100
}}/>
          <Image source={pic} style ={{
  width: 193,
  height: 100
}}/>
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={pic} style ={{
  width: 193,
  height: 100
}}/>
          <Image source={pic} style ={{
  width: 193,
  height: 100
}}/>
          <Image source={pic} style ={{
  width: 193,
  height: 100
}}/>
          <Image source={pic} style ={{
  width: 193,
  height: 100
}}/>
          <Image source={pic} style ={{
  width: 193,
  height: 100
}}/>
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}



AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
