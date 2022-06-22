import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"
import UserProfile from "../UserProfile/UserProfile";
import { useEffect } from "react";

export default function TweetBox({tweets, setTweets, userProfile, tweetText, setTweetText}) {

  function handleOnTweetTextChange(changeEvent) {
    changeEvent.preventDefault()
    setTweetText(changeEvent.target.value) //value should equal the textarea element
  }

  function handleOnSubmit() {
    const newTweet = {id: tweets.length, name: userProfile.name, handle: userProfile.handle, text: tweetText, comments: 0, retweets: 0, likes: 0};
    setTweets([...tweets, newTweet])
    setTweetText("")
  }

  return (
    <div className="tweet-box">
      <TweetInput tweets={tweets} value={tweetText} handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount />
        <TweetSubmitButton handleOnSubmit={handleOnSubmit}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  return <span></span>
}

export function TweetSubmitButton({handleOnSubmit}) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={handleOnSubmit}>Tweet</button>
    </div>
  )
}
