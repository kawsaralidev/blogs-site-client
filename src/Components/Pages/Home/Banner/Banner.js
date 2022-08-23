import React from "react";
import "./Banner.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

const Banner = () => {
    return (
        <div className="mx-5 mt-4">
            <div className="row">
                <div className="col-md-6">
                    <span className="banner-text ">Main Stories</span>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/yyGLjsw/hacking-20.png"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <div className="text-start">
                                    <span className="span-text ">LATEST</span>
                                    <h3>
                                        What is Web3? An easy-to-understand and
                                        the relationship with Metaverse / NFT
                                    </h3>
                                    <span>20 Aug 2022 \ Ali</span>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/vLcN9Zw/hacking-25.png"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <div className="text-start">
                                    <span className="span-text ">LATEST</span>
                                    <h3>
                                        What is FinTech? Simple and clear
                                        explanations of word meanings using
                                        examples that are specific
                                    </h3>
                                    <span>20 Aug 2022 \ Ali</span>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/smpLVdD/hacking-28.png"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <div className="text-start">
                                    <span className="span-text ">LATESTt</span>
                                    <h3>
                                        5 Latest Technologies and Support Fin
                                        Tech
                                    </h3>
                                    <span>20 Aug 2022 \ Ali</span>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-md-3 ">
                    <div className="">
                        <span className="banner-text "> Editor's Pics</span>
                        <div className="">
                            <div className="banner2 pt-5 pb-3 text-start text-white px-2 mb-3">
                                <span className="span-text ">IT</span>
                                <h6 className="mt-2">
                                    10 Recommendations Application Development
                                    strategy for creating an effective App
                                </h6>
                                <span>18 Aug 2022</span>
                                <span>Monir</span>
                            </div>
                        </div>
                        <div className="">
                            <div className="banner3 pt-5 pb-4 text-start text-white px-2">
                                <span className="span-text ">IT</span>
                                <h6 className="mt-2">
                                    What is IoT? Easy-to-understand and easy
                                    explanation
                                </h6>
                                <span>18 Aug 2022</span>
                                <span>Monir</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 ">
                    <div className="">
                        <span className="banner-text "> Tech Trends</span>

                        <div className="">
                            <div className="banner4 pt-5 pb-3 text-start text-white px-2 mb-3">
                                <span className="span-text ">TECH TRENDS</span>
                                <h6 className="mt-2">
                                    10 websites with summaries of international
                                    UI/UX Design cases that can be used as a
                                    guide for app design
                                </h6>
                                <span>18 Aug 2022</span>
                                <span>Monir</span>
                            </div>
                        </div>
                        <div className="">
                            <div className="banner5 pt-5 pb-4 text-start text-white px-2">
                                <span className="span-text ">TECH TRENDS</span>
                                <h6 className="mt-2">
                                    What is a singularity? Uses are explained in
                                    an understandable
                                </h6>
                                <span>18 Aug 2022</span>
                                <span>Monir</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
