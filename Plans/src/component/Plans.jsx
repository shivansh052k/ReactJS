import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Text.css';

const AboutUs = () => {
    return (
        <div className="row crow">
            <div className="col-md-10 cobox">
                <h1 className="text2">Our Plans</h1>
               <div class="content"><div class="legal">
               <div class="wrapper">
        <div class="pricing-table group">
            <div class="block personal fl">
                <h2 class="title">personal</h2>
                <div class="content">
                    <p class="price">
                        <sup>$</sup>
                        <span>29</span>
                        <sub>/mo.</sub>
                    </p>
                    <p class="hint">Perfect for freelancers</p>
                </div>
                <ul class="features">
                    <li><span class="fontawesome-cog"></span>1 WordPress Install</li>
                    <li><span class="fontawesome-star"></span>25,000 visits/mo.</li>
                    <li><span class="fontawesome-dashboard"></span>Unlimited Data Transfer</li>
                    <li><span class="fontawesome-cloud"></span>10GB Local Storage</li>
                </ul>
                <div class="pt-footer">
                <p><a href ="#">Buy Now</a></p>
                </div>
            </div>
            <div class="block professional fl">
                <h2 class="title">Professional</h2>
                <div class="content">
                    <p class="price">
                        <sup>$</sup>
                        <span>99</span>
                        <sub>/mo.</sub>
                    </p>
                    <p class="hint">Suitable for startups</p>
                </div>
                <ul class="features">
                    <li><span class="fontawesome-cog"></span>10 WordPress Install</li>
                    <li><span class="fontawesome-star"></span>100,000 visits/mo.</li>
                    <li><span class="fontawesome-dashboard"></span>Unlimited Data Transfer</li>
                    <li><span class="fontawesome-cloud"></span>20GB Local Storage</li>
                </ul>
                <div class="pt-footer">
                <p><a href ="#">Buy Now</a></p>
                </div>
            </div>
            <div class="block business fl">
                <h2 class="title">Business</h2>
                <div class="content">
                    <p class="price">
                        <sup>$</sup>
                        <span>249</span>
                        <sub>/mo.</sub>
                    </p>
                    <p class="hint">For established business</p>
                </div>
                <ul class="features">
                    <li><span class="fontawesome-cog"></span>25 WordPress Install</li>
                    <li><span class="fontawesome-star"></span>400,000 visits/mo.</li>
                    <li><span class="fontawesome-dashboard"></span>Unlimited Data Transfer</li>
                    <li><span class="fontawesome-cloud"></span>30GB Local Storage</li>
                </ul>
                <div class="pt-footer">
                    <p><a href ="#">Buy Now</a></p>
                </div>
            </div>
        </div>
    </div>
                </div>
                    </div>
                        </div>
                            </div>
    );
};

export default AboutUs;