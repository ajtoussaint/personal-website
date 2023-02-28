import logo from '../images/NEAS.jpg'

export default function NEAS(props){
  return(
    <div className="pageWrapper">
      <h1>Employment at NEAS</h1>
      <img src={logo} alt="NEAS" />
      <h1>Spring 2021</h1>
      <h3>Overview</h3>
      <div>
        Working in the lab at NEAS, my responsibiliites included performing various tests on soil samples. I also performed
        field work testing concrete samples for various qualities before they were used in concstruction. My most valuable
        take away from my experience was good time management skills, as many of the prcedures had strict time requirements
        on the order of minutes or hours. Learning to juggle the different tasks for each procedure and avoiding down time
        without missing a step has taught me how to use my time wisely.
      </div>
    </div>
  )
}
