import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    result: 'heads',
  }

  onToss = () => {
    const randomNo = Math.floor(Math.random() * 2)
    if (randomNo === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        result: 'heads',
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        result: 'tails',
      }))
    }
  }

  render() {
    const {heads, tails, result} = this.state
    const totalCount = heads + tails
    const url =
      result === 'heads'
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="background">
        <div className="coin-toss-container">
          <h1 className="title">Coin Toss Game</h1>
          <p className="game-text">Heads (or) Tails</p>
          <img className="image-size" src={url} alt="toss result" />
          <button type="button" className="button" onClick={this.onToss}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="display">Total: {totalCount}</p>
            <p className="display">Heads: {heads}</p>
            <p className="display">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
