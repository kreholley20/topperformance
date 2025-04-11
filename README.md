TopPerformance

TopPerformance is a Node.js and Express-based web application that provides tools for calorie tracking and client-trainer management. It includes features for logging meals, calculating Total Daily Energy Expenditure (TDEE), and managing fitness clients and trainers.

🚀 Features

🥗 Calorie Counter

Log and manage meals

Track daily calorie intake

Post and comment system for user interaction

TDEE calculator to estimate daily energy needs

🧑‍🏫 Client & Trainer Management

Add, search, and delete clients and trainers

Track active client-trainer relationships

Manage client progress through a dedicated interface

🖼️ Frontend

HTML-based interface with themed images and branding

Separate pages for calorie counting and client-trainer management

📁 Project Structure

topperformance/
├── Models/                # Database models
│   ├── CalorieCounter/    # Models for calorie tracker
│   └── ClientTrainer/     # Models for trainer/client
├── public/                # Static frontend HTML and assets
│   ├── CalCountPages/
│   └── ClientTrackerPages/
├── Database/              # SQLite and SQL files
├── index.js               # Main server file
├── package.json

🛠️ Installation

Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/topperformance.git
cd topperformance
Install dependencies:

bash
Copy
Edit
npm install
Start the server:

bash
Copy
Edit
node index.js
Open your browser and go to http://localhost:3000.

Note: Ensure your environment supports SQLite for the included .db files, or use the provided mySQL.sql file to migrate to a MySQL database.

💾 Databases

trackCalorie.db: Used by the calorie counter

ClientTrainer.db: Used for managing trainers and clients

mySQL.sql: SQL schema for optional MySQL setup

📌 To Do / Ideas

Improve UI design and responsiveness

Add authentication and session management

Enhance error handling and form validation

Build a unified dashboard to switch between calorie tracking and client management

📄 License

This project is open source and available under the MIT License.
