import React, { useState } from "react"
import { SafeAreaView, View, Text, StyleSheet } from "react-native"
import { FontAwesome, MaterialIcons } from "@expo/vector-icons"
import Scrubber from "react-native-scrubber"
import { useSelector, useDispatch } from "react-redux"
import { useNavigation } from "@react-navigation/native"

const PlayingControls: React.FC = () => {
  const [liked, setLiked] = useState<boolean>(false)
  const { playing, shuffle, loop, playValue } = useSelector(
    (state: { status: statusState }) => state.status
  )
  const dispatch = useDispatch()
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.socialContainer}>
        {liked ? (
          <FontAwesome
            name="heart"
            size={24}
            color="white"
            onPress={() => setLiked(false)}
          />
        ) : (
          <FontAwesome
            name="heart-o"
            size={24}
            color="white"
            onPress={() => setLiked(true)}
          />
        )}
        <FontAwesome name="instagram" size={24} color="white" />
      </View>
      <View style={styles.progressContainer}>
        {loop === 2 ? (
          <MaterialIcons
            name="repeat-one"
            size={24}
            color={"rgb(97, 209, 84)"}
            style={{ paddingRight: 10 }}
            onPress={() => dispatch({ type: "FLIP_LOOP" })}
          />
        ) : (
          <MaterialIcons
            name="repeat"
            size={24}
            color={loop > 0 ? "rgb(97, 209, 84)" : "white"}
            style={{ paddingRight: 10 }}
            onPress={() => dispatch({ type: "FLIP_LOOP" })}
          />
        )}
        <View style={{ width: 300 }}>
          <Scrubber
            value={playValue}
            totalDuration={197}
            trackColor="rgb(97, 209, 84)"
            scrubbedColor="rgb(97,209,84)"
            onSlidingComplete={(newVal) =>
              dispatch({ type: "SET_PLAY_VAL", payload: newVal })
            }
          />
        </View>

        <MaterialIcons
          name="shuffle"
          size={24}
          color={shuffle ? "rgb(97, 209, 84)" : "white"}
          onPress={() => dispatch({ type: "FLIP_SHUFFLE" })}
          style={{ paddingLeft: 10 }}
        />
      </View>
      <View style={styles.controlsContainer}>
        <View style={{ flex: 1 }}>
          <MaterialIcons
            name="playlist-play"
            size={30}
            color="white"
            onPress={() => navigation.navigate("Queue")}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <MaterialIcons
            name="skip-previous"
            size={40}
            color="white"
            style={{ marginRight: 30 }}
          />
          {playing ? (
            <MaterialIcons
              name="pause"
              size={60}
              color="white"
              onPress={() => dispatch({ type: "FLIP_PLAY" })}
            />
          ) : (
            <MaterialIcons
              name="play-arrow"
              size={60}
              color="white"
              onPress={() => dispatch({ type: "FLIP_PLAY" })}
            />
          )}
          <MaterialIcons
            name="skip-next"
            size={40}
            color="white"
            style={{ marginLeft: 30 }}
          />
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <MaterialIcons name="speaker-group" size={30} color="white" />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  socialContainer: {
    flex: 1,
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  progressContainer: {
    flex: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  controlsContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
})

export default PlayingControls
