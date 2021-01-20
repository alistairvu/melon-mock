import React, { useState, useEffect } from "react"
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native"
import { useDispatch } from "react-redux"
import { getToken } from "../../utils"
import HomeItem from "./HomeItem"

interface Props {
  link: string
  title: string
  type: string
}

const HomeList: React.FC<Props> = (props) => {
  const { link, title } = props
  const [data, setData] = useState<Array<any>>([])
  const [loaded, setLoaded] = useState(false)
  const dispatch = useDispatch()

  const getData = async () => {
    const token = await getToken()
    try {
      const res = await fetch(
        `https://api.spotify.com/v1/playlists/${link}/tracks?market=VN&fields=items(track(album(images%2Cname%2Crelease_date%2Cartists)%252Cartists(name)%252Cname%252Cid))&limit=8`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      const data = await res.json()
      setData(data.items)
      setLoaded(true)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {loaded ? (
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item }) => <HomeItem item={item} />}
          keyExtractor={(item) => item.track.id}
        />
      ) : (
        <ActivityIndicator size="large"></ActivityIndicator>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 15,
    marginLeft: 10,
  },
})

export default HomeList
