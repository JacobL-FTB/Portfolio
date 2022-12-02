Portfolio Stuff:

<!--
NOTES-------------------
MORGAN / CORS / NODEMON = DEV TOOLS

REACT / REACT-DOM / REACT-ROUTER = FRONT END SERVER TOOLS

EXPRESS / BCRYPT = BACK END SERVER TOOLS

Database = "portfolio"
________________________
FRONT-END:
    Minimal UseState in the front end:
    (Should be kept all in the main index.js)

    Use UseEffect for API calls in the front end:
    (All fetch request should be kept in a seperate file)
_________________________
BACK-END:
    UseState to hold data used in the front end.

    Router should be used to get data out of the database
    (all functions can be imported to the file.)

    Send the right data back when called using a fetch request.
_________________________
DATABASE:
    Store the data seeded into it and return the correct data when neccessary.
    (Data gets returned using client queries)

    Add new data when it is called.
    (also done using client queries)
_________________________
-------------------------
-->
<!--
* package.json {
    * Install {
        React √
        React-Dom √
        React-Router √
        React-Scripts √
        Morgan √
        Cors √
        Nodemon √
        Express √
        PG (postgreSQL) √
        DOTENV √
        BCRYPT √
    }
    * Fix Scripts √
}
* Database {
    * Create Database in PSQL √
    * Create Seed.js √
    * Seed db with dummy data v
    * Test db √
    * Create Projects.js for db functions √
}
* Back-End {
    * Create API {
        * Index.js √
        * Projects.js √
        * Test API with PostMan √
    }
}
* Front-End {
    *Create Public {
        * Index.html √
        * Style.css √
    }
    * Create React Server {
        * Styling {
            Projects.css
            Home.css
            NavBar.css
            About.css
            Skills.css
        }
        * NavBar.js √
        * Index.js √
        * Projects.js √
        * Home.js √
        * About.js √
        * Skills.js
    }
}
-->
