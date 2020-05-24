import React, { Component } from 'react';
import { StyleSheet,Text,style,label,TextInput,View} from 'react-native';

function Field(props) {
console.log(props)
  return(
              <View style={styles.container}>
                     <View><Text style={styles.text}>{props.Label}</Text></View>
                     <View>
                       <TextInput
                         style={styles.input}
                         underlineColorAndroid="transparent"
                         placeholder={props.Placeholder}
                         placeholderTextColor="black"
                         autoCapitalize="none"
                         //onChangeText={this.handleUsername}
                       />
                     </View>
               </View>
         )
}
const styles = StyleSheet.create({

       container: {
           justifyContent: "space-between",
           height:60,
           paddingTop: 3,
           margin: 5,
           borderWidth: 0.5,
           borderColor: '#000',
           borderRadius: 4,
         },

         hairline: {
           backgroundColor: '#A2A2A2',
           height: 1,
         },
       input: {
         marginTop: 5,
                 height: 38,
                 width: 400,
                 opacity: 0.6,
                 paddingTop: 5,
                 paddingLeft: 10,
                 fontFamily: "roman",
                 fontSize:16,
                 fontWeight:"bold",
                 fontFamily: "monospace"

       },
       submitButton: {
         backgroundColor: "#8e3b7d",
         padding: 10,
         margin: 40,
         alignItems: "center",
         height: 50,
         borderRadius: 10
       },
       text: {
                 color:"#647373",
                 fontSize:16,
                 fontFamily:"Roboto",
                 paddingLeft: 10,
       }
     });
export default Field;
//export default class Field extends Component{
//
//           constructor(props) {
//                  super(props);
//                  this.state = {
//                      Label: "",
//                      //Value: "",
//                      Placeholder: ""
//                    };
//                  }
//
//     componentDidMount(){
//        this.setState({
//                          Label:this.props.Label,
//                          Placeholder:this.props.Placeholder
//                          //Value:this.props.data.value
//                      });
//     }
//
//    render(){
//        return(
//             <View style={styles.container}>
//                    <View><Text style={styles.text}>{this.state.Label}</Text></View>
//                    <View>
//                      <TextInput
//                        style={styles.input}
//                        underlineColorAndroid="transparent"
//                        placeholder={this.state.Placeholder}
//                        placeholderTextColor="black"
//                        autoCapitalize="none"
//                        onChangeText={this.handleUsername}
//                      />
//                    </View>
//              </View>
//        );
//    }
//
//}
//const styles = StyleSheet.create({
//
//       container: {
//           justifyContent: "space-between",
//           height:80,
//           paddingTop: 10,
//           margin: 15,
//           borderWidth: 1,
//           borderColor: '#A2A2A2',
//           borderRadius: 4,
//         },
//
//         hairline: {
//           backgroundColor: '#A2A2A2',
//           height: 1,
//         },
//       input: {
//         marginTop: 5,
//                 height: 40,
//                 width: 400,
//                 opacity: 0.6,
//                 paddingTop: 5,
//                 paddingLeft: 10,
//                 fontSize:20,
//                 fontFamily: "roman",
//                 fontSize:20,
//                 fontWeight:"bold",
//                 fontFamily: "monospace"
//
//       },
//       submitButton: {
//         backgroundColor: "#8e3b7d",
//         padding: 10,
//         margin: 40,
//         alignItems: "center",
//         height: 50,
//         borderRadius: 10
//       },
//       text: {
//                 color:"#647373",
//                 fontSize:18,
//                 fontFamily:"Roboto",
//                 paddingLeft: 10,
//       }
//     });