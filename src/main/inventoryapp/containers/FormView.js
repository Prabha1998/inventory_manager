import React, { Component } from 'react'
import { StyleSheet,Text,style,label,TextInput,View,TouchableOpacity,Button} from 'react-native';
//import CollapsibleComponent from './Component.js';
import Components from './Component.js';
import Field from './Field';


export default class FormView extends Component{
    constructor(props) {
                  super(props);
                  this.state = {
                      loading: true,
		              jsonarr:[],
		              tempJsonarr:[]
		           };
                  }

    componentDidMount(){
        fetch("http://172.17.103.241:8080/getform/111/1",{method: 'GET'})
        .then(res=>res.json())
        .then(resjson=>this.setState({loading:false,jsonarr:resjson}))
        .catch(error=>console.log(error));
    }

    updatetempJsonArr(row){
    this.state.tempJsonarr.push(row);
    console.log(this.state.tempJsonarr);
    console.log("hello form update row");
    }

    handleSubmit(){
    console.log("hello from submit");}

    RenderComponents=()=>{
                this.state.jsonarr.map(r=>console.log(r));
    			    return  this.state.jsonarr.map((row,index)=><Components row={row} key= {index} onSubmit={(row)=>{this.updatetempJsonArr(row)}} />)
    }

    render(){
        return(
             <View>
                <Text>Inspection Form</Text>
		        <this.RenderComponents arr={this.state.jsonarr}/>
		        <TouchableOpacity style={styles.submitButton} onPress={this.handleSubmit}>
		        <Text style={styles.submitButtonText}>Submit</Text>
		        </TouchableOpacity>
             </View>
        );
    }

}





const styles = StyleSheet.create({
       header:{
            color:"blue",
            fontSize:15,
            fontFamily: "monospace",
            fontWeight: 'bold',
            height: 50,
            backgroundColor: "#0089CC"
       },
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
         color: "white",
         fontFamily:"sans-serif",
         fontWeight:"200",
         fontSize:20
       }
       ,
       text:{
       fontSize: 50,
       color: "red"
       }
     });