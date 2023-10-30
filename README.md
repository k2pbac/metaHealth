# Meta Health

Meta Health is a medical-web-application built out of necessity for a particular need in our society. How many of us have spent hours in clinic waiting rooms or had a troublesome experience trying to book a doctor's appointment over the phone. Not to mention, patient anxiety while talking through the phone or speaking to a receptionist in-person.

Meta Health streamlines the process of booking appointments between patients and clinics.

## Setup

1. Install dependencies with `npm install` in "ROOT" folder: (metaHealth/)

2. Install dependencies with `npm install` in "BACK-END" folder: (metaHealth/express-backend)

3. Create a `.env` file using the `.env.example` as reference:

```
DB_HOST = database host
DB_USER = database username
DB_PASS = database password
DB_NAME = meta_health (database name)
DB_PORT = 5432 (default)
PATH1 = path to schema folder (/server/db/schema )
PATH2 = path to seeds folder (/server/db/seeds )
```

## Running Webpack Development Server

## While in project root folder

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

# Demo

## Home Page

![Meta Health](/client/public/images/Meta_Health_1.gif "Home Page")

## Patient Demo

![Meta Health](/client/public/images/Meta_Health_3.gif "Home Page")

## Employee Demo

![Meta Health](/client/public/images/Meta_Health_2.gif "Home Page")

## Tech Stack

- PostgreSQL
- Express.js
- React
- Node.js

## Dependencies

    - @fortawesome/fontawesome-svg-core
    - @fortawesome/free-brands-svg-icons
    - @fortawesome/free-solid-svg-icons
    - @fortawesome/react-fontawesome
    - axios
    - bcrypt
    - bootstrap
    - classnames
    - date-fns
    - dotenv
    - hover.css
    - normalize.css
    - pg
    - pg-native
    - react
    - react-bootstrap
    - react-calendar
    - react-dom
    - react-redux
    - react-router-dom
    - react-scripts
    - redux
