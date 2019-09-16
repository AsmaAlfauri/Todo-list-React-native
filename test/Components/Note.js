import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';


export default class Main extends React.Component{
  render (){
  return (
    <View key={this.props.keyVal} >
     <Text >{this.props.val.date}</Text>
     <Text >{this.props.val.note}</Text>
     <Button
          title="Delete Note"
          color="red"
          onPress={this.props.deleteMethod}
        />
    
    </View>
  );
}}

