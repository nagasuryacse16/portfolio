import project1 from "../Assets/Amazon.jpg";
import project2 from "../Assets/netflix.jpg";
import project3 from "../Assets/movie.jpg";
import project4 from "../Assets/slack.jpg";
import project5 from "../Assets/insta.jpg";
import project6 from "../Assets/spotify.jpg";

const ProjectCardData = [
    {
        imgsrc: project1,
        title: "Amazon Clone Design",
        text: "This is an Amazon clone project built using react.js and firebase to authenticate the users, and firestore is used to store product details. For the payment page design, I have used stripe functionality to make transactions.",
        view: "https://clone-d2335.web.app/",

    },
    {
        imgsrc: project2,
        title: "Netflix Clone Design",
        text: "In this project, I used TMDB API  to fetch all the movies with react.js and the async function to call API requests using Axios.",
        view: "https://netflix-clone-app-94961.web.app/"

    },
    {
        imgsrc: project3,
        title: "Movies Database Design",
        text: "In this project, I have retrieved the movies data from the online OMDb API using react. The OMDb API is a RESTful web service to obtain movie information, all content, and images.",
        view: "https://movies-database-9753d.web.app/"

    },
    {
        imgsrc: project4,
        title: "Slack Clone Design",
        text: "In this project, I used Google user authentication with firebase, storing the data using firestore, and React Context API.",
        view: "https://slack-clone-635d0.web.app/"

    },
    {
        imgsrc: project5,
        title: "Instagram Reels Design",
        text: "This is an Instagram reels clone project built using react.js and firebase to store the video information. Material-UI icons are also used for designing the page.",
        view: "https://instagram-reels-d7d79.web.app/"

    },
    {
        imgsrc: project6,
        title: "Spotify Clone Design",
        text: "In this project, I have authenticated the user with Spotify API, Responsive design, Material-UI for icons, and React Context API.",
        view: "https://spotify-clone-fbe28.web.app/"

    },
];

export default ProjectCardData;
