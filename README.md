All code from this boilerplate as a complete package is available in [this repository](https://github.com/riccardolinares/saas-quickstarter).

If you find this boilerplate helpful, please share it with your friends and colleagues! For more like it you can follow me on [Twitter](https://twitter.com/riccardolinares).

## Table of Contents

1. [Quick Start](#quick-start)
1. [Project Setup](#project-setup)
1. [Supabase](#supabase)
1. [Prisma](#prisma)
1. [NextAuth](#nextauth)
1. [Stripe - TODO](#stripe---todo)
1. [Git Setup](#git-setup)
1. [Landing Page](#landing-page)
1. [Code Formatting and Quality Tools](#code-formatting-and-quality-tools)
1. [Git Hooks](#git-hooks)
1. [VS Code Configuration](#vs-code-configuration)
1. [Debugging](#debugging)
1. [Directory Structure](#directory-structure)
1. [Deployment](#deployment)

## Quick Start

1. Install `npm install`
1. Get the Connection String of the db from [Supabase](https://supabase.com/) and add it to the .env file as `DATABASE_URL`
1. Sync the db with Prisma `npx prisma db push`
1. Use `openssl rand -base64 32` to generate a random string for the `NEXTAUTH_SECRET` in the .env file
1. Connect with Stripe - TODO
1. Deploy to Vercel - TODO

## Project Setup

We'll begin by cloning this repository and installing the dependencies.

```
npm install

npm run dev
```

You should see the demo app available on [http://localhost:3000](http://localhost:3000)

![First Page Load](https://res.cloudinary.com/dqse2txyi/image/upload/v1649125549/blogs/nextjs-fullstack-app-template/first-load_sm29jf.png)

Also recommended to run

```
npm run build
```

To ensure you can successfully do a production build of the project. It's recommended (but not required) to close your dev server when running a Next.js build. Most of the time there is no issue but occasionally the build can put your dev server in a weird state that requires a restart.

You should get a nice little report on the command line of all the pages built with green coloured text implying they are small and efficient. We'll try to keep them that way as we develop the project.

Edit the `src/utils/data.js` file to change the content of the site.

## Supabase

Create a new project on [Supabase](https://supabase.com/).You will need to create a new database and a new project. You can use the same name for both.

Go to https://app.supabase.com/project/**PROJECT_ID**/settings/database and copy the URL for the database in the Connection String field. It should look something like this:

```
postgres://postgres:[YOUR-PASSWORD]@db.randomstringrandom.supabase.co:4242/postgres
```

Add this URL to your `.env` file as `DATABASE_URL`

## Prisma

_The Easiest Way to Work with a Database in Next.js_

Connect your database to your Next.js project with [Prisma](https://www.prisma.io/nextjs) using the following command:

```bash
npx prisma db push
npx prisma generate
```

## NextAuth

_NextAuth.js is a complete open source authentication solution for Next.js applications._

NextAuth is already configured to use the Supabase database. You can find the configuration in `src/pages/api/auth/[...nextauth].js`.

To start using NextAuth you need to add a random string for the `NEXTAUTH_SECRET` environment variable in your `.env` file.
You can generate a random string with the following command:

```bash
openssl rand -base64 32
```

### NextAuth Providers

NextAuth supports a variety of authentication providers. You can find the full list [here](https://next-auth.js.org/configuration/providers). By default we have configured NextAuth to use Linkedin.

## Stripe - TODO

### Stripe setup

### Stripe webhooks

## Landing Page

The landing page is a standard but powerfull template from [TailwindUI](https://tailwindui.com/components/marketing/page-examples/landing-pages) and is located in the `src/pages/index.js` file.

Here is a prompt for ChatGPT you can use to get started, just replace the `{{DESCRIPTION}}` with the description of your tool:

```
Here is a description of a tool I am building: `{{DESCRIPTION}}`.

You are the copywriter for the landing page of the tool.

Write the content for the landing page. The landing page should be a one page website with the following sections:

## Section 1
- Structure of the section: title, subtitle, two buttons on the left and a picture on the right.
Write the title, subtitle and the two buttons.

## Section 2
- Structure of the section: small text (2-3 words), title, subtitle and 3 column with an icon, a description and a call to action at the end of each column.
Write the small text, title and subtitle of the section, the title of each column and the description (minimum 20 words) of each column. Write also the call to action for each column. Suggest an icon to use for each column.

## Section 3
- Structure of the section: small text (2-3 words), title, subtitle and a full width image. Under the image there are 6 boxes with an icon, a bold short feature title and a short description.
Write the small text, title, subtitle and the content of the 6 boxes. Suggest an icon to use for each feature.

## Section 4
- Structure of the section: small text (2-3 words), title, subtitle and 4 section with some numbers and a small description of 2-3 words. This section is about the numbers of the tool.
Write the small text, title, subtitle and the content of the 4 sections.

## Section 5
- Structure of the section: pricing section with 3 plans. Each plan has a title, a price, a description and a button.
Write the content of the 3 plans.

## Section 6
- Structure of the section: big title, subtitle and the same two buttons as in the first section.
Write the title, subtitle and the two buttons.

```

## Git Setup

Follow the best practices for keeping related changes grouped within a single commit before moving to something new.

By default your Next.js project will already have a repo initialized. You can check what branch you are on with `git status`. It should say something like:

```

On branch main
Changes not staged for commit:
(use "git add <file>..." to update what will be committed)
(use "git restore <file>..." to discard changes in working directory)
modified: README.md

Untracked files:
(use "git add <file>..." to include in what will be committed)
.npmrc
.nvmrc

```

This tells us we are on the `main` branch and we have not staged or made any commits yet.

Let's commit our changes so far.

```

git add .

git commit -m 'project initialization'

```

The first command will add and stage all files in your project directory that aren't ignored in `.gitignore`. The second will make a commit of the state of your current project with the message we wrote after the `-m` flag.

Hop over to your preferred git hosting provider ([Github](https://github.com) for example) and create a new repository to host this project. Make sure the default branch is se tto the same name as the branch on your local machine to avoid any confusion.

On Github you can change your global default branch name to whatever you like by going to:

```

Settings -> Repositories -> Repository default branch

```

Now you are ready to add the remote origin of your repository and push. Github will give you the exact instructions when you create it. Your syntax may be a little different than mine depending on if you are using HTTPS rather than SSH.

```

git remote add origin git@github.com:{YOUR_GITHUB_USERNAME}/{YOUR_REPOSITORY_NAME}.git

git push -u origin {YOUR_BRANCH_NAME}

```

Note: we use the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) standard and specifically the Angular convention [described here](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type)

## Code Formatting and Quality Tools

In order to set a standard that will be used by all contributors to the project to keep the code style consistent and basic best practices followed we will be implementing two tools:

- [eslint](https://eslint.org/) - For best practices on coding standards
- [prettier](https://prettier.io/) - For automatic formatting of code files

### ESLint

Basic rules for ESLint are already configured in the `.eslintrc.json` file. You can read more about the rules [here](https://eslint.org/docs/rules/):

- `React` will always be defined even if we don't specifically import it
- Prefix variables with an underscore \_ if you have declared them but not used them in the code. It is useful when you are working on a feature and want to prepare variables for use later, but have not yet reached the point of implementing them.

You can test out your config by running:

```

npm run lint

```

You should get a message like:

```

✔ No ESLint warnings or errors
Done in 1.47s.

```

If you get any errors then ESLint is quite good at explaining clearly what they are. If you encounter a rule you don't like you can disable it in "rules" by simply setting it to 1 (warning) or 0 (ignore) like so:

```json
  "rules": {
    "no-unused-vars": 0, // As example: Will never bug you about unused variables again
  }
```

### Prettier

I recommend you get the [Prettier VS Code extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) so that VS Code can handle the formatting of the files for you and you don't need to rely on the command line tool. Having it installed and configured in your project means that VSCode will use your project's settings, so it's still necessary to add it here.

`.prettierrc` is a file that will contain the configuration for Prettier. You can read more about the options [here](https://prettier.io/docs/en/options.html).

```.prettierrc
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```

`.prettierignore` is a file that will contain a list of files and directories that Prettier should ignore. You can read more about the options [here](https://prettier.io/docs/en/ignore.html).

```
.next
dist
node_modules
```

In that file I've placed a list of directories that I don't want Prettier to waste any resources working on. You can also use patterns like \*.html to ignore groups of types of files if you choose.

You can test out your config by running:

```
npm run prettier
```

to automatically format, fix and save all files in your project you haven't ignored. You can see them in your list of changed files in the source control tab on the left of VS Code.

## Git Hooks

### Husky

[Husky](https://typicode.github.io/husky/#/) is a tool for running scripts at different stages of the git process, for example add, commit, push, etc. We would like to be able to set certain conditions, and only allow things like commit and push to succeed if our code meets those conditions, presuming that it indicates our project is of acceptable quality.

To create a hook run (don't forget to run husky install before):

```
npx husky add <file> [cmd]
```

Example:

```
npx husky add .husky/pre-commit "npm run lint"
```

The above says that in order for our commit to succeed, the `npm run lint` script must first run and succeed. "Succeed" in this context means no errors. It will allow you to have warnings (remember in the ESLint config a setting of 1 is a warning and 2 is an error in case you want to adjust settings).

Another example:

```
npx husky add .husky/pre-push "npm run build"
```

The above ensures that we are not allowed to push to the remote repository unless our code can successfully build. That seems like a pretty reasonable condition doesn't it? Feel free to test it by committing this change and trying to push.

### Commitlint

We have been following a standard convention for all our commit messages so far, let's ensure that everyone on the team is following them as well (including ourselves!).

To configure it we will be using a set of standard defaults, but I like to include that list explicitly in a `commitlint.config.js`:

```
// build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
// ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
// docs: Documentation only changes
// feat: A new feature
// fix: A bug fix
// perf: A code change that improves performance
// refactor: A code change that neither fixes a bug nor adds a feature
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// test: Adding missing tests or correcting existing tests

```

Feel free to try some commits that _don't_ follow the rules and see how they are not accepted, and you receive feedback that is designed to help you correct them.

You can see the result of the complete culmination of this setup in the screenshot below, hopefully yours looks similar:

![Dev Experience](https://res.cloudinary.com/dqse2txyi/image/upload/v1649129725/blogs/nextjs-fullstack-app-template/dev-experience_wznie9.png)

## VS Code Configuration

Now that we have implemented ESLint and Prettier we can take advantage of some convenient VS Code functionality to have them be run automatically.

Create a directory in the root of your project called `.vscode` and inside a file called `settings.json`. This will be a list of values that override the default settings of your installed VS Code.

The reason we want to place them in a folder for the project is that we can set specific settings that only apply to this project, and we can share them with the rest of our team by including them in the code repository.

Within `settings.json` we will add the following values:

`.vscode/settings.json`

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.organizeImports": true
  }
}
```

The above will tell VS Code to use your Prettier extension as the default formatter (you can override manually if you wish with another one) and to automatically format your files and organize your import statements every time you save.

Very handy stuff and just another thing you no longer need to think about so you can focus on the important things like solving business problems.

## Debugging

Let's set up a convenient environment for debugging our application in case we run into any issues during development.

Inside of your `.vscode` directory create a `launch.json` file:

`launch.json`

```json
{
  "version": "0.1.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    },
    {
      "name": "Next.js: debug client-side",
      "type": "pwa-chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    },
    {
      "name": "Next.js: debug full stack",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev",
      "console": "integratedTerminal",
      "serverReadyAction": {
        "pattern": "started server on .+, url: (https?://.+)",
        "uriFormat": "%s",
        "action": "debugWithChrome"
      }
    }
  ]
}
```

With that script in place you have three choices for debugging. Click the little "bug & play icon" on the left of VS Code or press `Ctrl + Shift + D` to access the debugging menu. You can select which script you want to run and start/stop it with the start/stop buttons.

![VS Code Debugger](https://res.cloudinary.com/dqse2txyi/image/upload/v1649168143/blogs/nextjs-fullstack-app-template/vscode-debugger_x1puqk.png)

## Directory Structure

This section is now going to cover setting up the folder structure in our project. This is one of those topics that many people will have _extremely strong opinions about_, and for good reason! Directory structure can really make or break a project in the long term when it gets out of control, especially when fellow team members have to spend unnecessary time trying to guess where to put things (or find things).

I personally like to take a fairly simplistic approach, keep things separated basically in a class model/view style. We will be using three primary folders:

```
-prisma
-public
-src
    |-components
    |-lib
    |-pages
        |-api
        |-auth
        |-payment
    |-styles
    |-utils
```

- `component` - The individual UI components that make up the app will live in here
- `lib` - Business/app/domain logic will live in here.
- `pages` - Will be the actual routes/pages as per the required Next.js structure.
- `pages/api` - Will be the API routes as per the required Next.js structure.
- `pages/api/auth` - Will be the authentication API routes.
- `pages/api/payment` - Will be the payment API routes.
- `styles` - Global styles and theme will live in here.
- `utils` - Utility functions that are used throughout the app will live in here.

We will have other folders in addition to this to support the project, but the core of almost everything that makes up the unique app that we are building will be housed in these three directories.

Within `components` we will have subdirectories that kind of group similar types of components together. For example inputs, surfaces, navigation, utils, layout etc.

## Deployment

Our final step will be to show the process of deployment of a Next.js app.

We will be using Vercel as it is the simplest and most straightforward deployment solution for a Next.js app (primarily due to the fact that Vercel owns Next and so one can always assume they will offer best in class support).

Deploying on Vercel as a hobby user is completely free. To begin we will [create an account on Vercel](https://vercel.com/).

Once logged in, click `+ New Project` and give Vercel access to your Github repositories. You can give global access, or you can select only the repository you want to deploy.

Once you have selected it you'll need to configure it. In the `Build and Output Settings` section make sure you replace the default NPM commands with your yarn commands.

![Next Configure](https://res.cloudinary.com/dqse2txyi/image/upload/v1649164443/blogs/nextjs-fullstack-app-template/next-configure_dtywld.png)

We have not used any environment variables yet so no need to add any.

Once that's it just click `Deploy` and you're done! It's that easy.

Not only is your site deployed now, it will continue to get re-deployed automatically every time you commit to your primary branch. If you don't want this behavior, then it's easy to configure in the Vercel dashboard.

The nice thing is that you already configured your `npm run build` command to ensure a working production build before you can push you code, so you can push with confidence in presuming your deployment will be successful.

The only thing you need to keep in mind are the differences between your two environments. It's still possible for your build to succeed locally but fail on Vercel if for example your scripts are different (using NPM instead of yarn or vice versa) or more commonly if you are missing environment variables.
