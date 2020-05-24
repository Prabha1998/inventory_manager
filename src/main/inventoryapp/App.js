import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row ,Rows } from 'react-native-table-component';
import FormView from './containers/FormView'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    loading: true,
      tableHead: [],
      tableData: []
    }
  }

  componentDidMount(){
  fetch("http://172.17.103.241:8080/getform/111/1")
  .then(response => response.json())
  .then((responseJson)=> {
    this.setState({
     loading: false,
     tableHead:getHead(responseJson[0]),
     tableData:getData(responseJson)
    })
  })
  .catch(error=>console.log(error)) //to catch the errors if any
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
        <View>
            <FormView/>
        </View>
        </ScrollView>
      </View>
    )
  }
}
function getData(jsonarr){
    const result = jsonarr.map(y=>Object.values(y));
    return(result);
}
function getHead(jsonobj){
    const result = Object.keys(jsonobj);
    return(result);
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});
/*<ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead}  style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                <Rows data={state.tableData} textStyle={styles.text}/>
              </Table>
            </ScrollView>
          </View>
        </ScrollView>*/
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
//import React, { Component } from 'react';
//import FloatingLabel from 'react-native-floating-labels'
//
//import Basic from './containers/Basic';
//import FormView from './containers/FormView';
//import Field from './containers/Field';
//import CollapsibleComponent from './containers/Component';
////import react in our code.
//import {
//  StyleSheet,
//  Text,
//  View,
//  TouchableOpacity,
//  TextInput,
//  Button,
//  TouchableHighlight,
//  Image,
//  Alert,
//  Form
//} from 'react-native';
//export default class App extends Component {
//
//  render() {
//    const rowdata={"inspplanid":"111","formid":1,"compid":1,"component":"Straight Pipe","findings":"Defect found","description":"Dimensions are not right","damagetype":"Dimensions","severity":"high","defectsizinglength":"0.5","defectsizingwidth":"1.0","defectsizingdepth":"0.0","ffsL1":"undefined","lengthphoto":[50,50],"widthphoto":[50,50]}
//
//    return(
//       <View style={styles.container}>
//
//            <View>
//                  <Field Label="username" Placeholder="Prabha Rashmi"/>
//             </View>
//             <View>
//            <CollapsibleComponent rowKeys={Object.keys(this.rowdata)} rowValues={Object.values(this.rowdata)}   />
//            </View>
//
//
//          </View>
//      );
//  }}
// const styles = StyleSheet.create({
//       container: {
//         flex: 2,
//         justifyContent: "center",
//          alignItems: "center",
//         backgroundColor: "#fff"
//       },
//       input: {
//         marginTop: 30,
//                 height: 60,
//                 width: 400,
//                 borderRadius: 4,
//                 backgroundColor: "#eee",
//                 opacity: 0.6,
//                 paddingLeft: 10,
//                 fontSize:20,
//                 fontFamily: "monospace",
//                 shadowColor: '#000',
//                     shadowOffset: { width: 0, height: 2 },
//                     shadowOpacity: 0.8,
//                     shadowRadius: 4,
//                     elevation: 1,
//       },
//       submitButton: {
//         backgroundColor: "#8e3b7d",
//         padding: 10,
//         margin: 40,
//         alignItems: "center",
//         height: 50,
//         borderRadius: 10
//       },
//       submitButtonText: {
//         color: "white",
//         fontSize:20,
//         fontFamily: "monospace"
//       }
//     });
// const styles2 = StyleSheet.create({
// container: {
//     flex: 1,
//     paddingTop: 65,
//     backgroundColor: 'white',
//   },
//   labelInput: {
//     color: '#673AB7',
//   },
//   formInput: {
//     borderBottomWidth: 1.5,
//     marginLeft: 20,
//     borderColor: '#333',
//   },
//   input: {
//     borderWidth: 0
//   }
// });