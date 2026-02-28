BLOOD DONOR APP 🎯
The app designed to connect the people in need of blood with the donors easily.
Team Name: Techies
Team Members
Member 1: Sneha SB - Mar Athanasius College Of Engineering
Member 2: Shreya G - Mar Athanasius College Of Engineering
Hosted Project Link
blood-donor-app-five.vercel.app

Project Description
This app can be equally used in situations where one person is ready to donate blood and also in case of emergency blood requirements.

The Problem statement
In emergencies, people waste critical time searching for blood donors.

The Solution
A simple web app that helps users find nearby blood donors instantly.


For Software:

Languages used: JavaScript, HTML,css
Frameworks used:  React
Tools used: VS Code, Git

List the key features of your project:

Feature 1: To locate nearest donor in case of emergency
Feature 2:To store donor details 
Feature 3: Helps the donor to donate blood according to their convenience

Implementation
For Software:
Installation
[Installation commands - e.g., npm install, pip install -r requirements.txt]
Run
[Run commands - e.g., npm start, python app.py]
For Hardware:


Project Documentation
For Software:
Screenshots (Add at least 3)

![Screenshot 1]
![alt text](<Index page.png>)
This page shows the home screen of the website

![Screenshot 2]
![alt text](<Login page (2).png>)
This page collect's the basic information from the user during the first interface with the site and saves the information.This login page will not showed in the upcoming encounters.

![Screenshot 3]
![alt text](<Donor or recepient.png>)
This allows the user to choose whether they are donor or looking for blood.

![Screenshot 4]
![alt text](<recipient details-1.png>)
If the user is looking for blood it asks for the basic details and connects with with the donors in the nearby location having the matchung blood group.

![alt text](<donor details.png>)
If the user is a donor it asks for the details and stores the details to connect with the recipient when needed.



Application Workflow:
START
  ↓
HOME PAGE
  ↓
Is this the user's FIRST visit?
  ├── YES
  │     ↓
  │  LOGIN PAGE
  │  (Username, Contact No, Blood Group)
  │     ↓
  │  Save User Data
  │     ↓
  │  Go to ROLE SELECTION
  │
  └── NO
        ↓
     ROLE SELECTION
     (Donor / Recipient)
        ↓ROLE SELECTION
  ↓
User chooses?
  ├── DONOR
  │     ↓
  │  DONOR DETAILS FORM
  │  (Age, Location, Availability, etc.)
  │     ↓
  │  Save Donor Details in Database
  │     ↓
  │  END
  │
  └── RECIPIENT
        ↓
     RECIPIENT DETAILS FORM
     (Required Blood Group, Location, Urgency)
        ↓
     Check with Saved Donor Data
        ↓
     Match Found?
        ├── YES → Show Donor Contact / Connect
        └── NO  → Show "No Donor Available"
        ↓
       END

Workflow Add caption explaining your workflow:
Give a simple flow chart that shows the working of a blood donor app. 1st it is a home page. Then redirected to the login page only during the 1st interface of the user with the site and stores this data. Login page asks for the user name, contact number and blood group. This page is not shown  when the user opens the site another time. Then it goes to a page where they can choose between donor and recipient. If they are a donod it redirects to a donor details filling form and save it. if they are a recipient it redirects to a form asking for recipient details. This recipient details is checked with the already saved donor details to find a match and connect.