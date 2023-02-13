import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';

import GoalList from './components/goalList';
import GoalInput from './components/goalInput';

export default function App() {


  const [totalGoals, setTotalGoals] = useState([]);




function addGoalHandler(enteredGoal) {
    setTotalGoals((currentTotalGoals) => [...currentTotalGoals, { Text: enteredGoal, id: Math.random().toString() }]);

}

function onDeleteHandler(id) {
  setTotalGoals((currentTotalGoals) => {
    return currentTotalGoals.filter((goal) => goal.id !== id);
  })
    
}
  
  
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalContainer}>
        <FlatList data={totalGoals} renderItem={(itemData) => {
          return <GoalList text={itemData.item.Text} 
          id={itemData.item.id}
          onDelete={onDeleteHandler}/>

        }}
          keyExtractor={(item, index) => {
            return item.id
          }} />

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

  goalContainer: {
    flex: 7
  },



});
