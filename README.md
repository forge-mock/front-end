## Pre-Installation process

Install needed tools:

1. NodeJs from [NodeJs Official Page](https://nodejs.org/en). Any version above 18 will do.
2. Yarn from [Yarn Official Page](https://yarnpkg.com/lang/en/docs/install). Any version above 1.22 will do.

## Installation process

1. Clone the repository to your local machine.
2. Open you IDE or Code Editor and navigate to the project folder.
3. Install the dependencies by running the following command:

```bash
yarn install
```

## Run the project

1. Create .env file in the root folder and add environment variables:

```
NEXT_PUBLIC_AUTH=https://localhost:7289
GOOGLE_CLIENT_ID=client_id
GOOGLE_CLIENT_SECRET=client_secret
GITHUB_CLIENT_ID=client_id
GITHUB_CLIENT_SECRET=client_secret
NEXTAUTH_URL=https://localhost:3000
NEXTAUTH_SECRET=random_secret
```

2. Run the project by running the following command and accept localhost certificate:

```bash
yarn dev
```

3. Open your browser and navigate to `https://localhost:3000/` to see the project running.

## Important notes

Use ESLint and Prettier to keep the code clean and consistent.

```bash
yarn lint
yarn prettier
```
