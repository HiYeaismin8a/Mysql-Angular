/* JAZMIN OCHOA BENITEZ.
Siempre en inglés.
Nombres de las tablas siempre MAYÚSCULAS y en plural.
Nombres de los campos siempre minúscula y en singular. */

CREATE DATABASE moviesBD;
USE moviesBD;

CREATE TABLE Director(
	PK_idDirector INT NOT NULL AUTO_INCREMENT,
    name_Director VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    active_ bool NOT NULL,
    PRIMARY KEY(PK_idDirector)
);

CREATE TABLE Movies(
	PKMovies INT NOT NULL AUTO_INCREMENT,
	name_movies VARCHAR(100) NOT NULL,
    gender VARCHAR(50) NOT NULL,
    duration TIME NOT NULL,
    FK_idDirector INT,
    PRIMARY KEY (PKMovies),
    FOREIGN KEY(FK_idDirector) REFERENCES Director(PK_idDirector)
);
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'TBD2';


/*
SELECT * FROM director;
SELECT * FROM Movies;
SELECT * FROM Movies WHERE PKMovies =2;
SELECT * FROM vistaMovies;
SELECT * FROM vistaDirector;
SELECT name_movies, gender, duration, d.name_Director
FROM movies INNER JOIN director as d ON movies.FK_idDirector = d.PK_idDirector;

CREATE VIEW vistaDirector AS SELECT name_Director AS "NOMBRE DEL DIRECTOR" , age AS "EDAD", active_ AS "Activo (1= Sí o 0= No)" FROM director;
CREATE VIEW vistaMovies AS SELECT PKMovies AS "ID", name_movies AS "NOMBRE DE LA PELÍCULA", gender AS "GÉNERO", duration AS "DURACIÓN", FK_idDirector AS "DIRECTOR" FROM movies;

INSERT INTO director (name_Director,age,active_)
VALUES("San Juan Ortencio Federal","35","1");

INSERT INTO movies(name_movies, gender, duration,FK_idDirector)
VALUES("EL INFRAMUNDO DE TU ALMA","TERROR","1:20:00",1);

UPDATE moviesbd.movies SET FK_idDirector='7' WHERE PKMovies >=0;
*/

/*DROP DATABASE moviesBD;
DROP VIEW vistaDirector;
DROP VIEW vistaMovies;
DELETE FROM moviesbd.movies WHERE PKMovies = 1; 
DROP TABLE movies ;
DROP TABLE director ;
DROP VIEW vistaDirector;
DROP VIEW vistaMovies;
*/
