This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started


First, run the development server on the directory services/api :

```
npm install

npm start

```

...and then run the development server on the root directory:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Directories and files structure

/root
    \_ /lib
        \_apollo-client.ts: initialization file of the apollo client service
    \_ /services
        \_ /api: contains the graphql server configurations
        \_ /graphql: contains files for the graphql schema
    \_/src
        \_ /assets: contains static assets such as images, fonts, etc.
        \_ /components: contains all the components of the project
        \_ /pages: contains the different pages of the project
            \_ index.tsx: the project's root page 
        \_ /styles: contains the global style of the project

### Stacks

Next.js 12
Styled components
GraphQL



