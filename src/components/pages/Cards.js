import React from 'react'
import CardItems from './CardItems'
import '../Cards.css'
function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItems src='https://images.unsplash.com/photo-1527610276295-f4c1b38decc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1534&q=80' text='Explore the hidden Waterfall Deep inside the Amazon Jungle'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItems src='https://images.unsplash.com/photo-1530948990335-1eb93cbe6430?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGlzbGFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
                        text='Travel through the Island of Bali in a Private Cruise'
                        label='Luxury'
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItems src='https://images.unsplash.com/photo-1439405326854-014607f694d7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b2NlYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
                        text='Set sail in the Atlantic Ocean visiting Uncharted Waters'
                        label='Mystery'
                        path='/services'
                        />
                        <CardItems src='https://images.unsplash.com/photo-1507491172689-b0d76aff90a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' 
                        text='Experience Football on Top of the Himalaya Mountains'
                        label='Adventure'
                        path='/products'
                        />
                         <CardItems src='https://images.unsplash.com/photo-1461237439866-5a557710c921?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80' 
                        text='Ride through the Sahara Deserts on a guided camel Tour'
                        label='Adventure'
                        path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

