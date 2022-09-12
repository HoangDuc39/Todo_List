import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView,Alert } from 'react-native';
import React, {useState} from 'react';
import Task from './components/Task';
import styles from './App.components.style';
import Form from './components/Form';
export default function App() {
  const [taskList, setTaskList] = useState([])
  const handleAddTask = (task) =>{
    setTaskList([...taskList,task]);
  }
  const handleDeleteTask = (index) =>{
    Alert.alert(
      "Thông báo",
      "Bạn có chắc muốn xóa công việc này ?",
      [
        {
          text: "OK",
          onPress: () => {
            let taskListTmp = [...taskList]
            taskListTmp.splice(index,1);
            setTaskList(taskListTmp);
          },
          
        },
        { text: "cancel", onPress: () => {} }
      ]
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.space}>
          {
            taskList.map((item,index) => {
              return  <Task key = {index} title ={item} number = {index + 1} onDeleteTask = {() => handleDeleteTask(index)} />
            })
          }
  
        </ScrollView>

      </View>
      <Form OnAddTask={handleAddTask}/>
    </View>
  );
}


