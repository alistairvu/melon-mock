import React from "react"
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native"

const LoadingSearch: React.FC = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.indicatorContainer}>
        <ActivityIndicator
          size="large"
          color="rgb(126, 126, 126)"
        ></ActivityIndicator>
      </View>
      <Text style={styles.searchText}>Finding results...</Text>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  searchText: {
    fontSize: 20,
    color: "rgb(126, 126, 126)",
  },
  indicatorContainer: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
})

export default LoadingSearch
