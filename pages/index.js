import React from 'react';
import Head from 'next/head'

import Header from '../components/Header'
import Starter from '../components/index/Starter'
import Factoids from '../components/index/Factoids'
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
            </div>
        )
    }
}

export default Index