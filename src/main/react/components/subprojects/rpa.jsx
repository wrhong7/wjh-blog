import React from "react";

export default class Principles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expandedDivIds: []
    };
    this.clickExpandReduceDivButton = this.clickExpandReduceDivButton.bind(this);
  }

  clickExpandReduceDivButton(divId) {
    divId = "#"+divId;
    if ($(divId).css("display") == "none") {
      $(divId).css("display", "inline");
    } else {
      $(divId).css("display", "none");
    }
  }

  render() {
    return (
      <div className="rpa-container">

        <div className="rpa-idea-container">
          <div className="idea-header">
            RPA Tools Review
          </div>
          <div className="idea-content">

            Robotic Process Automation (RPA – I will call software bots or bots since that’s a more accurate
            description) has been a buzzword for the world of business operations. There are a lot of thoughts
            in the market, and I would like to briefly share what I think about these tools.
          </div>
        </div>

        <div className="rpa-idea-container">
          <div className="idea-header">
            Summary
          </div>
          <div className="idea-content">
            RPA is a marketing word for software bots. Instead of developers coding a dedicated software,
            RPA is semi-packaged software that is design to record a business analyst’s actions on computer.
            When the replication of the actions is needed, the analyst can schedule the bot to run.
            Therefore, reducing the amount of repetitive bitchwork.
          </div>
        </div>

        <div className="rpa-idea-container">
          <div className="idea-header">
            Strength of RPA Tools
          </div>
          <div className="idea-header-sub-description">
            Click each to learn more
          </div>
          <div className="idea-content-indent">
            <div className="idea-sub-header" onClick={() => this.clickExpandReduceDivButton("rpa-strength-1")}>
              1	Cross Platform
            </div>
            <div className="idea-sub-content" id="rpa-strength-1">
              The biggest strength of these software bots lies with the fact that they have a resilient
              cross platform capability as long as they are ran on Windows.
              <br/><br/>
              For instance, if you are an invoice processing personnel at a small and medium sized
              companies targeting smaller shops. The chance is that you might have a somewhat centralized
              accounting system while your invoice system still involves lots of manual file generation
              and client emailing. Many smaller companies have a dedicated person, if not a team, deal
              with finance, invoicing, and accounting ledger entries. How can you save people’s time?
              <br/><br/>
              Let’s say your accounting software comes from Oracle, client management software is
              salesforce, Gmail is being used for client correspondence, and you use Word and PDF
              files for invoice generation and recognition. While we can automate this process by
              hiring an army of developers, but the task is difficult since (1) it costs a lot of time,
              money, and effort to get a license to dissect the software source code, (2) integrating
              various different computer languages and platforms is really a pain, (3) many companies do
              not have talents or resources to push out such a complicated task, and (4) for that money,
              people would hire someone in $15 per hour to get these bitchwork done.
              <br/><br/>
              However, mimicking a business analyst’s interaction with the software, these software bots
              are providing a lot of opportunities to get rid of the bitchwork from the world of operation.
              Instead of directly plugging in client management software and PDF readers to Oracle ledger
              system, bots can mimic the human behavior of (1) opening up the PDF file and Salesforce
              profiles and (2) copy the client information and invoice amounts, (3) open up the Oracle
              accounting system and update the values, and (4) open up browser and send a Gmail, attaching
              the invoice.
              <br/><br/>
              Obviously, it is not going to be as robust or fast as integrating various platforms,
              but it’s cheaper, faster, and intuitive. Three favorite words from business analysts.
              <br/>
              <div className="idea-sub-content-reduce-button"
                   onClick={() => this.clickExpandReduceDivButton("rpa-strength-1")}>Close</div>
            </div>
          </div>
          <div className="idea-content-indent">
            <div className="idea-sub-header"
                 onClick={() => this.clickExpandReduceDivButton("rpa-strength-2")}>
              2 Flexible
            </div>
            <div className="idea-sub-content" id="rpa-strength-2">
              Ask any developer or product manager. One of their biggest headaches involve
              with various configurations and giving users options to do what they want.
              The line between programming efficiency vs providing flexibility with users is
              very hard to draw. How many times have you heard people saying, “I would rather
              do this with my hand than using this software.” The problem is software are often
              coded and remain the status quo, while human interactions and businesses are fluid
              and constantly changing. The fields or features that we needed this year may not be
              needed next year.
              <br/><br/>
              That’s why software has patches and version upgrades, but they are not fast enough.
              Also, to be fair with software and product engineers, it’s hard to make needed changes for users,
              since these users complain among themselves, but do not share the feedback with the technology team.
              These business people are busy enough to generate the sales, and who has time to deal with the
              developers? They often complain among themselves and call it a day.
              <br/><br/>
              However, the story would be different if those business people can make their own changes
              and start seeing the difference immediately. Instead of pulling the client name, address,
              and fax number, you can tweak these software bots (with intuitive graphic design) and copy
              the email address instead of the fax number. These changes are easy, if the business people
              have the basic understanding of how these software work.
              <br/><br/>
              If a business analyst uses these software bots enough times (I would say 100-200 hours of usage),
              they can even come up with their own version of automation.
              <br/>
              <div className="idea-sub-content-reduce-button"
                   onClick={() => this.clickExpandReduceDivButton("rpa-strength-2")}>Close</div>
            </div>
          </div>
          <div className="idea-content-indent">
            <div className="idea-sub-header"
                 onClick={() => this.clickExpandReduceDivButton("rpa-strength-3")}>
              3	Bypassing API & Licenses
            </div>
            <div className="idea-sub-content" id="rpa-strength-3">
              Again, we all have technologies to pull the data and dissect the software,
              but the resource is the constraint. You need a API keys or licenses to do so,
              and they are often very expensive, and some of the menial, low to medium volume
              of the work that we do may not be able to justify a business case.
              <br/><br/>
              Let’s give an example. Let’s say you work as a portfolio analyst at a small and
              medium sized broker-dealer. I guess your job involves sharing the end of the day
              portfolio value with your clients. All you need to do is, logging into Bloomberg’s
              website at 5:20PM, and pull abut 20 shares that your company specializes in and update
              the fields on the Excel.
              <br/><br/>
              Of course, there are better ways to do that. For instance, you can use the Bloomberg
              or Thompson Reuters platforms, but Bloomberg terminal or API keys cost somewhere
              between USD 3,000 to 4,000 a month, depending on what you want and where you live.
              You can make a business case for that, especially if you manager thinks it works fine
              with you staying extra 30 minutes late every day.
              <br/><br/>
              Instead of accessing Bloomberg API directly, software bots can mimic what the analyst
              do on the browser. You can train the bot to (1) open the browser and type Bloomberg.com,
              (2) search the stock ticker, (3) copy and paste the closing price on the Excel spreadsheet,
              and (4) you can schedule this task every Monday to Friday at 5:20PM.
              <br/><br/>
              The cost will be fractional of using Bloomberg data since we are pinging the Bloomberg
              database without paying for it.
              <br/><br/>
              Instead of accessing Bloomberg API directly, software bots can mimic what the analyst
              do on the browser. You can train the bot to (1) open the browser and type Bloomberg.com,
              (2) search the stock ticker, (3) copy and paste the closing price on the Excel spreadsheet,
              and (4) you can schedule this task every Monday to Friday at 5:20PM.
              <br/><br/>
              The cost will be fractional of using Bloomberg data since we are pinging the Bloomberg
              database without paying for it.
              <br/>
              <div className="idea-sub-content-reduce-button"
                   onClick={() => this.clickExpandReduceDivButton("rpa-strength-3")}>Close</div>
            </div>
          </div>
          <div className="idea-content-indent">
            <div className="idea-sub-header"
                 onClick={() => this.clickExpandReduceDivButton("rpa-strength-4")}>
              4 Cheaper
            </div>
            <div className="idea-sub-content" id="rpa-strength-4">
              We are building a cross platform software without using the target software’s developer
              license or API. Bots can achieve the same effect without us paying for the API or license.
              <br/><br/>
              With the recording feature, the bot records your interaction among various software
              and mimics the behavior. It opens the field that you would like to open up, pulls the
              value you want, and saves the values on the destination system. It’s a “soft-coding.”
              By minimizing the developer’s involvements on this process, you can save a lot of costs.
              <br/><br/>
              Once experienced (I would say 100-200 hours) enough, a user can create their own bots
              with exactly what they want. This will eliminate the needs of developers, product managers,
              project coordinators, and budget approval. You can roll out things faster as the way you want.
              This speed and flexibility is always helpful when you need bot modification and upgrades on
              a constant and real-time basis.
              <br/>
              <div className="idea-sub-content-reduce-button"
                   onClick={() => this.clickExpandReduceDivButton("rpa-strength-4")}>Close</div>
            </div>
          </div>
        </div>

        <div className="rpa-idea-container">
          <div className="idea-header">
            Conclusion
          </div>
          <div className="idea-content">
            Looking back, the single most important moment of software history was when Xerox rolled out
            first Graphic User Interface (GUI). Instead of entering techy commands on bash or shell,
            regular users could achieve the same effect by moving cursors and clicking icons around.
            oon Bill Gates and Steve Jobs adopted these features and began the age of layman’s computing.
            <br/><br/>
            Drawing a parallel, I would call these RPA bots as the Xerox GUI equivalent of the automation industry.
            While the automation remains the remnants of the area of geeky comp sci PhDs, companies like
            Automation Anywhere, Blue Prism, UI Path, and Work Fusion began the era of GUI equivalent of the
            automation industry. However, I would say these products are still glitchy, too much effort for
            average business analyst, and consulting + configuration + license + implementation costs are not cheap.
            It’s going to be either one of these smaller players become Apple or Microsoft equivalent, or
            talented outsider will break in. I would say later.
          </div>
        </div>

      </div>
    )
  }
}
