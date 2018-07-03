import React, { Component } from 'react'

class Repo extends Component {
  render() {
    return (
        <div className="p-2 border flex-fixed-width-item" >
          {this.props.repo.name}, {this.props.repo.owner.login}
        </div>
    )
  }

  _getFollowers = async () => {
    // implemented later
  }
}

export default Repo