import './index.css'

const EmojiCard = props => {
  const {emojiList, clickingCard} = props
  const {emojiName, emojiUrl, id} = emojiList

  const onClickCard = () => {
    clickingCard(id)
  }

  return (
    <li className="emoji-container">
      <button type="button" className="emoji-btn" onClick={onClickCard}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
