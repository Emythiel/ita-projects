// Library Imports
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 3000;

// MySQL Database Credentials
// Remember to set password
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "INSERT_PASSWORD_HERE",
    database: "ita1_pokemon"
});

// Get list of all pokemon
// Or get details for specific pokemon with pokedex or name query
app.get('/pokemon', (req, res)=> {
    const queryPokedex = req.query.pokedex;
    const queryName = req.query.name;
    // Check if pokedex or name was entered as query
    if (queryPokedex || queryName) {
        connection.query('SELECT * FROM pokemon WHERE pokedex_number = ? OR `name` = ?',
            [queryPokedex, queryName],
            (error, results) => {
                // Check if there's results. If not, pokemon doesn't exist, send 404
                if (results.length > 0) {
                    res.send(results)
                } else {
                    res.sendStatus(404);
                }
            });
    } else {
        connection.query('SELECT * FROM pokemon', (error, results)=> {
            res.send(results);
        });
    }
});

// Get list of all towns
app.get('/towns', (req, res) => {
    connection.query('SELECT `name` FROM towns', (error, results) => {
        res.send(results);
    });
})

// Get list of all gyms
app.get('/gyms', (req, res) => {
    connection.query(
        'SELECT gyms.`name` AS gym_name, trainers.`name` AS gym_leader, pokemon_type ' +
        'FROM gyms ' +
        'INNER JOIN trainers ON trainers.trainer_id = gyms.leader',
        (error, results) => {
            res.send(results);
        });
})

// Get list of all trainers, with their home town and gym
// If trainer name is added as parameter, show the trainer and their pokemon team
// Eg. if /trainers?name=brock, show brock and which pokemon he has in his team
app.get('/trainers', (req, res) => {
    const queryParameter = req.query.name;
    // Check if name was entered as query
    if (queryParameter) {
        connection.query(
            'SELECT trainers.`name` AS trainer, towns.`name` AS home_town, gyms.`name` AS gym ' +
            'FROM trainers ' +
            'LEFT JOIN gyms ON gyms.gym_id = trainers.gym_id ' +
            'LEFT JOIN towns ON towns.town_id = trainers.home_town ' +
            'WHERE trainers.`name` = ?',
            [queryParameter],
            (errorTrainer, resultsTrainer) => {
                // Check if there's results, if not trainer doesn't exist, send 404
                if (resultsTrainer.length > 0) {
                    connection.query(
                        'SELECT pokemon.`name`, pokemon.primary_type, teams.`level` ' +
                        'FROM teams ' +
                        'INNER JOIN trainers ON trainers.trainer_id = teams.trainer_id ' +
                        'INNER JOIN pokemon ON pokemon.pokedex_number = teams.pokedex_number ' +
                        'WHERE trainers.`name` = ?',
                        [queryParameter],
                        (errorTeam, resultsTeam) => {
                            // Save trainer to variable, add team as key with array object values
                            const resultObject = resultsTrainer;
                            resultObject[0].team = resultsTeam;
                            res.send(resultObject);
                        }
                    );
                } else {
                    res.sendStatus(404);
                }
            }
        );
    } else {
        connection.query(
            'SELECT trainers.`name` AS trainer, towns.`name` AS home_town, gyms.`name` AS gym ' +
            'FROM trainers ' +
            'LEFT JOIN gyms ON gyms.gym_id = trainers.gym_id ' +
            'LEFT JOIN towns ON towns.town_id = trainers.home_town',
            (error, results) => {
                res.send(results);
            }
        );
    }

})


// Return 404 if none of above requests matched
app.get('*', (req, res) => {
    res.sendStatus(404);
});

// Listen on port
app.listen(port, () =>{
    console.log(`Application is now running on port ${port}`);
});

app.use((req, res, next) => {
    res.status(404).send("404 - I can't find that!");
});