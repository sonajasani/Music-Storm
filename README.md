
<p align="center">
  <a href="https://github.com/sonajasani/Music-Storm">
     <img src="./frontend/src/components/Navigation/logo.png" alt="Logo" width="80" height="80" style="background-color:white">
  </a>

  <h3 align="center">MusicStorm</h3>

  <p align="center">
    MusicStorm, a SoundCloud clone, is a rendition of the music streaming platform SoundCloud, that allows users to upload, edit and listen to music.
    <br />
    <a href="https://github.com/sonajasani/Music-Storm"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/sonajasani/Music-Storm">View Site</a>
    ·
    <a href="https://github.com/sonajasani/Music-Storm/issues">Report Bug</a>
    ·
    <a href="https://github.com/sonajasani/Music-Storm/issues">Request Feature</a>
  </p>
</p>


<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Technologies</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Future Goals</a></li>
  </ol>
</details>


## About The Project


[Click here to view MusicStorm live!](https://music-storm-7.herokuapp.com/)
<br>
![Screenshot (111)](https://user-images.githubusercontent.com/99559369/172162291-b841b9fc-54ea-42de-9362-c6ceee0e2ad2.png)
</br>

## Overall Structure

### Back End

The app was built using Express and Sequelize on the back end with a PostgreSQL database.
The backend structure is RESTful with AJAX requests that are fullfilled with JSON Objects.
Model associations are used to minimize database queries to the backend, assuring speed and reliability.

### Front End

The front end is built with React and Javascript while utilizing Redux architecture, producing a lightning-fast user interface and calling upon dynamically rendered components.

### Technologies

- [JavaScript](https://www.javascript.com/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [HTML](https://html.com/)
- [CSS](http://www.css3.info/)


## Getting Started

**Prerequisites**
- NPM
- Node.js >= 14
- PostgreSQL 


**Installation**
- Clone the repo: `https://github.com/sonajasani/Music-Storm`
- In `/backend` run `npm install`
- .. then once again in `/frontend`
- Create a Postgres database and a user with CREATEDB privileges and a password
- In `/backend` create a .env file and declare your environment variables using `.env.example` as a reference.
        - To generate a secret, use `openssl` in your shell: `openssl rand -base64 10`
- Initialize your database using sequelize-cli: 
    -  `npx dotenv sequelize db:create`
    -  `npx dotenv sequelize db:migrate`
    -  `npx dotenv sequelize db:seed:all`
- Finally, fire up your servers: run `npm start` in `/backend` and once again in `/frontend`


## Roadmap
See the [open issues](https://github.com/sonajasani/Music-Storm/issues) for a list of proposed features (and known issues).


## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Contact & Acknowledgements

- Sona Jasani - [GitHub](https://github.com/sonajasani)
- Project Link: [https://github.com/sonajasani/Music-Storm](https://github.com/sonajasani/Music-Storm)


## Future Goals
- Define React PropTypes
- Waveform scrub event
- Player shuffle and repeat
- Audio player with continuous playback
- Waveform visualization
