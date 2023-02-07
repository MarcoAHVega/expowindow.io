# Next.js 13 Fundamentals

https://youtu.be/QUlWAKx2ZH8

## Course Overview

- > Hi everyone.

  My name is Adhithi Ravichandran, and welcome to my course, Next.js Fundamentals. I'm a software consultant, author, and speaker based in Kansas City and founder of Surya Consulting, Inc. through which I helped teams transition to modern tech stacks, such as React, React Native, GraphQL, and Cypress. You can follow me on Twitter @AdhithiRavi or visit my website, adhithiravichandran.com to keep in touch or reach out to me.

- > Introduction

  Are you a React developer and have to make a lot of decisions while building your app in React and wish there was a framework that would make those decisions for you? Next.js is a fast and popular framework to build React applications. Next.js provides a great developer experience with several inbuilt features, making React development hassle‑free.

- > Course Content

  In this course, we're going to learn about the fundamentals of Next.js, a production‑ready framework to build React applications. Some of the major topics that we'll cover include:

  - What is Next.js and why it's a preferred framework to build React applications
  - Set up a Next.js app and learn about pages, layout, routing, working with images, fonts, and styling your app
  - Learn about different data rendering, data fetching, and dynamic routing options in Next.js
  - Learn about deploying your Next.js app or migrating existing applications to Next.js

  By the end of this course, you'll be able to write complete production‑ready React applications using Next.js. Before beginning the course, you should be familiar with JavaScript, HTML, CSS, and basics of React.

- > Conclusion

  I hope you'll join me in this journey to learn building your web applications with Next.js with the Next.js Fundamental course at Pluralsight.

## Introduction to Next.js

- > Version Check

  Let's do a quick version check before we get started with this course. This course was created using:

  - Next.js version 13.0.2
  - Node.js version 14
  - React version 18.2.0

  This course is 100% applicable to Next.js versions 13 and above. You may still use the information in the course for previous versions of Next as well.

  Make sure you're familiar with the following tech stack before taking this course. You need to be aware of:

  - JavaScript
  - HTML
  - CSS
  - Basics of React

  Also note that Next.js is updated almost monthly. Part of this course includes helping you navigate the framework's versioning and documentation so you can stay as relevant as you need.

- > Introduction

  Hello everyone. Welcome to my course, Next.js Fundamentals. I'm Adhithi Ravichandran, a software consultant, author, and speaker. And today, I'll be teaching you Next.js fundamentals.

  In this course, Next.js 13 Fundamentals, you'll learn to build a React application using the Next.js framework.

  - First, you'll explore the basics of Next.js.

  - Next, you'll learn how to set up and create a Next.js app.

  - Then, you'll discover managing assets, rendering data, and dynamic routing in Next.js.

  - Finally, you'll learn how to deploy a Next.js app and learn how to migrate existing React applications to Next.js.

  When you're finished with this course, you'll have the skills and knowledge to build React applications using Next.js and its core features.

  Before you begin, here is a recommended learning link for you. Check out the Next.js big picture course on Pluralsight authored by Cory House. This course teaches you the big picture overview of Next.js, which will be useful for you before you get started with this course.

  All right, let's get started. In this module, I'll introduce you to Next.js, a popular React framework. You'll then learn why Next.js. I'll then walk you through the features of Next.js and what makes it a good choice for building React applications. You'll learn how Next.js provides a superior developer experience with inbuilt production‑ready features. We'll then explore common use cases of building real‑world applications with Next.js and who is using it today. Finally, you'll learn some tradeoffs of Next.js. By the end of this module, you'll be ready to begin your journey to learn building your React applications using Next.js.

- > React Decisions

  React is a JavaScript library for building rich user interfaces. Over the last few years, React has gained immense popularity, and a lot of people today are building their web applications using React. We use React to create components and plug these UI components to make a complete web application.

  When you're building applications with just React using the Create React App, there are lots of decisions you'll have to make as a developer or an architect. This is because React is flexible, and it's unopinionated, and it lets you as a developer make your own decisions around your web application, decisions on:

  - routing
  - data fetching
  - server‑side rendering
  - search engine optimization
  - image optimization
  - bundling
  - code splitting
  - deployment

  Just to name a few. There is so much to decide and plan while you're building a web application. React does not dictate to you about any of these decisions.

  Wouldn't it be nice to have a framework that makes these decisions for you? It would make your job easier, right?

- > What Is Next.js?

  Next.js is a flexible React framework that gives you building blocks to create fast web applications. Now, what are some `basic building blocks of a web application`?

  - The first item would be the `user interface`, which tells you how the user interacts with the application.

  - `Routing`. This tells you how the user navigates between different parts of the application.

  - `Data fetching`. This is where your data lives and it also tells you how to fetch that data.

  - `Rendering`. This tells you when and where you render static or dynamic content on your web application.

  - `Performance`, how to optimize your app for end users.

  - `Integrations` and infrastructures tells you what third‑party services to use and where you deploy, store, and run your application.

  As we know, React as simply a JavaScript library to build rich user interfaces, but there is so much more work to make a complete web application. Here is where Next.js comes in. It handles tooling and configuration that is needed for React, and it provides additional structure, features, optimizations for your application.

  You can use React to build your user interface and then incrementally adopt Next.js features to solve common application requirements such as routing, data fetching, integrations, and so on, all of this while improving the developer and end user experience. It's a win‑win situation, right?

- > Features of Next.js

  - file system routing

  - hybrid rendering with server‑side rendering

  - static‑side generation

  - incremental static regeneration

  - image and font optimization

  - automatic bundle splitting

  - lazy loading

  - automatic TypeScript support

  We'll learn about each of these features in detail in this course. Next.js changes the status quo with fast refresh, zero config, and awesome search engine optimization. This makes Next.js a React framework for production.

- > Who Is Using Next.js?

  At this point, you may be wondering so who is using Next.js? You'll be surprised to know that lots of very popular websites today use Next.js in production. Some of the popular ones are:

  - hulu.com for their entertainment and video streaming

  - target.com by providing an online shopping experience

  - realtor.com

  - ted.com

  - DoorDash

  - Tiktok

  and many, many more. In the real world, Next.js is being used in e‑commerce with websites like Target

## Setup and Create Your First Next.js App

- > Overview

  In this module, you'll learn hands on about setting up and creating your first Next.js app. You'll first be introduced to the demo Globomantics app that you're going to build in this course. Then, you'll:

  - Create and set up the Next.js app.
  - Learn about pages and layout in Next.js
  - Configure the basic pages and layout for the demo application
  - Learn how to link and navigate between these pages

  By the end of this module, your Next.js demo application is set up and ready for more features. Let's get started.

- > Globomantics Conference App

  Throughout this course, we're going to be building a website for the fictional company, Globomantics, for demo purposes using Next.js.

- > What is Globomantics?

  Globomantics is a software company, and they also host annual tech conferences. In this course, we're going to build their website using React and Next.js.

- > Features of the Globomantics Web App

  The web app will contain the following features:

  - Conference pages, which display the conference sessions and the speaker information.

  - All of this is going to be built using React, and it'll be bootstrapped with Next.js.

- > Goal

  Our goal is to create this Globomantics web app from scratch using Next.js and also learn all of its features along the way.
  Are you ready to get started?

- > Setup Next.js Demo App

  In this clip, we will set up the Next.js demo application within our local environment.

- > System Requirements

  Before we begin, let's review the system requirements to install Next.js:

  - Ensure that you're using Node.js version 14.6.0 or newer.
  - Next.js is supported on macOS, Windows, and Linux.

- > Demo App Setup

  Our demo app, Globomantics, is already set up with Next.js, and you'll simply have to:

  - Download the exercise folder for this module and run the installation steps
  - Or clone the app from the GitHub repo shown here and run the installation steps.

  ```
  git clone https://github.com/adhithiravi/Next.js-Fundamentals
  ```

- > Installation Steps

  To install the dependencies, simply open the project on VS Code and run yarn. Once the dependencies are installed, you can run the development server with the yarn dev command. You can also use npm to install dependencies and run the dev server with npm if you prefer.

- > Create Your Own Next.js App

  Alternatively, if you want to create your own Next.js app from scratch, then you can simply use the create next-app command, which sets up everything automatically for you. You can use npx create-next-app and pass the latest flag, which will install the latest version of Next.js. You can use yarn or pnpm and run the create next-app command as well.

  ```
  npx create-next-app@latest
  ```

## new project folder clean up

- > Once you have create a new next up, replace the necessary parts:

- > delete the app/globals.css file

- > delete the app/page.modules.css file

- > in app/head.jsx...

  remove the title or update it to the new app

  ```jsx
  export default function Head() {
    return (
      <>
        <title>Globomantics Web App</title>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </>
    )
  }
  ```

- > in app/layout.jsx...

  delete the comment inside the component

  and delete the import for the global.css file

  ```jsx
  export default function RootLayout({ children }) {
    return (
      <html lang='en'>
        <head />
        <body>{children}</body>
      </html>
    )
  }
  ```

- > in app/page.jsx

  ```jsx
  export default function Page() {
    return (
      <>
        <h1>Welcome to Globomantics App</h1>
      </>
    )
  }
  ```

- > delete the public folder and everything in it

- > create a styles folder at the root of the app

- > in the styles folder add a globals.css file...

  ```css
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira
        Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  }
  ```

- > in the styles folder add a Home.module.css file...

  ```css
  .container {
    padding: 0 2rem;
  }

  .main {
    min-height: 100vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .footer {
    display: flex;
    flex: 1;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;
  }

  .footer a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  .title a {
    color: #0070f3;
    text-decoration: none;
  }

  .title a:hover,
  .title a:focus,
  .title a:active {
    text-decoration: underline;
  }

  .title {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
  }

  .title,
  .description {
    text-align: center;
  }

  .description {
    margin: 4rem 0;
    line-height: 1.5;
    font-size: 1.5rem;
  }

  .code {
    background: #fafafa;
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 1.1rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera
        Sans Mono, Courier New, monospace;
  }

  .grid {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
  }

  .card {
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    max-width: 300px;
  }

  .card:hover,
  .card:focus,
  .card:active {
    color: #0070f3;
    border-color: #0070f3;
  }

  .card h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  .card p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }

  .logo {
    height: 1em;
    margin-left: 0.5rem;
  }

  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
  }

  @media (prefers-color-scheme: dark) {
    .card,
    .footer {
      border-color: #222;
    }
    .code {
      background: #111;
    }
    .logo img {
      filter: invert(1);
    }
  }
  ```

## Pages

