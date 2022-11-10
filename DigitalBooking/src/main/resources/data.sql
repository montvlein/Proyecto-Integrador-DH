INSERT INTO categoria(titulo, descripcion, url_img) VALUES('Compacto', 'Toyota Etios o similar', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Categorias/Compacto.png');
INSERT INTO categoria(titulo, descripcion, url_img) VALUES('Sedan' , 'Chevrolet Cruze o similar', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Categorias/Sedan.png');
INSERT INTO categoria(titulo, descripcion, url_img) VALUES('SUV', 'Volkswagen Taos o similar', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Categorias/SUV.png');
INSERT INTO categoria(titulo, descripcion, url_img) VALUES('Lujo','Mercedes-Benz Serie E o similar','https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Categorias/Lujo.png');
INSERT INTO categoria(titulo, descripcion, url_img) VALUES('Pickup','Toyota Hilux o similar','https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Categorias/Pickup.png');
INSERT INTO categoria(titulo, descripcion, url_img) VALUES('Van','Toyota Hiace o similar','https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Categorias/Van.png');

INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('Ezeiza','Argentina','Buenos Aires');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('Posadas','Argentina','Misiones');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('Merlo','Argentina','San Luis');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('San Juan','Argentina','San Juan');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('Paraná','Argentina','Entre Ríos');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('El Calafate','Argentina','Santa Cruz');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('Viedma','Argentina','Río Negro');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('Comodoro Rivadavia','Argentina','Chubut');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('Río Cuarto','Argentina','Córdoba');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('San Rafael','Argentina','Mendoza');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('Chilecito','Argentina','La Rioja');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('Tinogasta','Argentina','Catamarca');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('Santa Rosa','Argentina','La Pampa');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('Río Hondo','Argentina','Santiago del Estero');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('Goya','Argentina','Corrientes');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('Rosario','Argentina','Santa Fe');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('San Miguel de Tucumán','Argentina','Tucumán');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('San Martín de los Andes','Argentina','Neuquén');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('Cafayate','Argentina','Salta');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('Resistencia','Argentina','Chaco');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('Las Lomitas','Argentina','Formosa');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('Perico','Argentina','Jujuy');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('Buenos Aires','Argentina','Ciudad Autónoma de Buenos Aires');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('Ushuaia','Argentina','Tierra del Fuego, Antártida e Islas del Atlántico Sur');

-- Para Compacto 1 y 2
INSERT INTO CARACTERISTICA(CAJA, CONSUMO, MODELO, PUERTAS, TIPO_MOTOR) VALUES('Automático', '9.1 lts/km', '2020', 5, 'Hibrido' );
INSERT INTO CARACTERISTICA(CAJA, CONSUMO, MODELO, PUERTAS, TIPO_MOTOR) VALUES('Manual', '9.0 lts/km', '2021', 5, 'Gasolina' );

-- Para Sedan 3 y 4
INSERT INTO CARACTERISTICA(CAJA, CONSUMO, MODELO, PUERTAS, TIPO_MOTOR) VALUES('Automático', '12.1 lts/km', '2022', 4, 'Gasolina' );
INSERT INTO CARACTERISTICA(CAJA, CONSUMO, MODELO, PUERTAS, TIPO_MOTOR) VALUES('Manual', '15.1 lts/km', '2010', 4, 'Gasolina' );

-- Para SUV (5 y 6)
INSERT INTO CARACTERISTICA(CAJA, CONSUMO, MODELO, PUERTAS, TIPO_MOTOR) VALUES('Automático', '12.0 lts/km', '2019', 5, 'Eléctrico' );
INSERT INTO CARACTERISTICA(CAJA, CONSUMO, MODELO, PUERTAS, TIPO_MOTOR) VALUES('Manual', '15.1 lts/km', '2017', 5, 'Gasolina' );

-- Para Lujo (7 y 8)
INSERT INTO CARACTERISTICA(CAJA, CONSUMO, MODELO, PUERTAS, TIPO_MOTOR) VALUES('Automático', '17.0 lts/km', '2022', 4, 'Eléctrico' );
INSERT INTO CARACTERISTICA(CAJA, CONSUMO, MODELO, PUERTAS, TIPO_MOTOR) VALUES('Automático', '17.5 lts/km', '2022', 4, 'Gasolina' );

-- Para Pickup (9 y 10)
INSERT INTO CARACTERISTICA(CAJA, CONSUMO, MODELO, PUERTAS, TIPO_MOTOR) VALUES('Manual', '30.0 lts/km', '2020', 4, 'Gasolina' );
INSERT INTO CARACTERISTICA(CAJA, CONSUMO, MODELO, PUERTAS, TIPO_MOTOR) VALUES('Automático', '32.5 lts/km', '2019', 4, 'Gasolina' );

-- Para VAN (11 y 12)
INSERT INTO CARACTERISTICA(CAJA, CONSUMO, MODELO, PUERTAS, TIPO_MOTOR) VALUES('Manual', '28.5 lts/km', '2010', 3, 'Gasolina' );
INSERT INTO CARACTERISTICA(CAJA, CONSUMO, MODELO, PUERTAS, TIPO_MOTOR) VALUES('Manual', '29.5 lts/km', '2015', 3, 'Gasolina' );

--1. Chevrolet Onix (Categoria 1 COMPACTO / Caract 1)
INSERT INTO AUTO (NOMBRE, DESCRIPCION, DISPONIBLE_PARA_ALQUILAR, PRECIO, CARACTERISTICA_ID, CATEGORIA_ID, CIUDAD_ID) VALUES ('Chevrolet Onix','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque iure veniam provident cum nobis nesciunt, illo praesentium, doloremque rem qui sint, quam mollitia? Tempora, sed vitae! Voluptate, laborum fugiat.', TRUE, 5000, 1, 1, 1);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Modelo Chevrolet Onix', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Compacto_Onix/Compacto_Onix-01.jpg', 1);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Modelo Chevrolet Onix', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Compacto_Onix/Compacto_Onix-02.jpg', 1);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Modelo Chevrolet Onix', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Compacto_Onix/Compacto_Onix-03.jpg', 1);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Modelo Chevrolet Onix', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Compacto_Onix/Compacto_Onix-04.jpg', 1);

