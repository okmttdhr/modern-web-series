import React from 'react';

class MessageEntryBox extends React.Component {
  static propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.state = {
      message: {
        value: '',
        valid: true,
      },
    };
  }

  changeMessage(e) {
    const message = {
      ...this.state.message,
      value: e.target.value,
    };
    this.setState({message});
  }

  postMessage(e) {
    const enterKey = 13;
    if (e.which === enterKey) {
      console.log('hey');
      e.preventDefault();
      this.props.onSubmit(this.state.message.value);
      const message = {
        ...this.state.message,
        value: '',
      };
      this.setState({message});
    }
  }

  render() {
    return (
      <div className='MessageEntryBox'>
        <input
          name='message'
          value={this.state.message.value}
          onChange={::this.changeMessage}
          onKeyPress={::this.postMessage}/>
      </div>
    );
  }
}

export default MessageEntryBox;
