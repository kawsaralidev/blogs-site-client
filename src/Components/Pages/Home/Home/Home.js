import React from "react";
import Artificial from "../../ManyItems/Artificial/Artificial";
import Development from "../../ManyItems/Development/Development";
import Skills from "../../ManyItems/Skills/Skills";
import Technology from "../../ManyItems/Technology/Technology";
import TopTrends from "../../ManyItems/TopTrends/TopTrends";
import Banner from "../Banner/Banner";
import Misseds from "../Missed/Misseds";
import PopularStories from "../PopularStories/PopularStories";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularStories></PopularStories>
            <Skills></Skills>
            <Artificial></Artificial>
            <Development></Development>
            <TopTrends></TopTrends>
            <Technology></Technology>
            <Misseds></Misseds>
        </div>
    );
};

export default Home;
