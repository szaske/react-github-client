import React, { Component } from 'react'
import Repo from './Repo'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import '../styles/RepoList.css';

// Repo Search
const REPO_SEARCH = gql`
query ($repoCount: Int){
  search(count:$repoCount){
    repos{
      name
      id
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
      repoCount: 0,
      width: 0,
      height: 0,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  // Method to determine window size. 
  // Used to determine how many repos/imgs to request
  // Divided by 14400 because our imgs are 120x120
  updateWindowDimensions() {
    this.setState({ 
      width: window.innerWidth, 
      height: window.innerHeight,
      repoCount: Math.floor(window.innerWidth*window.innerHeight/14400)
    })
  }

  render() {
    return (
      <Query 
        query={REPO_SEARCH} 
        skip={!this.state.repoCount} 
        variables={{repoCount: this.state.repoCount}}
      >
        {({loading, error, data}) => {
            if (loading) return (
              <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                  loading...
                </div>  
              </div>
            );
            if (error || data.search == null) return (
              <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                  something went wrong :(
                </div>  
              </div>
            );
            return (
              <div className="container-fluid h-90">
                <div className="row d-flex flex-wrap justify-content-center bg-light-gray" >{data.search.repos.map(repo => <Repo key={repo.id} repo={repo} />)}</div>
              </div>
            ) 
        }}
      </Query>
    )
  }
}