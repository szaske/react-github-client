import React, { Component } from 'react'
import Repo from './Repo'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class RepoList extends Component {
  render() {
    console.log(this.props.repoQuery)
  // While loading
  if (this.props.repoQuery && this.props.repoQuery.loading) {
    return <div>Loading</div>
  }

  // If errors returned
  if (this.props.repoQuery && this.props.repoQuery.error) {
    return <div>Error</div>
  }

  // We have data, render it
  const reposToRender = this.props.repoQuery.repos
  
  return (
    <div className="d-flex flex-wrap bg-light" >{reposToRender.map(repo => <Repo key={repo.name} repo={repo} />)}</div>
  )
  }
}

// The query
const REPO_QUERY = gql`
  query RepoQuery {
    repos{
      name
      owner{
        login
        avatarUrl
        followers
      }
    }
  }
`

export default graphql(REPO_QUERY, {name: 'repoQuery'}) (RepoList)