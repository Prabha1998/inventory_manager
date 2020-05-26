import React, { Component,useState } from 'react';
import { StyleSheet,Text,style,label,TextInput,View,TouchableOpacity} from 'react-native';
import Field from './Field.js';


export default class Components extends Component{
           constructor(props) {
                  super(props);
                  this.state = {
                      open:false,
                      name:'',
                      row:'',
                      onSubmit:''
                      }
           }

componentDidMount(){
this.setState({
                name:this.props.row.component,
                row:this.props.row,
                onSubmit:this.props.onSubmit
               })
}



togglePanel=()=>{
        this.setState({open:!(this.state.open)});
        console.log(this.state.open);
}

handleInput(key,value){

this.state.row[key]=value;
if(this.state.value!=value)
console.log(typeof this.state.onSubmit);
this.state.onSubmit(this.state.row);

}

RenderFields=()=>{

                const Labels=Object.keys(this.state.row);
                const Placeholders=Object.values(this.state.row);
         		console.log("from render fields");
         		console.log( "from renderfields",Labels,Placeholders[0]);
         		return Labels.map((lab,i)=>{return <Field
         		                                           Label={lab}
         		                                           Placeholder= {Placeholders[i].toString()}
         		                                           updateData={(key,value)=>this.handleInput(key,value)} />});
}


render(){
return (
<View>
    <TouchableOpacity onPress={this.togglePanel} style={styles.header}>
    <Text>{this.state.name}</Text></TouchableOpacity>
       {this.state.open?<this.RenderFields/>:null}
</View>
)
}
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