import React from "react"
import { View, TextInput, StyleSheet } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

interface Props {
  term: string
  onChange: (term: string) => void
  onPress: () => void
}

const SearchBar: React.FC<Props> = (props: Props) => {
  const { term, onChange, onPress } = props

  return (
    <View style={styles.searchContainer}>
      <View style={{ flexDirection: "row" }}>
        <MaterialIcons name="search" size={24} color="black" />
        <TextInput
          style={styles.input}
          value={term}
          onChangeText={(term) => onChange(term)}
          placeholder="Enter your query"
          autoCorrect={false}
        />
      </View>
      {term.trim().length > 0 && (
        <MaterialIcons name="clear" size={24} color="black" onPress={onPress} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    paddingHorizontal: 5,
  },
  searchContainer: {
    paddingHorizontal: 10,
    height: 40,
    marginHorizontal: 10,
    backgroundColor: "#d3d3d3",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
    flexDirection: "row",
  },
})

export default SearchBar
