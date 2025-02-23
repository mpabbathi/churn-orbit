from fastapi import FastAPI
from pydantic import BaseModel
import joblib
model = joblib.load('best_rf_model.pkl')

app = FastAPI()

class CustomerData(BaseModel):
    credit_score: int
    balance: float
    tenure: int
    age: int
    transaction_history: float

@app.post("/predict_churn/")
def predict_churn(data: CustomerData):
    # Convert input data into the format required for prediction
    customer_input = [data.credit_score, data.balance, data.tenure, data.age, data.transaction_history]
    churn_probability = model.predict_proba([customer_input])[0, 1]  # Predict probability of churn (class 1)
    return {"churn_probability": churn_probability}