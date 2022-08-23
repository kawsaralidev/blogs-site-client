import React from "react";
import "./Inteligence.css";

const Inteligence = ({ int }) => {
    const { description, title, date, name, image } = int;
    return (
        <div className=" col-lg-12 mx-2 col-sm-12">
            <div className="row  col-sm-12">
                <div className="art_box d-flex">
                    <div>
                        <img className="art_img" src={image} alt="" />
                    </div>

                    <div className="px-3  text-start">
                        <h6 className="text_style">{title}</h6>
                        <p>{description}</p>
                        <div
                            style={{
                                marginTop: "-17px",
                            }}
                        >
                            <span
                                style={{
                                    marginRight: "10px",
                                }}
                            >
                                {name}
                            </span>
                            <span>{date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inteligence;
