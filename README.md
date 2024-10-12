# ACM ICPC & W Break the Binary Website

Official Website for ACM ICPC & W Break the Binary.

Built using React. Uses [Chakra-UI](https://chakra-ui.com/) for components. Uses
GitHub pages for deployment; see
[`spa-github-pages`](https://github.com/rafgraph/spa-github-pages/tree/gh-pages)
for an example for hosting single pages apps on GitHub pages.

## Setup

Install [`git`](https://git-scm.com/downloads) and
[Node.js](https://nodejs.org/en) version `22.9.0`.

We recommend using [`nvm`](https://github.com/nvm-sh/nvm) to manage Node.js
versions. An `.nvmrc` has already been provided.

```sh
nvm use
```

Clone the repository and install dependencies:

```sh
git clone https://github.com/nouturnsign/icpc-w-btb-website
cd icpc-w-btb-website
npm ci
```

In `icpc-w-btb-website` directory, run:

```sh
npm start
```

This will start the development server on `http://localhost:3000`.

## Deployment

Use `npm run deploy` to build and deploy.

## Contributing

Follow the [Code of conduct](/CODE_OF_CONDUCT.md).

Create branches and submit a pull requests. Please use
[`prettier`](https://prettier.io/) for code formatting. Respect
[`.editorconfig`](https://editorconfig.org/) rules.

If you are using Visual Studio Code, install the recommended extensions, and
format on save.
