/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import './index.css'

class EmojiGame extends Component {
  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const emojis = this.shuffledEmojisList()

    return (
      <div className="bg-container">
        <NavBar />

        <ul className="all-emojis">
          {emojis.map(eachEmoji => (
            <EmojiCard emojiList={eachEmoji} key={eachEmoji.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
