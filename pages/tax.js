import React from 'react';
import Head from 'next/head'
import { withRouter } from 'next/router'

import data from './taxes.json'

import Header from './../components/Header'
import TaxesPage from './../components/taxes/TaxesPage'
import '../css/style.scss'

const Tax = withRouter(props => {
    let e = {}
    data.services.map(elem => {
        if(elem.id == props.router.query.id)
            e = elem
    })

    return (
        <div>
            <style JSX>
                {`
                    body{
                        background-color: #DCC3A6;
                        padding-bottom: 100px;
                    }
                `}
            </style>
            <Head>
                    <title>Налоговый советник | {e.name}</title>
                    <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
                    <link rel="manifest" href="/static/favicon/site.webmanifest" />
                    <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#6b4f38" />
                    <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
                    <meta name="msapplication-TileColor" content="#7b5638" />
                    <meta name="msapplication-config" content="/static/favicon/browserconfig.xml" />
                    <meta name="theme-color" content="#ffffff" />
            </Head>
            <Header />
            <TaxesPage data={e} />
        </div>
    )
})



export default Tax