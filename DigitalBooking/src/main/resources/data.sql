INSERT INTO categoria(titulo, descripcion, url_img) VALUES('Compacto', 'Toyota Etios o similar', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Categorias/Compacto.png');
INSERT INTO categoria(titulo, descripcion, url_img) VALUES('Sedan' , 'Chevrolet Cruze o similar', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Categorias/Sedan.png');
INSERT INTO categoria(titulo, descripcion, url_img) VALUES('SUV', 'Volkswagen Taos o similar', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Categorias/SUV.png');
INSERT INTO categoria(titulo, descripcion, url_img) VALUES('Lujo','Mercedes-Benz Serie E o similar','https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Categorias/Lujo.png');
INSERT INTO categoria(titulo, descripcion, url_img) VALUES('Pickup','Toyota Hilux o similar','https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Categorias/Pickup.png');
INSERT INTO categoria(titulo, descripcion, url_img) VALUES('Van','Toyota Hiace o similar','https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Categorias/Van.png');

INSERT INTO ciudad (NOMBRE, PAIS, PROVINCIA) VALUES('Ezeiza','Argentina','Buenos Aires');
INSERT INTO ciudad (NOMBRE, PAIS, PROVINCIA) VALUES('Posadas','Argentina','Misiones');
INSERT INTO ciudad (NOMBRE, PAIS, PROVINCIA) VALUES('Merlo','Argentina','San Luis');
INSERT INTO ciudad (NOMBRE, PAIS, PROVINCIA) VALUES('San Juan','Argentina','San Juan');
INSERT INTO ciudad (NOMBRE, PAIS, PROVINCIA) VALUES('Paraná','Argentina','Entre Ríos');
INSERT INTO ciudad (NOMBRE, PAIS, PROVINCIA) VALUES('El Calafate','Argentina','Santa Cruz');
INSERT INTO ciudad (NOMBRE, PAIS, PROVINCIA) VALUES('Viedma','Argentina','Río Negro');
INSERT INTO ciudad (NOMBRE, PAIS, PROVINCIA) VALUES('Comodoro Rivadavia','Argentina','Chubut');
INSERT INTO ciudad (NOMBRE, PAIS, PROVINCIA) VALUES('Río Cuarto','Argentina','Córdoba');
INSERT INTO ciudad (NOMBRE, PAIS, PROVINCIA) VALUES('San Rafael','Argentina','Mendoza');
INSERT INTO ciudad (NOMBRE, PAIS, PROVINCIA) VALUES('Chilecito','Argentina','La Rioja');
INSERT INTO ciudad (NOMBRE, PAIS, PROVINCIA) VALUES('Tinogasta','Argentina','Catamarca');
INSERT INTO ciudad (NOMBRE, PAIS, PROVINCIA) VALUES('Santa Rosa','Argentina','La Pampa');
INSERT INTO ciudad (NOMBRE, PAIS, PROVINCIA) VALUES('Río Hondo','Argentina','Santiago del Estero');
INSERT INTO ciudad (NOMBRE, PAIS, PROVINCIA) VALUES('Goya','Argentina','Corrientes');
INSERT INTO ciudad (NOMBRE, PAIS, PROVINCIA) VALUES('Rosario','Argentina','Santa Fe');
INSERT INTO ciudad (NOMBRE, PAIS, PROVINCIA) VALUES('San Miguel de Tucumán','Argentina','Tucumán');
INSERT INTO ciudad (NOMBRE, PAIS, PROVINCIA) VALUES('San Martín de los Andes','Argentina','Neuquén');
INSERT INTO ciudad (NOMBRE, PAIS, PROVINCIA) VALUES('Cafayate','Argentina','Salta');
INSERT INTO ciudad (NOMBRE, PAIS, PROVINCIA) VALUES('Resistencia','Argentina','Chaco');
INSERT INTO ciudad (NOMBRE, PAIS, PROVINCIA) VALUES('Las Lomitas','Argentina','Formosa');
INSERT INTO ciudad (NOMBRE, PAIS, PROVINCIA) VALUES('Perico','Argentina','Jujuy');
INSERT INTO ciudad (NOMBRE, PAIS, PROVINCIA) VALUES('Buenos Aires','Argentina','Ciudad Autónoma de Buenos Aires');
INSERT INTO ciudad (NOMBRE, PAIS, PROVINCIA) VALUES('Ushuaia','Argentina','Tierra del Fuego, Antártida e Islas del Atlántico Sur');

INSERT INTO caracteristica(NOMBRE, DESCRIPCION) VALUES('caja', 'Manual');
INSERT INTO caracteristica(NOMBRE, DESCRIPCION) VALUES('caja', 'Automático');
INSERT INTO caracteristica(NOMBRE, DESCRIPCION) VALUES('consumo', '9.0 lts/km');
INSERT INTO caracteristica(NOMBRE, DESCRIPCION) VALUES('consumo', '9.1 lts/km');
INSERT INTO caracteristica(NOMBRE, DESCRIPCION) VALUES('consumo', '12.0 lts/km');
INSERT INTO caracteristica(NOMBRE, DESCRIPCION) VALUES('consumo', '15.1 lts/km');
INSERT INTO caracteristica(NOMBRE, DESCRIPCION) VALUES('consumo', '17.0 lts/km');
INSERT INTO caracteristica(NOMBRE, DESCRIPCION) VALUES('consumo', '17.5 lts/km');
INSERT INTO caracteristica(NOMBRE, DESCRIPCION) VALUES('consumo', '28.5 lts/km');
INSERT INTO caracteristica(NOMBRE, DESCRIPCION) VALUES('consumo', '29.5 lts/km');
INSERT INTO caracteristica(NOMBRE, DESCRIPCION) VALUES('consumo', '30.0 lts/km');
INSERT INTO caracteristica(NOMBRE, DESCRIPCION) VALUES('consumo', '32.5 lts/km');
INSERT INTO caracteristica(NOMBRE, DESCRIPCION) VALUES('puertas', 2);
INSERT INTO caracteristica(NOMBRE, DESCRIPCION) VALUES('puertas', 3);
INSERT INTO caracteristica(NOMBRE, DESCRIPCION) VALUES('puertas', 4);
INSERT INTO caracteristica(NOMBRE, DESCRIPCION) VALUES('puertas', 5);
INSERT INTO caracteristica(NOMBRE, DESCRIPCION) VALUES('motor', 'Eléctrico');
INSERT INTO caracteristica(NOMBRE, DESCRIPCION) VALUES('motor', 'Hibrido');
INSERT INTO caracteristica(NOMBRE, DESCRIPCION) VALUES('motor', 'Combustion');
INSERT INTO caracteristica(NOMBRE, DESCRIPCION) VALUES('modelo', '2010');
INSERT INTO caracteristica(NOMBRE, DESCRIPCION) VALUES('modelo', '2015');
INSERT INTO caracteristica(NOMBRE, DESCRIPCION) VALUES('modelo', '2017');
INSERT INTO caracteristica(NOMBRE, DESCRIPCION) VALUES('modelo', '2020');
INSERT INTO caracteristica(NOMBRE, DESCRIPCION) VALUES('modelo', '2021');
INSERT INTO caracteristica(NOMBRE, DESCRIPCION) VALUES('modelo', '2022');

-- 1. Chevrolet Onix (Categoria 1 COMPACTO / Caract 1)
INSERT INTO auto (NOMBRE, DESCRIPCION, DISPONIBLE_PARA_ALQUILAR, PRECIO, CATEGORIA_ID, CIUDAD_ID) VALUES ('Chevrolet Onix','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque iure veniam provident cum nobis nesciunt, illo praesentium, doloremque rem qui sint, quam mollitia? Tempora, sed vitae! Voluptate, laborum fugiat.', TRUE, 5000, 1, 1);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Modelo Chevrolet Onix', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Compacto_Onix/Compacto_Onix-01.jpg', 1);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Modelo Chevrolet Onix', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Compacto_Onix/Compacto_Onix-02.jpg', 1);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Modelo Chevrolet Onix', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Compacto_Onix/Compacto_Onix-03.jpg', 1);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Modelo Chevrolet Onix', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Compacto_Onix/Compacto_Onix-04.jpg', 1);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (1, 1);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (1, 16);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (1, 18);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (1, 4);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (1, 23);

