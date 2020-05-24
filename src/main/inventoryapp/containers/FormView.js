import React, { Component } from 'react'
import { StyleSheet,Text,style,label,TextInput,View,TouchableOpacity} from 'react-native';
//import CollapsibleComponent from './Component.js';
import Components from './Component.js';
import Field from './Field';


export default class FormView extends Component{
    constructor(props) {
                  super(props);
                  this.state = {
                      loading: true,
		              jsonarr:[]
		           };
                  }

    componentDidMount(){
        fetch("http://172.17.103.241:8080/getform/111/1",{method: 'GET'})
        .then(res=>res.json())
        .then(resjson=>this.setState({loading:false,jsonarr:resjson}))
        .catch(error=>console.log(error));
    }

    render(){
        return(
             <View>

                <Text>Inspection Form</Text>
		        <RenderComponents arr={this.state.jsonarr}/>
             </View>
        );
    }

}
const RenderComponents=(props)=>{
            props.arr.map(r=>console.log(r));
			    return  props.arr.map(arrrow=><Components row={arrrow}/>)
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
         fontFamily:"sans-serif"
       }
       ,
       text:{
       fontSize: 50,
       color: "red"
       }
     });