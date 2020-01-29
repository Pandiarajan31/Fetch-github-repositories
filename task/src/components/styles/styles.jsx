export const colors = {
  gold:"#FFD700",
  purple: '#ab20c8',
  cream: '#e9ebf8',
  blue: '#79addc',
  salmon: '#ffc09f',
  yellow: '#ffee93',
  grey:"#ABABAB",
  lightBlue:" #4da6ff"
}

export const styles = {
  app: {
    height: '110%',
  },
  dashboard: {
    textAlign: 'center'
  },
  input: {
    border:`2px solid ${colors.grey}`,
    color: colors.lightBlue,
    width: '400px',
    textAlign: 'center',
    ':focus': {
      outline: 'none'
    },
    '@media (max-width: 415px)': {
      width: '90%',
      fontSize: '.8em'
    },
    '@media (max-width: 315px)': {
      fontSize: '.6em'
    },
    '@media (max-width: 250px)': {
      fontSize: '.5em'
    },
  },
  header: {
    color: colors.purple,
    fontSize: '2em',
    textAlign: 'center',
    fontWeight: 'bolder',
    padding: '1em 0',
  },
  footer: {
    backgroundColor: colors.yellow,
    borderTop: '1px solid lightgray',
    bottom: 0,
    color: colors.purple,
    display: 'flex',
    flexDirection: 'horizontal',
    justifyContent: 'space-evenly',
    fontSize: '1.5em',
    height: '36px',
    overflow: 'hidden',
    position: 'fixed',
    textAlign: 'center',
    width: '100%',
    zIndex: 10,
  },
  hover: {
    ':hover': {
      color: colors.salmon
    }
  },
  sample:{
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    gridTemplateRows: 'auto',
  },
  repoList: {
    display: 'inline-grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: 'auto',
    textAlign: 'center',
    width: '100%',
    '@media (max-width: 1100px)': {
      gridTemplateColumns: '100%',
    }
  },
  starredList:{
    textAlign: 'center',
    width: '100%',

  },
  repoListItem: {
    margin: '1em',
    padding: '.7em',
    border: `1px solid ${ colors.grey }`,
    borderRadius: '5px',
    '@media (max-width: 750px)': {
      margin: '1em .5em',
    },
  },
  itemHeader: {
    fontWeight: 'bold',
    fontSize: '1.8em',
    '@media (max-width: 600px)': {
      fontSize: '1em',
    },
    '@media (max-width: 475px)': {
      fontSize: '1em .5em',
    }, 
    '@media (max-width: 375px)': {
      fontSize: '1em',
    }
  },
  setSpace:{
    marginLeft: "10px",
    '@media (max-width: 705px)': {
      fontSize: '12px',
    }, 
    
  },
  setLine:{
    display:"none",
    '@media (max-width: 590px)': {
      display:"inline",
    }
    },
  totalList:{
    marginTop: "28px",
    '@media (max-width: 590px)': {
      marginTop: "45px",
    }
  },
  filteredList:{
    marginTop: "10px"
  },
  starring: {
    display: 'flex',
    flexDirection: 'horizontal',
    justifyContent: 'space-evenly'
  },
  gazers: {
    margin: 'auto 0'
  },
  count: {
    fontSize: '1em',
    textAlign: 'center',
    margin: '1.5em 0',
  },
  number: {
    color: colors.purple,
    fontWeight: 'bold',
    display: 'inline'
  },
  button: {
    color: colors.grey,
    fontSize:35,
    cursor:"pointer"
  },
  goldButton:{
    color: colors.gold,
    fontSize:35,
    cursor:"pointer"
  },
  centerButton:{
    margin: "auto",
    display: "block"
  },
  url: {
    '@media (max-width: 690px)': {
      fontSize: '.5em'
    },
    '@media (max-width: 475px)': {
      fontSize: '.4em',
    },
    '@media (max-width: 380px)': {
      fontSize: '5px',
    },
  },
  loading: {
    textAlign: 'center',
    marginTop:10
  },
  space: {
    padding: '20px 0'
  }
}
