import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import projectProcessImage from "../../../../resources/proDevMap1.png";
import projectProcessImage2 from "../../../../resources/proDevMap2.png"

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
            Parallel Processing
          </div>

          <div className="project-paragraph-header">
            Business Team
          </div>

          <div className="synopsis-content-paragraph">
            While designers are coming up with the general theme and landing page, business guys will have to come up with which subsector (like what kind of nurse), age group, and geography that we will going to target. At the same time, business guys have to identify at least five recruiting companies and/or hospitals that they would like to use our system for pilot.
            <br/> <br/>
            How can you sell the product that has not been built yet? That’s a million dollar question--you can’t really sell. You just have to get your foot into the door. You just have to get indication of interests. Don’t be too excited. 80% of them will bail after indicating interests--it’s like VC funding. Not their fault--this is just how life works! Never get discouraged.
            <br/> <br/>
            Luckily, we have landed with a nationwide physician recruiting services with extensive hospital network willing to try out our platform to provide value added nurse recruiting services. For that meeting, we flew to Dallas! Things worked out greatly!
          </div>

          <div className="project-paragraph-header">
            Product and Engineering Team
          </div>

          <div className="project-paragraph-header">
            Technology Problem
          </div>

          <div className="synopsis-content-paragraph single-indent">
            <ul>1. Don’t be obsessed with using a modern stack. Cutting-edge stuff. Should we use React? Let’s take a step further by using Redux. Who cares? I honestly believe you should pay much more attention to talking to people and create a better and more user-friendly product.</ul>
            <ul>2. Don’t worry about optimization and distributed systems (well now Firebase kinda does that for you, but… don’t worry). We will eventually have to wipe out everything and build a new one with proper backend once we hit 1-10k users. </ul>
            <ul>3. You have to have a strict deadline and monitor your contributors closely (doesn't mean that you need to micromanage). Self-rule becomes no-rule, and self-imposed deadline becomes no-deadline. Apply pressure if necessary. Nothing gets done without pressure or stress. (Product Stress vs. people stress are different. Try to impose product stress, not the people stress).</ul>
            <ul>4. Make a clearly defined goal. We are going to create a section for (1) landing page, (2) what, how, and why do it page, and (3) user onboarding page. This will take 2-4 weeks if you are deeply involved in development. </ul>
            <ul>5. When you build the product, again, don’t compare yourself to an Uber. You got 2 part-timers, while Uber has 3,000 full-timers. Just make a product that is reasonable and not too embarrassing.</ul>
            <ul>6. Make sure you test on Windows Explorer--that’s a dominant choice of browser in healthcare sector.</ul>
          </div>

          <div className="section-divider">
            ...
          </div>

          <div className="project-paragraph-header">
            First Demo for the Business Team
          </div>

          <img className="cc-phase3-image"
               src="https://firebasestorage.googleapis.com/v0/b/won-jun-hong-website.appspot.com/o/ccPhase4.JPG?alt=media&token=fb30622c-1d69-46c7-b773-274763775732"/>

          <div className="synopsis-content-paragraph">
            Before you show them to your potential users, I think it is important to share the MVP with business team. Yes, product and engineering team members have spent a lot of time to design and roll out a user-friendly product, but we still need business team’s feedback. A lot of features and steps maybe intuitive and intrinsic to engineers, but they may look different from non-engineering people. Also, the ones with business background know usually what sticks and what not sticks. At the end of the day, it will be the business team that has been and will be communicating with the customers, so I think it’s essentially to ensure that the business team and product/engineering teams are synchronized.
            <br/> <br/>
            When you roll out an MVP, the business team will be disappointed. They are used to beautiful design and easy to use features from Airbnb or Uber. Well, you can not impress everyone. Let them focus on the mechanics. Asking them if the steps are intuitive. Asking them are we taking enough information. Asking them if we are showing the enough information to the buyers? What other features that we must add for this MVP?
            <br/> <br/>
            If you get the meetings right and if the business team is telling you the truth, you will be disappointed and overwhelmed with how much work you have left to do. Building a business product is hard, and building a working business will be even harder.
            <br/> <br/>
            From engineering perspective, it will be extremely important to choose what to implement now and what to implement later. You need to classify the scope increase with (1) must be done, (2) needs to be done, and (3) good to be done. Once you have them down, you have to create a internal tracking system (something like Pivotal Tracker) to assign a deadline to motivate the project participants. Also, it’s good for your own sake too. With so many things flying through your desk, you will likely miss out things here and there. Plus, you don’t wanna have a reputation request from Won Jun is BS, you just need to snooze a little bit and will eventually disappear. You wanna have your reputation as, I will get this done even if I have to walk towards the end of the world!
            <br/> <br/>
            What’s likely happen is, after every stage, you will walk out the meeting with so many must be and need to be dones that probably 80% of must be dones and 50% of needs to be dones will be completed. So be reasonable with what you assign. If something sounds good or needed, you may put that into good to be done, in case there is a lag when business team is pushing out MVP. When you engineering team have some time off, it would be the good time to tackle (or can be a fantastic task for summer interns!)
          </div>

          <div className="section-divider">
            ...
          </div>

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