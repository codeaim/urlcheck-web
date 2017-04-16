import React, {Component} from "react";
import Questions from "./Questions";
import Links from "./Links";

class LearnPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.answerClick = this.answerClick.bind(this);

        this.state = {
            questions: [
                {
                    id: 1,
                    text: "Open the bonnet, identify where you would check the engine coolant level and tell me how you would check the engine has the correct level.",
                    answer: "Identify the engine coolant tank and check the minimum and maximum level indicator displayed on the side of the tank. If the coolant is below the minimum mark, more coolant (water) will need to be added. To do this, unscrew the tank cap when the engine is cold and pour in coolant until the maximum mark is reached.",
                    status: "hidden"
                },
                {
                    id: 2,
                    text: "Open the car bonnet, identify where the brake fluid reservoir tank is and tell me how you would check that you have a safe level of hydraulic brake fluid.",
                    answer: "Identify the hydraulic brake fluid reservoir tank and check the brake fluid level against the minimum / maximum level indicator.",
                    status: "hidden"
                },
                {
                    id: 3,
                    text: "Show me/explain how you would check that the power assisted steering is working before starting a journey.",
                    answer: "If the steering becomes heavy, the power assisted steering may be faulty. Before starting a journey two simple checks can be made: 1) Gentle pressure on the steering wheel, maintained whilst the engine is started, should result in slight but noticeable movement as the system begins to operate. 2) Turning the steering wheel just after moving off will give an immediate indication that the power assisted steering is functioning correctly.",
                    status: "hidden"
                },
                {
                    id: 4,
                    text: "Open the bonnet, identify where you would check the engine oil level and tell me how you would check that the engine has sufficient oil.",
                    answer: "Open the bonnet, identify where you would check the engine oil level and tell me how you would check that the engine has sufficient oil.",
                    status: "hidden"
                },
                {
                    id: 5,
                    text: "Open the bonnet, identify where the windscreen washer reservoir is and tell me how you check the level?",
                    answer: "Identify reservoir tank, lift off cap and make a visual check of level as there are no external markings on windscreen washer reservoirs. Check reservoir regularly.",
                    status: "hidden"
                },
                {
                    id: 6,
                    text: "Show me how you would check that the horn is working (off road only).",
                    answer: "Press the horn and listen (turn on ignition if necessary).",
                    status: "hidden"
                },
                {
                    id: 7,
                    text: "Show me how you would check that the brake lights are working on the car (examiner can help).",
                    answer: " Whilst pressing the brake pedal, make use of reflections in windows, garage doors, etc. Or ask someone to help (the examiner). (may need to switch ignition on, prompt not to start engine)",
                    status: "hidden"
                },
                {
                    id: 8,
                    text: "Tell me how you would check that the brakes are working before starting a journey.",
                    answer: "Just as you move off operate brakes. They should not feel spongy and the car should not pull to one side.",
                    status: "hidden"
                },
                {
                    id: 9,
                    text: "Tell me how you would check that the headlights and tail lights are working.",
                    answer: "Turn on the ignition and then the lights. I would then walk around the car (view from pavement if on roadside) to check both front and rear tail lights are working correctly.",
                    status: "hidden"
                },
                {
                    id: 10,
                    text: "Show me how you would check that the direction indicators are working correctly.",
                    answer: "Activate the indicators and walk around the car to see if all the indicators are working correctly. Operating the hazard warning lights is no longer an acceptable way of checking the indicators.",
                    status: "hidden"
                },
                {
                    id: 11,
                    text: "Tell me where you would find the information for the recommended tyre pressures for this car and how tyre pressures should be checked.",
                    answer: "Information will be found using the car manufacturer's guide/manual. Check the tyre pressures by using a reliable pressure gauge when the tyres are cold. Don't forget the spare tyre and remember to refit the valve caps.",
                    status: "hidden"
                },
                {
                    id: 12,
                    text: "Show me how you would check the hand (parking) brake for excessive wear.",
                    answer: "Firmly apply the foot brake to secure the car and apply the parking brake. When it is fully applied it should secure itself and not be at the end of its working travel. (Should be tension whilst lifting  as the cable connecting the brakes to the lever tighten.",
                    status: "hidden"
                },
                {
                    id: 13,
                    text: "Tell me how you make sure your head restraint is correctly adjusted so it provides the best protection in the event of a crash.",
                    answer: "The head restraint should be adjusted so the centre part of the head restraint is at least as high as the eye or top of the ears, and as close to the back of the head as is comfortable. Note; some restraints might not be adjustable.",
                    status: "hidden"
                },
                {
                    id: 14,
                    text: "Tell me how you would check the tyres to show that they have sufficient tread depth and that their general condition is safe to use on the road.",
                    answer: "A safe tyre will have no cuts or bulges on the sides. Legally, the tread depth must be at least 1.6mm across the central 3/4s of the breadth of the tyre and around the entire outer circumference and can be measured using a tread depth gauge.",
                    status: "hidden"
                },
                {
                    id: 15,
                    text: "Show me how you would clean the windscreen using the windscreen washer and wipers.",
                    answer: "Operate control and hold for approximately 3 seconds to wash and wipe windscreen (turn ignition on if necessary). If asked this question on a driving test, ensure your windscreen is left clean after the initial clean. Sometimes 2 or 3 cleans are necessary.",
                    status: "hidden"
                },
                {
                    id: 16,
                    text: "Show me how you would set the demister controls to clear all the windows effectively, this should include both front and rear screens.You may start the engine if necessary.",
                    answer: "Set all relevant controls including; fan, temperature, air direction / source and heated screen to clear windscreen and windows. It is necessary for the engine to be started for this demonstration.",
                    status: "hidden"
                },
                {
                    id: 17,
                    text: "Tell me how you would know if there was a problem with your anti-lock braking system.",
                    answer: "Warning light should illuminate on dashboard if there is a fault with the anti-lock braking system.",
                    status: "hidden"
                },
                {
                    id: 18,
                    text: "Show me how you switch your headlight from dipped to main beam and explain how you would know the main beam is on whilst inside the car.",
                    answer: "Operate switch (with ignition or engine on if necessary), check the main beam (blue)warning light",
                    status: "hidden"
                },
                {
                    id: 19,
                    text: "Show me how you would switch on the rear fog light(s) and explain when you would use it/them. (No need to exit vehicle).",
                    answer: "Operate switch (turn on dipped headlights and ignition if necessary). Check warning light is on. Explain that fog lights must only be used when visibility is below 100 meters, and must be turned off when visibility improves.",
                    status: "hidden"
                }
            ],
            links: [
                {
                    id: 1,
                    text: "Theory Test Pro",
                    href: "http://etdriving.theorytestpro.co.uk/login"
                },
                {
                    id: 2,
                    text: "Book your theory test",
                    href: "http://www.nidirect.gov.uk/index/do-it-online/motoring-online/book-your-theory-test.htm"
                },
                {
                    id: 3,
                    text: "Book your practical test",
                    href: "http://www.dvtani.gov.uk/onlinebooking/drivertest.asp"
                },
                {
                    id: 4,
                    text: "Driving in N.I. on a foreign licence",
                    href: "http://nidirect.gov.uk/index/motoring/driver-licensing/driving-in-ni-on-a-foreign-licence"
                },
                {
                    id: 5,
                    text: "Highway code N.I.",
                    href: "http://www.nidirect.gov.uk/information-and-services/motoring/the-highway-code.htm"
                }
            ],
        };

    }

    answerClick(event) {
        this.setState(
            Object.assign({}, this.state.questions, {
                questions: this.state.questions
                    .map((question) => {
                        return Object.assign({}, question, event.target.id === question.id.toString()
                            ? {
                                status: question.status === "hidden"
                                    ? ""
                                    : "hidden"
                            }
                            : question);
                    })
            })
        );
    }

    render() {
        return (
            <main className="site-content">
                {this.state.word}
                <Questions questions={this.state.questions} answerClick={this.answerClick}/>
                <Links links={this.state.links}/>
            </main>
        );
    }
}

export default LearnPage;