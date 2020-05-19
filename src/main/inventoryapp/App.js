//import React, { Component } from 'react';
//import { StyleSheet, View, ScrollView } from 'react-native';
//import { Table, TableWrapper, Row ,Rows} from 'react-native-table-component';
//
//export default class App extends Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//    loading: true,
//      tableHead: [],
//      tableData: []
//    }
//  }
//
//  componentDidMount(){
//  fetch("http://172.17.242.241:8080/getusers")
//  .then(response => response.json())
//  .then((responseJson)=> {
//    this.setState({
//     loading: false,
//     tableHead:getHead(responseJson[0]),
//     tableData:getData(responseJson)
//    })
//  })
//  .catch(error=>console.log(error)) //to catch the errors if any
//  }
//
//  render() {
//    const state = this.state;
//    return (
//      <View style={styles.container}>
//        <ScrollView horizontal={true}>
//          <View>
//            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
//              <Row data={state.tableHead}  style={styles.header} textStyle={styles.text}/>
//            </Table>
//            <ScrollView style={styles.dataWrapper}>
//              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
//                <Rows data={state.tableData} textStyle={styles.text}/>
//              </Table>
//            </ScrollView>
//          </View>
//        </ScrollView>
//      </View>
//    )
//  }
//}
//function getData(jsonarr){
//    const result = jsonarr.map(y=>Object.values(y));
//    return(result);
//}
//function getHead(jsonobj){
//    const result = Object.keys(jsonobj);
//    return(result);
//}
//const styles = StyleSheet.create({
//  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
//  header: { height: 50, backgroundColor: '#537791' },
//  text: { textAlign: 'center', fontWeight: '100' },
//  dataWrapper: { marginTop: -1 },
//  row: { height: 40, backgroundColor: '#E7E6E1' }
//});
//import React, { Component } from 'react';
//import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
//import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
//
//export default class ExampleFour extends Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//    loading: true,
//      tableHead: [],
//      tableData: []
//    }
//  }
//   componentDidMount(){
//   fetch("http://172.17.242.241:8080/getusers")
//   .then(response => response.json())
//   .then((responseJson)=> {
//     this.setState({
//      loading: false,
//      tableHead:getHead(responseJson[0]),
//      tableData:getData(responseJson)
//     })
//   })
//   .catch(error=>console.log(error)) //to catch the errors if any
//   }
//
//  _alertIndex(index) {
//    Alert.alert(`This is row ${index + 1}`);
//  }
//
//  render() {
//    const state = this.state;
//    const element = (data, index) => (
//      <TouchableOpacity onPress={() => this._alertIndex(index)}>
//        <View style={styles.btn}>
//          <Text style={styles.btnText}>button</Text>
//        </View>
//      </TouchableOpacity>
//    );
//
//    return (
//      <View style={styles.container}>
//        <Table borderStyle={{borderColor: 'transparent'}}>
//          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
//          {
//            state.tableData.map((rowData, index) => (
//              <TableWrapper key={index} style={styles.row}>
//                {
//                  rowData.map((cellData, cellIndex) => (
//                    <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text}/>
//                  ))
//                }
//              </TableWrapper>
//            ))
//          }
//        </Table>
//      </View>
//    )
//  }
//}
//
//const styles = StyleSheet.create({
//  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
//  head: { height: 40, backgroundColor: '#808B97' },
//  text: { margin: 6 },
//  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
//  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
//  btnText: { textAlign: 'center', color: '#fff' }



