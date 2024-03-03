import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackClicked: false}

  onClickEmoji = () => this.setState({isFeedbackClicked: true})

  renderFeedbackQn = () => {
    const {resources} = this.props

    console.log(resources)
    return (
      <div className="feedback-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list">
          {resources.emojis.map(eachEmoji => (
            <li key={eachEmoji.id} className="list-item">
              <button
                className="button-container"
                type="button"
                onClick={this.onClickEmoji}
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji"
                />
                <p className="emoji-name">{eachEmoji.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="feedback-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="heading">Thank You</h1>
        <p className="emoji-name">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackClicked} = this.state
    return (
      <div className="main-container">
        {isFeedbackClicked
          ? this.renderThankYouScreen()
          : this.renderFeedbackQn()}
      </div>
    )
  }
}

export default Feedback
