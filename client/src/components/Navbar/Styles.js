import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  heading: {
    color: 'aliceblue',
    textDecoration: 'none',
    fontSize: '36px'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}));