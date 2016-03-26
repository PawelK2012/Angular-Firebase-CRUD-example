# Budget-App
Budget app - an app that helps you manage your monthly budget on the go. 

This project relays on AngularJS & Firebase. We use Firebase to authenticate users and store data on the back-end. 

#Project features: 

- register user with Firebase
- login user
- log-out
- create budget
- view budget details
- add expenses
- add monthly expenses
- angular form validation

#Getting Started

To get you started you can simply clone the #Budget-App repository and install the dependencies:

<h3>#Clone Budget-App</h3>

Clone the Budget-App repository using git:

 <code>git clone https://github.com/PawelK2012/Budget-web-client.git  </code>

 <code>cd budget  </code>

<h3>#Install Dependencies</h3>
We have preconfigured npm to automatically run npm and bower so we can simply do:

 <code> npm install </code>

and then 

<code> bower install </code>

<h3>#Run the Application</h3>

We have preconfigured the project with a simple development web server. The simplest way to start this server is:

 <code> npm start  </code>

#Compile SASS with Gulp

Inside project directory run command <code> gulp </code>. This will run Gulp task to watch all SASS and concat them into one CSS file.

 <code> gulp </code>

#Updating dependencies

You can update the tool dependencies by running:

 <code> npm update  </code>

You can update the Angular dependencies by running:

 <code> bower update  </code>


#TO DO:
- [ ] <strong>fix $rootScope issue in budgetservice</strong>
- [x] <strong>investigate budget structure</strong>
- [x] <strong>create different SASS modules for views, widgets & directives</strong>
- [x] improve importing sass modules
- [x] fix gulp sass output 
- [x] create directive for nav menu
- [ ] create user page
- [ ] allow users to update profile
- [ ] allow users to edit budget
- [ ] allow users to create budget
- [x] allow users to view budget
- [x] set up git
- [x] set up sass
- [x] add form validation for login and register forms
- [x] clean up package.json and add required dependencies
- [ ] home page design
- [ ] budget page design
- [ ] view budget design
- [ ] profile page design
- [ ] wireframes
- [x] delete budget
