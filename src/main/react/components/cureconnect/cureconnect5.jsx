import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import projectProcessImage from "../../../resources/proDevMap1.png";
import projectProcessImage2 from "../../../resources/proDevMap2.png"

export default class Cureconnect extends React.Component {

  render() {
    return (
      <div className="cureconnect-page-wrapper" id="cureconnect-page-wrapper-mobile">
        <img className="cureconnect-landingpage-demo"
             onClick={() => this.openCureConnectPage()}
             src="https://firebasestorage.googleapis.com/v0/b/won-jun-hong-website.appspot.com/o/cureconnect%20capture.JPG?alt=media&token=3af6babd-7137-4550-a337-2d716f9f990f"/>
        <div className="visit-cureconnect-instruction">Click above to visit CureConnect</div>

        <div className="cureconnect-content-wrapper" id="cureconnect-content-wrapper-mobile">
          <div className="project-paragraph-header">
            User Journey Testing
          </div>

          <div className="synopsis-content-paragraph">
            Congratulations! I guess after 2-3 months of research, interviews, and meetings, we now have to present our MVP to the users.
            <br/> <br/>
            The rule of thumb is, if you can have a frank conversation with 5 users, you should be able to find 80% of the UX/UI problems. That’s should be our goal here.
            <br/> <br/>
            Based on dozens of conversations we’ve had with people in the market, there must be five of them who have been unusually enthusiastic about the products. Those are the people that you want to talk to. Those are people that you eventually wanna recruit into your team. It may sounds surprising, but there are plenty of people who would like to join the movement. If you see plenty of these people, that’s a good sign. That means that the problem really exists within the industry, and people will get to use your product if you build a right one. Whereas, if you don’t have these enthusiasts, that’s not a good sign. Once your MVP is ready, I think you have to meet these people in person.
            <br/> <br/>
          </div>

          <div className="project-paragraph-header">
            How to conduct a user testing?
          </div>

          <div className="synopsis-content-paragraph">
            I am not an expert in user testing, so I had to attend a seminar for this event:
          </div>

          <div className="synopsis-content-paragraph single-indent">
            <ul>
              1. You need an interviewer and recorder. Both of you guys need to make the interviewee in a comfortable environment.
            </ul>
            <ul>
              2. Never use the word user testing or user interview. I know it sounds like a routine in our world, but in many people’s word, those words are big words that may stress interviewees out. Again, you wanna make them comfortable and let them share their true feelings as much as possible.
            </ul>
            <ul>
              3. You would like to have some task cards. Rather than telling user, “hey, can you try to set up your user profile,” you should have a card that shows, “Try to set up the user profile.”
            </ul>
            <ul>
              4. If user stops moving cursor for over three seconds looking for something, that’s usually a red flag. If the user is stall over five seconds, ask her immediately, “what are you looking for?” And the recorder should write her response down immediately.
            </ul>
            <ul>
              5. When users are stalling when he or she enters her information, that means that either the phrase or information entry section has a non-intuitive component in it. This needs to be fixed.
            </ul>
            <ul>
              6. For MVP, your task cards should be not that complicated:
              <div className="single-indent">
                a. Why do I wanna sign up for this product? What’s the benefit?
                <br/>
                b. Try to register and finish profile
                <br/>
                c. Try to update the profile information
                <br/>
                d. Is this service free?
                <br/>
                e. Try to find a nursing part-time job in Plano, TX.
                <br/>
                f. Try to find a full-time ICU nursing job in 10128 zip code.
                <br/>
                g. Try to send in the application.
                <br/>
                h. How do I know if I have submitted my application correctly?
                <br/>
              </div>
            </ul>
          </div>

          <div className="section-divider">
            ...
          </div>

          <div className="synopsis-content-paragraph">
            After interviewing the first candidate, you will have millions of follow-up list for tech and design team. You will have to prioritize based on (1) must be done, (2) needs to be done, and (3) good to be done. Before you have second interview, you will need to tackle all must be one items.
          </div>

          <div className="synopsis-content-paragraph">
            We are expected to run this iteration with five interviewees. Hopefully, the list will grow smaller every time.
          </div>

          <div className="synopsis-content-paragraph">
            This should be less than 20 minutes of your interviewees time. You cannot expect an interviewee devote more than 20 minutes into this process. After that, you will start losing people’s attention. What that means is:
            <div className="single-indent">
              1. Within first 5 minutes, you will have to convince users (a) what this product does, (b) why you need this product, (c) why this product is 10x better than what’s out there already, and (d) how much this costs and why this is cost efficient for you.
              <br/> <br/>
              2. Within next 1 minute, you will have to convince users that (a) this product has a good client support (by having the chatbots and detailed Q&As available) and (b) give them registration of this product should take less than ten minutes.
              <br/> <br/>
              3. Within next 10 minutes, you should be able to finish the user registration. If a registration takes longer than 10 minutes or more than four pages, your product has to be redesigned.
            </div>
          </div>

        </div>

      </div>
    )
  }
}