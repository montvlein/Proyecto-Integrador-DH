INSERT INTO categoria(titulo, descripcion, url_img) VALUES('Compacto', 'Toyota Etios o similar', 'https://i.ibb.co/wzczdV5/Compacto.png');
INSERT INTO categoria(titulo, descripcion, url_img) VALUES('Sedan' , 'Chevrolet Cruze o similar', 'https://i.ibb.co/syYZcGg/Sedan.png');
INSERT INTO categoria(titulo, descripcion, url_img) VALUES('SUV', 'Volkswagen Taos o similar', 'https://i.ibb.co/P1pyrTS/SUV.png');
INSERT INTO categoria(titulo, descripcion, url_img) VALUES('Lujo','Mercedes-Benz Serie E o similar','https://i.ibb.co/BcgYwnh/Lujo.png');
INSERT INTO categoria(titulo, descripcion, url_img) VALUES('Pickup','Toyota Hilux o similar','https://i.ibb.co/0rMj8S9/Pickup.png');
INSERT INTO categoria(titulo, descripcion, url_img) VALUES('Van','Toyota Hiace o similar','https://i.ibb.co/QJhsV3V/Van.png');

INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('EZEIZA','ARGENTINA','Buenos Aires');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('POSADAS','ARGENTINA','Misiones');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('MERLO','ARGENTINA','San Luis');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('SAN JUAN','ARGENTINA','San Juan');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('PARANÁ','ARGENTINA','Entre Ríos');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('EL CALAFATE','ARGENTINA','Santa Cruz');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('VIEDMA','ARGENTINA','Río Negro');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('COMODORO RIVADAVIA','ARGENTINA','Chubut');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('RÍO CUARTO','ARGENTINA','Córdoba');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('SAN RAFAEL','ARGENTINA','Mendoza');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('CHILECITO','ARGENTINA','La Rioja');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('TINOGASTA','ARGENTINA','Catamarca');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('SANTA ROSA','ARGENTINA','La Pampa');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('RIO HONDO','ARGENTINA','Santiago del Estero');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('GOYA','ARGENTINA','Corrientes');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('ROSARIO','ARGENTINA','Santa Fe');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('SAN MIGUEL DE TUCUMÁN','ARGENTINA','Tucumán');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('SAN MARTÍN DE LOS ANDES','ARGENTINA','Neuquén');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('CAFAYATE','ARGENTINA','Salta');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('RESISTENCIA','ARGENTINA','Chaco');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('LAS LOMITAS','ARGENTINA','Formosa');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('PERICO','ARGENTINA','Jujuy');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('BUENOS AIRES','ARGENTINA','Ciudad Autónoma de Buenos Aires');
INSERT INTO CIUDAD (NOMBRE, PAIS, PROVINCIA) VALUES('USHUAIA','ARGENTINA','Tierra del Fuego, Antártida e Islas del Atlántico Sur');


INSERT INTO CARACTERISTICA(CAJA, CONSUMO, MODELO, PUERTAS, TIPO_MOTOR) VALUES('Manual', '9.1 lts/km', '2020', 4, 'Hibrido' );
INSERT INTO AUTO (NOMBRE, DESCRIPCION, DISPONIBLE_PARA_ALQUILAR, PRECIO, CARACTERISTICA_ID, CATEGORIA_ID, CIUDAD_ID) VALUES ('Chevrolet Onix','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque iure veniam provident cum nobis nesciunt, illo praesentium, doloremque rem qui sint, quam mollitia? Tempora, sed vitae! Voluptate, laborum fugiat.', TRUE, 5, 1, 1, 1);

INSERT INTO IMAGEN(TITULO, URL) VALUES('modelo_1', 'https://cdn-images.motor.es/image/m/720w/fotos-noticias/2021/08/chevrolet-onix-ventas-sudamerica-202180513-1629451453_3.jpg');
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES('modelo_2', 'https://www.megautos.com/wp-content/uploads/2019/09/chevrolet-onix-plus-premier-2020-delantera.jpg', 1);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES('modelo_3', 'https://www.autoweb.com.ar/wp-content/uploads/2020/09/Onix-RS-17.jpg',1);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES('modelo_4', 'https://www.autoweb.com.ar/wp-content/uploads/2021/12/chevrolet-joy-1024x682.jpeg',1);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES('modelo_5', 'https://cdn.motor1.com/images/mgl/02LE2/s3/critica-chevrolet-onix-1-0-turbo-ltz-automatico.jpg',1);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES('modelo_6', 'https://autotest.com.ar/wp-content/uploads/2021/03/CHEVROLET-ONIX-RS-1.jpg',1);

