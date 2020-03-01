# Description
This is a project made by (in the alphabetic order) Ahmad Taleb, Marwa Houdeib, Oussama Al Houssami, and Zeinab Kassem.
Under the Fake Client Project at Codi, Ghada a client that wants to build a website in order to build a brand for her work in accessories made of sequins and beads.
Ghada try to expand her audience by targeting people that have intereset in such products.
So for achieving this goal the following web site was made.
For this reason, react.js and nodejs will be used in the production of this application.

The web site infrastructure is divided into 2 parts:
- Front end 
- Back end 

## A- Back end
In the back end you will find the package.json file that includes all the packages used.
To run the back end part you need to run at[http://localhost:8080] with "npm start".
In the back end directory you can access the src file where you can find 3 files:
### 1- db.js
This file includes:
- The script of creating the database
- the controller used to query the database 
- the controllers are organized by table and in each table you will have it under different category Create, Read, Update, and Delete
- **the UPDATE controller for the PRODUCT table is missing**
### 2- index.js
This file includes:
- An Express server is created in this file(port 8080)
- URL Routes using the controllers created in the db.js are created by Tables and organized under different category Create, Read, Update, and Delete
- **the UPDATE route for the PRODUCT table is missing**
- Cors package is imported in this file to ensure the link with the front end.

## B- Front End 
After creating a react app we have 2 main folders in the front folder.
- public 
- src
### 1- Public 
We didn't edit the contents of this folder.
### 2- SRC
In this file we have:
- Assets folder 
- Components folder 
- Pages folder
- App.js
- App.css
- index.js
- index.css
- other
#### 1- Assets folder
The assets folder contains 4 folders that contains: 
- Fonts (for the font used in for this project) 
- Images (for the images used inserted in the database )
- Photos (for images that can be used in the project)
- Social media icon.
#### 2- Components
The components folder contains all the components used in this project:
- About box 
- Card
- Collection 
- Description 
- Filter 
- Footer 
- Form 
- Header 
- Modal window
- Slider 
#### 3- Pages 
The pages folder contains all folders for each page in the website:
- About 
- Admin 
- Contact us 
- Gallery 
- Home