- > Current Page

  - The Globomantics app has only one page, which has a welcome header message. It is quite empty at the moment.

  This page is rendered from the app folder within which there is a `page.js` file.

  ```jsx
  export default function Page() {
    return (
      <>
        <h1>Welcome to Globomantics App</h1>
      </>
    )
  }
  ```

  - We've defined a page component, which is a React component, and it renders the message "Welcome to Globomantics" in the form of a heading.

  - Note that with Next.js 13, the file‑based routing can be done from this app folder.
    Previously, the routing was done from the pages folder instead.

  `This represents the UI for the root URL.`
  When you create a new Next.js app, this is a required file within the app directory.

  - To enable this, I've added a setting within the next.config.js file. This is pretty standard, and it enables the experimental feature app directory.

- > Setting up new pages

  - Next.js provides what is called as `file‑based routing`. In the app directory, folders are used to define routes.

  - `The app folder represents the root URL`, and it is at the very top of the tree. It has four sub-folders within it. For our example, we have a home folder, a settings folder, a conference folder, and a blog folder for our Globomantics app.

  ```
    app/
      home/
      settings/
      conference/
      blog/
  ```

  - Each of these will be its own route, and each route can have its own child routes as well.

  ```
    app/
      home/
      settings/
      conference/
        speakers/
        sessions/
      blog/
  ```

  - There is no limit to how many routes you can create in a Next.js app, and you simply follow this file‑based routing within the app directory for each new route that you create.

  The routes that come out of the folder structure that we just designed for our Globomantics app are:

  ```
    /home
    /settings
    /conference
    /conference/speakers
    /conference/sessions
    /blog
  ```

- > Features of Pages in Next.js

  - A page is a UI that is unique to each route.

  - A page.js file is required to make a route publicly accessible. This means each new route folder needs a page.js file.

  - Pages can fetch data, pages render server components by default, but you can configure them to be a client component if needed.

  - Pages also support extensions such as jsx, js, and TypeScript extension, tsx.

  - To summarize, a page is a UI that is unique to a route and it is always the leaf of the route subtree.

## Create Pages

- > it's time to start creating the routes

  - All right, now let's go ahead and create some pages within our Globomantics app based on the route structure that we just saw.

  - We're back to the VS Code editor.

  - Now within our app folder, it's time to start creating the routes.

- > Create Folders inside app folder

  - First, I'm going to create a folder called `home`.

  - Then I'm going to create a folder for the `settings`.

  - The next folder we're going to create is one for the `conference`.

  - Finally, we create a folder for the `blog`.

  ```
   app/
     home/
     settings/
     conference/
     blog/
  ```

- > Create page.js files

  - The next step is to create a `page.js` file within each of these folders.

  - So I'm going to go ahead and paste what we had in the page.js file from the app directory and tweak that a little bit.

  - We could have a generic message that says Welcome to `Settings Page`.

  ```jsx app/settings/page.jsx
  export default function Page() {
    return (
      <>
        <h1>Welcome to Settings Page</h1>
      </>
    )
  }
  ```

  - And I'm going to start creating the rest of the pages on each folder.

  - We're going to have a Welcome to Home Page message rendered for the `home page` route

  ```jsx app/home/page.jsx
  export default function Page() {
    return (
      <>
        <h1>Welcome to Home Page</h1>
      </>
    )
  }
  ```

  - and one for the `blog page` , and it's going to say Welcome to Blog.

  ```jsx app/blog/page.jsx
  export default function Page() {
    return (
      <>
        <h1>Welcome to blog</h1>
      </>
    )
  }
  ```

  - We still have to wire up a page for the `conference` folder.

  ```jsx app/conference/page.jsx
  export default function Page() {
    return (
      <>
        <h1>Welcome to Globomantics conference</h1>
      </>
    )
  }
  ```

- > Create subfolders

  Recall that we want to create subfolders within the conference folder, one for the `speakers` and another folder for the `sessions`.

  So let's go ahead and create these subfolders.

  ```
    app/
      home/
      settings/
      conference/
        speakers/
        sessions/
      blog/
  ```

  - And when you create subfolders, the subfolders also need to have a page.js file because it's going to be its own unique route.

  - So I'm going to go ahead and create a page.js for both the Sessions page, as well as the Speakers page

  - and have a generic welcome message that says Welcome to Globomantics `Sessions`

  ```jsx app/conference/sessions/page.jsx
  export default function Page() {
    return (
      <>
        <h1>Welcome to Globomantics Sessions</h1>
      </>
    )
  }
  ```

  - and Welcome to Globomantics `Speakers`.

  ```jsx app/conference/speakers/page.jsx
  export default function Page() {
    return (
      <>
        <h1>Welcome to Globomantics Speakers</h1>
      </>
    )
  }
  ```

- > Check URLs

  - So now we have set up all the pages that we want, and they're going to automatically follow this file‑based routing, and you'll see how that looks in action.

  - Localhost 3000 is going to render our root page.

  Now if I change the URL to include `/home`, you see the Welcome to Home Page being rendered.

  Now you see the blog being rendered with the URL changes to` blog/`

  If you change that to `/settings`, you're going to see the Welcome to Settings message.

  Let's go ahead and try the conference page.
  So you would do `/conference`, and there you go. You see the Welcome to Globomantics Conference.

  And now, you can append the URL with `conference/speakers`, and you'll now see the new route for the speakers being created.

  And you can also try out the `conference/sessions`, and you'll see the sessions page being rendered.

  And with that, we've set up all the pages for our Globomantics app, and all of the URLs are following the file‑based routing correctly.

## Linking and Navigation

- > using the Link component

  - In this demo, let's learn how to navigate between the pages in the Globomantics app using `the Link component`.

  So far, we've created pages within our Globomantics app, but we haven't set up navigating between these pages.

  We're only able to ensure that each of the routes are working by manually typing in the route URL in the browser.

  - The Next.js router uses a server‑centric routing with client‑side navigation. This means navigation maintains the client side state and avoids expensive rerenders.

  Doesn't that sound interesting?

  You can navigate between the routes using the Link component.

- > import the link component in the app/page.jsx

  - The Link component can be imported from next/link.

  - And to the Link component, you can pass the href prop, which will be the route URL.

  - We're trying to add a link to our root page, and we're giving the href as /home, which is the URL to the home page,

  - and it's going to display the text Home.

  ```jsx app/page.jsx
  import Link from 'next/link'

  export default function Page() {
    return (
      <>
        <h1>Welcome to Globomantics App</h1>
        <Link href='/home'>Home</Link>
      </>
    )
  }
  ```

  The Link component essentially is a React component that extends the HTML a Element and provides prefetching and client‑side navigation.

- > testing the link on the browser

  Here we are at the root URL, and you can see the text Home, and clicking on that link is going to take us to the home page.

- > add navigation between pages using the same pattern.

  - Let's now add some navigation links `on the home page`.

  - Here, I want to display links to all the other pages such as blog, settings, conference, and so on.

  - So first, we're going to `import the Link component`,

  - and I'm going to `display links` for the blog, settings, and conference.

  - I also want these link text to be of heading types, so I'm going to pass them `within the h2 element`.

  Keep in mind you need to give each one of them their URL, so it's going to be `/blog`, `/settings`, and `/conference`.

  ```jsx app/home/page.jsx
  import Link from 'next/link'

  export default function Page() {
    return (
      <>
        <h1>Welcome to Home page</h1>
        <h2>
          <Link href='/blog'>Blog</Link>
        </h2>
        <h2>
          <Link href='/settings'>Settings</Link>
        </h2>
        <h2>
          <Link href='/conference'>Conference</Link>
        </h2>
      </>
    )
  }
  ```

- > testing in the browser

  You'll see now that all of them are displayed here on the home page, and clicking on each one of them will take you to the respective routes.

  You can go between the Blog, Settings, and Conference pages from the home page. Isn't that neat?

- > prefetching

  prefetching of routes, which is `done by the Link component with Next.js`, is a way to preload routes in the background before it is even visited.

  The rendered result of prefetched routes are added to the router's client‑side cache, and this makes navigating to a prefetched route instantaneous.

  Keep in mind that `prefetching is only enabled in production`, so you won't see the prefetching feature working if you're in development mode.

  `Prefetching can also be disabled` if you don't want that to happen by passing the prefetch property equals false to the Link component as shown here.

  ```jsx
  import Link from 'next/link'

  export default function Page() {
    return (
      <>
        <h1>Welcome to Globomantics App</h1>
        <Link href='/home' prefetch={false}>
          Home
        </Link>
      </>
    )
  }
  ```

  When prefetch is set to false, `prefetching will still occur on hover`.

- > adding routing from the conference pages route

  - we can now go ahead and add routing from the conference pages route.

  - Recall that the conference page can take you to the Speakers and the Sessions page, so we'll do just that.

  - First things first, I'm going to `import the Link component` within the Conference page, Sessions page, and the Speakers page.

  Now back in my conference root page, I'm going to `add links` to the Speakers, as well as the Sessions page. I'm going to pass the link href/conference/speakers and /conference/sessions.

  ```jsx
  import Link from 'next/link'

  export default function Page() {
    return (
      <>
        <h1>Welcome to Globomantics conference</h1>
        <h2>
          <Link href='/conference/speakers'>Speakers</Link>
        </h2>
        <h2>
          <Link href='/conference/sessions'>Sessions</Link>
        </h2>
      </>
    )
  }
  ```

- > testing in the browser

  Now let's go back to our conference page and see if that worked out. There you go.

  Now we're able to navigate from the conference page to the Sessions and Speakers page.

- > adding links back to the conference page or to a previous page.

  - In addition, we can also add links back to the conference page or to a previous page.

  So what we're going to do is go into our Sessions and Speakers page and add a link back to the Conference page.

  All you'll have to do there is provide /conference as the URL,

  ```jsx
  import Link from 'next/link'

  export default function Page() {
    return (
      <>
        <h1>Welcome to Globomantics Sessions</h1>
        <h2>
          <Link href='/conference'>Back to Conference</Link>
        </h2>
      </>
    )
  }
  ```

  - and I'm going to do the same within our Speakers page.

  ```jsx
  import Link from 'next/link'

  export default function Page() {
    return (
      <>
        <h1>Welcome to Globomantics Speakers</h1>
        <h2>
          <Link href='/conference'>Back to Conference</Link>
        </h2>
      </>
    )
  }
  ```

- > And let's see how that looks in the browser

  We're in our Conference page. We're moving to the Speakers page, and there you see a Back to Conference link, and it's available on both the Speakers and the Sessions page.

  You can see now how we can move back and forth from the Conference page to the subpages. And with that, you're all set with linking between pages in our Globomantics app using the Link component.

