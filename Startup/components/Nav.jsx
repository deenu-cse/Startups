import React from 'react'
import search from '../imagess/search.png'
import offer from '../imagess/offer.png'
import tiffin from '../imagess/tiffin.png'
import king from '../imagess/king.png'
import '../Styles/Nav.css'
import tag from '../imagess/tag.png'
import chef from '../imagess/chef.png'


export default function Nav() {
    return (
        <>
            <div className="navcon">
                <div className="navflex">
                    <div className="name">
                        <h2><img src={chef} />Unicorn</h2>
                    </div>
                    <div className="links">
                        <p><img src={search} />Search</p>
                        <p><img src={offer} />Offers<img className='tag' src={tag} /></p>
                        <p><img src={tiffin} />Tiffin</p>
                        <p><button className='gkv'>G.K.V</button><img className='gkvian' src={king} /></p>
                        <p><button className='sbtn'>SignIn</button></p>
                        <p><button className='sbtn'>LogIn</button></p>
                    </div>
                </div>
            </div>
        </>
    )
}
