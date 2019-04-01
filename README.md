Problem Statement: PlanOmatic currently has no way to search available listings in their system. The app will allow one to see virtual tours and pertinent listing data without going through third-party, ad-filled sites.

## Available Scripts

In the project directory, you can run:

### `npm install` - installs dependencies

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

ERD: https://drive.google.com/file/d/1zCRdGABPnj9zZ5Hd40PGBkPRuvbmkgZy/view?usp=sharing

Trello: https://trello.com/b/aDkhedWd/planosearch

Tech:
1. React
2. Express
3. Knex
4. PostreSQL
5. Predictive Search
6. CSS
7. Bootstrap
8. iFrame
9. React Router DOM

Color Palette:
1. #808080 (128, 128, 128)
2. #FF4500 (255, 69, 0)
3. #000000 (0, 0, 0)
4. #FFFFFF (255, 255, 255)

Wireframe: https://xd.adobe.com/view/688656e0-9f95-41ac-48d2-b79098a7f8a6-1eb7/

Routes:

1. GET (/)
      Brings in all virtual tours

2. POST (:id)
      "Favorite" listings

3. GET (:username)
      To log in

4. POST (:username)
      To signup

5. DELETE (:id)
      To unfavorite
