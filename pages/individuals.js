import Head from 'next/head'

import Header from '../components/Header'
import ServiceTable from '../components/services/ServiceTable'
import ServiceSwitch from '../components/services/ServiceSwitch'
import ServiceHeading from '../components/services/ServiceHeading'
import data from './enterprenuer.json'
import '../css/style.scss'


class Index extends React.Component{
  constructor(){
    super()

    this.state = {account: true, data}
    this.handleChange = this.handleChange.bind(this)
  }

  render(){
    return(
        <div>
            <Head>
                <title>Налоговый советник | Индивидуальные предприниматели</title>
            </Head>
            <Header />
            <ServiceHeading heading='Индивидуальные предприниматели'/>
            <ServiceSwitch onClick={this.handleChange} account={this.state.account}/>
            <ServiceTable account={this.state.account} data={this.state.data}/>
        </div>
    )
  };

  handleChange(content){
    this.setState({account: content})
  }
}

export default Index
