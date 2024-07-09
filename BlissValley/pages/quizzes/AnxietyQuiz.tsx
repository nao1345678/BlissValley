import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function AnxietyQuiz({navigation}) {
 
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const answers = [
    { "not at all": 0 }, 
    { "several days": 1 },
    { "more than half of the days": 2 },
    { "basically everyday": 3 },
  ];
  

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const jsonData = require("../../ressources/quizzes.json");
        if (jsonData && jsonData.anxiety_test) {
          setQuestions(jsonData.anxiety_test);
        }
      } catch (error) {
        console.error("Erreur lors du chargement du fichier JSON :", error);
      }
    };

    loadProducts();
  }, []);

  const handleAnswer = (value) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = value;
    setSelectedAnswers(updatedAnswers);
    console.log(value)
    console.log(updatedAnswers)
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFinishQuiz = () => {
    if (currentQuestionIndex == questions.length - 1) {
      navigation.navigate("Anxiety results", {selectedAnswers : selectedAnswers} );
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Anxiety Quiz</Text>
        <Text style={styles.generalQuestion}>
          Over the last 2 weeks, how often have you been bothered by the
          following problems?
        </Text>
        <Text>Question {currentQuestionIndex + 1}/7</Text>
        {questions.length > 0 && (
          <View style={styles.questionContainer}>
            <Text style={styles.question}>
              {questions[currentQuestionIndex].question}?
            </Text>
            {answers.map((answer, index) => {
              const key = Object.keys(answer)[0];
              const value = Object.values(answer)[0];
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.answerBox,
                    selectedAnswers[currentQuestionIndex] === value &&
                      styles.selectedAnswerBox,
                  ]}
                  onPress={() => handleAnswer(value)}
                >
                  <Text style={styles.answerText}>{key}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
        {currentQuestionIndex !=6 ? 
         <View style={styles.buttonContainer}>
         <Button
           title="Previous"
           onPress={handlePreviousQuestion}
           disabled={currentQuestionIndex === 0}
         />
         <Button
           title="Next"
           onPress={handleNextQuestion}
           disabled={currentQuestionIndex === questions.length - 1}
         />
       </View> 
       :
      
        <View style={styles.buttonContainer}>
        <Button
          title="Previous"
          onPress={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
        />
        <Button
          title="Finish"
          onPress={handleFinishQuiz}
          disabled={currentQuestionIndex === 0}
        />
      </View> 
        }
       
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  generalQuestion: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  questionContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  question: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: "center",
  },
  answerBox: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center'
  },
  selectedAnswerBox: {
    backgroundColor: "#a0a0a0",
  },
  answerText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 20,
  },
});
