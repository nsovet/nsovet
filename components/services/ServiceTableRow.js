import React from 'react';

import ServiceRowAccount from './ServiceRowAccount'
import ServiceRowLegal from './ServiceRowLegal'

export default ({account, data}) => {
    if(account)
        return(
            data.account.map(e => <ServiceRowAccount data={e} />)
        )
    else
        return(
            data.legal.map(e => <ServiceRowLegal data={e} />)
        )
}