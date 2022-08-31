import './index.css'

const EmojiCard = props => {
  const {emojiList} = props
  const {emojiName, emojiUrl} = emojiList

  return (
    <li className="emoji-container">
      <img src={emojiUrl} alt={emojiName} className="emoji-image" />
    </li>
  )
}

export default EmojiCard