-- 2. Toyota Etios (Categoria 1 COMPACTO / Caract 2)
INSERT INTO auto (NOMBRE, DESCRIPCION, DISPONIBLE_PARA_ALQUILAR, PRECIO, CATEGORIA_ID, CIUDAD_ID) VALUES ('Toyota Etios','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque iure veniam provident cum nobis nesciunt, illo praesentium, doloremque rem qui sint, quam mollitia? Tempora, sed vitae! Voluptate, laborum fugiat.', TRUE, 6000, 1, 2);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Modelo Toyota Etios', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Compacto_toyotaEtios/Compacto_Etios-01.jpg', 2);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Modelo Toyota Etios', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Compacto_toyotaEtios/Compacto_Etios-02.jpg', 2);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Modelo Toyota Etios', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Compacto_toyotaEtios/Compacto_Etios-03.jpg', 2);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Modelo Toyota Etios', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Compacto_toyotaEtios/Compacto_Etios-04.jpg', 2);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (2, 2);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (2, 16);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (2, 19);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (2, 3);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (2, 24);

-- 3. Chevrolet Cruze (Categoria 2 SEDAN / Caract 3)
INSERT INTO auto (NOMBRE, DESCRIPCION, DISPONIBLE_PARA_ALQUILAR, PRECIO, CATEGORIA_ID, CIUDAD_ID) VALUES ('Chevrolet Cruze','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque iure veniam provident cum nobis nesciunt, illo praesentium, doloremque rem qui sint, quam mollitia? Tempora, sed vitae! Voluptate, laborum fugiat.', TRUE, 7000, 2, 1);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Modelo Chevrolet Cruze', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Sedan_Cruze/Sedan_Cruze-01.jpg', 3);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Modelo Chevrolet Cruze', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Sedan_Cruze/Sedan_Cruze-02.jpg', 3);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Modelo Chevrolet Cruze', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Sedan_Cruze/Sedan_Cruze-03.jpg', 3);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Modelo Chevrolet Cruze', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Sedan_Cruze/Sedan_Cruze-04.jpg', 3);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (3, 2);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (3, 15);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (3, 19);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (3, 5);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (3, 25);

