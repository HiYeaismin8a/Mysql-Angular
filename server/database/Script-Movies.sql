/* JAZMIN OCHOA BENITEZ.
Siempre en inglés.
Nombres de las tablas siempre MAYÚSCULAS y en plural.
Nombres de los campos siempre minúscula y en singular. */

/*DROP DATABASE moviesBD;*/
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

SELECT * FROM director;
SELECT * FROM Movies;
CREATE VIEW vistaDirector AS SELECT name_Director AS "NOMBRE DEL DIRECTOR" , age AS "EDAD", active_ AS "Activo (1= Sí o 0= No)" FROM director;
CREATE VIEW vistaMovies AS SELECT PKMovies AS "ID", name_movies AS "NOMBRE DE LA PELÍCULA", gender AS "GÉNERO", duration AS "DURACIÓN", FK_idDirector AS "DIRECTOR" FROM movies;
/*
DROP VIEW vistaDirector;
DROP VIEW vistaMovies;
DROP TABLE movies ;
DROP TABLE director ;
DROP VIEW vistaDirector;
DROP VIEW vistaMovies;
*/
SELECT * FROM vistaMovies;
SELECT * FROM vistaDirector;

INSERT INTO director (name_Director,age,active_)
VALUES("San Juan Ortencio Federal","35","1");

INSERT INTO movies(name_movies, gender, duration,FK_idDirector)
VALUES("EL INFRAMUNDO DE TU ALMA","TERROR","1:20:00",1);
