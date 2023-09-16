# Game Search App - Documentation
<div align="center">
<img src="https://i.ibb.co/68mss0h/r-1.png" alt="r-1" border="0">
</div>
<br/>
This is a React application that allows users to search for games using a search bar. The app retrieves game data from an API and displays it in a list format. Users can input a search term into the search bar, and the app will filter games based on the title.

## Access the application [by clicking here](https://games-list-project.vercel.app/)

### Installation

To run this application locally, follow these steps:

1. Clone the GitHub repository:
```git clone git@github.com:luccarendall/games-list-project.git```
2. Navigate to the project directory: ```cd games-list-project```
3. Install dependencies: ```npm install```
4. Start the development server: ```npm start```

5. The app will run at `http://localhost:3000`.

### Usage

Upon opening the app, you will see a search bar at the top of the page. Enter a search term into the bar, and the games will be fetched from the API and displayed in a list below the search bar. If there are games that match the search term, they will be displayed with their titles, images, and short descriptions. Otherwise, a message stating that no games were found will be shown.

<div align="center">
<img src="https://media.giphy.com/media/1kgxjgjFbYdHGwv88x/giphy.gif" alt="Gif" width="600" height="240">
  <br/>
You can continue searching for different search terms to refine the results.
</div>

### Features

- Game search by title: The app filters games based on the title provided in the search bar. The filtering is done in real-time as the user types.
- Coming Soon: Genre filtering

### Technologies Used

- React + Hooks
- Axios
- CSS
- JavaScript

### What I Would Do with More Time

- Componentize each structure respecting the single responsibility principle
- Use Context or Redux to manage global state more dynamically
- Add unit tests
- Add buttons to remove individual applied filters or all filters at once

### Author
| [<img src="https://avatars.githubusercontent.com/u/92706411?v=4" width=115><br><sub>@luccarendall</sub>](https://github.com/LuccaRendall) |
| :---: |
