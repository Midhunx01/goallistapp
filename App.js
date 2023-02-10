import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [totalGoals, setTotalGoals] = useState([]);

  
  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);

  }

  function addGoalHandler() {
    setTotalGoals((currentTotalGoals)=> [...currentTotalGoals,{Text: enteredGoal , id: Math.random().toString()}]);

  }  return (
    <View style={styles.appContainer}>
        <View style= {styles.inputContainer}>
        <TextInput  style= {{borderColor: '#cccccc', borderWidth: 1, width: '70%', padding: 4.5}} placeholder='Enter Your Goals' onChangeText={goalInputHandler} />
        <Button title= 'ADD GOAL' onPress={addGoalHandler} />
        </View>
        <View style= {styles.goalContainer}>
          <FlatList  data={totalGoals} renderItem={ (itemData) => {
             return (
             <View style={styles.goalView}> 
            <Text style={styles.goalText}>{itemData.item.Text}</Text> 
            </View>);
          }}
          keyExtractor={(item, index) => {
            return item.id
          }}/>
          
        </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
   
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingBottom: 30,
    alignItems: 'center',
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },
  goalContainer: {
    flex: 7
  },
  goalView: {
    margin: 8,
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  }

  
});