-- 4. Toyota Corolla (Categoria 2 SEDAN / Caract 4)
INSERT INTO auto (NOMBRE, DESCRIPCION, DISPONIBLE_PARA_ALQUILAR, PRECIO, CATEGORIA_ID, CIUDAD_ID) VALUES ('Toyota Corolla','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque iure veniam provident cum nobis nesciunt, illo praesentium, doloremque rem qui sint, quam mollitia? Tempora, sed vitae! Voluptate, laborum fugiat.', TRUE, 7500, 2, 4);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Toyota Corolla', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Sedan_Corolla/Sedan_Corolla-01.jpg', 4);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Toyota Corolla', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Sedan_Corolla/Sedan_Corolla-02.jpg', 4);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Toyota Corolla', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Sedan_Corolla/Sedan_Corolla-03.jpg', 4);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Toyota Corolla', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Sedan_Corolla/Sedan_Corolla-04.jpg', 4);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (4, 1);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (4, 15);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (4, 19);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (4, 6);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (4, 20);

-- 5. Corolla Cross (Categoria 3 SUV / Caract 5)
INSERT INTO auto (NOMBRE, DESCRIPCION, DISPONIBLE_PARA_ALQUILAR, PRECIO, CATEGORIA_ID, CIUDAD_ID) VALUES ('Corolla Cross','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque iure veniam provident cum nobis nesciunt, illo praesentium, doloremque rem qui sint, quam mollitia? Tempora, sed vitae! Voluptate, laborum fugiat.', TRUE, 8000, 3, 1);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Corolla Cross', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/SUV_CorollaCross/SUV_ToyotaCross-01.jpg', 5);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Corolla Cross', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/SUV_CorollaCross/SUV_ToyotaCross-02.jpg', 5);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Corolla Cross', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/SUV_CorollaCross/SUV_ToyotaCross-03.jpg', 5);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Corolla Cross', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/SUV_CorollaCross/SUV_ToyotaCross-04.jpg', 5);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (5, 2);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (5, 16);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (5, 17);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (5, 5);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (5, 23);

