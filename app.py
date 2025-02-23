import streamlit as st
import joblib
import numpy as np
import pandas as pd
import shap
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split

# Load Model
model = joblib.load('final_rf_model.pkl')

# Title
st.title("Bank Customer Churn Prediction Dashboard")
st.write("Use our interactive dashboard to predict whether a customer will leave your bank.")

# Sidebar Inputs
st.sidebar.header("Enter Customer Details")
credit_score = st.sidebar.slider("Credit Score", 300, 900, 600)
balance = st.sidebar.slider("Account Balance ($)", 0, 200000, 50000)
salary = st.sidebar.slider("Estimated Salary ($)", 0, 1000000, 50000)
tenure = st.sidebar.slider("Tenure (Years)", 0, 10, 5)
age = st.sidebar.slider("Age", 18, 100, 35)
num_products = st.sidebar.slider("Number of Products", 1, 4, 2)
gender = st.sidebar.selectbox(
    "Select Gender", 
    ["Female", "Male"]
)
credit_card = st.sidebar.selectbox(
    "Select Credit Card Status", 
    ["Has Card", "Does Not Have Card"]
)
active_member = st.sidebar.selectbox(
    "Select Status", 
    ["Active", "Not Active"]
)

# Encode categorical inputs
label_encoder = LabelEncoder()
active_member = label_encoder.fit(["Active", "Not Active"]).transform([active_member])[0]
credit_card = label_encoder.fit(["Has Card", "Does Not Have Card"]).transform([credit_card])[0]

# Convert input to data frame
customer_data = pd.DataFrame({
    'CreditScore': [credit_score],
    'Age': [age],
    'Tenure': [tenure],
    'Balance': [balance],
    'EstimatedSalary': [salary],
    'Gender': [gender],
    'HasCrCard': [credit_card],
    'IsActiveMember': [active_member],
    'NumProducts': [num_products]
})
# Predict Churn
if st.sidebar.button("Predict Churn"):
    churn_prediction = model.predict(customer_data)[0]
    churn_prob = model.predict_proba(customer_data)[0][1] * 100
    st.subheader(f"Prediction: {'🚨 Likely to Churn' if churn_prediction else '✅ Will Stay'}")
    st.write(f"Churn Probability: {churn_prob:.2f}%")

 # streamlit run app.py