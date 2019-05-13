import React from 'react';
import Link from 'next/link'

import css from './../../css/taxes/taxesPageCard.scss'

class TaxesPageCard extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            new: 0,
            data: this.props.data
        }
        this.switchAppartment = this.switchAppartment.bind(this)
    }
    
    render(){
        if(this.state.data.appartment)
            return(
                <div className={css.cardWrapper}>
                    <div className={css.cardControls}>
                        <div><img src='/static/hole.svg' /></div>
                        <Link href={'/taxes'}><a><img src='/static/close.svg' /></a></Link>
                    </div>
                    <div className={css.cardContent}>
                        <img src={this.state.data.image} />
                        <h1>{this.state.data.name}</h1>
                        <p>{this.state.data.description}</p>
                        <div className={css.cardContentTags}>
                            <div className={css.cardContentTag}>
                                <img src='/static/price.svg' />
                                <span>{this.state.data.price}</span>
                            </div>
                            <div className={css.cardContentTag}>
                                <img src='/static/time.svg' />
                                <span>{this.state.data.time}</span>
                            </div>
                        </div>
                        <div className={css.cardContentDocsWrapper}>
                            <h2>Необходимые документы: </h2>
                            <div className={css.cardContentDocsControlls}>
                                <div 
                                className={(this.state.new == 0) ? css.cardContentControllsActive : css.cardContentControllsInactive}
                                onClick={this.switchAppartment.bind(null, 0)}
                                >
                                    Новостройка
                                </div>
                                <div 
                                className={(this.state.new == 1) ? css.cardContentControllsActive : css.cardContentControllsInactive}
                                onClick={this.switchAppartment.bind(null, 1)}
                                >
                                    Вторичка
                                </div>
                            </div>
                            <ul>
                                {this.state.data.documents[this.state.new].map(elem => 
                                    <li>{elem}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
        )
        else
            return(
                <div className={css.cardWrapper}>
                    <div className={css.cardControls}>
                        <div><img src='/static/hole.svg' /></div>
                        <Link href={'/taxes'}><a><img src='/static/close.svg' /></a></Link>
                    </div>
                    <div className={css.cardContent}>
                        <img src={this.state.data.image} />
                        <h1>{this.state.data.name}</h1>
                        <p>{this.state.data.description}</p>
                        <div className={css.cardContentTags}>
                            <div className={css.cardContentTag}>
                                <img src='/static/price.svg' />
                                <span>{this.state.data.price}</span>
                            </div>
                            <div className={css.cardContentTag}>
                                <img src='/static/time.svg' />
                                <span>{this.state.data.time}</span>
                            </div>
                        </div>
                        <div className={css.cardContentDocsWrapper}>
                            <h2>Необходимые документы: </h2>
                            <ul>
                                {this.state.data.documents.map(elem => 
                                    <li>{elem}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            )
    }

    switchAppartment(content){
        this.setState({new: content})
    }
}

export default TaxesPageCard