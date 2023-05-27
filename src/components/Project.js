import React from 'react'
import './css/project.css'
import IMG1 from '../assets/gigrabber.PNG'
import IMG2 from '../assets/project2.PNG'
import IMG3 from '../assets/waterbattle.PNG'
import IMG4 from '../assets/booksearch.PNG'
import IMG5 from '../assets/notetaker.PNG'
import IMG6 from '../assets/codequiz.PNG'
import IMG7 from '../assets/portfolio1.PNG'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Gig Grabber',
        github: 'https://github.com/Kriskris9/GigGrabber-by-KAMJ',
        demo: 'https://kriskris9.github.io/GigGrabber-by-KAMJ/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'The Third Michelin',
        github: 'https://github.com/samanthaahn/food-critics',
        demo: 'https://hidden-retreat-77670.herokuapp.com/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Water Battle',
        github: 'https://github.com/ehmahdee/Waterbattle',
        demo: 'https://evening-ocean-56179.herokuapp.com/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Book Search Engine',
        github: 'https://github.com/seafoodude/search-BOOK-engie',
        demo: 'https://guarded-basin-73657.herokuapp.com/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Note Taker',
        github: 'https://github.com/seafoodude/Express-all-aboard',
        demo: 'https://fierce-plateau-81414.herokuapp.com/'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Code Quiz',
        github: 'https://github.com/seafoodude/GIT-quizzed-NUB',
        demo: 'https://seafoodude.github.io/GIT-quizzed-NUB/'
    }
]

const Project = () => {
    return (
        <section id='projects'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'>Github url to projects</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Project