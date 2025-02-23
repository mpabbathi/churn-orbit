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
- Performance Optimization and Time Complexity: As our application loads large datasets and computes predictions on the fly, optimizing performance to provide a smooth user experience and time complexity of running machine learning models were key concerns.
- Deployment Complexity: Integrating our machine learning models into a Streamlit web application required careful packaging of our code and ensuring that all dependencies were correctly installed on the deployment server.
- User Interface Design: Creating a clear, intuitive, and responsive UI in Vercel involved significant effort in formatting the layout, aligning components, and choosing the right visualizations to communicate insights effectively.


## Accomplishments that we're proud of
- **Interactive Churn Prediction App**:
  We developed an intuitive Streamlit app that allows users to interact with our churn prediction model in real time. Through the app, users can input customer details and instantly see the model’s churn probability, enabling dynamic exploration of “what-if” scenarios. This interactive tool transforms complex analytics into an accessible, user-friendly experience.
- **Comprehensive Project Website**:
Our dedicated project website not only showcases our predictive models and their performance but also presents key insights and visualizations. The website is designed to clearly communicate our methodology, findings, and recommendations, making the information digestible for both technical and non-technical audiences.
- **Practical Application of Statistics & Data Science**:
We leveraged advanced statistical techniques and data science methodologies—from data cleaning and feature engineering to model building and interpretation—to build a robust churn prediction system. Our efforts in model evaluation using metrics like accuracy and ROC AUC, combined with detailed insights from SHAP, demonstrate how theoretical knowledge can be practically applied to drive actionable business insights.


## What we learned


## What's next for +____+ name
In the future, we aim to scale our model by leveraging cloud data storage and other deployment tools such as Heroku. We also want to implement batch or real-time processing to make sure our model is continuously trained on the latest data and remains up-to-date.

We also would like to expand beyond the banking sector. Customer retention is crucial for all industries, and we hope to broaden the scope of our model to serve a wider range of use cases.
