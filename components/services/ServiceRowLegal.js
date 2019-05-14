import React from 'react';

import ServiceRowHeading from './serviceRowLegal/ServiceRowLegalHeading'
import ServiceRowContent from './serviceRowLegal/ServiceRowLegalContent'
import css from './../../css/services/serviceRowLegal.scss'

class ServiceRowLegal extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      isExpanded: false
    }
    this.expandHandler = this.expandHandler.bind(this)
  }

  render(){
    return(
        <div className={css.serviceRow}>
            <ServiceRowHeading
              expand={this.expandHandler}
              title={this.props.data.title}
              isExpanded={this.state.isExpanded}/>
            <ServiceRowContent
              isExpanded={this.state.isExpanded}
              data={this.props.data}/>
        </div>
    )
  }

  expandHandler(){
    this.setState({isExpanded: !this.state.isExpanded})
  }
}
export default ServiceRowLegal
