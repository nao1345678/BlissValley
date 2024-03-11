import { StyleSheet, Text, View, Image } from 'react-native'
import Task from '../types'

export default function Tough() {
  const tough: any = [
    'Take a shower',
    'Drink water',
    'Eat at least a meal',
    'Listen to music I like',
    'Get out of my bed',
    'Brush my teeth',
    'Wash my hair',
    'Take my medication',
    'Make my bed',
    'Take 10 deep breaths',
    "Tell myself 'it's gonna be ok' "
  ]
  console.log(tough)

  return (
    <View style={styles.container}>
      <Text>On tough days </Text>
      <View>
        {tough.map((task: Task, index: number) => (
          <Text style={styles.taskName}>{task.name}</Text>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskName: {
    color: 'purple'
  }
})
