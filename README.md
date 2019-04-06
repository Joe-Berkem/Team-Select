# Team Select

5 a side football team generating app completed as part of the DevelopMe Coding Fellowship technical challenge.


View the app for yourself [here](https://joe-berkem.github.io/Team-Select/).

## Getting Setup

### Requirements

NPM

### Installation

run ***git clone*** to clone this git repository:

```
git clone git@github.com:Joe-Berkem/Team-Select.git
```
run ***npm install*** to install all dependencies:

```
npm install
```
run ***npm start*** once all dependencies are installed to run the app locally:

```
npm start
```

## The brief

The exercise is to create a tool which randomly picks 5-a-side football teams from a list of 10 names (10 players = 2 teams of 5).

It's up to you how you implement this, with JavaScript, PHP, as a web page, or as an app.

***Optional advanced features might include:***

- support for n-a-side, where a list of any length can be split into two teams.
- support for balancing of the teams, where some measure of each player's strength is used to allocate teams fairly.


## Planning

I compiled a project planning document before getting started on the app build. I've since added snapshots of my seperate pre-build notes and wireframes. The main purpose of the document was to outline the features of the MVP and advanced features I wanted to integrate into the app. 

You can view the document [here](https://docs.google.com/document/d/1pqkSmxv07KVDQfVmKqXQXgZOG3TXexOjA2sZFRXRCWI/edit?usp=sharing). 

## Technologies

After recently learning React & Redux towards the end of the course and being amazed by the power of the Javascript libraries the choice to use these to build the app was a simple one for me. 

I initially wanted to use Sass to enable a more structured approach to styling however in the early stages of the build I encountered an issue with Gulp when compiling the Sass files. After a fair portion of time spent on investigating the issue I decided to prioritise the build and opted for building the app with CSS, with a view to come back to Sass integration.


## Version Management
I found github a very impressive tool during the course so decided to utilise it for version management of the app. 

As I was working independently I decided to branch directly from the master branch and only merge branches when changes were thoroughly tested.

While working in groups during the course we were advised to branch from a development branch as opposed to the master but as the only person working on the project I felt this would be unneccessary.


## Testing
##### Functionality
As React and Redux applications are multi-layered with data being passed through numberous levels I decided to test the more complex actions, reducers and components via unit testing first and then via integration. 

I did this by creating the functions outside of the app and passing dummy data to the functions while using the command line to output the data. This meant I could test the functions outside of the browser which made things clearer.

I then ensured that the when they were integrated into the app the functions were outputting the same data using Chrome Developer Tools.

##### Responsiveness
Throughout the build I made use of the Chrome and Mozila DevTools Device Mode and Responsive Views to help determine how responsive my app was. I also tested the app on multiple devices using the gh-pages link. Apple devices rendered the app perfectly during the tests however when testing Android devices spacing of the app when a text input is enabled became an issue.

## Unresolved issues
As with any app build there were a number of issues and challenges I encountered, the majority of which I was able to overcome through research, experimentation and testing but some I could not find a fix for before the deadline. 

- App spacing skews on Android devices 
- 404 renders at bottom of every page in switch statement
- Sass doesn't compile using Gulp
- Warning: React does not recognize the `computedMatch` prop on a DOM element
- Player list banner and reset button shrink when list gets long


## Additional features
In the planning process I identified a number of additional features I wanted to integrate into the app, Those outstanding which I plan to add after the challenge include:

- Display a log of past teams
- Navigation drop down
- Add substitues as an option 0-7
- Layout players based on preferred position
- Display overall team rating based on players ratings (15/15)
- Ability for user to download final teams page as pdf/img
- Enable user to switch substitutes
- Save team to history


## What I would do differently

#### Add Redux Persist later in the project

Although it should prove useful for state to be saved locally so that a user won't lose their progress if the page reloads implementing this at the start of the project made testing more difficult.

#### Testing

I would have liked to carry out more thorough testing, perhaps making use of Jest or a similar framework.

#### Improve the splitTeams function and integrate into reducers

Although in most cases the splitTeams function renders fair teams the fact is the logic needs to be more robust to ensure the team are as fair as they possibly can be. I would have also liked to build in logic that splits the teams based on rating and preffered position but decided these enhancements should not take priority. I am also aware that business logic such as this should live with the other methods of it's kind in the file structure but this integration again was not prioritised. 

#### BEM class naming

In hindsight my CSS class naming could be improved for clarity. If I were to it again I would utilise BEM class naming for a more logical class naming structure. 

#### Kit SVGs as components

In order to pass the kit svgs used for the player items the colour props I had to include the svg code within the PlayerItem.js code. On reflection I should have created a component for each svg which would have tidied up the code a great deal.