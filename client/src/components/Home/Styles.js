import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgb(0, 80, 200)',
    fontSize: '36px',
    fontFamily: `'Ubuntu', sans-serif`,
  },
  image: {
    marginLeft: '0px',
  },
}));
