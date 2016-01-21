import React, { Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'

class HeaderSelect extends Component {
  saveHeaders() {
    actions.menuViewToggleExpanded('headerSelect', false)
  }
  render() {
    const {actions, headerData} = this.props
    return (
      <div className='headerSelectContainer'>
        <div className='menuViewSection' onClick={()=>actions.menuViewToggleExpanded('headerSelect', false)}>
          <div className='menuViewSectionLabel'>Edit Menu Headers</div>
        </div>
        <div className='headerFormContainer'>
          <label forHtml='headerTitle'>Name:</label>
            <input name='headerTitle' ref='headerTitle' type='text' defaultValue={ headerData.title }/>
          <label forHtml='headerDescription'>Description:</label>
            <input name='headerDescription' ref='headerDescription' type='text' defaultValue={ headerData.description }/>
          <label forHtml='headerDate'>Date:</label>
            <input name='headerDate' ref='headerDate' type='text' defaultValue={ headerData.date }/>

          <button className='formSave' onClick={() => (actions.saveHeaderData( 
                  {
                    'title': ReactDOM.findDOMNode(this.refs.headerTitle).value,
                    'description': ReactDOM.findDOMNode(this.refs.headerDescription).value,
                    'date': ReactDOM.findDOMNode(this.refs.headerDate).value
                  }), actions.menuViewToggleExpanded('headerSelect', false))}>save</button>
        </div>
      </div>)
  }
}

export default HeaderSelect