import React, { Component } from 'react'
import { Tooltip } from 'react-tippy';

class Repo extends Component {
  render() {
  // Check for a or A
  var firstLetter = this.props.repo.owner.login.charAt(0)
  if (firstLetter==='a' || firstLetter==='A') {
    return (
        <div className="p-2 border flex-fixed-width-item" >
          <Tooltip 
            title={this.props.repo.owner.followers} 
            html={(
              <div style={{ maxWidth: 200 }}>
                {this.props.repo.owner.followers}
              </div>
            )}
            inertia="true"
            size="small"
            duration="300"
            position="top">
            <img src={this.props.repo.owner.avatarUrl} alt="repo" width="100%"/>
          </Tooltip>
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