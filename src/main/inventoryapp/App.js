import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
                <View>
            <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                      fetch('http://192.168.2.209:8080/', {
                        method: 'POST',
                        headers: {
                          Accept: 'application/json',
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                          username: 'prabha',
                          passwd: 'prabha'
                        })
                      }).then((response) => {
                                 return response.text();
                              })
                              .then((responseJson) => {
                                 if(responseJson==='"NOT_FOUND"'){
                                 alert("wrong username and password");}
                                 else{
                                 alert("navigate to home screen");}
                              }).catch((error) => console.error(error));
                    }}>
                    <Text style={styles.btnText}> login
                    </Text>
                  </TouchableOpacity>
              </View>

    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
   btn: {
      backgroundColor: '#c2bad8',
      padding: 9,
      margin: 5,
    },
     btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
      },
});

export default App;