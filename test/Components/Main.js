import React from 'react';
import Note from './Note'
import {
  TextInput,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Button
} from 'react-native';


export default class Main extends React.Component{
  constructor(props){
    super (props)
    this.state={
      noteArray:[],
      noteText:''
  }
}

addNote=()=>{
  if (this.state.noteText){ // to check if the input empty 
    var d= new Date ()
    this.state.noteArray.push({
      'date':d.getFullYear() + '/' +(d.getMonth()+ 1) + '/' + d.getDay() + '    ' +
      d.getHours()+ ':' + d.getMinutes()
      ,
      "note":this.state.noteText
    })
    this.setState({noteArray:this.state.noteArray})
    this.setState({ noteText : ''}) //to reset the input 
  }

  console.log ('noteArray',this.state.noteArray)
}

deleteNote=(key)=>{
this.state.noteArray.splice(key,1)
this.setState({noteArray:this.state.noteArray})
}
  render (){
    let notes =this.state.noteArray.map((val,key)=>{
      return <Note key={key} keyVal={key} val={val}
      deleteMethod={()=> this.deleteNote(key)}/>
    })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>To Do List</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {notes}
      </ScrollView>

      <View>
        <TextInput style={styles.textInput}
        placeholder='write your note'
        placeholderTextColor='black'
        underlineColorAndroid='transparent'
        onChangeText={(noteText)=>this.setState({
          noteText
        })}
        value={this.state.noteText}
        >
          
        </TextInput>
        <TouchableOpacity>
        <Button
          title="Add Note"
          color="#f194ff"
          onPress={this.addNote.bind(this)}
        />
        </TouchableOpacity>
      </View>
    </View>
  );
}}

const styles = StyleSheet.create({
  textInput:{
    backgroundColor:'#F9F9F9',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  }
});

