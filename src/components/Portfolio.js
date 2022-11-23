import React from 'react'

function Portfolio() {

    const projects = [
        {
            id: 'id1',
            title: 'Shaken or Stirred Cocktails',
            github: 'https://github.com/NWbootcamp/ShakenorStirred_Cocktails',
            live : 'https://nwbootcamp.github.io/ShakenorStirred_Cocktails/',
            text: 'What are you drinking tonight? Don’t know? Shaken or Stirred has you covered! The site suggests cocktails for whatever kind of evening you want to have. The site will pull random cocktails and allows the user to get a more curated choice by specifying what kind of night they want to have, or what liquor they want to use (including none!).   And if the user is under 21, it offers a fun mix of non-alcoholic drinks. Drink choice includes a photo of the drink and the drinks name, ingredients, and instructions to make it.',
            image:require('../images/shakenorstirred.png')
        },
        {
            id: 'id2',
            title: 'Crunch Track',
            github: 'https://github.com/Crunch-Track-Team-5/CrunchTrack',
            live: 'https://arcane-citadel-77295.herokuapp.com/',
            text: 'Crunch Track is a user friendly app that allows the user to follow a workout routine based on their selections. Crunch Track makes it fun and simple to begin working out and even provides a video to show how to properly complete the exercise.',
            image: require('../images/crunchTrack.png')
        },
        {
            id: 'id3',
            title: 'Trip Clip',
            github: 'https://github.com/orgs/Trip-Clip-Team/repositories',
            live: 'https://trip-clip.herokuapp.com/',
            text: 'Trip clip is fun and interactive app that helps people keep they travel journey along with helping other decide what destinations to visit based on the reviews and comments',
            image: require('../images/HomePage.png')
        },
        {
            id: 'id4',
            title: 'Weather-Dashboard',
            github: 'https://github.com/JelenaTomic/Weather-Dashboard',
            live: 'https://jelenatomic.github.io/Weather-Dashboard/',
            text: 'We had to make weather app that show current temperature, humidity, wind and uv of the city along with forecast for next 5 days. We also had to show our knowledge using API.',
            image: require('../images/weatherDashboard.png')
        },
        {
            id: 'id5',
            title: 'E-commerce-Back-End',
            github: 'https://github.com/JelenaTomic/E-commerce-Back-End',
            live: 'https://drive.google.com/file/d/1Qnm2SWUq2jxpW_obLzuZa2_OhtSaOejq/view',
            text: 'This is an E-commerce. The app is backend and involves use of node.js , express.js and a SQL database. It includes RESTful APIs that. It also implements the usage of sequelize as its ORM tool to convert data to and from the database.',
            image: require('../images/eCommerce.png')
        },    
        {
            id: 'id6',
            title: 'Social-Network-API',
            github: 'https://github.com/JelenaTomic/Social-Network-API',
            live: 'https://drive.google.com/file/d/16tWh7JHopfIFeOfOtHLchLwTC3NDfHNc/view',
            text: 'We had to make weather app that show current temperature, humidity, wind and uv of the city along with forecast for next 5 days. We also had to show our knowledge using API.',
            image: require('../images/socialNetworkAPI.png')
        } ]


    return (
        <section >
            <div className='d-flex justify-content-center p-4'>
                <h1>Project</h1>
            </div>
            <div className='row p-5'>
                {projects.map((e) => (
                    <div className='col-sm-6 p-5'>
                        <div className='border border-dark p-2'>
                            <div className={e.id}>
                            <img className="card-img-top" src={e.image} alt={e.id} />
                                <h5 className="card-header">{e.title}</h5>
                                <p className='card-text'>{e.text}</p>
                                <a href={e.github} className='btn btn-primary' target="_blank" rel="noreferrer">Github</a>
                                <a href={e.live} className='btn btn-primary' target="_blank" rel="noreferrer">Deployed</a>                   
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Portfolio