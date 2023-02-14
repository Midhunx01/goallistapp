import { useState } from "react";
import { StyleSheet, TextInput, Button, View, Modal} from "react-native";

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
        <TextInput  style= {styles.textInput} placeholder='Enter Your Goals' value={enteredGoal} onChangeText={goalInputHandler} />
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button title= 'ADD GOAL' onPress={onAddGoalHandler} />
        </View>
        <View style={styles.button}>
        <Button title= 'CANCEL' onPress={props.cancel}/>
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
        
       
      },
    textInput: {
        borderColor: '#cccccc', 
        borderWidth: 1, 
        width: '90%', 
        padding: 4.5,
        marginLeft: 15,
        marginRight: 15,
    },
    buttonContainer: {
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '40%',
        marginTop: 15,
    },
    button: {
        marginHorizontal: 29,
        width: 100,
    }
})


