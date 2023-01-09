
![p13](https://user-images.githubusercontent.com/94918200/211386951-52d7dabb-d2f3-467c-bc85-5ae87607d394.PNG)

# Use an API for a bank user account with React


# Project description

This project is part of OpenClassrooms "Développeur d'application - JavaScript React" training.

Main missions of the project: 
- Create a completd responsive React project from the [HTML and CSS provided](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/tree/master/designs)
- Use of Redux to manage global state
- Use of Argent Bank API available [here](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API.git) to have access to user account.



## 🛠 Tech Stack
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)

## Badges
![GitHub last commit](https://img.shields.io/github/last-commit/EPourmo/use-an-api-for-a-bank-user-account-with-react?style=plastic)
## Run Locally
### 1. Prerequisite
- [NodeJS (version 12)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

It is highly recommended to use [nvm](https://github.com/nvm-sh/nvm) in order to switch easily NodeJS version. Indeed, this project uses Vite and Vite requires Node.js version 14.18+, 16+.


### 2. Installation / quick start
First of all, clone this repo on your computer
```bash
git clone https://github.com/EPourmo/use-an-api-for-a-bank-user-account-with-react.git
```
#### 2.1 Back end
Go to the back end folder 
```bash
cd backend
```

Install all dependencies
```bash
npm install
```
or

```bash
 yarn install
```

Then run the script and start local dev server

```bash
npm run dev:server
```
or

```bash
 yarn run dev:server
```

Populate database with two users

```bash
 npm run populate-db
```
or

```bash
 yarn run populate-db
```

The data is accessible at `http://localhost:3001/` and you will now have two users in your MongoDB database.

To access to the full API documentation go to [this repo](https://github.com/EPourmo/use-an-api-for-a-bank-user-account-with-react/tree/main/backend).

#### 2.1 Front End
After running the back end, go to the front end folder 
```bash
cd frontend
```
Install all dependencies

```bash
npm install
```
or

```bash
 yarn install
```

Then run the script

```bash
npm run dev
```
or

```bash
 yarn run dev
```

The front end data will be accessible at the localhost logged on your terminal.
## Features

- Backend API 
- Axios
- Redux Toolkit
