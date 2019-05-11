import React from 'react';
import Head from 'next/head'

import Header from '../components/Header'
import Starter from '../components/index/Starter'
import Factoids from '../components/index/Factoids'
import Promises from '../components/index/Promises'
import Services from '../components/index/Services'
import Recomendations from '../components/index/Recomendations'
import Map from '../components/index/Map'
import '../css/style.scss'


class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Head>
                    <title>Налоговый советник</title>
                </Head>

                <Header />
                <Starter />
                <Factoids />
                <Promises />
                <Services />
                <Recomendations />
                <Map />
            </div>
        )
    }
}

export default Index