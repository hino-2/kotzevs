import React, {Component} from 'react'
import './style.css'

export default class Photos extends Component {
  constructor () {
    super();
  }

  state = {
    photoID: 0
  }

  render() {
    return (
      <div>
        <form>
          <input type="radio" name="fancy" autofocus value="clubs" id="clubs" />
          <input type="radio" name="fancy" value="hearts" id="hearts" />
          <input type="radio" name="fancy" value="spades" id="spades" />
          <input type="radio" name="fancy" value="diamonds" id="diamonds" />
          <label for="clubs">&#9827; Clubs</label>
          <label for="hearts">&#9829; Hearts</label>
          <label for="spades">&#9824; Spades</label>
          <label for="diamonds">&#9830; Diamonds</label>

          <div class="keys">Use left and right keys to navigate</div>
        </form>
      </div>
    );
  }
}
