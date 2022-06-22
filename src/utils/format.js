export const formatNumTweets = (numTweets) => {
  return new Intl.NumberFormat("en", { notation: "compact", minimumFractionDigits: 3 }).format(numTweets).toLowerCase()
}

export const formatNumFollowers = (numFollowers) => {
  return new Intl.NumberFormat("en", { notation: "compact", minimumFractionDigits: 1 })
    .format(numFollowers)
    .toLowerCase()
}

// export const formatNumFollowing = (numFollowing) => {
//   return new Intl.NumberFormat("ja-JP", { tyle: 'currency', notation: "compact", maximumSignificantDigits: 3 })
//     .format(numFollowing)
//     .toLowerCase()
// }

export const formatLikes = (numLikes) => {
  return new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 0 }).format(numLikes).toLowerCase()
}
