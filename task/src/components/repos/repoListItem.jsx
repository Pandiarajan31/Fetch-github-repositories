import React, { Component } from 'react';
import Radium from 'radium';
import { v4 } from 'uuid';
import {
  STAR_REPOSITORY,
  UNSTAR_REPOSITORY
} from '../../actions/queries';
import { Mutation } from 'react-apollo';
import { styles } from '../styles/styles';

class RepoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarred: this.props.repository.viewerHasStarred,

    }

  }


  render() {
    const { id, viewerHasStarred } = this.props.repository;
   

    const addStarLoading = <div style={styles.gazers}>Sending the star...</div>;
    const removeStarLoading = <div>Removing the star...</div>;
    const errorDiv = err => <div className='error'>{err.message}</div>;

    const mutation = starred => {

        return <Mutation mutation={(!starred)?STAR_REPOSITORY:UNSTAR_REPOSITORY} variables={{ id }}>
          {(clickStar, { data, loading, error }) => {
            if (loading) return <div>{(!starred)?addStarLoading:removeStarLoading}</div>
            if (error) return errorDiv(error);
    

            return (
              <div style={styles.starring}>
                <div style={styles.gazers}>{(starred)?"starred":"not starred"}</div>
                <span
                 style={(!starred)?styles.button:styles.goldButton}
                 onClick={clickStar}
                 key={v4()}
                >★</span>
              </div>
            )
          }}
        </Mutation>
       
    }

    return (
      <li style={styles.repoListItem}>
        <h2 >Repo Name:<li style={styles.itemHeader}>{this.props.repository.name}</li></h2>
        <h5 style={styles.url}><a href={this.props.repository.url}
          style={styles.hover}>
          {this.props.repository.url}
        </a></h5>
        {mutation(viewerHasStarred)}
      </li>
    )
  }
}

export default Radium(RepoListItem);
