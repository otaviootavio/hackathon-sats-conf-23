import React from "react";
import "./ResultsView.css"; // Make sure the path is correct


const ResultsView = (balances: Record<string, number>) => {
  return (
    <div className="results-container">
      <h3>Results:</h3>
      {Object.entries(balances).map(([account, balance]) => (
        <div key={account} className={`result-item ${balance < 0 ? 'negative' : ''}`}>
          <span className="result-account">{account}:</span>
          <span className="result-balance">
            {balance < 0 ? `Debt: ${Math.abs(balance)}` : `Credit: ${balance}`}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ResultsView;
