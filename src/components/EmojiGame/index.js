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

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    cardId: '',
    score: 0,
    topScore: 0,
    isGameStatus: true,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  clickingCard = id => {
    const {cardId} = this.state
    this.setState({cardId: id})
    if (cardId !== id) {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      this.setState({isGameStatus: false})
    }
  }

  clickPlayAgain = () => {
    const {score, topScore} = this.state
    this.setState({isGameStatus: true, score: 0, cardId: ''})
    if (score > topScore) {
      this.setState({topScore: score})
    }
  }

  winStatus = () => {
    const {score, isGameStatus} = this.state
    let status = true
    if (score === 12) {
      status = false
    } else if (isGameStatus === false) {
      status = false
    }
    return status
  }

  render() {
    const {score, isGameStatus, topScore} = this.state
    const winStatus = this.winStatus()
    const shuffledEmojisList = this.shuffledEmojisList()

    return (
      <div className="bg-container">
        {winStatus && (
          <div>
            <NavBar score={score} topScore={topScore} />
            <ul className="all-emojis">
              {shuffledEmojisList.map(eachEmoji => (
                <EmojiCard
                  emojiList={eachEmoji}
                  key={eachEmoji.id}
                  clickingCard={this.clickingCard}
                />
              ))}
            </ul>
          </div>
        )}
        {!winStatus && (
          <div>
            <WinOrLoseCard
              score={score}
              isGameStatus={isGameStatus}
              clickPlayAgain={this.clickPlayAgain}
            />
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
