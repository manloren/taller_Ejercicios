CREATE DATABASE productos;   -- creamos la bd

USE productos;

-- CREAR TABLA
CREATE TABLE inventario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR (50),
    precio INT,
    cantidad INT
    );