--2. Toyota Etios (Categoria 1 COMPACTO / Caract 2)
INSERT INTO AUTO (NOMBRE, DESCRIPCION, DISPONIBLE_PARA_ALQUILAR, PRECIO, CARACTERISTICA_ID, CATEGORIA_ID, CIUDAD_ID) VALUES ('Toyota Etios','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque iure veniam provident cum nobis nesciunt, illo praesentium, doloremque rem qui sint, quam mollitia? Tempora, sed vitae! Voluptate, laborum fugiat.', TRUE, 6000, 2, 1, 2);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Modelo Toyota Etios', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Compacto_toyotaEtios/Compacto_Etios-01.jpg', 2);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Modelo Toyota Etios', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Compacto_toyotaEtios/Compacto_Etios-02.jpg', 2);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Modelo Toyota Etios', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Compacto_toyotaEtios/Compacto_Etios-03.jpg', 2);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Modelo Toyota Etios', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Compacto_toyotaEtios/Compacto_Etios-04.jpg', 2);

--3. Chevrolet Cruze (Categoria 2 SEDAN / Caract 3)
INSERT INTO AUTO (NOMBRE, DESCRIPCION, DISPONIBLE_PARA_ALQUILAR, PRECIO, CARACTERISTICA_ID, CATEGORIA_ID, CIUDAD_ID) VALUES ('Chevrolet Cruze','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque iure veniam provident cum nobis nesciunt, illo praesentium, doloremque rem qui sint, quam mollitia? Tempora, sed vitae! Voluptate, laborum fugiat.', TRUE, 7000, 3, 2, 1);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Modelo Chevrolet Cruze', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Sedan_Cruze/Sedan_Cruze-01.jpg', 3);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Modelo Chevrolet Cruze', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Sedan_Cruze/Sedan_Cruze-02.jpg', 3);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Modelo Chevrolet Cruze', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Sedan_Cruze/Sedan_Cruze-03.jpg', 3);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Modelo Chevrolet Cruze', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Sedan_Cruze/Sedan_Cruze-04.jpg', 3);