//import React from 'react';
//import {
//  SafeAreaView,
//  StyleSheet,
//  ScrollView,
//  View,
//  Text,
//  StatusBar,
//  TouchableHighlight,
//  TouchableOpacity
//} from 'react-native';
//import Table from './containers/Table'
//
//import {Colors} from 'react-native/Libraries/NewAppScreen';
//
//const App: () => React$Node = () => {
//  return (
//    <>
//            <View>
//            <TouchableOpacity
//                    style={styles.btn}
//                    onPress={() => {
//                      fetch('http://172.17.242.241:8080/', {
//                        method: 'POST',
//                        headers: {
//                          Accept: 'application/json',
//                          'Content-Type': 'application/json'
//                        },
//                        body: JSON.stringify({
//                          username: 'prabha123',
//                          passwd: 'prabha'
//                        })
//                      }).then((response) => {
//                                 return response.text();
//                              })
//                              .then((responseJson) => {
//                                 if(responseJson==='"NOT_FOUND"'){
//                                 alert("wrong username and password");}
//                                 else{
//                                 alert("navigate to home screen");}
//                              }).catch((error) => console.error(error));
//                    }}>
//                    <Text style={styles.btnText}> login
//                    </Text>
//                  </TouchableOpacity>
//                  <Table/>
//              </View>
//
//    </>
//  );
//};
//
//const styles = StyleSheet.create({
//  scrollView: {
//    backgroundColor: Colors.lighter,
//  },
//  engine: {
//    position: 'absolute',
//    right: 0,
//  },
//  body: {
//    backgroundColor: Colors.white,
//  },
//  sectionContainer: {
//    marginTop: 32,
//    paddingHorizontal: 24,
//  },
//  sectionTitle: {
//    fontSize: 24,
//    fontWeight: '600',
//    color: Colors.black,
//  },
//  sectionDescription: {
//    marginTop: 8,
//    fontSize: 18,
//    fontWeight: '400',
//    color: Colors.dark,
//  },
//  highlight: {
//    fontWeight: '700',
//  },
//  footer: {
//    color: Colors.dark,
//    fontSize: 12,
//    fontWeight: '600',
//    padding: 4,
//    paddingRight: 12,
//    textAlign: 'right',
//  },
//   btn: {
//      backgroundColor: '#c2bad8',
//      padding: 9,
//      margin: 5,
//    },
//     btnText: {
//        color: 'darkslateblue',
//        fontSize: 20,
//        textAlign: 'center',
//      },
//});
//
//export default App;
//This is an example code for Navigator//
import React, { Component } from 'react';
//import react in our code.
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
//import all the components we are going to use.
export default class App extends Component {
  static navigationOptions = {
  title: 'Login Page'
  };
   constructor(props) {
       super(props);
       this.state = {
           Username: "",
           password: "",
           message: null
         };
       }
       handleUsername = text => {
         this.setState({ Username: text });
       };
       handlePassword = text => {
         this.setState({ password: text });
       };
  render() {
  const { navigate } = this.props.navigation;
    return(
       <View style={styles.container}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Username"
            placeholderTextColor="black"
            autoCapitalize="none"
            onChangeText={this.handleUsername}
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="black"
            autoCapitalize="none"
            secureTextEntry={true}
             onChangeText={this.handlePassword}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {console.log(this.state.username);
            console.log(password);
            fetch('http://172.17.242.241:8080/', {
                                            method: 'POST',
                                            headers: {
                                              Accept: 'application/json',
                                              'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({
                                              username: Username},
                                              passwd: {this.state.Password}
                                            })
                                          })
                                        .then((response) => {
                                                 return response.text();
                                              })
                                           .then((responseJson) => {
                                                                if(responseJson==='"NOT_FOUND"'){
                                                                alert("wrong username and password");}
                                                                else{
                                                                alert("navigate to home screen");}
                                                             }).catch((error) => console.error(error))
                                          }
          >
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </View>
      );
  }}
     const styles = StyleSheet.create({
       container: {
         flex: 2,
         justifyContent: "center",
         // alignItems: "center",
         backgroundColor: "#F5FCFF"
       },
       input: {
         margin: 15,
         height: 40,
         borderColor: "black",
         borderWidth: 1
       },
       submitButton: {
         backgroundColor: "black",
         padding: 10,
         margin: 15,
         alignItems: "center",
         height: 40
       },
       submitButtonText: {
         color: "white"
       }
     });