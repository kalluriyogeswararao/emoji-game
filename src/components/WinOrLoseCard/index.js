import './index.css'

const WinOrLoseCard = props => {
  const {score, isGameStatus, clickPlayAgain} = props

  const onClickPlayAgain = () => {
    clickPlayAgain(true)
  }

  return (
    <div className="result-container">
      <div className="bg-header">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="game-heading">Emoji Game</h1>
        </div>
      </div>
      {isGameStatus && (
        <div className="display-result-container">
          <div className="result-data">
            <h1 className="won-heading">You Won</h1>
            <p className="score-title">Best Score</p>
            <p className="result-score">{score}/12</p>
            <button className="button" type="button" onClick={onClickPlayAgain}>
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win"
            className="won-image"
          />
        </div>
      )}
      {!isGameStatus && (
        <div className="display-result-container">
          <div className="result-data">
            <h1 className="won-heading">You Lose</h1>
            <p className="score-title">Score</p>
            <p className="result-score">{score}/12</p>
            <button className="button" type="button" onClick={onClickPlayAgain}>
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="lose"
            className="won-image"
          />
        </div>
      )}
    </div>
  )
}
export default WinOrLoseCard
