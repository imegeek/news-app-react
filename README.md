# News App React

This is a modern news application built with React. The app fetches news articles using the [NewsAPI](https://newsapi.org/) and implements an infinite scroll feature for seamless news consumption.

## Features

- Fetches news articles from NewsAPI
- Infinite scroll loading for a continuous news feed
- Categorized news with tags like "Everything", "Top Headlines", "Country", and "Category"
- News cards displaying the article title, a brief description, source, and a "Read More" button
- Dark theme interface

## Screenshots

<div align="center">
<img src="https://github.com/imegeek/news-app-react/assets/63346676/899fa2dc-2a4f-4422-9a93-3749994df7e1">
<img src="https://github.com/imegeek/news-app-react/assets/63346676/5a34e61a-8923-473e-ae68-b441fb06d002">
</div>

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/imegeek/news-app-react.git

2. Navigate to the project directory:
	```bash
	cd news-app-react
	```

3. Install the dependencies:
	```bash
	npm install
	```

## Setting Up the API Key

1. Go to [NewsAPI](https://newsapi.org) and sign up to get an API key.

2. In the root directory of your project, create a file named `.env.local`.

3. Add the following line to `.env.local` after getting api.
	```txt
	REACT_APP_NEWS_API_KEY=your_api_key_here
	```

## Usage

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or new features to add.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/imegeek/news-app-react/blob/master/LICENSE) file for details.

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
