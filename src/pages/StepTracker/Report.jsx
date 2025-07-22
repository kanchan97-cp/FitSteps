import React, { useEffect, useState } from "react";
import "./Report.css";

const Report = ({
  steps,
  setSteps,
  target,
  setTarget,
  setTotalSteps,
  setBestDay,
  setAverage,
  setGoalStats,
}) => {
  const [stepInput, setStepInput] = useState("");
  const [showStepInput, setShowStepInput] = useState(false);

  const [targetInput, setTargetInput] = useState("");
  const [showTargetInput, setShowTargetInput] = useState(false);
  const today = new Date().toISOString().split("T")[0];
  useEffect(() => {
    const total = steps.reduce((sum, entry) => sum + entry.count, 0);
    setTotalSteps(total);

    const avg = steps.length > 0 ? Math.round(total / steps.length) : 0;
    setAverage(avg);
  }, [steps, setTotalSteps, setAverage]);

  useEffect(() => {
    if (steps.length > 0) {
      const best = steps.reduce(
        (max, curr) => (curr.count > max.count ? curr : max),
        steps[0]
      );
      setBestDay(best);
    } else {
      setBestDay(null);
    }
  }, [steps, setBestDay]);

  useEffect(() => {
    const totalDays = steps.length;
    const goalsMet = steps.filter(
      (step) => target && step.count >= target
    ).length;
    const successRate =
      totalDays > 0 ? Math.round((goalsMet / totalDays) * 100) : 0;

    if (setGoalStats) {
      setGoalStats({ goalsMet, totalDays, successRate });
    }
  }, [steps, target, setGoalStats]);

  const handleAddSteps = () => {
    setShowStepInput((prev) => !prev);
    setShowTargetInput(false);
  };
  const handleSaveSteps = () => {
    if (stepInput.trim() !== "") {
      const countToAdd = parseInt(stepInput);
      const existingIndex = steps.findIndex((s) => s.date === today);
      if (existingIndex !== -1) {
        const updatedSteps = [...steps];
        updatedSteps[existingIndex].count += countToAdd;
        setSteps(updatedSteps);
      } else {
        const newStep = {
          date: today,
          count: countToAdd,
        };
        setSteps([...steps, newStep]);
      }
      setStepInput("");
      setShowStepInput(false);
    }
  };

  const handleSetTarget = () => {
    setShowTargetInput((prev) => !prev);
    setShowStepInput(false);
  };

  const handleSaveTarget = () => {
    if (targetInput.trim() !== "") {
      setTarget(parseInt(targetInput));
      setTargetInput("");
      setShowTargetInput(false);
    }
  };

  const handleRemoveEntry = (indexToRemove) => {
    const updated = [...steps];
    updated.splice(indexToRemove, 1);
    setSteps(updated);
  };

  const handleRestartAll = () => {
    setSteps([]);
    setTarget(null);
  };

  return (
    <div className="report-container">
      <div className="report-header">
        <h2>Your Step Log</h2>
        <div className="report-buttons">
          <button className="add-step-btn" onClick={handleAddSteps}>
            ➕ Add Steps
          </button>
          <button className="set-target-btn" onClick={handleSetTarget}>
            🎯 Set Target
          </button>
        </div>
      </div>

      {showStepInput && (
        <div className="input-section">
          <input
            type="number"
            placeholder="Enter steps"
            value={stepInput}
            onChange={(e) => setStepInput(e.target.value)}
          />
          <button onClick={handleSaveSteps}>Save</button>
        </div>
      )}

      {showTargetInput && (
        <div className="input-section">
          <input
            type="number"
            placeholder="Enter step target"
            value={targetInput}
            onChange={(e) => setTargetInput(e.target.value)}
          />
          <button onClick={handleSaveTarget}>Save</button>
        </div>
      )}

      {target && (
        <div className="restart-wrapper">
          <p>
            🎯 Daily Target: <strong>{target} steps</strong>
          </p>
          <button className="restart-btn" onClick={handleRestartAll}>
            🔁 Restart All
          </button>
        </div>
      )}

      <div className="step-log">
        {steps.length > 0 ? (
          steps.map((step, index) => {
            const progress = target
              ? Math.min((step.count / target) * 100, 100)
              : 0;
            const isSuccess = target && step.count >= target;

            return (
              <div key={index} className="step-entry">
                <div className="step-info">
                  <span>{step.date}</span>
                  <span> </span>
                  <span className="span2">{step.count} steps</span>
                  {target && (
                    <div className="progress-bar">
                      <div
                        className={`progress-fill ${
                          isSuccess ? "success" : ""
                        }`}
                        style={{ width: `${progress}%` }}
                      >
                        {Math.floor(progress)}%
                      </div>
                    </div>
                  )}
                </div>
                <button
                  className="remove-day-btn"
                  onClick={() => handleRemoveEntry(index)}
                >
                  🗑️
                </button>
              </div>
            );
          })
        ) : (
          <p>No steps logged yet.</p>
        )}
      </div>
    </div>
  );
};

export default Report;
