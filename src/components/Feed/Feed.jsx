import * as React from "react"
import Tweet from "../Tweet/Tweet"
import TweetBox from "../TweetBox/TweetBox"
import "./Feed.css"

export default function Feed({tweets}) {
  return (
// {<TweetBox tweets={props.tweets} setTweets={props.setTweets} userProfile={props.userProfile}/>}
//need text
    <div className="col feed">
      {<TweetBox tweets={tweets}/>}

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">{
        //props.tweets.map((item,idx) => {return <Tweet key={idx} />})
      }</div>
    </div>
  )
}
