import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import styles from "./quizzes_styles/resultStyle";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import YellowFlower from "../../components/YellowFlower";
import PinkFlower from "../../components/PinkFlower";
import YellowButterfly from "../../components/YellowButterfly";
import BlackButterfly from "../../components/BlackButterfly";
import WhiteCloud from "../../components/WhiteCloud";

export default function AnxietyResults({ route, navigation }) {
  const { selectedAnswers } = route.params;
  const [score, setScore] = useState(0);
  const [resultPhrase, setResultPhrase] = useState("");

  const handleResult = (score : Float) => {
    if (score > 0.0 && score < 2.5) {
      setResultPhrase("a little anxiety");
    } else if (score >= 2.5 && score < 5) {
      setResultPhrase("mild anxiety");
    } else if (score >= 5 && score < 7.5) {
      setResultPhrase("moderately severe anxiety");
    } else if (score >= 7.5) {
      setResultPhrase("severe anxiety");
    } else if (score === 0.0) {
      setResultPhrase("no anxiety")
    }
  };

  useEffect(() => {
    let sum = selectedAnswers.reduce(
      (accumulator : number , currentValue: number) => accumulator + currentValue,
      0
    );

    sum = sum / 7;
    sum = (sum * 10) / 3;
    let final = parseFloat(sum.toFixed(1));
    setScore(final); 
    handleResult(final);
  }, [selectedAnswers]);

  return (
    <View style={styles.container}>

        <WhiteCloud
            style={{
                position : 'absolute',
                top : 40, 
                left : -50
            }}
        />

        <YellowButterfly
            style={{
                position : 'absolute',
                top : 100, 
                right : 50
            }}
            />
        <WhiteCloud 
            style={{
                position : 'absolute',
                top : 200, 
                right : -60
            }}
            />
              
        <BlackButterfly 
        style={{
            position : 'absolute',
            top : 240, 
            left : 80
        }}
        />

      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Your score is :</Text>
        <Text style={styles.score}>{score}/10</Text>
      </View>
     
      <View style={styles.explanation}>
        <Text style={styles.resultText}>According to your score, you may have</Text>
        <Text style={styles.result}>{resultPhrase}</Text>
      </View>
    
      <TouchableOpacity 
        onPress={() => navigation.navigate("Quiz home")}
        style={styles.homeButton}>
        <Text style={styles.homeButtonText}>Back to home </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate("Quiz home")}
        style={styles.homeButton}>
        <Text style={styles.homeButtonText}>See more about it</Text>
      </TouchableOpacity>

      <Text style={styles.disclaimer}>Quizzes can’t replace a real diagnosis. It’s always better to see a therapist.</Text>
        <PinkFlower 
            style={{
                position : 'absolute',
                bottom: 0, 
                left : 0
            }}
        />
        <YellowFlower 
            style={{
                position : 'absolute',
                bottom: 0, 
                right : 0
            }}
        />


    </View>
  );
}
