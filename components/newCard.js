import React, { Component } from 'react'
import { Keyboard,View, Text, StyleSheet, TextInput,TouchableOpacity,TouchableWithoutFeedback } from 'react-native'

export default class NewCard extends Component{
    state= {
        inputText: null
    }
    handleInputChange = (text) => {
        this.setState({
            inputText: text
        })
    }
    render(){
        const { inputText } = this.state
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                        <Text style={styles.action}>Create New Card</Text>
                        <TextInput
                            clearButtonMode='while-editing'
                            placeholderTextColor="gray"
                            placeholder="name"
                            maxLength={60}
                            value={inputText}
                            onChangeText={this.handleInputChange}
                            style={styles.input}
                        />
                        <TextInput
                            clearButtonMode='while-editing'
                            placeholderTextColor="gray"
                            placeholder="name"
                            value={inputText}
                            onChangeText={this.handleInputChange}
                            style={styles.input}
                        />
                        <TouchableOpacity style={styles.button}>
                            <Text style={{fontWeight:'500', fontSize:20, color:'white'}}>Add</Text>
                        </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        alignItems:'stretch',
        padding:20
    },
    action:{
        marginTop:40,
        fontSize:30,
        color: "white",
        fontWeight:'700',
    },
    input:{
        marginTop:15,
        backgroundColor:'#3a3a3c',
        padding:15,
        borderRadius:8,
        color:'white',
        fontWeight:'500',
        
    },
    button:{
        marginTop:45,
        alignItems:'center',
        backgroundColor:'rgb(100,210,255)',
        borderRadius:8,
        padding:13,
    }
})