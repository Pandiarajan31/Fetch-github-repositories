import React, { Component } from 'react';
import Radium from 'radium';
import { styles } from '../styles/styles';
import RepoList from '../repos/repoList';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repoSearch: '',
      toggleState: "starred"
    }
  }

  changeToggle = (e) => {
    this.setState({ toggleState: e.target.value });
  }

  search(e) {
    this.setState({ submitted: true });
  }

  render() {
    const { toggleState, repoSearch } = this.state;

    const repoList = <RepoList repoSearch={repoSearch} toggleState={toggleState} changeToggle={this.changeToggle} inputSearch={this.props.location.state.username} />;
    return (
      <div>
        <div style={styles.dashboard}>
          <input type='text'
            className='search'
            placeholder='Search GitHub Repo Name'
            required
            onChange={e => this.setState({ repoSearch: e.target.value })}
            style={styles.input} />
        </div>

        <div>
          {repoList}
        </div>
      </div>
    )
  }
}

export default Radium(Dashboard);