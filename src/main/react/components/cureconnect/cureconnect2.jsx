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


          <div className="project-content page-width-style-two">
            <div className="project-paragraph project-key-idea-2">
              <div className="project-paragraph-header">
                Project Process
              </div>
              <div className="synopsis-content-paragraph">
                This is how I define startup development process.
              </div>
              <img src={projectProcessImage} className="cureconnect-image-2" id="cureconnect-image-2-mobile" />
              <div className="project-paragraph-header">
                Issue Discovery
              </div>
              <div className="synopsis-content-paragraph">
                1. What are the industries that pay the most commissions? We zeroed in on couple of industries that pay the highest commissions for placements (other than executive recruiting).<br/>
                2. Healthcare industry drew our attention since it has the highest recruiting costs for primary and secondary provider level. We did more research to investiagate this issue.
              </div>

              <div className="project-paragraph-header">
                Problem Scoping<br/>
              </div>
              <img className="cc-phase1-image" src="https://firebasestorage.googleapis.com/v0/b/won-jun-hong-website.appspot.com/o/ccPhase1.JPG?alt=media&token=f9c5109e-31f4-498b-b86f-0e4c255a4b2a"/>
              <div className="project-paragraph-header">
                Where and how do we start?
              </div>
              <div className="synopsis-content-paragraph indent-paragraph single-indent">
                <li>
                  What are the candidates that have the highest recruiting costs in terms of absolute volume and percentage of annual salary? How big was the difference between recruiting a nurse vs. doctor vs. surgeon.<br/>
                </li>
                <li>
                  What are the reasons behind the high commissions?
                </li>
                <li>
                  What’s the problem behind the high recruiting costs? Is it low volume (and high commissions) high volume, or both?
                </li>
                <li>
                  Is the high cost problem come from labor market supply & demand problem or is it just an inefficient market?
                </li>
                <li>
                  Who are we going to ask these questions and how are we going to position ourselves?
                </li>
                <li>
                  Who are we going to interview?
                </li>

                <div className="double-indent-paragraph single-indent">
                  a. Healthcare Providers (Doctors, PAs, NPs, and regular nurses)<br/>
                  b. Buyers (hospital admins and staffers)<br/>
                  c. Independent brokers and recruiters.<br/>
                </div>
              </div>

              <div className="section-divider">
                ...
              </div>

              <div className="project-paragraph-header">
                Problem Discovery
              </div>
              <img className="cc-phase2-image" src="https://firebasestorage.googleapis.com/v0/b/won-jun-hong-website.appspot.com/o/ccPhase2.JPG?alt=media&token=6a4e0598-9d53-4043-a11f-284996dfa5d6"/>
              <div className="project-paragraph-header">
                So we decided to interview following three groups of people:
              </div>
              <div className="synopsis-content-paragraph single-indent">
                <li>Healthcare Providers (Doctors, PAs, NPs, and regular nurses)</li>
                <li>Buyers (hospital admins and staffers)</li>
                <li>Independent brokers and recruiters</li>
              </div>
              <div className="project-paragraph-header">
                How do we find them?
              </div>
              <div className="synopsis-content-paragraph single-indent">
                <ul>
                  a. Remember that girl in high school whose mom was a nurse? Facebook message her--it is most likely that her mom is nurse-in-charge for the whole department.
                </ul>
                <ul>
                  b. Go to healthcare and nursing meetups--talk to people. There are plenty of people who can introduce people to you.
                </ul>
                <ul>
                  c. Last and easiest--cold message people on LinkedIn--2/10 responds. If you send out 200 messages, that’s easy 40 calls.
                </ul>
              </div>
              <div className="synopsis-content-paragraph">
                If the people you are going to talk are from group (a) and (b) above, then it would be great if you could schedule a coffee. Offline is always better.
              </div>

              <div className="project-paragraph-header">
                How should we call ourselves? It is important for us to position correctly:
              </div>
              <div className="synopsis-content-paragraph single-indent">
                <li>
                  You want people to respond to your messages and chat with you. Having an interesting title helps you with this.
                </li>
                <li>
                  You want to position yourself to maximize your learning experience. If you come as a researcher perspective, people will likely to explain you in a little more details and tell you more about truth about the industry, than positioning yourself as a potential market participant for business sales rep.
                </li>
                <li>
                  Our conclusion yields us that being a recently graduated student or academic researcher try to investigate this issue is being most helpful.
                </li>
              </div>
              <div className="synopsis-content-paragraph">
                We have tried to be entrepreneurs or potential business people. There are two problems. Number one, people are less interested in and reluctant to have call with you. These people already get ten emails or LinkedIn messages a week coming from recruiters and other businesses. Number two, even if you are lucky enough to hop on a call with them, they will be on guard and reluctant to tell you the full perspectives. At the end of the day, most of sales people sound sleazy, especially over the phone.
              </div>

              <div className="project-paragraph-header">
                Get into Talking
              </div>

              <div className="synopsis-content-paragraph">
                I would call this as an iterative process. You plant about 200 messages a day (which is pretty easy). Select your metro region and search for people with positions of “healthcare recruiter,” “physician recruiter,” or “nurse recruiter.” You will soon find plenty. If you send messages for a week, that’s 1,400. You will hear back from 20% and actually get to talk to about 10%. In ten days, you will have dozens calls scheduled.
                <br/><br/>
                Now you will likely talk to 30-100 people in next couple of days. What are you going to ask? How are you going to ask? Anybody can ask questions, but asking right questions in a right way would be difficult.
              </div>

              <div className="synopsis-content-paragraph">
                <li>
                  Don’t try to ask any loaded questions (i.e. what’s the biggest problem with the recruiting? Do you think building an online job marketplace is going to work?) Instead, ask them to talk about their recruiting experience. Remember that you are not having an interview but a conversation.
                </li>
                <li>
                  Never tell the industry that you are working in. Never, ever tell what you are trying to build. Don’t say you want to build an Airbnb for healthcare recruiting. Tell them, you would like to do some research on current recruiting process, and want to learn more from that perspective.
                </li>
                <li>
                  Ask them a lot of feeling questions. Feeling is a neutral word. Based on my experience, it harvests more truthful responses. You should be asking, “how do you feel about your last recruiting process” than “what was the difficulty involved with last recruiting process?” If they have real issue (that potentially you can offer a 10x better solution), they will tell you what the problems are.
                </li>
              </div>

              <div className="synopsis-content-paragraph dialogue-box">
                This is usually how it works
                <br/><br/>
                W: Hi Susan, thank you very much your time! Lovely to chat with you. I recently graduated from New York University, and I am doing an academic research on healthcare recruiting, especially with a focus on nurse recruiting.
                <br/><br/>
                I guess I am speaking to the best one since you stated not too long ago. It would be great if we can kick this off you could quickly share how you actually landed your first career.
                <br/><br/>
                <div className="center-align">
                  [Susan Answers]
                </div>
                <br/>
                W: How was it? How did you feel?
                <br/><br/>
                <div className="center-align">
                  [Susan Answers]
                </div>
                <br/>
                W: Could you tell me a little bit more about that? What do you and other nurses usually do to overcome that issue?
                <br/><br/>
                <div className="center-align">
                  [Susan Answers]
                </div>
                <br/>
                W: Have you considered using the job sites, like Craigslist, Monster, or Indeed?
                <br/><br/>
                <div className="center-align">
                  [Susan Answers]
                </div>
                <br/>
                W: What did you like the most about Indeed? [You will have to get this down and must incorporate on your product--other people’s best problem you need to copy, and other people’s problems, you need to solve with 10x better solution]
                <br/><br/>
                <div className="center-align">
                  [Susan Answers]
                </div>
                <br/>
                W: How do other nurses typically find their part-time jobs?
                <br/><br/>
                <div className="center-align">
                  [Susan Answers]
                </div>
                <br/>
                W: If you have a magic wand and could change two things in regards to the experience that you’ve had, what would those two be?
                <br/><br/>
                <div className="center-align">
                  [Susan Answers]
                </div>
                <br/>
                W: Just one last question—why do you think that has not been done yet?
                <br/><br/>
                Obviously, you will have to come up with different sets of Q&A for doctors, recruiters, and hospital admins.
              </div>

              <div className="project-paragraph-header">
                How many interviews did we have?
              </div>

              <div className="synopsis-content-paragraph">
                We interviewed about 30-40 nurses, recruiters, and hospital admins. As we were new bees, we interviewed more than necessary and asked really bad questions. You can only learn the lessons after making these mistakes. You can’t just get a free lunch by reading this article--you can only minimize your mistakes! :)
                <br/><br/>
                The rule of thumb is, if you could talk to five people in depth with all honesty, then you should be able to learn about the 80% of industry’s common problems. If you can solve those 80% of common problems with solutions with 10x easier solution, you will survive. But that’s very, very, very difficult. Much harder than we initially expected.
              </div>

              <div className="section-divider">
                ...
              </div>

              <div className="project-paragraph-header">
                Talking to the Buyer Side (which is harder typically)
              </div>

              <div className="synopsis-content-paragraph">
                After talking to the supply side of the job market, now you will have to talk with the demand side of the equation. Who is buying the labor? You really have to talk to hospital HR, staffers, inhouse recruiters, and independent recruiters (brokers) to understand who has a real power here. You need to understand (1) who is buying the service, (2) who makes the call, and (3) who pays. Usually, whoever decides and pays is the person you wanna talk to, and you are building a program to make their lives easier. You will have to know ins-and-outs of their (and their teams’) work processes.
                <br/><br/>
                Here are few lessons that we’ve learned:
                <br/><br/>
                Usually, it is harder to get in touch with the buyers. They are the industry alphas. They are the busy ones. But you will have to talk to them. If you have friends or family know these people, get a coffee with them! If not, think of how to get to these people. This could be a first entrepreneurial test. I guess the journey of being an entrepreneur is not giving up and coming up with street smart solutions!
                <br/>
              </div>

              <div className="section-divider">
                ...
              </div>

              <div className="project-paragraph-header">
                What are the problems?
              </div>

              <img className="cc-phase2-image" src="https://firebasestorage.googleapis.com/v0/b/won-jun-hong-website.appspot.com/o/ccPhase2.JPG?alt=media&token=6a4e0598-9d53-4043-a11f-284996dfa5d6"/>

              <div className="synopsis-content-paragraph">
                You have to come up with a realistic view to allocate what is the major problem of the industry that you are about to tackle:
              </div>

              <div className="synopsis-content-paragraph single-indent">
                <ul>
                  1. Is it a political problem? (Like HIPAA or government records? For instance, government records can all be digitized in a form of blockchain, but this will not going to be done in next decade or two since neither the government nor the decision makers don’t want to have their jobs disappeared and transfer power to digital space).
                </ul>
                <ul>
                  2. Is this a business inefficiency problem? (Like Airbnb problem before Airbnb--there might be a demand, but there has been no dedicated platform built to test if the supply and demand actually exists. There are millions of things that are traded on Craigslist, but is every one of them have a potential to form an Airbnb?)
                </ul>
                <ul>
                  3. Is this inefficient since this involves a large amount of manual work or personal charm involved (like executive recruiting)?
                </ul>
                <ul>
                  4. Is this high spin, low volume business or low spin, high volume business? Latter one is much better if you are thinking of building a technology platform.
                </ul>
              </div>

              <div className="synopsis-content-paragraph">
                If the issue is a political problem (and especially if your customers are politically disenfranchised), your business will NOT beat politics. I was at a meetup event with Jay Parkinson, couple months ago. He was like, “you cannot try to solve the political problem with technology. That’ doesn’t work.”
                <br/>
                Yes, Travis Kalanick exists, but guys like him are the edge cases.
              </div>

              <div className="section-divider">
                ...
              </div>

              <div className="project-paragraph-header">
                Pre-Execution
              </div>

              <div className="synopsis-content-paragraph">
                After 45 days of talking to people, thinking, and re-doing everything multiple times, we started to make more sense in regards to what we had to build. What we had to build was the job board on a steroid, specializing in nurse recruiting. You essentially want to build a product that is a combination of Indeed and LinkedIn and provide HRMS system-like features for recruiter. And of course, this solution needs to be easy on buyer (recruiters’) side.
              </div>

              <div className="synopsis-content-paragraph single-indent">
                <ul>
                  1. Are there any platforms like yours? There must be--you have to search until you find a similar one.
                </ul>
                <ul>
                  2. You have to learn and understand everything about that platform. Talk to the insiders (again, LinkedIn and researcher approach). You have to know what the platform is doing right and doing wrong. You have to copy and do better in what they are doing right, and offer a solution that is 10x better by solving what they are doing wrong.
                  <div className="synopsis-content-sub-paragraph single-indent">
                    <li>
                      Direct Competitor (Lyft vs. Uber)--if you see one, you have to assess how long, large, and active they are. If they are big enough, you will give up or revise your strategy. If the incumbent one is not doing well, you have to talk to insiders to understand why their problem is. If you can tackle them, that would be great!
                    </li>
                    <li>
                      Competitor in Broader Industry Scope (Hired.com vs. Indeed)
                    </li>
                    <li>
                      Competitor in Narrower Scope in Different Scope (Streeteasy vs. Airbnb)
                    </li>
                  </div>
                </ul>
                <ul>
                  3. You have to talk to people who are involved in similar industry. For my case, I have reached out to bunch of people in similar vertical.
                </ul>
                <ul>
                  4. Learn from their design and interface, grab a coffee with a nurse recruiter and let them tell you what are the problems with Indeed (broader market competitor) and Hired.com (specific and in different market). Let nurses tell you what are the problems with these features (Again, you are having a conversation, not an interview).
                </ul>
              </div>

              <div className="section-divider">
                ...
              </div>

              <div className="project-paragraph-header">
                Product Design Meeting
              </div>

              <img className="cc-phase3-image"
                   src="https://firebasestorage.googleapis.com/v0/b/won-jun-hong-website.appspot.com/o/ccPhase3.JPG?alt=media&token=b1f387ec-7466-4afa-a35d-bb377086e7d4"/>

              <div className="synopsis-content-paragraph">
                Our Design Philosophy
              </div>

              <div className="synopsis-content-paragraph single-indent">
                1. Make it cheap and churn out faster!<br/>
                2. Don’t compare your MVP to Uber. It is what it is man.<br/>
                3. Set up a date and roll out something first. Go from there.
              </div>

              <div className="synopsis-content-paragraph">
                To meet the design philosophy above, what we initially did was R&D--ripoff and decorate. To make things short, we have to tell you that this approach is not going to work.
                <br/> <br/>
                In a world, where minimalist design trend dominates, we need to have every element on your product needs to be close to perfect. Non-designers will have hard time achieving this. You will have to hit up a designer friend.
                <br/> <br/>
                Hit up a designer friend—doesn’t necessarily have to be a web designer (better if she is). If not, just call them up and ask for help. Make sure don’t spend too much money on this. You don’t even know if your product has a viability or not, at this point. I called up my highschool friend in Taipei, and he got everything done, from rendering to functional design.
              </div>

              <div className="section-divider">
                ...
              </div>

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
        </div>

      </div>
    )
  }
}