import React, { Component } from 'react'
import Repo from './Repo'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class RepoList extends Component {
  render() {
  // 1
  if (this.props.repoQuery && this.props.repoQuery.loading) {
    return <div>Loading</div>
  }

  // 2
  if (this.props.repoQuery && this.props.repoQuery.error) {
    return <div>Error</div>
  }

  // 3
  const reposToRender = this.props.repoQuery.repos

    return (
      <div className="d-flex flex-wrap bg-light" >{reposToRender.map(repo => <Repo key={repo.name} repo={repo} />)}</div>
    )
  }
}

// 1
const REPO_QUERY = gql`
  query RepoQuery {
    repos{
      name
      owner{
        login
        avatarUrl
      }
    }
  }
`

export default graphql(REPO_QUERY, {name: 'repoQuery'}) (RepoList)