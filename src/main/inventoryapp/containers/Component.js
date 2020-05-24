import React, { Component,useState } from 'react';
import { StyleSheet,Text,style,label,TextInput,View,TouchableOpacity} from 'react-native';
import Field from './Field.js';


export default class Components extends Component{
           constructor(props) {
                  super(props);
                  this.state = {
                      open:false,
                      name:'',
                      row:''}
                      }

componentDidMount(){
this.setState({
                name:this.props.row.component,
                row:this.props.row
               })
}

 togglePanel=()=>{
        this.setState({open:!(this.state.open)});
        console.log(this.state.open);
    }


render(){
return (
<View>
    <TouchableOpacity onPress={this.togglePanel} style={styles.header}>
    <Text>{this.state.name}</Text></TouchableOpacity>
       {this.state.open?<RenderFields row={this.props.row}/>:null}
</View>
)
}
}

const RenderFields=(props)=>{

                const Labels=Object.keys(props.row);
                const Placeholders=Object.values(props.row);
         		console.log("from render fields");
         		console.log( "from renderfields",Labels,Placeholders[0]);
         		return Labels.map((lab,i)=>{return <Field Label={lab} Placeholder= {Placeholders[i].toString()}  />});
}



const styles = StyleSheet.create({
       container: {
         flex: 2,
         justifyContent: "center",
          alignItems: "center",
         backgroundColor: "#fff"
       },
       input: {
         marginTop: 2,
                 height: 60,
                 width: 400,
                 borderRadius: 4,
                 backgroundColor: "#eee",
                 opacity: 0.6,
                 paddingLeft: 10,
                 fontSize:20,
                 fontFamily: "monospace",
                 shadowColor: '#000',
                     shadowOffset: { width: 0, height: 2 },
                     shadowOpacity: 0.8,
                     shadowRadius: 4,
                     elevation: 1,
       },
       submitButton: {
         backgroundColor: "#8E3B7D",
         padding: 10,
         margin: 40,
         alignItems: "center",
         height: 50,
         borderRadius: 10
       },
       submitButtonText: {
         color: "black",
         fontSize:15,
         fontFamily: "monospace",
         fontWeight: 'bold'
       },
       header:{
            color:"blue",
            fontSize:15,
            fontFamily: "monospace",
            fontWeight: 'bold',
            height: 50,
            backgroundColor: "#0089CC"
       }
     });