import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalList from './components/goalList';
import GoalInput from './components/goalInput';

export default function App() {


  const [totalGoals, setTotalGoals] = useState([]);
  const [isVisible, setIsVisible]=useState(false);


  function onInputHandler() {
    setIsVisible(true);
  }

  function endVisible() {
    setIsVisible(false);
  }




function addGoalHandler(enteredGoal) {
    setTotalGoals((currentTotalGoals) => [...currentTotalGoals, { Text: enteredGoal, id: Math.random().toString() }]);
    setIsVisible(false);

}

function onDeleteHandler(id) {
  setTotalGoals((currentTotalGoals) => {
    return currentTotalGoals.filter((goal) => goal.id !== id);
  })
    
}
  
  
  return (
    <View style={styles.appContainer}>
      <Button title='ADD NEW GOAL' color='#5e0acc' onPress={onInputHandler}/>
      <GoalInput visible={isVisible} onAddGoal={addGoalHandler} cancel={endVisible} />
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
