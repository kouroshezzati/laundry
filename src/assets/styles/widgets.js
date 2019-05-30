const BORDER = '1px solid #dddddd';

export default {
  iconButton: {
    margin: '5px 0 0 0',
    fontSize: '1.5em',
    minHeight: '29px',
    minWidth: '29px',
    padding: '0',
    borderRadius: '50%'
  }
};

export const tableStyle = {
  headerStyle: {
    backgroundColor: '#EAEAEA',
    color: '#000',
    textAlign: 'center',
    border: BORDER
  },
  bodyStyle: {
    border: BORDER,
    padding: '3px',
    borderRadius: '0',
    fontSize: '1.1em'
  },
  buttonStyle: {
    border: BORDER,
    borderRadius: '0'
  },
  blueButton: { color: '#178EFE' },
  redButton: { color: '#f80c12' },
  greenButton: { color: '#5cb85c' }
};

export const listStyle = {
  listWrapper: {
    margin: '10px 10px 30px',
    padding: '10px'
  },
  row: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    padding: '3px'
  },
  valueStyle: { textAlign: 'left' }
};

const pageItem = {
  border: BORDER,
  cursor: 'pointer'
};

export const paginationStyle = {
  pagination: {
    userSelect: 'none',
    display: 'grid',
    gridAutoFlow: 'column',
    listStyleType: 'none',
    fontSize: '1.3em',
    padding: '0',
    '& li': {
      textAlign: 'center'
    }
  },
  activeClassName: { backgroundColor: '#178EFE', color: '#fff' },
  disabledClassName: {
    color: '#c6c6c6',
    backgroundColor: '#ececec',
    cursor: 'auto!important'
  },
  pageClassName: { ...pageItem },
  pageLinkClassName: { display: 'block' },
  breakClassName: { ...pageItem },
  nextClassName: { ...pageItem, '& a': { display: 'block' } },
  previousClassName: { ...pageItem, '& a': { display: 'block' } }
};

export const fontText = { fontFamily: 'Vazir' };
export const alignCenter = {
  textAlign: 'center'
};
