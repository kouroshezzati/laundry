const pageItem = {
  border: '1px solid #dddddd',
  cursor: 'pointer'
};
export default {
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
