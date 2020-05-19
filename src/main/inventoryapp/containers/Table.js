import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row ,Rows} from 'react-native-table-component';

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
  fetch("http://192.168.24.129:8080/all_forms")
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
        <ScrollView horizontal={true}>
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