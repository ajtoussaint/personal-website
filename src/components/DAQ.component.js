import logo from '../images/eec_logo.jpg'

export default function DAQ(props){
  return(
    <div className="pageWrapper">
    <h1>Employment at Kentucky Division for Air Quality</h1>
      <img src={logo} alt="EEC Logo" />
      <h1>August 2021 - Present</h1>
      <h3>Overview</h3>
      <div>
        Currently, I am employed with the state of Kentucky as an Environmental Engineer in Training. I work for the
        Energy and Environment Cabinet - Department of Enviornmental Protection - Division for Air Quality - Technical
        Services Branch - Source Sampling Section. My responsibiliites include: traveling to various facilities within the
        commonwealth to observe emissions testing and ensure proper test procedures are followed, reviewing pre-test protocol
        applications and working with facility personnel and contractors to determine adequate testing procedures, and
        reviewing post test reports for accuracy and completeness.
      </div>
      <h3>Major Contributions</h3>
      <ul>
        <li>Updated Test Review Spreadsheets: Initially, I found the process of creating a new spreadsheet for each review
        or copying a spreadsheet from a previous review to be slow an error prone. I developed a base set of spreadsheets
        for each of the major test methods that we reviewed. The spreadsheets included automated equations for the
        relevant calculations for each test and were easily adaptable to various testing scenarios. The use of these
        spreadsheets has reduced the time in which an individual can check calculations on a test report and complete
        their final review</li>
        <li>Created Extensive Training Documents: When I statred with The Division there were no formal technical training
        documents specific to my role. Everything I learned about the specifics of my job was taught to me directly by
        senior personnel. I made a point to record notes on everything and add to them based on my personal experience.
        I compiled these notes into formal training documents and collaborated with my other coworkers to ensure we
        all agreed on the practices outlined therein. These documents were then made available to new hires and this
        reduced the time needed to train them to become independent, and provided an easily available reference for our standard opperating
        procedures. This is especially useful when senior personnel are often unavailable in the field. </li>
        <li>Updated Field Checklists: I created new checklist documents for use in the field. These documents were
        organised in the order in which events would occur during a test rather than by method, which made the physical documnet
        easier to use in the field and prevented the user from skipping back and forth between sections. The digital versions
        of the checklists also had some built in conditional formatting to check calculations when appropriate. A second set
        of similar checklists was created using fonts and backgrounds to allow accessibility for visually impaired users.</li>
      </ul>
    </div>
  )
}
