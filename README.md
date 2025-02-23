## Inspiration
We are all future aspiring entrepeners who recognize the importance of customer 
retention in any business, company, and service. As busnisses strive to create products
and services that draws and keeps customers in, we also wanted to help busnisses
identify characteristics of customers that are at risk of leaving. We ultimately decided
on narrowing our scope to predicting bank churn. We hope that banks and other busninsses
gain valuable insights from our findings.

## What it does
Our bank churn projection model leverages machine learning to predict customer churn, 
helping banks identify at-risk customers before they leave.  By analyzing customer 
demographics (credit score, estimated salary, and more) we are able to provide insights
that drive customer retention strategies. 

## How we built it
We built our churn prediction system by following these key steps:
- Data Preparation: We cleaned the customer dataset, selected relevant features, and split the data into training and testing sets.
- Modeling Pipeline: Using Python and scikit-learn, we implemented several classification algorithms—Logistic Regression, K-Nearest Neighbors, Decision Trees, Random Forest, and Boosted Trees—to predict customer churn.
- Model Evaluation: We evaluated the models using accuracy and ROC AUC metrics through cross-validation. Random Forest emerged as the top performer with 81.8% accuracy.
- Feature Analysis: We examined variable importance and used SHAP (Shapley Additive Explanations) to understand the impact of key factors like Age, Estimated Salary, Credit Score, and Balance on churn.
- Refinement & Insights: Finally, we refined our model by dropping insignificant variables and segmenting key features into bins, helping us identify high-risk customer groups and guide targeted retention strategies.


## Challenges we ran into

## Accomplishments that we're proud of

## What we learned

## What's next for +____+ name
In the future, we aim to scale our model by leveraging cloud data storage and other deployment tools such as Heroku. We also want to implement batch or real-time processing to make sure our model is continuously trained on the latest data and remains up-to-date.

We also would like to expand beyond the banking sector. Customer retention is crucial for all industries, and we hope to broaden the scope of our model to serve a wider range of use cases.
