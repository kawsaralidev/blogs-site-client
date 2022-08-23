import React, { useState, useEffect } from "react";
import Popular from "./Popular";

const PopularStories = () => {
    const [story, setStory] = useState([]);

    useEffect(() => {
        fetch("./popularStories.json")
            .then((res) => res.json())
            .then((data) => setStory(data));
    });
    return (
        <div className="mx-5 mt-4">
            <span className="banner-text ">Popular Stories</span>
            <div className="row">
                {story.map((story) => (
                    <Popular storys={story}></Popular>
                ))}
            </div>
        </div>
    );
};

export default PopularStories;