## Layout

- > Layout is basically a UI that is shared between pages.

  - You may have headers, footers, navigation bars, and so on that are common across several pages within your web application.

  - Rendering these components could be part of your layout.

  - What's cool about layouts is that on navigation from one page to another, layouts preserve the state and remain interactive.

  - This means they do not rerender, and your page transitions seem even quicker.

- > When you set up your Next.js app, a root layout file is required.

  - This will be within the app folder, and this layout will be shared across all the pages in the app.

  - A layout can simply be defined by default exporting a React component from a layout.js file.

  - The component should accept `a children prop`, which will be populated within a page or other nested layouts.

  ```jsx
  export default function RootLayout({ children }) {
    return (
      <html lang='en'>
        <head />
        <body>{children}</body>
      </html>
    )
  }
  ```

  - Let's take a look at the app structure.

  In our case, one of the sub-routes is the /conference route.

  Conference is a folder within the app folder,

  and conference has its own sub-routes, speakers and sessions.

  ```
  app/
    page.js
    layout.js
      conference/
        page.js
        layout.js
        speakers/
          page.js
        sessions/
          page.js

  ```

  We already learned that page.js file is required for the route to be publicly accessible for each route and sub-route.

  `The only required layout.js file is the one for the root layout within the app folder.`

  - The other layout files are optional depending on how you plan to design your web application.

  `Layouts defined inside a folder apply to specific route segments and render within those segments when they're active.`

  - For instance, here the conference route has its own layout file.

  ```
  app/
    page.js
    layout.js
      conference/
        page.js
        layout.js
        speakers/
          page.js
        sessions/
          page.js

  ```

  This will be rendered when the user navigates to the conference page, and this layout will be shared by both the sub-route's Sessions page and the Speakers page. Isn't that neat?

- > adding a layout for conference page

  - Let's take a look at a demo on how we can set up layout for our conference page and how it's really shared between the sub-routes as well.

  Here's our app's root layout file within the app folder. It should contain the html and body tags. Now this file is a parent layout to the whole application.

  ```jsx
  export default function RootLayout({ children }) {
    return (
      <html lang='en'>
        <head />
        <body>{children}</body>
      </html>
    )
  }
  ```

  - Let's now go ahead and create a layout file just for our conference folder. So `within our conference folder here, we create a layout.js file`.

  - In here, let's create a React component and call it `ConferenceLayout`.

  - This component is going to take in the children props as well and return some HTML.

  - What I'm going to do is simply add a header for our Globomantics conference pages, and the header text is going to be GLOBOMANTICS MANIACALLY TAKING TECH TO THE GLOBE.

  - Now we can wrap the header tag, and the rest of the items will be rendered within the section tag.

  ```js
  export default function ConferenceLayout({ children }) {
    return (
      <>
        <header>
          <h1>GLOBOMANTICS MANIACALLY TAKING TECH TO THE GLOBE</h1>
        </header>
        <section>{children}</section>
      </>
    )
  }
  ```

  - Now keep in mind that this layout is going to be used when the conference page is rendered, and we should also see `the same layout being used for the Sessions page, as well as the Speakers page`.

- > add some basic styling to our header

  - One last step here is to add some basic styling to our header.

  I've already create a `style.css` file within the conference folder that you can see here.

  ```css conference/styles.css
  header {
    width: 100%;
    padding: 50px 0px 50px;
    background: #212121;
    color: #fff;
    text-align: center;
    justify-content: center;
  }
  ```

  - It contains some basic styling for the header.

  - Let's go back to our layout.js file and import the style here

  ```jsx
  import style from './styles.css'

  export default function ConferenceLayout({ children }) {
    return (
      <>
        <header>
          <h1>GLOBOMANTICS MANIACALLY TAKING TECH TO THE GLOBE</h1>
        </header>
        <section>{children}</section>
      </>
    )
  }
  ```

  - and pass it to the header.
  - We're going to pass styles.header to the style property within our header tag.

  ```jsx
  import style from './styles.css'

  export default function ConferenceLayout({ children }) {
    return (
      <>
        <header style={style.header}>
          <h1>GLOBOMANTICS MANIACALLY TAKING TECH TO THE GLOBE</h1>
        </header>
        <section>{children}</section>
      </>
    )
  }
  ```

- > testing in the browser

  And with that, our ConferenceLayout component is ready, and let's go ahead and see how it looks.

  As you can see, we are within our localhost 3000, which is the home page, and this page will not render the layout that we have within the conference page.

  We then navigate to the home, which also does not display that layout.

  We're now going to get into the conference page, and there you see it.

  You see this black header, and it has the white heading text, which says GLOBOMANTICS MANIACALLY TAKING TECH TO THE GLOBE.

  Now this is the header for a conference page that is being rendered from the layout.

- > this piece of UI does not rerender

  Now what's interesting is if you click on the Speakers page and navigate to it, you still see that header.

  And if you click on the Sessions page, you're still going to see that header.

  But take a look closely that it's really not rerendering the header.

  So that piece of the layout that you're seeing is already available and cached.

  So when you navigate back and forth between the Sessions, Speakers, and Conference pages, this piece of UI does not rerender.

  It's pretty cool because now you can see how you can tap into this layout by having navigation bars, footers, headers, and so on, which don't necessarily rerender per page.

  Instead, they rerender based on the route that the layout is set up for.

## Working with Images, Fonts, and Styling Your App

- > Overview

  So far, we've learned about building a brand new Next.js app.

  We've learned how to set up the basic pages, layout, and routing between the pages in our Next.js app.

  In this module, we'll dive into the Font component in Next.js, styling your Next.js app, and adding images using the Image component.

  We'll also learn about how the Image component that comes with Next.js is highly optimized. Let's get started.

- > add images and css needed for this part

  You'll notice a few new files here. Ensure that you use the `module 4 before` exercises folder from Pluralsight while getting set up on this module.

  It contains some images within this image folder and additional CSS files, which we'll get to later in this module.

  - create an `images folder` within the root folder and add `all images` in it.

  - create a `styles folder` and the `global.css` and the and the `Home.module.css` files.

### Font in Next.js

- > install @next/font package.

  - The `Next.js Font component` comes in a separate package,
    and it is not part of the Next.js package itself.

  The package includes built‑in automatic self‑hosting for any font file.

  This means you can optimally load web fonts with zero layout shift. Isn't that neat?

  To put it in simple words, the next/font will automatically optimize the fonts and remove external requests for improved privacy and performance.

  This includes any custom fonts that you add as well.

  You can run the npm install command to install the dependencies and run npm run dev to restart your dev server.

  ```
  npm install @next/font
  ```

  And you can go to our package.json file, and you'll be able to see that the next slash font package has been added as a dependency.

  - All right, the next step would be to ensure that you restart your dev server.

  ```
  npm run dev
  ```

- > google fonts in next.js 13

  - Next.js is also strongly recommends that you use `variable fonts` for the best performance and flexibility.

  - With Next.js font, you can automatically self‑host any Google font, and these fonts are included in the deployment and serve from the same domain as your deployment.

  So there are no requests that are sent to Google by the browser.

  let's go ahead and open our root layout file, which is within the app folder.

- > adding fonts in our application

  the fonts are defined in the app/layout.js file, which is the root layout file for your app.

  As of Next.js 13, here's where you would be including the font package and including the font that you want for your application.

  - Here I'm going to first `import the font` that I'm planning to use. It's going to be Open_Sans, and it seems like a good option for our app. And I'm going to import it from @next/font/google, which is where you can find this font.

  ```jsx page/layout.jsx
  import { Open_Sans } from '@next/font/google'

  export default function RootLayout({ children }) {
    return (
      <html lang='en'>
        <head />
        <body>{children}</body>
      </html>
    )
  }
  ```

  - The next step would be to `instantiate the Open_Sans object` by providing the subsets.

  Now Google Fonts are automatically subset, which means it reduces the size of the font file and improves performance. So you'll need to define which of these subsets you want to preload.

  I'm going to `include just latin as the subset` here, and the font weight is optional.

  ```jsx page/layout.jsx
  import { Open_Sans } from '@next/font/google'

  const openSans = Open_Sans({
    subsets: ['latin'],
  })

  export default function RootLayout({ children }) {
    return (
      <html lang='en'>
        <head />
        <body>{children}</body>
      </html>
    )
  }
  ```

  - You can provide an array of `font weight` here.

  If it is a variable style, like the open sans font that we're using, you do not need to provide the weight here. It's optional.

  But if you're using other types of fonts, then you'll have to provide it a weight here.

  ```jsx page/layout.jsx
  import { Open_Sans } from '@next/font/google'

  const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['400'],
  })

  export default function RootLayout({ children }) {
    return (
      <html lang='en'>
        <head />
        <body>{children}</body>
      </html>
    )
  }
  ```

  - The next step is to pass the className to the html tag within the RootLayout component

  and we're going to call it openSans.className.

  ```jsx page/layout.jsx
  import { Open_Sans } from '@next/font/google'

  const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['400'],
  })

  export default function RootLayout({ children }) {
    return (
      <html lang='en' className={openSans.className}>
        <head />
        <body>{children}</body>
      </html>
    )
  }
  ```

  Hit Save and you're done.

  Now this font is going to be applied to our entire application.

  So let's go ahead and take a look at the Globomantics app and hit Refresh. There you go. You see this new font being applied to our application.

  You can move to different pages, go to the conference page, go back, and notice that this font has been updated, and now we have the open sans font, which comes from Google Fonts, within our Globomantics app.

- > define local fonts at RootLayout

  You can also use local fonts within your application.

  To do that, you'll be using the `next/font/local` package, which also comes with the next/fonts package.

  All you'll need to include in addition would be the source file for the local font as shown here in this example.

  ```jsx page/layout.jsx
  import localFont  from '@next/font/local'

  // Font files can be located inside of 'app'
  const myFont = localFont({ src: "./my-font.woff2
  })

  export default function RootLayout({ children }) {
    return (
      <html lang='en' className={myFont.className}>
        <head />
        <body>{children}</body>
      </html>
    )
  }
  ```

  Everything else remains the same and works just like the Google Fonts that we saw earlier.

  And with that, you've learned how to use the next/font package to use and load fonts optimally within your Next.js application.

### Styling in Next.js

- > Next.js supports different types of styling,

  such as CSS modules, Tailwind CSS, global styles, CSS‑in‑JS, and so on.

#### CSS modules

