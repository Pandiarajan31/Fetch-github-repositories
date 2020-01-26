import React from 'react';
import RepoListItem from './repoListItem';
import renderer from 'react-test-renderer'


//   renders correctly when change the viewdRepo count

it('renders correctly when change the viewdRepo count', () => {

    const component =renderer.create(
        <RepoListItem/>
    )
    const instance=component.getInstance()
    expect(instance.state.viewdRepo).toBe(0);
    instance.countViewdRepo()
    expect(instance.state.viewdRepo).toBe(1);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });