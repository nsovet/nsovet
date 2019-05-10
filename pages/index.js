import React from 'react';
import Head from 'next/head'

import Header from '../components/Header'
import Starter from '../components/index/Starter'
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
            </div>
        )
    }
}

export default Index