- > Next.js has built‑in support for CSS modules

  which are identified using simply the extension `.module.css`.

  CSS modules `locally scope CSS` by automatically creating a unique class name.

  For those of you already used it in other projects may be familiar with the internals of how CSS modules work.

  - It allows you to use the same class name in different files without worrying about those collisions.

  (In this code snippet that you see here, you can see that speaker.module.css file contains styles for the Speakers page.

  This file can be directly imported within the Speakers page, and the styles are then passed to the className parameter.

  Simple enough, right?)

  - Next.js's fast refresh feature when running locally

  What is cool is when running locally on dev, the local style sheets, both the CSS modules and global styles, will take advantage of Next.js's fast refresh feature.

  So your changes will be seen instantly on the browser as you save them.

  - fewer minified .css files when building for production

  Another fun fact when building for production is Next.js will build the CSS files into fewer minified .css files.

  This results in improved performance because of fewer network calls.

- > how to use the CSS module styles

  Let's see how to use the CSS module styles within our Globomantics app.

  - Here is the current state of our application.

  We have a home page with links to blog, settings, and conference pages.

  If you step into the conference page, you see a header, and there are links to the Speakers and Sessions page.

  This black header that you see on the top is shared between all the conference pages, such as Speakers and Sessions, because it's part of the conference layout.

- > creating a similar header for all our pages in our app using css modules

  Now, what if I want a similar header for all our pages, including the home page, and also add these links to the other pages within that header so that they're always available.

  Right now from the conference page, I can't easily go back to the home page or other pages. I'll have to explicitly type in the URL to get back to the home page.

  So let's see how we can rewire some of this and utilize the CSS modules for styling each component or page.

  - 1. add the links to all the other pages in the root layout within the app folder

  (don't forget to import the Link component)

  Since I want to share the header across all the pages, I'm going to go to the root layout within the app folder and add the links to all the other pages right here.

  I'm copying and pasting from the home page, and I'm going to add that right here within our root layout.

  We'll update the home page later.

  ```jsx app/layout.jsx
  import { Open_Sans } from '@next/font/google'
  import Link from 'next/link'

  const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['400'],
  })

  export default function RootLayout({ children }) {
    return (
      <html lang='en' className={openSans.className}>
        <head />
        <body>
          <h3>
            <Link href='/blog'>Blog</Link>
          </h3>
          <h3>
            <Link href='/settings'>Settings</Link>
          </h3>
          <h3>
            <Link href='/conference'>Conference</Link>
          </h3>
          {children}
        </body>
      </html>
    )
  }
  ```

  - 2. Next, I want to add a link to the home page as well.

  So what I'm going to do is I'm going to add a header that says Globomantics, and it's going to link back to the home page.

  ```jsx app/layout.jsx
  import { Open_Sans } from '@next/font/google'
  import Link from 'next/link'

  const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['400'],
  })

  export default function RootLayout({ children }) {
    return (
      <html lang='en' className={openSans.className}>
        <head />
        <body>
          <h1>
            <Link href='/home'>Globomantics</Link>
          </h1>
          <h3>
            <Link href='/blog'>Blog</Link>
          </h3>
          <h3>
            <Link href='/settings'>Settings</Link>
          </h3>
          <h3>
            <Link href='/conference'>Conference</Link>
          </h3>
          {children}
        </body>
      </html>
    )
  }
  ```

  This is going to ensure that this header is available on each page, and there's going to be text that says Globomantics.

  And clicking on that will take the user back to the home page. All right,

  let's see how this looks on the browser.

  You can notice that it's wired up, but there is no styling so we can improve on that.

  - 3. add a new file here within the app folder.`rootStyle.module.css`.

  In here, I'll add a style for the `homeLink` which is the header link for the Globomantics.
  Within the style, I'm going to give styles for text decoration and set it to none,
  and I'm also going to give the color as white.
  This will ensure that there are no additional stylings on the link text.

  Let's also add another style for the other links. I'm going to call it the `menuBarLink`.
  And within this, I'm going to repeat the same style, text‑decoration set to none, and I'm going to give this a color, which is going to be a cool green.

  ```css app/rootStyle.module.css
  .homeLink {
    text-decoration: none;
    color: #fff;
  }
  .menuBarLink {
    text-decoration: none;
    color: #bdfef2;
  }
  ```

  - 4. import the style within our layout.js file. The styles are then passed to the respective links.

  The `homeLink` is passed to the Globomantics link text,
  and the `menuBarLinks` are going to be passed to the other links as follows.

  ```jsx app/layout.jsx
  import { Open_Sans } from '@next/font/google'
  import Link from 'next/link'
  import styles from './rootStyle.module.css'

  const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['400'],
  })

  export default function RootLayout({ children }) {
    return (
      <html lang='en' className={openSans.className}>
        <head />
        <body>
          <h1>
            <Link className={styles.homeLink} href='/home'>
              Globomantics
            </Link>
          </h1>
          <h3>
            <Link className={styles.menuBarLink} href='/blog'>
              Blog
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBarLink} href='/settings'>
              Settings
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBarLink} href='/conference'>
              Conference
            </Link>
          </h3>
          {children}
        </body>
      </html>
    )
  }
  ```

  - 5. The next step would be to include all of these links within the header element of our html inside the body.

  ```jsx app/layout.jsx
  import { Open_Sans } from '@next/font/google'
  import Link from 'next/link'
  import styles from './rootStyle.module.css'

  const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['400'],
  })

  export default function RootLayout({ children }) {
    return (
      <html lang='en' className={openSans.className}>
        <head />
        <body>
          <header>
            <h1>
              <Link className={styles.homeLink} href='/home'>
                Globomantics
              </Link>
            </h1>
            <h3>
              <Link className={styles.menuBarLink} href='/blog'>
                Blog
              </Link>
            </h3>
            <h3>
              <Link className={styles.menuBarLink} href='/settings'>
                Settings
              </Link>
            </h3>
            <h3>
              <Link className={styles.menuBarLink} href='/conference'>
                Conference
              </Link>
            </h3>
          </header>
          {children}
        </body>
      </html>
    )
  }
  ```

  So I included the header tag, which means all of these links are going to be at the very top.

  - 6. And I'm also going to add some styling for our header.

  The most important one is the background color.
  It's going to be a darker color and making sure that the content and text are all aligned to the center.

  ```css app/rootStyle.module.css
  .homeLink {
    text-decoration: none;
    color: #fff;
  }
  .menuBarLink {
    text-decoration: none;
    color: #bdfef2;
  }

  .header {
    width: 100%;
    padding: 50px 0px 50px;
    background: #212121;
    color: #fff;
    text-align: center;
    justify-content: center;
  }
  ```

  - 7. Now we can go back into our layout file and add the styling for the header.

  ```jsx app/layout.jsx
  import { Open_Sans } from '@next/font/google'
  import Link from 'next/link'
  import styles from './rootStyle.module.css'

  const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['400'],
  })

  export default function RootLayout({ children }) {
    return (
      <html lang='en' className={openSans.className}>
        <head />
        <body>
          <header>
            <h1>
              <Link className={styles.homeLink} href='/home'>
                Globomantics
              </Link>
            </h1>
            <h3>
              <Link className={styles.menuBarLink} href='/blog'>
                Blog
              </Link>
            </h3>
            <h3>
              <Link className={styles.menuBarLink} href='/settings'>
                Settings
              </Link>
            </h3>
            <h3>
              <Link className={styles.menuBarLink} href='/conference'>
                Conference
              </Link>
            </h3>
          </header>
          {children}
        </body>
      </html>
    )
  }
  ```

  we're done with our layout file, and we've styled it well.

  So let's go ahead and take a look at the browser to see how all of this looks now.

  There you go. You see now within our home page a header, which is black, and it contains all of the things that we wanted.

  This is going to be shared between all the routes, and it is much easier and intuitive to navigate between the pages now from the header here.

  So you have links to the blog, the conference, and the settings.

  Keep in mind that this is coming from the root layout page, which means Next.js does not keep rendering it. It is already in the cache, so your page loads are going to be faster. We're not going to rerender any of this header.

  - 8.Now the next step would be to go back and clean up our home page and the conference page

  remove the links from the home page since we've moved them now to the header.

  ```jsx home/page.jsx
  import Link from 'next/link'

  export default function Page() {
    return (
      <>
        <h1>Welcome to Home page</h1>
      </>
    )
  }
  ```

  And the conference page also has some additional items in the header because it was part of the `conference layout`, which I'm going to go ahead and remove. Neat.

  ```jsx conference/layout.jsx
  import style from './styles.css'

  export default function ConferenceLayout({ children }) {
    return (
      <>
        <section>{children}</section>
      </>
    )
  }
  ```

  Now that we've removed all of the things we don't need from the home page and the conference page, let's go back and see all the changes reflected on our browser.

  You see now a clean home page with a header bar, and now we can navigate to the links from the home home page. And going across all of the routes, you'll see the same header being displayed statically, and you can link back and forth, go into any of the pages, and also navigate back to the home page by simply clicking the Globomantics button.

#### Global Styles

- > CSS modules vs Global styles

  In this clip, let's learn about how you can handle global styles within your Next.js app.

  CSS modules that you've seen so far are typically useful for styling components.

  Global styles can be used for CSS that needs to be loaded by every page.

  Note that global styles can be imported into any layout, page, or a component inside the app directory. This is new to Next.js 13.

- > how to apply global styles in next.js 13

  In this code snippet here, notice that `the global.css file is placed within the app folder`.

  Here, a style has been given to the body, and this style is then simply `imported within the root layout file`, and that's all it takes.

  The styles from the global.css file now `applies to every route in the application`.

- > Let's go back to our Globomantics app and make some modification based on this newfound knowledge.

  - 1. I'm going to `create the global.css file within the app folder`.

  - 2. Then, I'm going to paste the `header style` over here, which was originally in the CSS module for the root style.

  (remember to change the class selector for a header selector)

  I'm also going to add a style for the body with a margin of 0.

  ```css app/global.css
  header {
    width: 100%;
    padding: 50px 0px 50px;
    background: #212121;
    color: #fff;
    text-align: center;
    justify-content: center;
  }

  body {
    margin: 0;
  }
  ```

  - 3. Now I can simply `import the global.css file within the root layout`, and it should be effective and apply to every route in the application.

  (remember to remove the className in the header)

  Let's hit Save and open a browser. You'll notice that the header styles are still applicable. But this time, they're pulled in via the global.css file instead. Pretty cool, isn't it?

  You can use styles that cater to your needs as you develop your Next.js application and pick and choose different types of styling and styling options that are available to you with Next.js.

### Image in Next.js

- > features of the Next.js Image component

  The Next.js Image component extends the HTML img element with several additional features.

  - Some of the cool features of the Next.js Image component are

  - 1. size optimization

  where it can automatically serve correctly sized images for each device using modern image formats.

  - 2. Visual stability

  This feature prevents layout shifts automatically when images are loading.

  - 3. Faster page loads

  The images are loaded only when they enter the viewport, and this feature uses the native browser's lazy loading and results in faster page loads while images are set to blur or have other placeholders.

  - 4. local and remote support

  Finally, the Image component supports both local images, as well as remote images from the network.

- > usage of tne Image component

  Here is an example usage of how the Image component looks.

  ```jsx
  import Image from 'next/image'

  export default function Page() {
    return (
      <Image
        src='https://s3/amazonaws.com/my-bucket/profile.png'
        alt='Picture of the author'
        with={500}
        height={500}
      />
    )
  }
  ```

  - You can directly import the Image component from the Next.js package via next/image.

  - While using the component, you'll provide the source.

  - Next, you'll provide the width and height of the image if it is pulled from the network as shown here. `This is not necessary if it is a local image file`.

  - You can also see some alt text has been provided to the component, which basically describes the image to screen readers, as well as search engines.

  In the next clip, let's take a look at how we can use the Image component within our Globomantics app.

- > Demo: Image Component

  - let's use the Next.js Image component within our Globomantics app to render optimized images.

  - I want to add a background image for both the home page, as well as the conference page.

  So let's go ahead and use the Image component to do just that.

  We're now in the home/page.jsx file. Notice there is nothing much going on here as of now.

  - 1. My first step is going to `import the Image component` from next/image.

  ```jsx home/page.jsx
  import Image from 'next/image'

  export default function Page() {
    return (
      <>
        <h1>Welcome to Home page</h1>
      </>
    )
  }
  ```

  - 2. I'm also going to `import the image file`. I'm going to import the file home‑image‑1.jpg.

  This file is already available inside the images folder that you see here, and I'm going to import it with the name `OurStoryPic`.

  ```jsx home/page.jsx
  import Image from 'next/image'
  import OurStoryPic from '../../images/home-image-1.jpg'

  export default function Page() {
    return (
      <>
        <h1>Welcome to Home page</h1>
      </>
    )
  }
  ```

  - 3. The final `import here will be the styles` from the home.module.css.

  Here, the styles are already defined and are component‑specific styles for the home page. All right,

  ```jsx home/page.jsx
  import Image from 'next/image'
  import OurStoryPic from '../../images/home-image-1.jpg'
  import styles from './home.module.css'

  export default function Page() {
    return (
      <>
        <h1>Welcome to Home page</h1>
      </>
    )
  }
  ```

  - 4. now that we have all the imports that we need, let's get started with rendering the Image component.

  - I'm going to have a `div` component as the parent component. And to this component, I'm going to provide a `style bgWrap`. (This is already defined within our styles for the home module.)

  ```jsx home/page.jsx
  import Image from 'next/image'
  import OurStoryPic from '../../images/home-image-1.jpg'
  import styles from './home.module.css'

  export default function Page() {
    return (
      <>
        <div className={styles.bgWrap}></div>
        <h1>Welcome to Home page</h1>
      </>
    )
  }
  ```

  - And right here, I can `include the Image component`.

  The first thing that the Image component needs is the `source`, so our source here is the imported image file, `OurStoryPic`.

  I'm also going to provide an `alt` text to it, which is going to read out `OurStoryPic`.

  Next, I'm going to provide a property called `quality` and give it the value of 100.

  (Here, 100 refers to the best quality of the image. You could provide lower numbers if you're not looking for the highest quality of the image to be rendered.)

  Next, I'm going to provide a `placeholder` property and give it a value, `blur`.

  (A placeholder is a really cool property, which is a part of the Next.js Image component, which is used while the image is loading. The possible values could be blur or empty for local images, and it defaults to empty. When it's empty, there will be no placeholder. And while the image is loading, you'll only see an empty space. But if you give the value blur, you'll see that the image looks sort of blurred until it is loaded. You'll see that in just a minute once we're done coding our Image component here.)

  The next property I'm going to add is `sizes`, and I'm giving it a value `100vw`.

  (This is basically a string that provides information about how wide the image will be at different breakpoints. Here, vw stands for the viewport width.)

  Now instead of providing the height and width, I'm also going to provide a Boolean property called `fill`, which is going to be set to true.

  (When fill is true, it causes the image to fill the parent element instead of setting the width and height explicitly.)

  The default image fit behavior will stretch the image to fit the container, and you may prefer to set a property `objectFit` to `contain` for an image,

  (which is letter box to fit the container and also preserve the aspect ratio of the image.)

  (Alternatively, you could also provide the value `cover`, which will cause the image to fill the entire container and be cropped to preserve the aspect ratio.)

  (This really depends on the design that you get from UX. And for this to look correct, you'll also have to include the `overflow hidden` style to your parent element.)

  In our example, we're going to provide the style `objectFit` set to `cover`.

  (And notice that in the home.module.css, the parent wrapper bgWrap style has the overflow hidden property already set for you. All right,)

  ```jsx home/page.jsx
  import Image from 'next/image'
  import OurStoryPic from '../../images/home-image-1.jpg'
  import styles from './home.module.css'

  export default function Page() {
    return (
      <>
        <div className={styles.bgWrap}>
          <Image
            src={OurStoryPic}
            alt='Our story pic'
            quality={100}
            placeholder='blur'
            sizes={'100vh'}
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <h1>Welcome to Home page</h1>
      </>
    )
  }
  ```

  with this, the Image component is wired up and ready.

  - 5. I'm also going to paste some text that will be displayed on the home page in addition to this image.

  The text is going to be displayed on top of the image, and it would be some heading text and some paragraph. All right,

  now let's go ahead and hit Save, and let's check out our home page. There you go.

  You see the image rendered in the background of the home page and some text on the top of it.

  (Now what you can do is reset the cache here and try again. Notice that there is a blue blur here as the placeholder until the image loads. Isn't that pretty cool? Once the image loads one time, you will not see this blur effect again when you come back to it. So if you go to a different page and come back to the home page, you won't see this effect anymore because the image is already loaded and waiting for you in the cache. If you ever want to debug and see this blur again, you'll have to reset your cache and refresh again to see that blur effect.)

  - 6. Now using the same methods, let's add an image to the conference page as well.

  - I'm copying the same code that we had on the home page, and I'm going to add it to the conference page.

  We're going to tweak the image that is imported to be `media‑image‑1.jpg`,

  and I'm going to call it the `ConferencePic`,

  and we're going to now pass this `ConferencePic` as the source to our Image component.

  Everything else remains the same.

  ```jsx conference/page.jsx
  import Link from 'next/link'
  import Image from 'next/image'
  import ConferencePic from '../../images/media-image-1.jpg'
  import styles from './conference.module.css'

  export default function Page() {
    return (
      <>
        <div className={styles.bgWrap}>
          <Image
            src={ConferencePic}
            alt='Conference pic'
            quality={100}
            placeholder='blur'
            sizes={'100vh'}
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <h1>Welcome to Globomantics conference</h1>
        <h2>
          <Link href='/conference/speakers'>Speakers</Link>
        </h2>
        <h2>
          <Link href='/conference/sessions'>Sessions</Link>
        </h2>
      </>
    )
  }
  ```

  - I'm also going to paste a different text to be displayed here on the conference page.

  It's going to have a welcome header and links to the Speakers and Sessions page.

  Let's also remember to import the styles for this component from the conference.module.css file, which already contains the styles for the Conference component.

  Within the styles, I'm going to make a small tweak. I'm going to make the color of all the text to be white since the background for the image that we're going to be using will be dark. All right,

  ```css
  .bgWrap {
    position: fixed;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    z-index: -1;
  }
  .bgHeader {
    margin: 0;
    padding-top: 25px;
    font-size: 56px;
    font-weight: 800;
    line-height: 45px;
    text-align: center;
    color: #fff;
  }

  .bgText {
    margin: 0;
    font-size: 30px;
    padding-top: 25px;
    text-align: center;
    font-style: italic;
    color: #fff;
  ```

  you're all set. Let's hit Save and refresh your browser.

  You can see images now on both the home page and the conference page. And when the image loads for the very first time, it takes a second or so, and you can see a blur effect on both the home page, as well as the conference page. With this, you've learned how to use images within your Next.js app.

- > Summary

  In this module, we've learned about working with the font component in Next.js and the optimizations that come with the Font component. We also learned about styling Next.js apps using CSS modules, as well as global styles. We then looked into the Image component and how it is being optimized as well. In the next module, we're going to be getting into learning rendering and data fetching techniques in Next.js.

## Learning Rendering and Data Fetching

- > Learning Rendering and Data Fetching.

  In this module, you'll be learning about the different types of rendering options provided by Next.js.

  We'll discuss client components and server components.

  We'll then learn about static and dynamic data fetching in Next.js. Let's get started.

### Component Level Rendering

- > what exactly a client and a server really is.

  With the latest Next.js 13, you can choose a rendering environment at the component level, it provides support for both client and server components.

  - The client refers to the browser on a user's device that sends a request to the server for your application code.

  It then returns the response from the server into an interface that the user can interact with.

  - The server, on the other hand, refers to the computer in a data center that stores your application code. It receives requests from the client, does some computation, and sends back an appropriate response. All right,

- > client component

  In Next.js, client components are components that are rendered on the client.

  They can also be pre-rendered on the server and hydrated on the client.

- > server components

  With Next.js 13, all components inside the app folder that we've seen so far are server components by default.

  You can choose to use a client component instead by specifying it explicitly.

- > why server components

  These components allow you to render components on the server and reduce the amount of JavaScript sent to the client. Isn't that cool?

  This is a new concept and taps into an entirely performant way of rendering React components.

  Let's take a look at this component tree here, for example.

  The pink components here represents server components, and the blue components are the client components.

  You can see here that you can interleave server and client components in your application.

  You could do it as you like across the component tree or on a per‑component basis.

  React will seamlessly merge the work of both environments without any additional work from your end.

- > To use a client component

  - So, as we saw earlier, all components inside the Next.js app folder are server components by default.

  - To use a client component, you would create a file inside the app folder and add the `'use client'` directive at the top of the file.

  - This should be before any imports are added.

  You only need to mark components as use client when they use client hooks, such as useState or useEffect.

  In our case, this Counter component uses a state hook and hence needs to be marked as a client component.

  It's best to leave components that do not depend on client hooks without the client directive so that they can automatically be rendered as a server component.

  This helps ensure the smallest amount of client‑side JavaScript.

- > So how do we make a choice on when to use the client versus the server component

  - The rule of thumb is to `use a client component if you use any of the React hooks`, such as useState, useEffect, useReducer, and so on.

  This means there are going to be changes within the component that needs to be rendered on the client.

  `If there is any sort of interactivity with the component`, such as event listeners you have on button click and so on, you would use a client component.

  Also, `if there are custom hooks that depend on state and effects`, they have to be client components too.

  In all other cases, you'll use a server component by default.

- > when are Server components use?

  Server components are used while `fetching data`,

  `storing sensitive information` on the server, such as tokens, API keys, and so on.

  And `if the component must access back‑end resources directly`, then it would be a server component too.

  Make sure to use a server component `to also keep large dependencies on the server`.

  (So far within our Globomantics app, we did not really create components with interactivity or use any client hooks, so all our components inside the app folder or server components by default.

  If we ever want to change them, we'll include the use client directive at the very top of a component's file.)

### Data Fetching Approaches

- > in next.js 13, data fetching can be done on a page‑by‑page basis

  So far, we saw the different rendering approaches at the component level in Next.js.

  In this clip, let's learn about the different data fetching approaches that come with Next.js.

  - Something really cool about Next.js is that data fetching can be done on a page‑by‑page basis.

  You can pick and choose the data fetching method that is most suitable for a specific page.

- > static data fetching (also known as static site generation)

  - The default data fetching approach in Next.js is called static data fetching.

  It's also known as static site generation.

  - In this approach, the data is fetched at build time once and then cached. The cached data is then reused on every request.

  This is a good technique to use for pages that do not change often within your website, for instance a blog post page.

  It can always be fetched from the cache. This boosts performance to a great extent since the pages are now static and the content is retrieved from the cache instead.

  This method ensures that the load on the database is reduced by minimizing the number of requests.

  - By default, Next.js automatically does static data fetching unless specified otherwise.

- > incremental static regeneration (This includes what is called as revalidation)

  The second approach is also a static data fetching approach, but it's slightly different. This includes what is called as revalidation.

  It's otherwise known as incremental static regeneration, or ISR.

  In this approach, the data is fetched and cached. The cached data is then reused on each request until it reaches a specific interval of time.

  Let's say you've provided a specific interval of time to Next.js, such as 10 seconds. Then after the 10 seconds, Next.js revalidates the data and invalidates the previous cache.

  This method is useful when your data changes and you want to ensure that the application shows the latest version without having to rebuild the entire application.

- > dynamic data fetching (or the server‑side rendering)

  The final approach of data fetching is called the dynamic data fetching or the server‑side rendering.

  In this method, the data is fetched on each request. Dynamic data changes often or could be specific to users like a shopping cart, for instance.

  In this method, there is no caching, and the data is fetched on each request.

### Fetch in Next.js

- > how to implement data fetching in Next.js

  You know the different data fetching approaches in Next.js. In this clip, we'll see how to implement data fetching in Next.js.

  - The Next 13's new data fetching uses the fetch API, which works within the app folder that we've been working from.

  - The fetch API is a new data fetching system that is built on top of the native fetch web API, and it also makes use of the JavaScript async/await functions within server components.

  - It allows caching and revalidating options within the fetch request itself.

  This is much easier than the previous APIs that Next.js had offered before Next.js 13.

  - how each data fetching approach is done using this fetch API

  Let's look at some code snippets to understand how each data fetching approach is done using this fetch API.

- > static data fetching method (static site generation)

  By default, the fetch call is going to perform a static data fetching method.

  ```jsx
  async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/post')
    const data = await res.json()
    return data
  }
  ```

  Here you'll notice an async function called fetchData. You can name it whatever you like.

  Within this, the fetch call is made to the API. No options are provided to the fetch method here. And by default, it performs a static data fetching.

  The JSON response is then parsed and returned from this function.

  This can then be used within the server component to render the data.

  Within the server component, if fetchData is called again, it will return the data from the cache rather than making a fresh request.

- > incremental static regeneration (This includes what is called as revalidation)

  - In the next approach, if you want to perform a revalidation within a specific interval of time, then you can provide the optional property `next` within which the `revalidate` property is given the interval time in seconds.

  ```jsx
  async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/post')
    {
      next: {
        revalidate: 15
      }
    }
    const data = await res.json()
    return data
  }
  }
  ```

  This request is cached with a lifetime of 15 seconds here, after which a fresh request will be made and the cache will be updated with the new data. Simple enough, right?

- > dynamic data fetching (or the server‑side rendering)

  For dynamic data fetching or server‑side rendering, you'll provide the `cache` property to the fetch call and give it the value `no‑store`.

  ```jsx
  async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/post')
    {
      cache: 'no-store'
    }
    const data = await res.json()
    return data
  }
  ```

  This will let the fetch method know that there is going to be no cache in this call.

  The request should be refetched on every request. Neat.

  With this, you're aware of all the data fetching techniques in Next and how to implement them. In the next clips, we'll perform this data fetching within our Globomantics demo application.

- > Demo: Static Data Fetching

  In this demo, let's fetch the conference speaker information for our Globomantics app and perform the static data fetching using the fetch API in Next.

  Make sure to use the before exercise folder code for this module before you get started. `M5-Before`

  - 1. Now, we're within our IDE in the speakers/page.js file. This does not have anything at the moment other than a welcome message.

  ```jsx
  import styles from '../conference.module.css'

  export default async function Page() {
    return (
      <div className={styles.parentContainer}>
        <div className='self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100'>
          Last Rendered: {new Date().toLocaleTimeString()}
        </div>
        <h1>Welcome to Globomantics Speakers</h1>
      </div>
    )
  }
  ```

  - 2. First things first, we're going to fetch the speakers information for the Globomantics conference.

  I'm going to define an async function here and name it `fetchSpeakers()`.

  Within the function, I can define a response object, which will hold the `response` from the API call.

  I'm going to apply the `await` operator and then call the `fetch` method.

  Within the fetch method, I'm going to `pass the URL` to fetch from here. This is going to be a GitHub URL containing the speakers.json file for demo purposes.

  ```jsx
  import styles from '../conference.module.css'

  async function fetchSpeakers() {
    const response = await fetch(
      'https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json'
    )
  }

  export default async function Page() {
    return (
      <div className={styles.parentContainer}>
        <div className='self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100'>
          Last Rendered: {new Date().toLocaleTimeString()}
        </div>
        <h1>Welcome to Globomantics Speakers</h1>
      </div>
    )
  }
  ```

  - 3. Now, I can parse the JSON using the `response.json()` and store it in the `data` object here.

  Finally, I can `return` the `data` here from this fetchSpeakers function.

  Notice here that the `await` method is used just before parsing the JSON response as well.

  ```jsx
  import styles from '../conference.module.css'

  async function fetchSpeakers() {
    const response = await fetch(
      'https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json'
    )

    const data = await response.json()
    return data
  }

  export default async function Page() {
    return (
      <div className={styles.parentContainer}>
        <div className='self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100'>
          Last Rendered: {new Date().toLocaleTimeString()}
        </div>
        <h1>Welcome to Globomantics Speakers</h1>
      </div>
    )
  }
  ```

  - 4. Now by default, the request we've made will be cached until it is manually invalidated.

  This means it will follow static site generation or static data fetching.

  Every time the Speakers page is going to be loaded, it will pull the data from the cache and not make a request call after the very first time. All right,

  - 5. the next step is within the page component, I'm going to call the `fetchSpeakers()` method that we just defined.

  This will be before the component is rendered. (return)

  Ensure to use the `await` function before the fetchSpeakers method is invoked.This will ensure that the promises are handled correctly.

  Now we store the parsed JSON response here in the `data` object.

  ```jsx
  import styles from '../conference.module.css'

  async function fetchSpeakers() {
    const response = await fetch(
      'https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json'
    )

    const data = await response.json()
    return data
  }

  export default async function Page() {
    const data = await fetchSpeakers()

    return (
      <div className={styles.parentContainer}>
        <div className='self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100'>
          Last Rendered: {new Date().toLocaleTimeString()}
        </div>
        <h1>Welcome to Globomantics Speakers</h1>
      </div>
    )
  }
  ```

  - 6. Notice here within the components render, there is a `last rendered date` and time string that will be displayed.

  I've added this to demo the different data fetching techniques, and the only way to validate that is using the timestamp of when a page was last rendered.

  So this is specifically here for demo purposes.

  - 7. Now within our render, I'm going to use the `map` function to go through the `speakers` array. We'll need the speaker's `ID`, `name`, and `bio`.

  I'm going to wrap them all within a `div` tag and provide the ID as a key. Don't forget to provide a `key` because React requires that you do that when you display lists.

  The next step is I'm going to add the `name` with the `h3` tag and the `bio` with the `h5` tag. And that's all we need to render here. Make sure to close all your tags.

  ```jsx
  import styles from '../conference.module.css'

  async function fetchSpeakers() {
    const response = await fetch(
      'https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json'
    )

    const data = await response.json()
    return data
  }

  export default async function Page() {
    const data = await fetchSpeakers()

    return (
      <div className={styles.parentContainer}>
        <div className='self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100'>
          Last Rendered: {new Date().toLocaleTimeString()}
        </div>
        <h1>Welcome to Globomantics Speakers</h1>
        {data.speakers.map(({ id, name, bio }) => (
          <div key={id}>
            <h3>{name}</h3>
            <h5>{bio}</h5>
          </div>
        ))}
      </div>
    )
  }
  ```

  - 8. We already have some styles defined in the conference.module.css, which has been imported in this file already for you.

  We can provide the `infoContainer style` to the `div` tag here and the `titleText style` to the header with the speaker's `name` and the `descriptionText` style to the `bio`.

  These styles are going to make our conference speakers page look pretty, and we'll see that in just a minute.

  ```jsx
  import styles from '../conference.module.css'

  async function fetchSpeakers() {
    const response = await fetch(
      'https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json'
    )

    const data = await response.json()
    return data
  }

  export default async function Page() {
    const data = await fetchSpeakers()

    return (
      <div className={styles.parentContainer}>
        <div className='self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100'>
          Last Rendered: {new Date().toLocaleTimeString()}
        </div>
        <h1>Welcome to Globomantics Speakers</h1>
        {data.speakers.map(({ id, name, bio }) => (
          <div key={id} className={styles.infoContainer}>
            <h3 className={styles.titleText}>{name}</h3>
            <h5 className={styles.descText}>{bio}</h5>
          </div>
        ))}
      </div>
    )
  }
  ```

  All right, so that's all we have here, and let's go ahead and hit Save.

  We've written all the code to fetch the speakers data via static data fetching.

  - 9. Now to demonstrate with the last rendered timestamp, I've deployed this code on the Vercel host instead of running it locally.

  We'll learn more about deployments later in this course, but for now, let's directly go into the deployed URL.

  Now let's get into our Globomantics app here, and we can navigate to the conference page. I'm going to click on View Speakers. There you go.

  Notice here that all the speaker information is now displayed below with the big list of speakers, their names, and their bio being populated after the API call.

  - 10. Now how do we know that this page follows static site generation?

  Keep an eye out here at the last rendered timestamp. You see the timestamp is not going to get updated even if we refresh this page many times.

  Notice that the timestamp remains the same. And I can keep hitting Refresh, but the speakers data is going to be fetched from the cache, and a real server request will not be made.

  You can navigate between the pages, come back to the speakers page, and you see how quickly this page loads with all of the speaker information, but the last rendered timestamp still remains the same. Isn't that cool?

  - Make sure to use this kind of static data fetching on pages that do not change in your website and leverage this huge performance boost while rendering your page.

- > Demo: Static Data Fetching with Revalidation

  In this clip, let's see how to perform the revalidation with static data fetching, otherwise known as incremental static regeneration.

  - 1. We're back to our speakers page, and we have to modify our fetch call here to allow for revalidation.

  - To revalidate cached data at a specific interval, you can use the next: revalidate option within the fetch method. The default unit is seconds.
  - I'm going to add 20 seconds here as the interval for our demo purposes.

  ```jsx
  import styles from '../conference.module.css'

  async function fetchSpeakers() {
    const response = await fetch(
      'https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json'
      {next: {revalidate: 20}}
    )

    const data = await response.json()
    return data
  }

  export default async function Page() {
    const data = await fetchSpeakers()

    return (
      <div className={styles.parentContainer}>
        <div className='self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100'>
          Last Rendered: {new Date().toLocaleTimeString()}
        </div>
        <h1>Welcome to Globomantics Speakers</h1>
        {data.speakers.map(({ id, name, bio }) => (
          <div key={id} className={styles.infoContainer}>
            <h3 className={styles.titleText}>{name}</h3>
            <h5 className={styles.descText}>{bio}</h5>
          </div>
        ))}
      </div>
    )
  }
  ```

  We hit Save, and I'm going to redeploy our application.

  - 2. Here is what will happen with this revalidation property being set.

  When a request is made to the route that was statically rendered at build time, it will initially show the cached data.

  Any requests to the route after the initial request and before 20 seconds are also going to be cached and instantaneous.

  After the 20‑second window that we've given, the next request will show the cached data, and Next will immediately trigger a regeneration of the data in the background.

  Once the route generates successfully, Next.js will invalidate the cache and show the updated route.

  If the background regeneration fails for some reason, the old data would still be unaltered.

  - 3. To validate this, we're going to hit Refresh on our conference speakers page here and verify the last rendered timestamp.

  It does not revalidate until it hits the 20‑second interval.

  Past 20 seconds, the request is made to the API, and the new data is fetched again, and the cache is updated. Isn't that neat?

  Now after the 20‑second mark, you can see here that the timestamp is updated.

  This revalidation and static fetching is very useful if you have data that is going to change within a given page.

- > Deme: Dynamic Data Fetching ( otherwise known as the server‑side rendering.)

  So far, we saw the static data fetching methods within the Globomantics app. Next, let's demo the dynamic data fetching, otherwise known as the server‑side rendering.

  - 1. For this, let's fetch the conference sessions information within the `sessions page`.

  - We'll be using the fetch API just like we did within the speakers page, so let's copy paste that here within the sessions page.

  - 2. We'll be calling a different URL here, so I'm replacing it with the URL that fetches the conference sessions page. All right,

  - 3. now we want this to perform dynamic data fetching. To do that, we'll add the `cache` property within the fetch method and provide the value `no‑store`.

  This will ensure that there is no cache and the request is refreshed upon every request.

  Next.js fetches the resource from the remote server on every request without looking in the cache, and it will not update the cache with the downloaded resource.

  ```jsx
  import styles from '../conference.module.css'

  async function fetchSessions() {
    const response = await fetch(
      'https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/sessions.json',
      { cache: 'no-store' }
    )

    const data = await response.json()
    return data
  }

  export default async function Page() {
    return (
      <div className={styles.parentContainer}>
        <div className='self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100'>
          Last Rendered: {new Date().toLocaleTimeString()}
        </div>
        <h1>Welcome to Globomantics Sessions</h1>
        {/*
        {data.sessions.map(
          ({ id, title, description, room, day, track, speakers }) => (
            <div key={id} className={styles.infoContainer}>
              <h3 className={styles.titleText}>{title}</h3>
              {speakers &&
                speakers.map(({ name }) => (
                  <h3 className={styles.titleText}>Speaker: {name}</h3>
                ))}
              <h5 className={styles.descText}>{description}</h5>
              <h4 className={styles.infoText}>Room: {room}</h4>
              <h4 className={styles.infoText}>Day: {day}</h4>
              <h4 className={styles.infoText}>Track: {track}</h4>
            </div>
          )
                )}*/}
      </div>
    )
  }
  ```

  - 4. now we call the getSessions function from the Page component here.

  - Notice I already have the last rendered timestamp to be rendered on the page for our demo purposes.

  - I also have some code commented here, which you can uncomment. It basically parses through the sessions.json just like we did within the speakers page and renders each session.

  I'm going to render the session's title, description, room, day, track, and the speaker's name.

  - The styles for this is already wired up and can be found in the conference.module.css file. All right,

  ```jsx
  import styles from '../conference.module.css'

  // Dynamic Data Fetching or Server Side Rendering
  async function fetchSessions() {
    const response = await fetch(
      'https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/sessions.json',
      { cache: 'no-store' }
    )

    const data = await response.json()
    return data
  }

  export default async function Page() {
    const data = await fetchSessions()
    return (
      <div className={styles.parentContainer}>
        <div className='self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100'>
          Last Rendered: {new Date().toLocaleTimeString()}
        </div>
        <h1>Welcome to Globomantics Sessions</h1>

        {data.sessions.map(({ id, title, description, room, day, track, speakers }) => (
          <div key={id} className={styles.infoContainer}>
            <h3 className={styles.titleText}>{title}</h3>
            {speakers &&
              speakers.map(({ name }) => <h3 className={styles.titleText}>Speaker: {name}</h3>)}
            <h5 className={styles.descText}>{description}</h5>
            <h4 className={styles.infoText}>Room: {room}</h4>
            <h4 className={styles.infoText}>Day: {day}</h4>
            <h4 className={styles.infoText}>Track: {track}</h4>
          </div>
        ))}
      </div>
    )
  }
  ```

  we have everything we need now. The main idea of this clip was to take a look at how we can do dynamic data fetching using the no‑store option that has been given to the cache. All right,

  let's go ahead, hit Save, and redeploy our application. Here is the redeployed version of our app running.

  Let's navigate to the conference page and the sessions page. Wow, there you see it. This is the sessions page that displays all the conference session information that we wanted.

  Now, keep an eye out at the last rendered timestamp here. Because this is dynamically fetched data, we'll see that every time we hit Refresh on this page, the timestamp is going to get updated.

  You can see that every few seconds we hit Refresh, and you see a new timestamp showing up.

  This means that there is no cache and that on every fetch call, the request is being refetched. All right,

  with that, we've seen all the techniques of data fetching in Next.js. Remember that with Next.js, you can pick and choose the data fetching method on a page‑by‑page basis like we've seen in this demo.

  Summary

  In this module, we've learned about the client and server components that come with Next.js 13. We then looked at the different data fetching approaches using static site generation, static site generation with revalidation, also known as incremental static regeneration. And finally, we also learned about server‑side rendering. In the next module, we're going to be exploring dynamic routing in Next.js.

## Exploring Dynamic Routing in Next.js

- > Defining Dynamic Routes in Next.js

  - When you don't know the exact route or segment name ahead of time, you can create routes for dynamic data using what is called as dynamic routes or dynamic segments in Next.js.

  - 1. Now what if you wanted to create specific URLs for each speaker?

  Something like /conference/speaker/123. An ID here is dynamic and depends on each speaker. That is where dynamic segments come in play.

  - 2. You can create a dynamic segment by wrapping a folder's name within square brackets.

  ```
  app/conference/speakers/[slug]
  ```

  For example, you see a slug folder name within the speakers folder, and this slug within square brackets represents a dynamic route.

  Within this folder, you'll create a page.js file, which will render the component for speakers/speaker-id.

  ```
  app/conference/speakers/[slug]/page.jsx
  ```

  After rendering, they'll translate into routes such as /speakers/speaker1, /speakers/speaker2, and so on.

  Here is a code snippet that shows a dynamic segment for a speakers page.

  ```jsx app/conference/speakers/[slug]/page.jsx
  export default function Page({ params }) {
    return <div>My speaker Page</div>
  }
  ```

  The page.js will be placed within the slug folder within the speakers folder as seen here.

  This represents an individual speakers page.

  For dynamic segments, params are passed as props. These can be leveraged by Page, Layout, and Head components.

- > Demo: Dynamic Routing

  - In this clip, let's add a dynamic segment within the Globomantics app for a specific Speakers page.

  We're within our IDE here, and make sure to check out the before folder for this exercise before you get started.

  - 1. Within our speakers folder here, go ahead and create a new folder. Let's call it [slug] within square brackets.

  ```
  app/conference/speakers/[slug]
  ```

  - The square brackets here is necessary and tells Next.js that this is a dynamic route.

  - You can call it slug, id, or any name you want for your folder structure.

  - 2. Within the slug folder, go ahead and create a page.jsx file.

  ```
  app/conference/speakers/[slug]/page.jsx
  ```

  - 3. Now within our `Speakers page`, we're going to `add a link` that will take you to the specific speaker's page when the `name` is clicked.

  - Notice here that the `href` that we're going to pass is `/conference/speakers/${name}`.

  - Now the name here is dynamic and depends on what speaker's name that the user is going to click.

  (also, added the styles)

  I'm going to have all of this wrap within the Next.js Link component, and it should work once we have everything wired up.

  ```jsx
  import styles from '../conference.module.css'
  import Link from 'next/link'

  async function fetchSpeakers() {
    const response = await fetch(
      'https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json'
    )
    {
      next: {
        revalidate: 20
      }
    }

    const data = await response.json()
    return data
  }

  export default async function Page() {
    const data = await fetchSpeakers()

    return (
      <div className={styles.parentContainer}>
        <div className='self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100'>
          Last Rendered: {new Date().toLocaleTimeString()}
        </div>
        <h1>Welcome to Globomantics Speakers</h1>
        {data.speakers.map(({ id, name, bio }) => (
          <div key={id} className={styles.infoContainer}>
            <Link className={styles.bgLinks} href={'/conference/speakers/${name}'}>
              <h3 className={styles.titleText}>{name}</h3>
            </Link>
            <h5 className={styles.descText}>{bio}</h5>
          </div>
        ))}
      </div>
    )
  }
  ```

  - 4. now within the /slug/page.js file, we'll create a Page component.

  The Page component will have the params as a prop, and this contains the name of the slug.

  ```jsx [slug]/page.jsx
  export default async function Page({ params }) {}
  ```

  - 5. I'm going to define a function called fetchSpeakerInfo and pass this params property to it.

  ```jsx [slug]/page.jsx
  function fetchSpeakerInfo(params) {
    // API call, DB Query, fetch from the app
  }

  export default async function Page({ params }) {}
  ```

  Now this function could be a fetch call to an API to fetch a specific speaker's information based on their ID or name. It could be a database query or simply retrieving something stored within the application. This depends on what you have going on within your web application.

  - 6. For the sake of simplicity in our case, the speakerJson, which was fetched by the Speakers page, is imported within this file.

  ```jsx [slug]/page.jsx
  import { speakerJson } from '../page'

  function fetchSpeakerInfo(params) {
    // API call, DB Query, fetch from the app
  }

  export default async function Page({ params }) {}
  ```

  - 7. We're going to use the `array.find` function to find the speaker whose name matches with the name we're provided from the slug.

  The slug here is passed to us via the params property.

  In here, we'll check if the speaker.name equals the params.slug. And if it is true, then we found the correct speaker that the user has clicked on.

  ```jsx
  import { speakerJson } from '../page'

  function fetchSpeakerInfo(params) {
    // API call, DB Query, fetch from the app

    const speakerInfo = speakerJson.speakers?.find((speaker) => speaker.name == params.slug)
  }

  export default async function Page({ params }) {}
  ```

  - 8. We're going to `return` the speakerInfo with the specific speakers object, and then we're done.

  ```jsx
  import { speakerJson } from '../page'

  function fetchSpeakerInfo(params) {
    // API call, DB Query, fetch from the app

    const speakerInfo = speakerJson.speakers?.find((speaker) => speaker.name == params.slug)

    return speakerInfo
  }

  export default async function Page({ params }) {}
  ```

  - 9. Now let's go ahead and call this function within the `Page` component and pass to it the params.

  - This is how the fetchSpeakerInfo is going to contain the params.slug, which contains the name of the specific speaker.

  ```jsx
  import { speakerJson } from '../page'

  function fetchSpeakerInfo(params) {
    // API call, DB Query, fetch from the app

    const speakerInfo = speakerJson.speakers?.find((speaker) => speaker.name == params.slug)

    return speakerInfo
  }

  export default async function Page({ params }) {
    const speakerInfo = fetchSpeakerInfo(params)
  }
  ```

  - 10. Now we're all set, and we can simply destructure the speakerInfo and store the name, bio, ID, and sessions within a const.

  ```jsx
  import { speakerJson } from '../page'

  function fetchSpeakerInfo(params) {
    // API call, DB Query, fetch from the app

    const speakerInfo = speakerJson.speakers?.find((speaker) => speaker.name == params.slug)

    return speakerInfo
  }

  export default async function Page({ params }) {
    const speakerInfo = fetchSpeakerInfo(params)
  }
  ```

  - 11. Within the Page component now, I can render the name, bio, and the sessions that will be presented by this specific speaker.

  he styling is already done and comes from the conference.module.css so we don't have to worry about it.

  ```jsx
  import { speakerJson } from '../page'
  import styles from '../../conference.module.css'

  function fetchSpeakerInfo(params) {
    // API call, DB Query, fetch from the app

    const speakerInfo = speakerJson.speakers?.find((speaker) => speaker.name == params.slug)

    return speakerInfo
  }

  export default async function Page({ params }) {
    const speakerInfo = fetchSpeakerInfo(params)

    const { id, name, bio, sessions } = speakerInfo

    return (
      <div key={id} className={styles.infoContainer}>
        <h3 className={styles.titleText}>{name}</h3>
        <h5 className={styles.descText}>About: {bio}</h5>
        {sessions &&
          sessions.map(({ name, id }) => (
            <div key={id}>
              <h5 className={styles.descText}>Session: {name}</h5>
            </div>
          ))}
      </div>
    )
  }
  ```

  To recap what we're rendering here within the Page component is simply going to be the name of the speaker, their bio, and the sessions that they're presenting, and we've got all of this information about the specific speaker using the params.slug.

  All right, we're all set. Let's go ahead and hit Save and see how this looks within our application.

  We're within our Globomantics app. Let's go ahead and click on Conference and View Speakers.

  The View Speakers page loads and has tons of speakers and their information. It contains a huge list.

  Now we can click on any of the individual speaker's name now. I'm going to go ahead and click on Reed Watts, and there you go.

  You see a new page show up with the new URL here. The URL you see is /conference/speakers/ReedWatts, and this this is a dynamically generated URL. It contains Reed Watts' name, bio, and the session information about the session they're presenting. Pretty cool, isn't it?

  Now I can go back to the Speakers page and click on a different speaker. Let's go ahead and pick Rebecca Silva this time, and there you go.

  The URL is updated to /speakers/RebeccaSilva and contains her name, bio, and session. You get the idea, right?

  This is how you set up dynamic routes within Next.js, and you can create as many dynamic routes as you want within your Next.js application.

### Generating Static Params

- > Generate static parameters is a server function that defines the list of route segment parameters.

  It is statically generated at build time instead of on demand at request time.

  This works out if you know what routes are expected within the application.

  These will not be called again during revalidation or incremental static regeneration.

- > Let's take a look at the Speakers page again here.

  - Within the slug folder's page.js file where the dynamic route has been defined, you can also define the generateStaticParams function.

  ```jsx
  export async function generateStaticParams() {
    const speakers = await getSpeakers()

    return speakers.map(() => ({
      slug: speaker.slug,
    }))
  }
  ```

  This could potentially be a hardcoded list of static params for this route, or it could be fetched from a URL.

  n this example, a call is made to fetch all speakers via a getSpeakers call.

  This call returns a list of speaker names, and each name is then mapped to the slug property as shown.

  This ensures that the routes are statically generated at build time and improves the performance of the dynamic routes.

- > summary

  In this module, we've learned about dynamic routing, otherwise known as dynamic segments in Next.js. In the next module, we'll learn about deploying your Next.js app and migrating existing apps to Next.js. See you in the next module.

## Deploying Your Next.js App and Migrating Existing Apps to Next.js

- > Next.js Deployment on Vercel

  Vercel deployment is the fastest way to deploy your Next.js. app with zero configuration.

  Vercel deployment can automatically detect Next.js and run the next build command.

  This next build command generates an optimized version of the app for production.

- > The optimizations and features that you receive from Vercel deployment include the following.

  - Persisting cached assets across deployment if it's unchanged.

  - Immutable deployments with a unique URL for every commit.

  - Pages are automatically statically optimized if possible.

  - Assets such as JavaScript, CSS, images, and fonts are compressed and served from a global edge network.

  - API routes are automatically optimized as isolated serverless functions.

  - You can also pay and opt in for additional features from Vercel, such as performance monitoring via Next.js Analytics.

- > Now, how do we deploy an app on Vercel?

  The steps are super easy.

  - 1. In the deployment docs page here, click on the link that will allow you to deploy your existing Next.js app.

  - 2. You'll simply provide your repository name here and click on Create.

  This process takes a few minutes, and the deployment is ready. Isn't it super simple?

- > I've already set up deployment for the repo that contains this course's code on my GitHub repository,

  and here is my GitHub repository, Next.js‑Fundamentals, and it's deployed on Vercel.

  You can see the deployment link here, and this shows you the latest deployment from the main branch.

  ```
  https://next-js-fundamentals-lac.vercel.app
  ```

  I can click on it, and you'll see the Globomantics app open up, and it shows the current state of the app from the main branch.

  If you add pull requests to your repository, each pull request also gets deployed with a unique URL.

  You can see here that there is a pull request waiting in the pipeline, and there is a deployment link that comes with it as well.

  Clicking on this view deployment will take me to the URL running the code from this specific branch. Neat. I find this very useful since all the heavy lifting is done by Vercel, and the deployments behind are all automatic.

- > Other Deployment Options

  - In the Next.js official docs, you can find other deployment options if you do not want to use Vercel.

  - You can self‑host your Next.js app using Node.js or Docker, and the steps to do so are provided here within this documentation.

  - In addition, you could also use other services, such as AWS Copilot, Google Cloud Run, and so on. Documentation on each of these services are provided here, and you can explore them if you would like.

- > Migrating to Next.js

  - Next.js is designed for gradual adoption.

  You would typically start small and incrementally add more pages.

  - The best strategy is to configure a subpath that points to the Next.js app.

  You can configure a server or proxy such that a new URL from a specific subpath is pointing to your new Next.js application.

  - An alternative would be to create micro‑frontends, which deploy using monorepos and subdomains.

  this allows subdomains to adopt new applications incrementally.

  - Here are some references if you're moving from a Create React App to Next.js.

  This documentation will provide you a step‑by‑step walkthrough on converting a Create React App to Next.js.

  In addition, if you're using React Router, here is a migration guide that helps you migrate from React Router to the inbuilt Next.js file‑routing method.

  This is also a step‑by‑step walkthrough that will help you understand how to transition from a library like React Router to file system‑based routing that comes with Next.js.

- > Module Summary

  All right folks, we've reached the end of this course.

  Let's do a quick recap of what we've learned in this Next.js fundamentals course.

  - First, we learned about what Next.js is and got introduced to the Next.js concepts.
  - Next, we set up our demo Globomantics application and learned about pages, layout, file‑based system routing, and so on in Next.js.
  - In the next module, we learned about images, font, and optimizations that come along with it.
  - We then learned about styling components
  - in Next.js. In the second half of the course, we learned about data rendering and fetching techniques in Next.js.
  - We then learned about dynamic routing
  - and finally learned about how to deploy your Next.js application.
  -
  - Here is the GitHub repository for this course, which contains the entire code that was used to build the Globomantics application. It also contains the code per module in different branches. Finally, I'd like to say thank you for watching this course, and I hope you enjoyed it and learned something interesting and new. You can reach out to me on Twitter @AdhithiRavi if you would like to follow my work. And good luck on your learning journe, and congratulations on finishing this course.

  https://youtu.be/QUlWAKx2ZH8
