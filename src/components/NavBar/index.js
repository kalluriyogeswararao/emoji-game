import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  return (
    <div className="bg-header-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="game-heading">Emoji Game</h1>
      </div>
      <div className="score-container">
        <p className="score">Score: {score}</p>
        <p className="score"> Top Score: {topScore}</p>
      </div>
    </div>
  )
}
export default NavBar
