import React, { useState } from 'react';
import Footer from "../../components/Footer";
import History from "./History";
import Streak from "./Streak";
import Report from "./Report";


function StepTracker() {
  const [steps, setSteps] = useState([]);
  const [target, setTarget] = useState(null);
  const [totalSteps, setTotalSteps] = useState(0);
  const [BestDay, setBestDay]=useState(0);
  const [average, setAverage] = useState(0);
  const [goalStats, setGoalStats] = useState({goalsMet: 0,totalDays: 0,successRate: 0,});


  return (
    <>
      <History totalSteps={totalSteps} BestDay={BestDay} average={average} goalStats={goalStats} /> 
      <Streak steps={steps} target={target} />
      <Report steps={steps} setSteps={setSteps} target={target} setTarget={setTarget} setTotalSteps={setTotalSteps} setBestDay={setBestDay} setAverage={setAverage} setGoalStats={setGoalStats} />
      <Footer />
    </>
  );
}

export default StepTracker;
