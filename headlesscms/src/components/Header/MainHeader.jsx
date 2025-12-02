import React from 'react'
import Logo from "../../assets/images/logo.svg"
import BarIcon from "../../assets/images/bar-1.svg"
import DairyIcon from "../../assets/images/01.svg"
import MeatsIcon from "../../assets/images/02.svg"
import FruitsIcon from "../../assets/images/03.svg"
import VegetablesIcon from "../../assets/images/04.svg"
import GroceriesIcon from "../../assets/images/05.svg"
import BeveragesIcon from "../../assets/images/06.svg"
import SnacksIcon from "../../assets/images/07.svg"
import HomeIcon from "../../assets/images/08.svg"
import CleaningIcon from "../../assets/images/09.svg"
import OtherIcon from "../../assets/images/10.svg"
import {Plus} from 'lucide-react';

const MainHeader = () => {
  return (
    <header>
        <div className="main-header">
            <div className="container">
                <div className="row">
                    <div className="header-content">
                        <div className="main-logo">
                            <a href="/"><img src={Logo} alt="logo" /></a>
                        </div>
                        <div className="category-search-wrapper">
                            <div className="category-btn category-hover">
                                <div>
                                    <img src={BarIcon} alt="icons" />
                                    <span>Categories</span>
                                </div>                                
                                <div>
                                    <ul className="category-sub-menu" id="category-active-four">
                                        <li>
                                            <a href="#" className="menu-item">
                                            <img src={DairyIcon} alt="icons" />
                                            <span>Breakfast &amp; Dairy</span>
                                                <Plus />
                                            </a>

                                            <ul className="submenu mm-collapse">
                                            <li><a className="mobile-menu-link" href="/shop">Breakfast</a></li>
                                            <li><a className="mobile-menu-link" href="/shop">Dinner</a></li>
                                            <li><a className="mobile-menu-link" href="/shop">Pumking</a></li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="#" className="menu-item">
                                            <img src={MeatsIcon} alt="icons" />
                                            <span>Meats &amp; Seafood</span>
                                                <Plus />
                                            </a>

                                            <ul className="submenu mm-collapse">
                                            <li><a className="mobile-menu-link" href="/shop">Breakfast</a></li>
                                            <li><a className="mobile-menu-link" href="/shop">Dinner</a></li>
                                            <li><a className="mobile-menu-link" href="/shop">Pumking</a></li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="#" className="menu-item">
                                            <img src={FruitsIcon} alt="icons" />
                                            <span>Breads &amp; Bakery</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="menu-item">
                                            <img src={VegetablesIcon} alt="icons" />
                                            <span>Chips &amp; Snacks</span>
                                                <Plus />
                                            </a>

                                            <ul className="submenu mm-collapse">
                                            <li><a className="mobile-menu-link" href="/shop">Breakfast</a></li>
                                            <li><a className="mobile-menu-link" href="/shop">Dinner</a></li>
                                            <li><a className="mobile-menu-link" href="/shop">Pumking</a></li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="#" className="menu-item">
                                            <img src={GroceriesIcon} alt="icons" />
                                            <span>Medical Healthcare</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="menu-item">
                                            <img src={BeveragesIcon} alt="icons" />
                                            <span>Breads &amp; Bakery</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="menu-item">
                                            <img src={SnacksIcon} alt="icons" />
                                            <span>Biscuits &amp; Snacks</span>
                                                <Plus />
                                            </a>

                                            <ul className="submenu mm-collapse">
                                            <li><a className="mobile-menu-link" href="/shop">Breakfast</a></li>
                                            <li><a className="mobile-menu-link" href="/shop">Dinner</a></li>
                                            <li><a className="mobile-menu-link" href="/shop">Pumking</a></li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="#" className="menu-item">
                                            <img src={HomeIcon} alt="icons" />
                                            <span>Frozen Foods</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="menu-item">
                                            <img src={CleaningIcon} alt="icons" />
                                            <span>Grocery &amp; Staples</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="menu-item">
                                            <img src={OtherIcon} alt="icons" />
                                            <span>Other Items</span>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <form className="search-header">
                                <input type="text" placeholder="Search for products, categories or brands" required="" />
                                <button type="submit" className="rts-btn btn-primary radious-sm with-icon">
                                    <div className="btn-text">Search</div>
                                    <div className="arrow-icon"><i className="fa-light fa-magnifying-glass"></i></div>
                                </button>
                            </form>
                        </div>
                        <div className="wishlist-cart-area">
                            <a href="/account" className="btn-border-only account">
                                <i className="fa-light fa-user"></i>Account </a>
                            <a href="/shop-compare" className="btn-border-only account compare-number">
                                <i className="fa-regular fa-code-compare"></i>
                                <span className="number">0</span>
                            </a>
                            <div className="btn-border-only cart category-hover-header">
                                <i className="fa-regular fa-heart"></i>
                                <span className="text">Wishlist</span>
                                <span className="number">0</span>
                                <div className="category-sub-menu card-number-show">
                                    <h5 className="shopping-cart-number">Wishlist </h5>
                                    <div className="sub-total-cart-balance">
                                        <div className="bottom-content-deals mt--10">
                                        <div className="top">
                                            <span>Sub Total:</span>
                                            <span className="number-c">$0.00</span>
                                        </div>
                                        <div className="single-progress-area-incard">
                                            <div className="progress">
                                            <div className="progress-bar wow fadeInLeft" role="progressbar" ></div>
                                            </div>
                                        </div>
                                        <p>Spend More <span>$125.00</span> to reach <span>Free Shipping</span>
                                        </p>
                                        </div>
                                        <div className="button-wrapper d-flex align-items-center justify-content-between">
                                        <a href="/wishlist" className="rts-btn btn-primary">View Wishlist</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default MainHeader