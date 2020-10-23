import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Detail from './Detail/Detail';
import Reserver from './Reserver/Reserver';

class Reservation extends Component {
    state = {
        etape: 1
    }

    changerEtape = (newEtape) => {
        this.setState({
            etape: newEtape
        });
    }

    render() {
        const etape = this.state.etape;
        return (
            <div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-xs-12">
                            <aside className="b-blog__aside">
                                <form className="b-blog__aside-search wow zoomInUp" data-wow-delay="0.3s" action="/" method="post">
                                    <div>
                                        <input type="text" name="search" value="" placeholder="Search" />
                                        <button type="submit"><span className="fa fa-search"></span></button>
                                    </div>
                                </form>
                                <div className="b-blog__aside-categories wow zoomInUp" data-wow-delay="0.3s">
                                    <header className="s-lineDownLeft">
                                        <h2 className="s-titleDet">CATEGORIES</h2>
                                    </header>
                                    <nav>
                                        <ul className="b-blog__aside-categories-list">
                                            <li><a href="#">Auto Buying Tips &amp; Advice</a></li>
                                            <li><a href="#">Latest Models News</a></li>
                                            <li className="m-active"><a href="#">Test Drives</a></li>
                                            <li><a href="#">Video Reviews</a></li>
                                            <li><a href="#">Analysis &amp; Features</a></li>
                                        </ul>
                                    </nav>
                                </div>

                            </aside>
                        </div>
                        <div className="col-md-9 col-xs-12">
                            <div className="b-blog__posts">
                                <div className="b-blog__posts-one wow zoomInUp" data-wow-delay="0.3s">
                                    <div className="row">
                                        <div className="col-xs-8">
                                            <header className="b-blog__posts-one-body-head s-lineDownLeft">
                                                <div className="b-blog__posts-one-body-head-notes">
                                                    <span className="b-blog__posts-one-body-head-notes-note"><span className="fa fa-user"></span>Our Admin</span>
                                                    <span className="b-blog__posts-one-body-head-notes-note"><span className="fa fa-calendar-o"></span>20th May 2015</span>
                                                    <span className="b-blog__posts-one-body-head-notes-note"><span className="fa fa-comment"></span>5 Comments</span>
                                                </div>
                                                <h2 className="s-titleDet">Redesigned 2016 Nissan Maxima Introduced</h2>
                                            </header>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-4 pull-right">
                                            <img className="img-responsive center-block" src="media/blog/nissanBlogTwo.jpg" alt="nissan" />
                                        </div>
                                        <div className="col-xs-8 pull-right">
                                            <div className="b-blog__posts-one-info">
                                                <p>
                                                    Curabitur libero. Donec facilisis velit eu est. Phasellus cons quat. Aenean vitae quam. Vivamu sd nunc. Nunc conseq usemdw veld metus imperdiet lacinia. In viverra dolor non justo. Proin molest erat inder rhoncus posuere de nibh quam  onsectet uer lectus acwl vulputate ligulad lorem dolor. Donec nunc. Suspendisse potent. Integer blandit massa sit amet condimentum laoreet diam elementum urna sed tincidunt lacus sapien.
                                                    </p>

                                                <button onClick={() => this.changerEtape(3)} type="button">Détails</button>
                                                <button onClick={() => this.changerEtape(4)} type="button" className="btn m-btn m-readMore">Réserver<span className="fa fa-angle-right"></span></button>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    {etape === 3 ? (<Detail />) : null}
                </div>


                { etape === 4 ? (<Reserver />) : null}
            </div >
        )
    }
}
export default Reservation;