import React from 'react';
import Radium from 'radium';
import { Query } from 'react-apollo';
import RepoListItem from './repoListItem';
import { GET_REPOSITORIES } from '../../actions/queries';
import loader from '../../assets/images/loading.gif'
import { styles } from '../styles/styles';

class RepoList extends React.Component {
  render() {
    const { inputSearch,toggleState,changeToggle,repoSearch } = this.props;
    const errorDiv = err => <div className='error'>{err.message}</div>

    const query = (login = '') => (
      <Query query={GET_REPOSITORIES} variables={{ login }}>
        {
          ({ loading, error, data }) => {
            if (loading) return <div style={styles.loading}><img alt="loader" src={loader}/></div>
            if (error) return errorDiv(error);

            if (
              data &&
              data.repositoryOwner &&
              data.repositoryOwner.repositories
            ) {
              const repos = data.repositoryOwner.repositories.nodes;

              const renderingRepos =(repoSearch === "")? repos.map(repo =>
                <RepoListItem repository={repo} repoSearch={repoSearch}
                  key={repo.id} changeToggle={this.props.changeToggle} toggleState={this.props.toggleState} />
              ):  repos.map(repo =>
              (repo.name.toLowerCase().includes(repoSearch.toLowerCase()))&&<RepoListItem repository={repo} repoSearch={repoSearch}
              key={repo.id} changeToggle={this.props.changeToggle} toggleState={this.props.toggleState} />
              )
              ;
              const starredRepos = (repoSearch === "")?repos.map(repo =>
               ( (toggleState === "starred")?repo.viewerHasStarred:repo.viewerHasStarred === false) &&
                <RepoListItem repository={repo} repoSearch={repoSearch}
                  key={repo.id} changeToggle={this.props.changeToggle} toggleState={this.props.toggleState} />
              ):
              repos.map(repo =>
                ( (toggleState === "starred")?repo.viewerHasStarred:repo.viewerHasStarred === false) &&(repo.name.toLowerCase().includes(repoSearch.toLowerCase()))&&
                 <RepoListItem repository={repo} repoSearch={repoSearch}
                   key={repo.id} changeToggle={this.props.changeToggle} toggleState={this.props.toggleState} />
               )
              ;
              const count = renderingRepos.length;
              const countStarred = starredRepos.length;

              return (
                <div>
                  <h3 style={styles.count}>
                    Total result <p style={styles.number}>{count}</p> 
                  </h3>
                  <div style={styles.sample} >
                    <ul style={styles.repoList} >
                      {(count > 0) && <h1 style={styles.totalList}>Total Repo List</h1>}

                      {renderingRepos}
                    </ul>
                    <ul style={styles.starredList} >
                      {(countStarred > 0) &&
                        <>
                            <label style={styles.setSpace}>Show Starred Repo</label>
                            <input style={styles.setSpace} type="radio" name="repo" value="starred" checked={toggleState === "starred"} onChange={(e)=>changeToggle(e)} />
                            <br style={styles.setLine}/>
                            <label style={styles.setSpace}>Show Unstarred Repo</label>
                            <input style={styles.setSpace} type="radio" name="repo" value="unstarred"  checked={toggleState === "unstarred"} onChange={(e)=>changeToggle(e)}  />
                          <h1 style={styles.filteredList}>Total Repo List</h1>
                        </>
                      }
                      {starredRepos}
                    </ul>
                  </div>

                </div>
              )
            } else {
              return <div></div>
            }
          }
        }
      </Query>
    );
    return (
      <div className='repo-list'>
        {query(inputSearch)}
      </div>
    )
  }
}

export default Radium(RepoList);