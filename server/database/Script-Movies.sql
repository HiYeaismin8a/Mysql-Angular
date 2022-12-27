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
