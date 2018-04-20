import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import projectProcessImage from "../../resources/proDevMap1.png";
import projectProcessImage2 from "../../resources/proDevMap2.png"

export default class Cureconnect extends React.Component {

  openCureConnectPage() {
    //once the image is clicked, a new tab will open. User will see the cureconnect landing page.
    window.open("https://cureconnect.net");
  }

  render() {
    return (
      <div className="cureconnect-page-wrapper">

        <div className="pageHeader">
          <div className="project-synopsis">
            <img className="cureconnect-landingpage-demo"
                 onClick={() => this.openCureConnectPage()}
                 src="https://firebasestorage.googleapis.com/v0/b/won-jun-hong-website.appspot.com/o/ccLandingPage.JPG?alt=media&token=4ea16d8b-c23e-4148-a7e8-1274e3232709"/>
            <div className="visit-cureconnect-instruction">Click above to visit CureConnect</div>
            <div className="synopsis-header">
              Summary
            </div>
            <div className="synopsis-content">
              Q: How are we going to resolve nursing shortage in underfunded intercity and rural hospitals?<br/><br/>
              A: If we can develop a platform that introduces local part-time nursing positions to nurses, that can (1) reduce nurse recruiting costs and (2) alleviate financial constraints on many underfunded intercity and rural hospitals.
            </div>
          </div>
        </div>

        <div className="project-content">
          <div className="project-paragraph project-key-idea-1">
            <div className="project-paragraph-header">
              The Problem
            </div>
            <img src={projectProcessImage2} className="cureconnect-image-1" />
            <div className="synopsis-content">
              <div className="synopsis-content-paragraph">
                Despite a common myth, America has enough healthcare providers.
                The challenge is, not many wants to work in rural, intercity, or underfunded hospitals.
                he poorer an hospital is, the harder for them to recruit providers.
                They will have to pay more in recruiting fee and provider compensations.
                This results in poorer hospitals end up spending more on recruiting; it is a vicious cycle.
              </div>
              <div className="synopsis-content-paragraph">
                To overcome this issue, my partner and I investigated
                this problem and interviewed dozens of providers to understand what could be a solution.
                Can we solve this problem with technology somehow? Can we increase the job market supply for nurses?
              </div>
              <div className="project-paragraph-header">
                Hypothesis 1
              </div>
              <div className="synopsis-content-paragraph">
                If we can onboard the experienced but retired nurses* to our platform,
                hospitals can reduce (1) recruiting costs and (2) labor costs.
              </div>
              <div className="project-paragraph-header">
                Hypothesis 2
              </div>
              <div className="synopsis-content-paragraph">
                Nurses typically work three days a week (12 hour shift) at large hospitals.
                If we can on-board them for part time job for the remainder of the week,
                that would be a winning deal for everyone.
              </div>
              <div className="project-paragraph-subnote">
                *Our research indicated that technology platform may work if we can actively on-board experienced
                (but retired) nurses to the local job market platform.<br/><br/>

                Nurses do have a relatively high dropout rates since (1) the sector is dominated by females,
                (2) many become middle and upper middle class families,
                and (3) they have a high job market dropout rate as child rearing becomes an issue. <br/><br/>

                We came up with a conclusion--if we can develop a platform that introduces local part-time
                nursing positions to nurses, that can (1) reduce nurse recruiting costs and (2)
                alleviate financial constraints on many underfunded intercity and rural hospitals.<br/>
              </div>
              <div className="synopsis-content-paragraph">
                The more underfunded a hospital is, the harder for those institutions to recruit providers. They will have to pay more in recruiting fees and compensations and work harder to entice staffs to stay. It is a vicious cycle.
              </div>
              <div className="synopsis-content-paragraph">
                1. Residents around underfunded hospitals often have weaker (or no) health insurance. That leads to higher delinquency rate, creating a pressure on hospitals' business model.<br/>
                2. The lack of hosptial revenue results in longer hours and more patients from providers perspective. Less providers are willing to work for rural, intercity, or low-budget institutions.<br/>
                3. This often results in very high staff turnover. Low budget institutions will have to work with staff shortage.<br/>
                4. High turnover leads to high recruiting costs. Compensations will have to go up each time to entice providers to work under less than ideal conditions. This puts more pressure on budget.
              </div>
            </div>
          </div>
        </div>

        <div className="project-content">
          <div className="project-paragraph project-key-idea-2">
            <div className="project-paragraph-header">
              Project Process
            </div>
            <div className="synopsis-content-paragraph">
              This is how I define startup development process.
            </div>
            <img src={projectProcessImage} className="cureconnect-image-2" />
            <div className="project-paragraph-header">
              Issue Discovery
            </div>
            <div className="synopsis-content-paragraph">
              1. What are the industries that pay the most commissions? We zeroed in on couple of industries that pay the highest commissions for placements (other than executive recruiting).<br/>
              2. Healthcare industry drew our attention since it has the highest recruiting costs for primary and secondary provider level. We did more research to investiagate this issue.
            </div>
            <img className="cc-phase1-image" src="https://firebasestorage.googleapis.com/v0/b/won-jun-hong-website.appspot.com/o/ccPhase1.JPG?alt=media&token=f9c5109e-31f4-498b-b86f-0e4c255a4b2a"/>
            <div className="project-paragraph-header">
              Problem Scoping<br/>
              Where and how do we start?
            </div>
            <div className="synopsis-content-paragraph indent-paragraph">
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

              <div className="double-indent-paragraph">
                a. Healthcare Providers (Doctors, PAs, NPs, and regular nurses)<br/>
                b. Buyers (hospital admins and staffers)<br/>
                c. Independent brokers and recruiters.<br/>
              </div>
            </div>
            <div className="project-paragraph-header">
              Problem Discovery
            </div>
            <img className="cc-phase2-image" src="https://firebasestorage.googleapis.com/v0/b/won-jun-hong-website.appspot.com/o/ccPhase2.JPG?alt=media&token=6a4e0598-9d53-4043-a11f-284996dfa5d6"/>
            <div className="project-paragraph-header">
              So we decided to interview following three groups of people:
            </div>
            <div className="synopsis-content-paragraph">
              <li>Healthcare Providers (Doctors, PAs, NPs, and regular nurses)</li>
              <li>Buyers (hospital admins and staffers)</li>
              <li>Independent brokers and recruiters</li>
            </div>
            <div className="project-paragraph-header">
              How do we find them?
            </div>
            <div className="synopsis-content-paragraph">
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
            <div className="synopsis-content-paragraph">
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
              <br/>
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

            <div className="synopsis-content-paragraph">
              This is usually how it works:
              <br/><br/>
              W: “Hi Susan, thank you very much your time! Lovely to chat with you. I recently graduated from New York University, and I am doing an academic research on healthcare recruiting, especially with a focus on nurse recruiting.
              <br/><br/>
              I guess I am speaking to the best one since you stated not too long ago. It would be great if we can kick this off you could quickly share how you actually landed your first career.
              <br/><br/>
              [Susan Answers]
              <br/><br/>
              W: How was it? How did you feel?
              <br/><br/>
              [Susan Answer]
              <br/><br/>
              W: Could you tell me a little bit more about that? What do you and other nurses usually do to overcome that issue?
              <br/><br/>
              [Susan Answers]
              <br/><br/>
              W: Have you considered using the job sites, like Craigslist, Monster, or Indeed?
              <br/><br/>
              [Susan Answers]
              <br/><br/>
              W: What did you like the most about Indeed? [You will have to get this down and must incorporate on your product--other people’s best problem you need to copy, and other people’s problems, you need to solve with 10x better solution]
              <br/><br/>
              [Susan Answers]
              <br/><br/>
              W: How do other nurses typically find their part-time jobs?
              <br/><br/>
              [Susan Answers]
              <br/><br/>
              W: If you have a magic wand and could change two things in regards to the experience that you’ve had, what would those two be?
              <br/><br/>
              [Susan Answers]
              <br/><br/>
              W: Just one last question—why do you think that has not been done yet?
              <br/><br/>
              Obviously, you will have to come up with different sets of Q&A for doctors, recruiters, and hospital admins.
            </div>

            <div className="project-paragraph-header">
              How many interviews did we have?
            </div>

            <div className="synopsis-content-paragraph">
              We interviewed about 30-40 nurses, recruiters, and hospital admins. As we were new bees, we interviewed more than necessary and asked really bad questions. You can only learn the lessons after making these mistakes. You can’t just get a free lunch by reading this article--you can only minimize your mistakes! :)
              <br/>
              The rule of thumb is, if you could talk to five people in depth with all honesty, then you should be able to learn about the 80% of industry’s common problems. If you can solve those 80% of common problems with solutions with 10x easier solution, you will survive. But that’s very, very, very difficult. Much harder than we initially expected.
            </div>

            <div className="project-paragraph-header">
              Talking to the Buyer Side (which is harder typically)
            </div>

            <div className="synopsis-content-paragraph">
              After talking to the supply side of the job market, now you will have to talk with the demand side of the equation. Who is buying the labor? You really have to talk to hospital HR, staffers, inhouse recruiters, and independent recruiters (brokers) to understand who has a real power here. You need to understand (1) who is buying the service, (2) who makes the call, and (3) who pays. Usually, whoever decides and pays is the person you wanna talk to, and you are building a program to make their lives easier. You will have to know ins-and-outs of their (and their teams’) work processes.
              <br/>
              Here are few lessons that we’ve learned:
              <br/>
              Usually, it is harder to get in touch with the buyers. They are the industry alphas. They are the busy ones. But you will have to talk to them. If you have friends or family know these people, get a coffee with them! If not, think of how to get to these people. This could be a first entrepreneurial test. I guess the journey of being an entrepreneur is not giving up and coming up with street smart solutions!
              <br/>
            </div>

            <div className="project-paragraph-header">
              What are the problems?
            </div>

            <img className="cc-phase2-image" src="https://firebasestorage.googleapis.com/v0/b/won-jun-hong-website.appspot.com/o/ccPhase2.JPG?alt=media&token=6a4e0598-9d53-4043-a11f-284996dfa5d6"/>

            <div className="synopsis-content-paragraph">
              You have to come up with a realistic view to allocate what is the major problem of the industry that you are about to tackle:
            </div>

            <div className="synopsis-content-paragraph">
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

            <div className="project-paragraph-header">
              Pre-Execution
            </div>

            <div className="synopsis-content-paragraph">
              After 45 days of talking to people, thinking, and re-doing everything multiple times, we started to make more sense in regards to what we had to build. What we had to build was the job board on a steroid, specializing in nurse recruiting. You essentially want to build a product that is a combination of Indeed and LinkedIn and provide HRMS system-like features for recruiter. And of course, this solution needs to be easy on buyer (recruiters’) side.
            </div>

            <div className="synopsis-content-paragraph">
              <ul>
                1. Are there any platforms like yours? There must be--you have to search until you find a similar one.
              </ul>
              <ul>
                2. You have to learn and understand everything about that platform. Talk to the insiders (again, LinkedIn and researcher approach). You have to know what the platform is doing right and doing wrong. You have to copy and do better in what they are doing right, and offer a solution that is 10x better by solving what they are doing wrong.
                <li>
                  Direct Competitor (Lyft vs. Uber)--if you see one, you have to assess how long, large, and active they are. If they are big enough, you will give up or revise your strategy. If the incumbent one is not doing well, you have to talk to insiders to understand why their problem is. If you can tackle them, that would be great!
                </li>
                <li>
                  Competitor in Broader Industry Scope (Hired.com vs. Indeed)
                </li>
                <li>
                  Competitor in Narrower Scope in Different Scope (Streeteasy vs. Airbnb)
                </li>
              </ul>
              <ul>
                3. You have to talk to people who are involved in similar industry. For my case, I have reached out to bunch of people in similar vertical.
              </ul>
              <ul>
                4. Learn from their design and interface, grab a coffee with a nurse recruiter and let them tell you what are the problems with Indeed (broader market competitor) and Hired.com (specific and in different market). Let nurses tell you what are the problems with these features (Again, you are having a conversation, not an interview).
              </ul>
            </div>

          </div>
        </div>


      </div>
    )
  }
}