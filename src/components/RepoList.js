import React, { Component } from 'react'
import Repo from './Repo'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

// Repo Search
const REPO_SEARCH = gql`
query ($repoCount: Int){
  search(count:$repoCount){
    repos{
      name
      owner{
        login
        avatarUrl
        followers
      }
    }
  }
}`

export default class RepoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repoCount: 18
    }
  }

  render() {
    return (
      <Query 
        query={REPO_SEARCH} 
        skip={!this.state.repoCount} 
        variables={{repoCount: this.state.repoCount}}
      >
        {({loading, error, data}) => {
            if (loading) return <h1>loading</h1>;
            if (error) return <h1>Something went wrong.</h1>;

            // const reposToRender = data.search.repos
            console.log(data)
            return (
              //<div>results</div>
              <div className="d-flex flex-wrap bg-light" >{data.search.repos.map(repo => <Repo key={repo.name} repo={repo} />)}</div>
            ) 
        }}
      </Query>
    )
  }
}