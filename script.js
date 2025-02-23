document.addEventListener('DOMContentLoaded', function () {
  fetch('Churn_Modelling.csv')
      .then(response => response.text())  
      .then(csvData => {
          parseCSV(csvData);  
      })
      .catch(error => console.error('Error fetching CSV file:', error)); 
});

function parseCSV(data) {
  Papa.parse(data, {
      header: true,
      skipEmptyLines: true,
      complete: function (result) {

        const creditScores = result.data.map(row => parseInt(row['CreditScore'])); 
          const isActiveMembers = result.data.map(row => parseInt(row['IsActiveMember']));
          const createEstimatedSalaryChart = result.data.map(row => parseInt(row['EstimatedSalary']));
          const Tenure_year = result.data.map(row => parseInt(row['Tenure']));
          const accountBalances = result.data.map(row => parseInt(row['Balance']));
          
          createChart(creditScores);
          createActivityStatusChart(isActiveMembers);
          createEstimatedSalaryCharts(createEstimatedSalaryChart);
          Tenurefunction(Tenure_year);
          createAccountBalanceCharts(accountBalances);
      }
  });
}

function createChart(creditScores) {
  const ctx = document.getElementById('creditScoreChart').getContext('2d');
  
  const scoreRanges = [350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850]; 
  const scoreCounts = new Array(scoreRanges.length - 1).fill(0); 
  
  creditScores.forEach(score => {
      for (let i = 0; i < scoreRanges.length - 1; i++) {
          if (score >= scoreRanges[i] && score < scoreRanges[i + 1]) {
              scoreCounts[i]++;
              break;
          }
      }
  });


  new Chart(ctx, {
      type: 'bar', 
      data: {
          labels: scoreRanges.slice(0, scoreRanges.length - 1).map((score, index) => `${score}-${scoreRanges[index + 1]}`),
          datasets: [{
              label: 'Total Count of Credit Scores',
              data: scoreCounts,
              backgroundColor: 'rgba(54, 162, 235, 0.5)', 
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true 
              }
          }
      }
  });
}

function createActivityStatusChart(isActiveMembers) {
  const ctx = document.getElementById('activityStatusChart').getContext('2d');
  
  const statusCounts = [0, 0]; 
  
  isActiveMembers.forEach(status => {
      if (status === 1) {
          statusCounts[1]++; 
      } else {
          statusCounts[0]++; 
      }
  });

  new Chart(ctx, {
      type: 'bar', 
      data: {
          labels: ['Inactive (0)', 'Active (1)'], 
          datasets: [{
              label: 'Activity Status Distribution',
              data: statusCounts, 
              backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(75, 192, 192, 0.5)'], 
              borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'], 
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true 
              }
          }
      }
  });
}

function createEstimatedSalaryCharts(estimatedSalaries) {
  const ctx = document.getElementById('estimatedSalaryChart').getContext('2d');
  
  const salaryRanges = [0, 5000, 10000, 25000, 50000, 75000, 100000, 125000, 150000, 175000, 200000]; 
  const salaryCounts = new Array(salaryRanges.length - 1).fill(0);
  
  estimatedSalaries.forEach(salary => {
      for (let i = 0; i < salaryRanges.length - 1; i++) {
          if (salary >= salaryRanges[i] && salary < salaryRanges[i + 1]) {
              salaryCounts[i]++;
              break;
          }
      }
  });

  new Chart(ctx, {
      type: 'bar', 
      data: {
          labels: salaryRanges.slice(0, salaryRanges.length - 1).map((range, i) => `${range} - ${salaryRanges[i + 1]}`), 
          datasets: [{
              label: 'Total Salary Count Within Each Range',
              data: salaryCounts, 
              backgroundColor: 'rgba(54, 162, 235, 0.5)', 
              borderColor: 'rgba(54, 162, 235, 1)', 
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true 
              }
          }
      }
  });
}

function Tenurefunction(Tenure_year) {
  const ctx = document.getElementById('TenureChart').getContext('2d');
  
  const scoreRanges = [1,2,3,4,5,6,7,8]; 
  const scoreCounts = new Array(scoreRanges.length - 1).fill(0); 
  
  Tenure_year.forEach(score => {
      for (let i = 0; i < scoreRanges.length - 1; i++) {
          if (score >= scoreRanges[i] && score < scoreRanges[i + 1]) {
              scoreCounts[i]++;
              break;
          }
      }
  });

  new Chart(ctx, {
      type: 'bar', 
      data: {
          labels: scoreRanges.slice(0, scoreRanges.length - 1).map((score, index) => `${score}-${scoreRanges[index + 1]}`),
          datasets: [{
              label: 'Total Count of Credit Scores',
              data: scoreCounts, 
              backgroundColor: 'rgba(54, 162, 235, 0.5)', 
              borderColor: 'rgba(54, 162, 235, 1)', 
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
}


function createAccountBalanceCharts(accountBalances) {
  const ctx = document.getElementById('accountBalanceChart').getContext('2d');
  
  const balanceRanges = [0, 10, 10000, 25000, 50000, 75000, 100000, 125000, 150000, 175000, 250000]; 
  const balanceCounts = new Array(balanceRanges.length - 1).fill(0); 
  
  accountBalances.forEach(balance => {
      for (let i = 0; i < balanceRanges.length - 1; i++) {
          if (balance >= balanceRanges[i] && balance < balanceRanges[i + 1]) {
              balanceCounts[i]++;
              break;
          }
      }
  });

  new Chart(ctx, {
      type: 'bar', 
      data: {
          labels: balanceRanges.slice(0, balanceRanges.length - 1).map((range, i) => `${range} - ${balanceRanges[i + 1]}`), 
          datasets: [{
              label: '"Distribution of Account Balances Across Different Ranges',
              data: balanceCounts, 
              backgroundColor: 'rgba(75, 192, 192, 0.5)', 
              borderColor: 'rgba(75, 192, 192, 1)', 
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true 
              }
          }
      }
  });
}