-- 6. Volkswagen Taos (Categoria 3 SUV / Caract 6)
INSERT INTO auto (NOMBRE, DESCRIPCION, DISPONIBLE_PARA_ALQUILAR, PRECIO, CATEGORIA_ID, CIUDAD_ID) VALUES ('Volkswagen Taos','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque iure veniam provident cum nobis nesciunt, illo praesentium, doloremque rem qui sint, quam mollitia? Tempora, sed vitae! Voluptate, laborum fugiat.', TRUE, 8000, 3, 2);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Volkswagen Taos', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/SUV_Taos/SUV_Taos-01.jpg', 6);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Volkswagen Taos', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/SUV_Taos/SUV_Taos-02.jpg', 6);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Volkswagen Taos', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/SUV_Taos/SUV_Taos-03.jpg', 6);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Volkswagen Taos', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/SUV_Taos/SUV_Taos-04.jpg', 6);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (6, 1);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (6, 16);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (6, 19);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (6, 6);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (6, 22);

-- 7. Mercedes Serie E (Categoria 4 LUJO / Caract 7)
INSERT INTO auto (NOMBRE, DESCRIPCION, DISPONIBLE_PARA_ALQUILAR, PRECIO, CATEGORIA_ID, CIUDAD_ID) VALUES ('Mercedes-Benz Clase E','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque iure veniam provident cum nobis nesciunt, illo praesentium, doloremque rem qui sint, quam mollitia? Tempora, sed vitae! Voluptate, laborum fugiat.', TRUE, 9500, 4, 2);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Mercedes-Benz Clase E', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Lujo_Mercedes/Lujo_Mercedes-01.jpg', 7);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Mercedes-Benz Clase E', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Lujo_Mercedes/Lujo_Mercedes-02.jpg', 7);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Mercedes-Benz Clase E', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Lujo_Mercedes/Lujo_Mercedes-03.jpg', 7);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Mercedes-Benz Clase E', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Lujo_Mercedes/Lujo_Mercedes-04.jpg', 7);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (7, 2);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (7, 15);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (7, 17);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (7, 7);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (7, 25);

-- 8. BMW (Categoria 4 LUJO / Caract 8)
INSERT INTO auto (NOMBRE, DESCRIPCION, DISPONIBLE_PARA_ALQUILAR, PRECIO, CATEGORIA_ID, CIUDAD_ID) VALUES ('BMW Serie E','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque iure veniam provident cum nobis nesciunt, illo praesentium, doloremque rem qui sint, quam mollitia? Tempora, sed vitae! Voluptate, laborum fugiat.', TRUE, 9500, 4, 3);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('BMW Serie E', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Lujo_BMW/LUJO_BMW-01.jpg', 8);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('BMW Serie E', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Lujo_BMW/LUJO_BMW-02.jpg', 8);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('BMW Serie E', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Lujo_BMW/LUJO_BMW-03.jpg', 8);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('BMW Serie E', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Lujo_BMW/LUJO_BMW-04.jpg', 8);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (8, 2);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (8, 15);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (8, 19);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (8, 8);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (8, 25);

-- 9. Toyota Hillux (Categoria 5 PICKUP / Caract 9)
INSERT INTO auto (NOMBRE, DESCRIPCION, DISPONIBLE_PARA_ALQUILAR, PRECIO, CATEGORIA_ID, CIUDAD_ID) VALUES ('Toyota Hillux','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque iure veniam provident cum nobis nesciunt, illo praesentium, doloremque rem qui sint, quam mollitia? Tempora, sed vitae! Voluptate, laborum fugiat.', TRUE, 11000, 5, 3);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Toyota Hillux', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Pickup_Hillux/Pickup_Hillux-01.jpg', 9);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Toyota Hillux', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Pickup_Hillux/Pickup_Hillux-02.jpg', 9);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Toyota Hillux', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Pickup_Hillux/Pickup_Hillux-03.jpg', 9);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Toyota Hillux', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Pickup_Hillux/Pickup_Hillux-04.jpg', 9);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (9, 1);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (9, 15);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (9, 19);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (9, 11);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (9, 23);

