# GitHub Blog

<img src="./src/assets/Interface.png" />

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Technologies](#technologies)

## About <a name = "about"></a>
- This is an application that uses the issues from a GitHub repository to create a blog. The user can see the issues and read them.
- The project was created using React.js, TypeScript, Styled Components and the GitHub API.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- You need to have Node.js installed on your machine. You can download it [here](https://nodejs.org/en/).
- You need to have a package manager installed on your machine. You can use npm, pnpm or yarn.

### Installing

A step by step series of examples that tell you how to get a development version running.

1. Clone the repository or download the zip file:
```bash
git clone https://github.com/LeonardoSPereira/Github-Blog.git 
```

2. Install the dependencies: 
```bash
npm install

# or

pnpm install
```

## Usage <a name = "usage"></a>

This instructions will help you to run the project on your local machine.

- With the dependencies installed, you can run the project using the following command:

```bash
npm run dev

# or

pnpm dev
```

- To have your own blog, you need to:
1. Change the repository in the `src/contexts/IssuesContext.tsx` file. Inside the function `IssuesProvider`, search for the function `fetchIssues` and change the `owner` and `repo` variables to your own repository.

```typescript
const fetchIssues = async () => {
    const repositoryOwner = 'LeonardoSPereira'; // Change this to your own repository owner
    const repositoryName = 'github-blog'; // Change this to your own repository name
    ...
}
```
2. Change the user in the `src/components/Profile/index.tsx` file. Search for the `fetchGithubProfile` function and change the `username` variable to your own GitHub username.


## Technologies <a name = "technologies"></a>
- [React.js](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [React Router Dom](https://reactrouter.com)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Vite](https://vitejs.dev/)