--4. Toyota Corolla (Categoria 2 SEDAN / Caract 4)
INSERT INTO AUTO (NOMBRE, DESCRIPCION, DISPONIBLE_PARA_ALQUILAR, PRECIO, CARACTERISTICA_ID, CATEGORIA_ID, CIUDAD_ID) VALUES ('Toyota Corolla','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque iure veniam provident cum nobis nesciunt, illo praesentium, doloremque rem qui sint, quam mollitia? Tempora, sed vitae! Voluptate, laborum fugiat.', TRUE, 7500, 4, 2, 4);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Toyota Corolla', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Sedan_Corolla/Sedan_Corolla-01.jpg', 4);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Toyota Corolla', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Sedan_Corolla/Sedan_Corolla-02.jpg', 4);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Toyota Corolla', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Sedan_Corolla/Sedan_Corolla-03.jpg', 4);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Toyota Corolla', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Sedan_Corolla/Sedan_Corolla-04.jpg', 4);

--5. Corolla Cross (Categoria 3 SUV / Caract 5)
INSERT INTO AUTO (NOMBRE, DESCRIPCION, DISPONIBLE_PARA_ALQUILAR, PRECIO, CARACTERISTICA_ID, CATEGORIA_ID, CIUDAD_ID) VALUES ('Corolla Cross','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque iure veniam provident cum nobis nesciunt, illo praesentium, doloremque rem qui sint, quam mollitia? Tempora, sed vitae! Voluptate, laborum fugiat.', TRUE, 8000, 5, 3, 1);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Corolla Cross', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/SUV_CorollaCross/SUV_ToyotaCross-01.jpg', 5);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Corolla Cross', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/SUV_CorollaCross/SUV_ToyotaCross-02.jpg', 5);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Corolla Cross', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/SUV_CorollaCross/SUV_ToyotaCross-03.jpg', 5);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Corolla Cross', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/SUV_CorollaCross/SUV_ToyotaCross-04.jpg', 5);

--6. Volkswagen Taos (Categoria 3 SUV / Caract 6)
INSERT INTO AUTO (NOMBRE, DESCRIPCION, DISPONIBLE_PARA_ALQUILAR, PRECIO, CARACTERISTICA_ID, CATEGORIA_ID, CIUDAD_ID) VALUES ('Volkswagen Taos','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque iure veniam provident cum nobis nesciunt, illo praesentium, doloremque rem qui sint, quam mollitia? Tempora, sed vitae! Voluptate, laborum fugiat.', TRUE, 8000, 6, 3, 2);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Volkswagen Taos', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/SUV_Taos/SUV_Taos-01.jpg', 6);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Volkswagen Taos', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/SUV_Taos/SUV_Taos-02.jpg', 6);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Volkswagen Taos', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/SUV_Taos/SUV_Taos-03.jpg', 6);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Volkswagen Taos', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/SUV_Taos/SUV_Taos-04.jpg', 6);

--7. Mercedes Serie E (Categoria 4 LUJO / Caract 7)
INSERT INTO AUTO (NOMBRE, DESCRIPCION, DISPONIBLE_PARA_ALQUILAR, PRECIO, CARACTERISTICA_ID, CATEGORIA_ID, CIUDAD_ID) VALUES ('Mercedes-Benz Clase E','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque iure veniam provident cum nobis nesciunt, illo praesentium, doloremque rem qui sint, quam mollitia? Tempora, sed vitae! Voluptate, laborum fugiat.', TRUE, 9500, 7, 4, 2);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Mercedes-Benz Clase E', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Lujo_Mercedes/Lujo_Mercedes-01.jpg', 7);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Mercedes-Benz Clase E', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Lujo_Mercedes/Lujo_Mercedes-02.jpg', 7);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Mercedes-Benz Clase E', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Lujo_Mercedes/Lujo_Mercedes-03.jpg', 7);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Mercedes-Benz Clase E', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Lujo_Mercedes/Lujo_Mercedes-04.jpg', 7);

--8. BMW (Categoria 4 LUJO / Caract 8)
INSERT INTO AUTO (NOMBRE, DESCRIPCION, DISPONIBLE_PARA_ALQUILAR, PRECIO, CARACTERISTICA_ID, CATEGORIA_ID, CIUDAD_ID) VALUES ('BMW Serie E','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque iure veniam provident cum nobis nesciunt, illo praesentium, doloremque rem qui sint, quam mollitia? Tempora, sed vitae! Voluptate, laborum fugiat.', TRUE, 9500, 8, 4, 3);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('BMW Serie E', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Lujo_BMW/LUJO_BMW-01.jpg', 8);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('BMW Serie E', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Lujo_BMW/LUJO_BMW-02.jpg', 8);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('BMW Serie E', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Lujo_BMW/LUJO_BMW-03.jpg', 8);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('BMW Serie E', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Lujo_BMW/LUJO_BMW-04.jpg', 8);

