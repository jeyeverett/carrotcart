# CarrotCart

CarrotCart is a fictional online storefront for a farm-to-consumer type business. The motivation behind this application was to build a complex React app that would touch on much of the core functionality that React offers. Having built a few applications using the traditional server-side rendered views approach prior to adopting React I came to really appreciate the innovations that ReactJS has made. Because this app was for educational purposes you will see a mixture of class-based and functional style components with some use of React Hooks sprinkled throughout. The project integrates Redux and Redux-Saga because these are popular components of a scaleable and maintainable large scale React app, though they are likely overkill in this scenario. The project uses Firebase for authentication and Firestore as the NoSQL database. A back-end was created using NodeJS and ExpressJS solely to handle Stripe payments but I plan on expanding the store's functionality and adding to the back-end in the future.

This project is built with [ReactJS](https://reactjs.org/) using create-react-app.

## Notable features:

- Use of class-based and functional components with React Hooks
- Integration with Firebase Authentication and Firebase Firestore NoSQL database
- Authorization using Firebase Identity and Access Management Rules
- Single state store ("source of truth") provided by Redux
- Cart data browser caching with Redux-Persist
- Scalable and maintainable asynchronous logic implemented with Redux-Saga
- Payment handling provided by Stripe
- Memoization and performance enhancements using the Reselect library and React.memo
- Navigation with React Router

# Installation

Download the project, navigate to the project root (you will need to do this for both the front-end and back-end) and install dependencies:

`npm install`

You will need to provide the following information in a .env file for the project to work (note that you will need to configure the [dotenv](https://www.npmjs.com/package/dotenv) npm package to access the .env variables from within the project):

- _STRIPE_SECRET_KEY_ - your Stripe API key
