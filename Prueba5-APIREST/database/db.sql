CREATE DATABASE crudnode;

use crudnode;

CREATE TABLE usuario(
    dni VARCHAR(8) PRIMARY KEY,
    nombre VARCHAR(15) NOT NULL,
    apellidos VARCHAR(15) NOT NULL,
    edad INT(3)
);

SHOW TABLES;

describe usuario;

INSERT INTO usuario(dni, nombre, apellidos, edad) VALUES ('12345678', 'dani', 'guau', 23);
INSERT INTO usuario(dni, nombre, apellidos, edad) VALUES ('87654321', 'alvaro', 'fef', 32);
INSERT INTO usuario(dni, nombre, apellidos, edad) VALUES ('32345355', 'pepe', 'gonzalez', 1);