--9. Toyota Hillux (Categoria 5 PICKUP / Caract 9)
INSERT INTO AUTO (NOMBRE, DESCRIPCION, DISPONIBLE_PARA_ALQUILAR, PRECIO, CARACTERISTICA_ID, CATEGORIA_ID, CIUDAD_ID) VALUES ('Toyota Hillux','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque iure veniam provident cum nobis nesciunt, illo praesentium, doloremque rem qui sint, quam mollitia? Tempora, sed vitae! Voluptate, laborum fugiat.', TRUE, 11000, 9, 5, 3);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Toyota Hillux', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Pickup_Hillux/Pickup_Hillux-01.jpg', 9);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Toyota Hillux', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Pickup_Hillux/Pickup_Hillux-02.jpg', 9);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Toyota Hillux', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Pickup_Hillux/Pickup_Hillux-03.jpg', 9);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Toyota Hillux', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Pickup_Hillux/Pickup_Hillux-04.jpg', 9);

--10. Nissan Frontier (Categoria 5 PICKUP / Caract 10)
INSERT INTO AUTO (NOMBRE, DESCRIPCION, DISPONIBLE_PARA_ALQUILAR, PRECIO, CARACTERISTICA_ID, CATEGORIA_ID, CIUDAD_ID) VALUES ('Nissan Frontier','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque iure veniam provident cum nobis nesciunt, illo praesentium, doloremque rem qui sint, quam mollitia? Tempora, sed vitae! Voluptate, laborum fugiat.', TRUE, 11000, 10, 5, 1);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Nissan Frontier', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Pickup_NissanFront/Pickup_Frontier-01.jpg', 10);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Nissan Frontier', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Pickup_NissanFront/Pickup_Frontier-02.jpg', 10);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Nissan Frontier', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Pickup_NissanFront/Pickup_Frontier-03.jpg', 10);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Nissan Frontier', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Pickup_NissanFront/Pickup_Frontier-04.jpg', 10);

--11. Hyundai H1 (Categoria 6 VAN / Caract 11)
INSERT INTO AUTO (NOMBRE, DESCRIPCION, DISPONIBLE_PARA_ALQUILAR, PRECIO, CARACTERISTICA_ID, CATEGORIA_ID, CIUDAD_ID) VALUES ('Hyundai H1','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque iure veniam provident cum nobis nesciunt, illo praesentium, doloremque rem qui sint, quam mollitia? Tempora, sed vitae! Voluptate, laborum fugiat.', TRUE, 13000, 11, 6, 3);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Hyundai H1', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/VAN_Hyundai/VAN_Hyundai-01.jpg', 11);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Hyundai H1', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/VAN_Hyundai/VAN_Hyundai-02.jpg', 11);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Hyundai H1', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/VAN_Hyundai/VAN_Hyundai-03.jpg', 11);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Hyundai H1', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/VAN_Hyundai/VAN_Hyundai-04.jpg', 11);

--12. Toyota Hiace (Categoria 6 VAN / Caract 12)
INSERT INTO AUTO (NOMBRE, DESCRIPCION, DISPONIBLE_PARA_ALQUILAR, PRECIO, CARACTERISTICA_ID, CATEGORIA_ID, CIUDAD_ID) VALUES ('Toyota Hiace','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque iure veniam provident cum nobis nesciunt, illo praesentium, doloremque rem qui sint, quam mollitia? Tempora, sed vitae! Voluptate, laborum fugiat.', TRUE, 14000, 12, 6, 1);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Toyota Hiace', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/VAN_Toyota/VAN_Toyota-01.jpg', 12);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Toyota Hiace', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/VAN_Toyota/VAN_Toyota-02.jpg', 12);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Toyota Hiace', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/VAN_Toyota/VAN_Toyota-03.jpg', 12);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES ('Toyota Hiace', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/VAN_Toyota/VAN_Toyota-04.jpg', 12);