-- 10. Nissan Frontier (Categoria 5 PICKUP / Caract 10)
INSERT INTO auto (NOMBRE, DESCRIPCION, DISPONIBLE_PARA_ALQUILAR, PRECIO, CATEGORIA_ID, CIUDAD_ID) VALUES ('Nissan Frontier','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque iure veniam provident cum nobis nesciunt, illo praesentium, doloremque rem qui sint, quam mollitia? Tempora, sed vitae! Voluptate, laborum fugiat.', TRUE, 11000, 5, 1);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Nissan Frontier', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Pickup_NissanFront/Pickup_Frontier-01.jpg', 10);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Nissan Frontier', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Pickup_NissanFront/Pickup_Frontier-02.jpg', 10);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Nissan Frontier', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Pickup_NissanFront/Pickup_Frontier-03.jpg', 10);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Nissan Frontier', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Pickup_NissanFront/Pickup_Frontier-04.jpg', 10);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (10, 2);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (10, 15);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (10, 19);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (10, 12);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (10, 23);

-- 11. Hyundai H1 (Categoria 6 VAN / Caract 11)
INSERT INTO auto (NOMBRE, DESCRIPCION, DISPONIBLE_PARA_ALQUILAR, PRECIO, CATEGORIA_ID, CIUDAD_ID) VALUES ('Hyundai H1','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque iure veniam provident cum nobis nesciunt, illo praesentium, doloremque rem qui sint, quam mollitia? Tempora, sed vitae! Voluptate, laborum fugiat.', TRUE, 13000, 6, 3);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Hyundai H1', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/VAN_Hyundai/VAN_Hyundai-01.jpg', 11);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Hyundai H1', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/VAN_Hyundai/VAN_Hyundai-02.jpg', 11);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Hyundai H1', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/VAN_Hyundai/VAN_Hyundai-03.jpg', 11);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Hyundai H1', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/VAN_Hyundai/VAN_Hyundai-04.jpg', 11);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (11, 1);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (11, 14);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (11, 19);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (11, 9);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (11, 20);

-- 12. Toyota Hiace (Categoria 6 VAN / Caract 12)
INSERT INTO auto (NOMBRE, DESCRIPCION, DISPONIBLE_PARA_ALQUILAR, PRECIO, CATEGORIA_ID, CIUDAD_ID) VALUES ('Toyota Hiace','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque iure veniam provident cum nobis nesciunt, illo praesentium, doloremque rem qui sint, quam mollitia? Tempora, sed vitae! Voluptate, laborum fugiat.', TRUE, 14000, 6, 1);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Toyota Hiace', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/VAN_Toyota/VAN_Toyota-01.jpg', 12);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Toyota Hiace', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/VAN_Toyota/VAN_Toyota-02.jpg', 12);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Toyota Hiace', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/VAN_Toyota/VAN_Toyota-03.jpg', 12);
INSERT INTO imagen(TITULO, URL, AUTO_ID) VALUES ('Toyota Hiace', 'https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/VAN_Toyota/VAN_Toyota-04.jpg', 12);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (12, 1);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (12, 14);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (12, 19);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (12, 10);
INSERT INTO caracteristica_auto(auto_id, caracteristica_id) VALUES (12, 21);

INSERT INTO rol(nombre) VALUES ('administrador');
INSERT INTO rol(nombre) VALUES ('usuario');

INSERT INTO usuario(NOMBRE, APELLIDO, EMAIL, CONTRASENIA, CIUDAD, VERIFICADO, ROL_ID) VALUES( 'Micaela', 'Barbero', 'capa2020@mail.com', '1234', 'que ciudad?', false, 1);
INSERT INTO usuario(NOMBRE, APELLIDO, EMAIL, CONTRASENIA, CIUDAD, VERIFICADO, ROL_ID) VALUES( 'Fabricio', 'Montivero', 'monti@mail.com', '1234', 'que ciudad?', true, 2);

INSERT INTO reserva( FECHA_FINAL_RESERVA, FECHA_INICIAL_RESERVA, HORA_COMIENZO_RESERVA, AUTO_ID, USUARIO_ID ) VALUES ('2022-12-25', '2022-12-20', '2022-12-20 17:00:00', 1, 2);