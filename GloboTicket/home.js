import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Home =(props) => {
  return(
    //not using inline styling, just as an example of how to
    <View style={styles.container}>
      <Image
        style={styles.globologo}
        source={require('./images/alliance.png')}
      />
      <Text style={styles.title}>Welcome to GloboTicket, an Alliance affiliate.</Text>
      <Text style={styles.subtitle}>{props.username}</Text>
      <View style={styles.textcontainer}>
        <Text style={styles.content}>{introText}</Text>
      </View>
    </View>
  );
};

const introText = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20
  },
  textcontainer: {
    textAlign: 'center',
    paddingTop: 10
  },
  globologo: {
    height: 100,
    width: 150
  },
  title: {
    fontFamily: 'Ubuntu-Regular'
  },
  subtitle: {
    paddingTop: 5,
    fontFamily: 'Ubuntu-Regular'
  },
  content: {
    fontFamily: 'Ubuntu-Light',
    fontWeight: '300'
  }
});

export default Home;
