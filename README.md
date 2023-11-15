# LoL Info

LoLSkill brings you real-time updates on League of Legends champions and toplists from servers worldwide. Dive into the rich world of LoL with our blog section, featuring community contributions and expert insights. Stay connected with live streams, and never miss a play with our intuitive home page.


# Setup

To run this app locally, first install **node v20.8.1** and **yarn**, and then you've got two options to run the app:

### Pages Router
To run the Pages Router version run the following commands after unziping the project's folder:

    git checkout main
    yarn clean-dev
Then open `localhost:3000` on your preferred browser

### App Router
To run the App Router version run the following commands after unziping the project's folder:

    git checkout app-router
    yarn clean-dev
Then open `localhost:3000` on your preferred browser


# Additional notes

- Pages Router version have slightly less proven features than App Router since, for this exercise, we focused on exploring App Router and new Next 14 Features.
- You can also go to [LoL Info](https://lol-info-app.vercel.app/). this is pointing to a mirror GitHub Repo on the App's Router branch `app-router`
- Most of the Http requests won´t work for you locally until you add `NEXT_PUBLIC_API_KEY` on your `.env` file as a [Riot Games API Key](https://developer.riotgames.com/)