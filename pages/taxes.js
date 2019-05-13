import React from 'react';
import Head from 'next/head'

import data from './taxes.json'
import Header from './../components/Header'
import TaxesWrapper from './../components/taxes/TaxesWrapper'
import './../css/style.scss'

class Taxes extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            data
        }
    }
    render(){
        return(
            <div style={{backgroundColor: '#DCC3A6'}}>
                <Head>
                    <title>Налоговый советник | 3-НДФЛ</title>
                </Head>
                <Header />
                <TaxesWrapper services={this.state.data.services} />
            </div>
        )
    }
    
}

export default Taxes