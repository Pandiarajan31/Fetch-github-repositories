import React, { Component } from 'react';
import Radium from 'radium';
import { styles } from '../styles/styles';
import RepoList from '../repos/repoList';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSearch: '',
      toggleState:"starred"
    }
  }

  changeToggle=(e)=> {
    this.setState({ toggleState: e.target.value });
  }

  search(e) {
    this.setState({ submitted: true });
  }
  
  render() {
    const { inputSearch,toggleState } = this.state;
    const repoList = <RepoList toggleState={toggleState} changeToggle={this.changeToggle} inputSearch={ inputSearch } />;
    return (
      <div>
        <div style={ styles.dashboard }>
          <input type='text'
            className='search'
            placeholder='Search GitHub by Username'
            required
            onChange={ e => this.setState({ inputSearch: e.target.value }) }
            style={ styles.input } />
        </div>

        <div>
          { repoList }
        </div>
      </div>
    )
  }
}

export default Radium(Dashboard);