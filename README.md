# Auction House

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Description

I have made following assumptions/decisions:

- The Search and Filter work on the client side after the data is fetched once from the server component. These are only available on the homepage though they search and return all the items instead of just the top 3
- Clicking "View More" loads all the items of that category
- There is no error handling
- If the search/filter does not yield a result, there is no feedback for the user
- The coding approach is a partial implementation of the Onion architecture. In that, it is only using the concept of use-cases. The components can fetch or compute information only via use-cases. Also, a use-case is the only thing that can make api calls. One use-case and call other use-cases. Use-cases cannot import components. Ideally, use-cases should be injected in order to make full use of this approach (this project does not have that feature).

## Limitations

This solution does not contain the following features:

1. Debouncing
2. Price range filters
3. Dark mode
4. ~~Live auction countdown~~

## Potential improvements

1. Implement search and filter as server side components
2. Better naming - the current naming can be confusing
3. Image optimisation - load images from a CDN
4. Responsiveness - the current solution is partly responsive
5. Provide a way to reset search/filters. This is not implemented in the current solution
6. Implmenent error handling, Not found page etc.
7. Add tests
8. Improve types
9. Use Next.js caching

## Additional features

1. Live auction countdown<br>
Caveat: As the auction items from the API have ends dates in the past, this feature has a hard-coded current date set to July 1st, 2025 in order to successfully show the countdown for live auctions. With each refresh, the current date will be reset and the countdown will start from the begining.

## Screenshots

1. Mobile view - home page
   ![home page](./Pasted%20image%2020251013211400.png)

2. Mobile view with filters
   ![with filters](Pasted%20image%2020251013211536.png)

3. Mobile view - Item detail
   ![item detail](Pasted%20image%2020251013211705.png)

4. iPad Pro - home page
   ![iPad home page](Pasted%20image%2020251013211816.png)

