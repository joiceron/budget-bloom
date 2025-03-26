# BudgetBloom

## Deployed Link

**Front-end:**  [BudgetBloom Live](https://joiceron.github.io/budget-bloom/)  

**Back-end:**  [GitHub Repository](https://github.com/joiceron/budget-bloom-server)

## Overview

BudgetBloom is a budget estimator designed to assist users in visualizing their financial situation and setting financial goals. The web application lets users plan their annual budget by entering their monthly expenses and income with spending categories.

<p align="center">
  <img src="https://github.com/user-attachments/assets/d967a446-1cac-4184-8580-d4326f567ad8" height="250">  
  <img src="https://github.com/user-attachments/assets/55ce8d0c-ab10-4fd8-8df7-31e62703e4de" height="250"> 
  <img src="https://github.com/user-attachments/assets/880e3417-125c-4738-927e-81fdcfb6ddf4" height="250"> 
</p>

### Problem Space

No appealing and free applications are available in the market.
Not knowing how you will end the month or the next one.
Long-term financial planning issues.
Lack of knowledge on how to organize income and expenses.
Difficulty visualizing spending patterns.
Other tools do not provide a full-year overview.

### User Profile

The application is designed for individual users, not businesses.
It targets young adults looking to improve their financial control.
It is aimed at people who prefer cute and visual-candy interfaces.

### Features

Budget management: Feature to input estimated income and expenses, by category or as a fixed or variable cost. If it is fixed, it will automatically fill all months with the given amount.
Calculate balance: Calculate total income, total outcome, previous balance and total balance for each month. And it will flag any negative balance.

For the MVP, only fix categories can be recorded.

## Implementation

### Tech Stack

Frontend: React 
Backend: Node.js with Express.js to handle server-side logic.

### APIs

APIs will be utilized through Axios to create, edit, and delete data on the server side.

GIF API: Generates memes based on the remaining balance at the end of the year.

### Sitemap

Home:
    Sign-in option.
    Budget table with monthly and annual budget overview.
    Clean and calculate button.

Sign in/Sign up: To be implemented.

### Data

Users: ID, email, password.
Transactions: Date, amount, category, type (income or expense).
Budget Values/Amounts: Defined by the user for each category and month.

### Endpoints

POST /signup
POST /:id/budget: Saves budget data for a specific user.
GET /:id/budget: Retrieves budget data for a specific user.


## Roadmap

1. Design phase: Requirement definitions, wireframes in Figma.
2. Frontend UI development.
3. Create a dynamic budget table using browser cache.
4. Integrate Axios for client-server data retrieval.
5. Configure backend and database.
6. Implement authentication and CRUD operations for transactions.
7. Implement API for .gif.
8. Testing and optimization

## Future Implementations

- Create a mascot that offers emotional support for your financial situation
- Detailed monthly breakdown.
- Notifications and reminders to help users manage finances better.
- Expense comparison with similar users for better financial tracking.
- Data export: Generate financial reports in PDF.
- Daily expense details.
- Visual analytics: Charts and graphs for expense tracking.
- Downloadable PDF and Excel reports.
- Enables a detailed analysis of both annual and monthly financial data with AI ingrates so it can generate advice.
- Login system: to save user data for future sessions.
- Saving goals 
