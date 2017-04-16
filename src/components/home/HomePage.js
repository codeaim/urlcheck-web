import React, {Component} from "react";

import Highlights from "./Highlights";
import Intro from "./Intro";
import Features from "./Features";
import Testimonials from "./Testimonials";
import male from "../../img/male.png";
import female from "../../img/female.png";

class HomePage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            highlights: {
                car: "",
                price: "hidden"
            },
            testimonials: [
                {
                    id: 1,
                    src: female,
                    alt: "female",
                    quote: "I would definitely recommend ET driving school for a driving instructor. I passed first time due to the encouragement I was given and the easy going attitude with each lesson. They gave me the confidence to drive with ease and get on the road ASAP...",
                    author: "Aine Mc Crudden",
                    status: ""
                },
                {
                    id: 2,
                    src: female,
                    alt: "female",
                    quote: "I started my driving lessons with ET Driving School after recomendations from multiple friends who passed their driving tests with them. Their amazing instructor, helped me to gain alot of confidence with being on the road, and allowed me to gain all the skills I needed to be a driver on the road, and I passed my test first time....",
                    author: "Maria Scott",
                    status: "hidden"

                },
                {
                    id: 3,
                    src: female,
                    alt: "female",
                    quote: "I failed my test twice in Larne with another instructor and was giving up hope until my cousin recommended I went with ET Driving School because she passed first time. I was able to have good craic with them but get through the necessary stuff at the same time. Their technique helped me through my driving test in a matter of weeks and I would recommend them to anyone...",
                    author: "Aine Flynn",
                    status: "hidden"
                },
                {
                    id: 4,
                    src: male,
                    alt: "male",
                    quote: "I've had multiple driving instructors before but I didn't feel like I was getting any closer to passing. From the first lesson ET Driving School had a clear path, and got me through the learning process as quickly as possible, I couldn't recommend them more...",
                    author: "Gerard Downes",
                    status: "hidden"
                },
                {
                    id: 5,
                    src: female,
                    alt: "female",
                    quote: "Before I started learning with Eamonn I had not one but two previous driving instructors and had racked up about 40 hours of lessons but was no nearer to sitting my test. Eamonn was recommended to me by a friend who had recently passed her test and I decided to try him out. This was one of the best decisions I have ever made. After the very first lesson, Eamonn made it clear how we would progress to test standard and told me to book the test straight away! Just a few short weeks later and I sat my test for the first time. Although I was nervous, Eamonn had faith in me and I passed first time with flying colours. I would highly recommend Eamonn to anyone learning to drive, no matter what previous experience they have had. He is a very good teacher and if he can teach me, he can teach anyone...",
                    author: "Sarah Holland",
                    status: "hidden"
                },
                {
                    id: 6,
                    src: male,
                    alt: "male",
                    quote: "Eamonn was recommended by several of my friends and while taking the driving lessons I really could see why.  A fantastic instructor who makes you feel comfortable at all times and with excellent tuition helped me to pass my test quickly and easily. The way he structured the lessons was great. He's been a man of abundant patience and has excellent knack to keep a first time driver reassured, ensuring the entire learning process an enjoyable experience. Without him I wonder if I'd have got my license in my first attempt; more so for the confidence I have on the road, I am grateful to him. I would gladly recommend Eamonn to everyone ...",
                    author: "Sham",
                    status: "hidden"
                },
                {
                    id: 7,
                    src: male,
                    alt: "male",
                    quote: "Thanks to Eamonn for being a brilliant instructor and for helping me pass my test on the first attempt! I felt perfectly prepared for my test and also had a great time while we were learning. Having recently moved here from Sweden I was nervous, but my nerves were put to ease from the very start.  I can highly recommend Eamonn as your guide to pass the test...",
                    author: "Olof Hjorth",
                    status: "hidden"
                },
                {
                    id: 8,
                    src: male,
                    alt: "male",
                    quote: "Having had no experience of driving in the city prior to starting lessons with Eamonn, He was particularly helpful to me, Eamonn was patient, easy to get on with and helped me build up confidence in myself very quickly. Eamonn was very reasonably priced and flexible with me throughout our lessons, always willing to help where he could to fit around my working hours or any other issues and ensured that I got as varied and comprehensive an understanding of what I'd need to pass my test as soon as possible. I'd be happy to recommend Eamonn to anyone and thank him again for all his help....",
                    author: "Conan mc Manus",
                    status: "hidden"
                },
                {
                    id: 9,
                    src: female,
                    alt: "female",
                    quote: "ET Driving School helped me feel completely reassured and safe in every lesson. I had never driven a car beforehand and thanks to Eamonn, I felt completely at ease from the very beginning. Not only was I taught how to drive, I was also given advice and help with passing my theory test. I would definitely recommend ET Driving to anyone, no matter what their experience level...",
                    author: "Emma Clarke",
                    status: "hidden"
                },
                {
                    id: 10,
                    src: male,
                    alt: "male",
                    quote: "I recently passed my driving test thanks to ETdrivingschool. The service you get is 10/10. Provided material to use to help towards passing theory test and also gives you expert training on driving safely on the road. Helped in every way possible. Would highly recommend  to anyone...",
                    author: "Thomas Scott",
                    status: "hidden"
                },
                {
                    id: 11,
                    src: female,
                    alt: "female",
                    quote: "When I first started lessons with Eamonn I was dead nervous and far from a natural driver. Eamonn however was extremely patient and soon put me at ease with his easygoing and laid back approach. He equipped me with the knowledge and skills needed to become a confident and safe driver, passing my test with just 4 minors. The service provided was excellent both in terms of results and value for money - not only did he prepare me for my practical test but also provided all he resources needed to pass the theory. Eamonn's flexibility and commitment to helping me through my test has been amazing and I've already started recommending him to friends...",
                    author: "Dearbhaile Slane",
                    status: "hidden"
                },
                {
                    id: 12,
                    src: female,
                    alt: "female",
                    quote: "I would have no hesitation in recommending ET driving school for driving lessons. I passed both theory and driving test first time which can be attributed to the high standard of training I received from my instructor. All lessons were fun, relaxing and easy going while still maintaining a highly professional structure.  When it came time to sit my test I was fully ready and confident. I’ll definitely be recommending ET driving school to all.",
                    author: "Maria Quinn",
                    status: "hidden"
                },
                {
                    id: 13,
                    src: female,
                    alt: "female",
                    quote: "Before starting lessons with Eamonn  I heard nothing but good reports about him from a number of people and had the chance myself to experience just how good he is. I had no experience on the roads before Hand and within a few  lessons Eamonn had me fully confident on the roads with his easy going and relaxing attitude, throughout the time I spent with him. Throughout each lesson Eamonn makes you feel at ease with everything he teaches in a very well structured  manner, the rapport that is built up throughout the time spent with Eamonn is amazing and I would highly recommend him to anyone looking to learn how to drive. Eamonn is definitely worth the money with very reasonable prices and flexibility throughout the week. If it wasn't for Eamonn I wouldn't have passed first time, he gives you so much help on both the theory and practical by providing you with  loads of resources and practice he really helps you to do well and is very patient with mistakes.  10/10 instructor!! Eamonn's encouragement really helps you to do well and I thank him very much for his time and patience and  with me....",
                    author: "Caoimhe Rea",
                    status: "hidden"
                }
            ],
        };
    }

    componentDidMount() {
        this.highlightTimer = setInterval(this.rotateHighlight.bind(this), 6000);
        this.testimonialTimer = setInterval(this.rotateTestimonial.bind(this), 6000);
    }

    componentWillUnmount() {
        clearInterval(this.highlightTimer);
        clearInterval(this.testimonialTimer);
    }

    rotateHighlight() {
        this.setState({
            highlights: {
                car: this.state.highlights.car === "" ? "hidden" : "",
                price: this.state.highlights.price === "" ? "hidden" : ""
            }
        });
    }

    rotateTestimonial() {
        const id = Math.floor(Math.random() * (this.state.testimonials.length - 1 + 1) + 1);
        this.setState(
            Object.assign({}, this.state.testimonials, {
                testimonials: this.state.testimonials.map((testimonial) => {
                    return Object.assign({}, testimonial, {
                        status: testimonial.id === id ? "": "hidden"
                    })
                })
            })
        );
    }


    render() {
        return (
            <main className="site-content">
                <Highlights highlights={this.state.highlights}/>
                <Intro/>
                <Features/>
                <Testimonials testimonials={this.state.testimonials}/>
            </main>
        );
    }
}

export default HomePage;