import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'

class Repo extends Component {
  render() {
  // Check for a or A
  var firstLetter = this.props.repo.owner.login.charAt(0)
  if (firstLetter==='a' || firstLetter==='A') {
    return (
      <div data-tip={this.props.repo.owner.followers} className="p-2 border flex-fixed-width-item" >
        <ReactTooltip />
        <img src={this.props.repo.owner.avatarUrl} alt="repo" width="100%"/>
      </div>
    )
  }

    return (
        <div className="p-2 border flex-fixed-width-item" >
          <img src={this.props.repo.owner.avatarUrl} alt="repo" width="100%"/>
        </div>
    )
  }

  _getFollowers = async () => {
    // implemented later
  }
}

export default Repo