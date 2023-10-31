# NetflixGPT 

NetflixGPT is a web application built using Create React and it uses GPT API's to recommed movies based on our mood it gives movies suggestions.

## Deployed Link

[Netflix-Gpt](https://netfliixgpt.netlify.app/)

## ScreenShots
![Screenshot (129)](https://github.com/Bandinikhil/netflix-gpt/assets/105233916/697e9845-7ba1-4707-8cc8-54a0c98b7716)

<br>

![Screenshot (130)](https://github.com/Bandinikhil/netflix-gpt/assets/105233916/9e06b158-fde8-4bdc-a741-80b813a811d9)

<br>


![Screenshot (131)](https://github.com/Bandinikhil/netflix-gpt/assets/105233916/0e651808-cae6-4826-a083-8a9313997de2)

<br>

## Table of Contents
- [Setup and Configuration](#setup-and-configuration)
- [Authentication](#authentication)
- [User Accounts](#user-accounts)
- [Movie Data](#movie-data)
- [Main Container](#main-container)
- [Search Feature](#search-feature)
- [Responsive Design](#responsive-design)

## Setup and Configuration
1. **Create React App**: The project is built using Create React App, providing a robust foundation for React applications.
2. **TailwindCSS**: TailwindCSS is configured to style the components and ensure a sleek UI.
3. **Routing**: The application utilizes React Router for navigation, enabling a seamless user experience.

## Authentication
- **Login Form**: Users can log in using a secure login form.
- **Sign Up Form**: New users can register for the platform using a registration form.
- **Form Validation**: Form validation is implemented to ensure data integrity.
- **Firebase Setup**: Firebase is used for user authentication and data storage.

## User Accounts
- **Create SignUp User Account**: Users can create an account by providing necessary details like email, password, and display name.
- **Implement Sign In User API**: Existing users can sign in to their accounts using email and password.
- **Sign Out**: Users can log out of their accounts.
- **Update Profile**: Users have the ability to update their display name and profile picture.
- **BugFix: Sign Up User Display Name and Profile Picture Update**: Issues related to updating display name and profile picture are resolved.
- **BugFix: Redirects**: Unauthorized users are redirected to the login page when trying to access authenticated content, and vice versa.
- **Unsubscribe from onAuthStateChanged Callback**: Proper cleanup is performed for user authentication state changes.
- **Add Hardcoded Values**: Constants file includes necessary hardcoded values.

## Movie Data
- **Register TMDB API**: The application registers with TMDB and obtains an access token for accessing movie data.
- **Get Data from TMDB**: The app fetches data from the TMDB API, including now playing movies.
- **Custom Hook for Now Playing Movies**: A custom hook is implemented to manage now playing movies data.
- **Create movieSlice**: Redux is used to create a store and manage movie-related data.
- **Update Store with Movies Data**: Data from TMDB is stored in the Redux store.

## Main Container
- **Planning for Main Container & Secondary Container**: Layout structure is planned for the main content and secondary containers.
- **Fetch Data for Trailer Video**: Movie trailer data is fetched from TMDB.
- **Update Store with Trailer Video Data**: Trailer data is stored in the Redux store.
- **Embedded YouTube Video**: The movie trailer is embedded and configured to autoplay and mute.
- **Tailwind Classes**: Tailwind CSS classes are used to enhance the appearance of the main container.

## Secondary Components
- **Build Secondary Component**: Secondary components are created for displaying movie suggestions.
- **Build Movie List**: A list of movies is displayed in the secondary container.
- **Build Movie Card**: Movie cards with details are designed and displayed.
- **TMDB Image CDN URL**: The application uses TMDB's image CDN URL for movie images.

## Search Feature
- **GPT Search Page**: A search page is implemented, powered by GPT technology.
- **GPT Search Bar**: The search bar allows users to search for movies using GPT.
- **GPT Search API Call**: The GPT search API is called to retrieve movie suggestions.
- **Fetched GPT Movie Suggestions**: Movie suggestions are fetched from TMDB and presented to the user.
- **Reuse Movie List Component**: The movie list component is reused to create a movie suggestion container.
- **Memoization**: Memoization techniques are used to optimize performance.

## Additional Features
- **.env File**: Environment variables are stored in a .env file for configuration.
- **Gitignore**: The .env file is added to .gitignore to protect sensitive data.
- **Responsive Design**: The site is designed to be responsive, ensuring a great user experience on various devices.

## Multi-language Feature (Bonus)
- **Get OpenAI API Key**: The application obtains an API key from OpenAI for multi-language features.
- **GPT Search API Call**: Multi-language GPT search is implemented to provide content in different languages.

Enjoy using NetflixGPT, a feature-rich application for movie enthusiasts!







# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
