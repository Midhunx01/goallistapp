import { useState } from "react";
import { StyleSheet, TextInput, Button, View, Modal, Image} from "react-native";

function GoalInput (props) {

    const [enteredGoal, setEnteredGoal] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
    
    }

    function onAddGoalHandler() {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    

    return (
        <Modal visible={props.visible} animationType={"slide"}>
        <View style= {styles.inputContainer}>
        <Image  style={styles.image}  source={require('../assets/images/goal.png')}/>
         <View style= {styles.textInput}>
         <TextInput placeholder='Enter Your Goals' value={enteredGoal} onChangeText={goalInputHandler} />
         </View>
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button title= 'CANCEL' onPress={props.cancel} color="#b180f0"/>
        </View>
        <View style={styles.button}>
        <Button title= 'ADD GOAL' onPress={onAddGoalHandler} color="#f31282"/>
        </View>
        </View>
        </View>
        </Modal>

    );
}

export default GoalInput;

const styles= StyleSheet.create({

    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#5e0acc',
        
        
        
       
      },
    textInput: {
        borderColor: '#e4d0ff', 
        borderWidth: 1, 
        backgroundColor: "#e4d0ff",
        borderRadius: 6,
        color: "#120438",
        width: '90%', 
        padding: 7.5,
        marginLeft: 15,
        marginRight: 15,
    },
    buttonContainer: {
        marginHorizontal: 16,
        flexDirection: 'row',
        width: '40%',
        marginTop: 15,
    },
    button: {
        marginHorizontal: 29,
        width: 100,
    },
    image: {
        wdith: 100,
        height: 100,
        resizeMode: 'contain',
        marginLeft: -60,
        marginBottom: 15,
    }
})


