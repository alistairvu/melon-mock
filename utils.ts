// Get Spotify API Token

import { clientID, clientSecret } from "./secrets"
import { Buffer } from "buffer"

export const getToken = async () => {
  try {
    const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(
          clientID + ":" + clientSecret
        ).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    })
    const data = await res.json()
    return data["access_token"]
  } catch (error) {
    console.log(error)
  }
}
