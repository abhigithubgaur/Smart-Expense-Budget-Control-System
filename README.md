Smart Expense Tracker & Budget Control

A modern personal finance management application that helps users track expenses, manage budgets, monitor spending habits, and gain insights into their financial health through analytics and visual reports.

Features
Expense Management
Add, edit, and delete daily expenses
Categorize transactions (Food, Travel, Bills, Shopping, etc.)
Track income and expenses separately
Attach notes and transaction details
Search and filter transactions
Budget Control
Set monthly and category-wise budgets
Receive alerts when approaching budget limits
Compare actual spending vs planned budget
Budget utilization tracking
Analytics & Reports
Interactive charts and graphs
Monthly and yearly spending analysis
Expense trends and category breakdowns
Financial summary dashboard
Export reports to CSV/PDF
User Authentication
Secure login and registration
Password encryption
User profile management
Session handling and authentication protection
Smart Features
Expense prediction and spending insights
Recurring expense reminders
Financial goal tracking
Smart recommendations to reduce overspending
Tech Stack
Frontend
HTML5
CSS3
JavaScript
React.js
Tailwind CSS
Backend
Spring boot
Spring Security
Database
MySQL
Authentication
JWT Authentication
bcrypt password hashing
Additional Tools
Chart.js / Recharts
Axios
REST API
Git & GitHub
Project Structure
smart-expense-tracker/
│
├── client/                 # Frontend source code
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── assets/
│
├── server/                 # Backend source code
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── config/
│
├── database/
├── README.md
├── package.json
└── .env
Installation & Setup
Clone the Repository
git clone https://github.com/abhigithubgaur/Smart-Expense-Budget-Control-System.git
cd smart-expense-tracker
Install Dependencies
Frontend
cd client
npm install
Backend
cd tracker
mvn spring-boot:run
Environment Variables

Create a .env file in the server directory and add the following:

PORT=5000
MONGO_URI=your_database_connection_string
JWT_SECRET=your_secret_key
Running the Project
Start Backend Server
cd tracker
mvn spring-boot:run
Start Frontend
cd client
npm start

Application will run on:

Frontend: http://localhost:3000
Backend: http://localhost:8080

API Endpoints
Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
Expenses
Method	Endpoint	Description
GET	/api/expenses	Get all expenses
POST	/api/expenses	Add new expense
PUT	/api/expenses/:id	Update expense
DELETE	/api/expenses/:id	Delete expense
Budgets
Method	Endpoint	Description
GET	/api/budgets	Get budgets
POST	/api/budgets	Create budget
Future Enhancements
AI-based spending prediction
Multi-currency support
Mobile application support
Dark mode
Bank account integration
Notification system
Voice-based expense entry
Testing

Run tests using:

npm test
Deployment
Frontend Deployment
Vercel
Netlify
Backend Deployment
Render
Railway
Heroku
Database Hosting
MongoDB Atlas
Supabase
Contributing

Contributions are welcome.

Fork the repository
Create a new branch
Commit your changes
Push to your branch
Create a Pull Request
License

This project is licensed under the MIT License.

Author

Your Name

GitHub: https://github.com/your-username
LinkedIn: https://linkedin.com/in/your-profile
Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
