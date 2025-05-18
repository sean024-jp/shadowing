# Shadowing App

A React-based language learning application designed to help users practice pronunciation through the "shadowing" technique. Shadowing is a language learning method where learners listen to audio and immediately repeat what they hear, mimicking the native speaker's pronunciation, rhythm, and intonation.

This application provides a simple interface for Japanese speakers learning English. Users navigate through a flow of screens: from a welcome screen to a game screen where they perform shadowing exercises, and finally to a results screen that displays their performance score.

## Features

- Three-screen navigation flow:
  - Home Screen: Introduction and start button
  - Game Screen: Practice interface with shadowing exercises
  - Result Screen: Performance score display
- Smooth animated transitions between screens
- Score tracking system
- Japanese language interface targeting English learners

## Technical Stack

- React.js (v19.0.0)
- React Router for navigation (v7.4.0)
- React Transition Group for animations (v4.4.5)
- Create React App foundation

## Project Structure

```
shadowing/
├── public/               # Static assets
├── src/                  # Source code
│   ├── App.js            # Main application component & routing
│   ├── App.css           # Application styling
│   ├── HomeScreen.js     # Landing page component
│   ├── GameScreen.js     # Game screen component
│   ├── ResultScreen.js   # Results screen component
│   ├── index.js          # JavaScript entry point
│   └── index.css         # Global styling
└── package.json          # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
   ```
   git clone https://github.com/sean024-jp/shadowing.git
   cd shadowing
   ```

2. Install dependencies
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

### Development

Run the app in development mode:
```
npm start
```
or
```
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building for Production

Build the app for production:
```
npm run build
```
or
```
yarn build
```

This builds the app for production to the `build` folder, optimized for best performance.

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
