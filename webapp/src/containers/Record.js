import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { deleteData, modifyData } from '../actions'
import InputBox from '../components/InputBox'

class Record extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleModify = this.handleModify.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = { modifiedId: props.modifiedId }
  }

  handleDelete(id) {
    const { dispatch } = this.props
    dispatch(deleteData(id))
  }

  handleModify(id) {
    this.setState({ modifiedId: id })
  }

  handleSubmit(id, text) {
    const { dispatch, modifiedId } = this.props
    dispatch(modifyData(id, text))
    this.setState({ modifiedId })
  }

  render() {
    let linkStyle = {
      textDecoration: 'underline',
      color: 'blue',
      cursor: 'pointer'
    }
    return (
      <div>
        <ul>
          {_.map(this.props.records, (item, index) => (
            this.state.modifiedId === item.id
              ? (
              <li key={index}>
                <InputBox onSubmit={this.handleSubmit} id={item.id} defaultValue={item.title} />
              </li>)
              : (
              <li key={index}>
                <p>{item.title}
                  {'  '}
                  <a onClick={(e) => {
                    e.preventDefault()
                    this.handleModify(item.id)
                  }} style={linkStyle}
                  >修改</a>
                  {'  '}
                  <a onClick={(e) => {
                    e.preventDefault()
                    this.handleDelete(item.id)
                  }} style={linkStyle}
                  >删除</a>
                </p>
              </li>)
          ))}
        </ul>
      </div>
    )
  }
}

Record.propTypes = {
  records: PropTypes.array.isRequired,
  dispatch: PropTypes.func,
  modifiedId: PropTypes.number
}

Record.defaultProps = {
  modifiedId: null
}

export default connect()(Record)
