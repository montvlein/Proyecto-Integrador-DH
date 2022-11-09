INSERT INTO categoria(titulo, descripcion, url_img) VALUES('Compacto', 'Toyota Etios o similar', 'https://i.ibb.co/wzczdV5/Compacto.png');
INSERT INTO categoria(titulo, descripcion, url_img) VALUES('Sedan' , 'Chevrolet Cruze o similar', 'https://i.ibb.co/syYZcGg/Sedan.png');
INSERT INTO categoria(titulo, descripcion, url_img) VALUES('SUV', 'Volkswagen Taos o similar', 'https://i.ibb.co/P1pyrTS/SUV.png');
INSERT INTO categoria(titulo, descripcion, url_img) VALUES('Lujo','Mercedes-Benz Serie E o similar','https://i.ibb.co/BcgYwnh/Lujo.png');
INSERT INTO categoria(titulo, descripcion, url_img) VALUES('Pickup','Toyota Hilux o similar','https://i.ibb.co/0rMj8S9/Pickup.png');
INSERT INTO categoria(titulo, descripcion, url_img) VALUES('Van','Toyota Hiace o similar','https://i.ibb.co/QJhsV3V/Van.png');


INSERT INTO CIUDAD (PAIS, PROVINCIA) VALUES('ARGENTINA','Buenos Aires');
INSERT INTO CIUDAD (PAIS, PROVINCIA) VALUES('ARGENTINA','Misiones');
INSERT INTO CIUDAD (PAIS, PROVINCIA) VALUES('ARGENTINA','San Luis');
INSERT INTO CIUDAD (PAIS, PROVINCIA) VALUES('ARGENTINA','San Juan');
INSERT INTO CIUDAD (PAIS, PROVINCIA) VALUES('ARGENTINA','Entre Ríos');
INSERT INTO CIUDAD (PAIS, PROVINCIA) VALUES('ARGENTINA','Santa Cruz');
INSERT INTO CIUDAD (PAIS, PROVINCIA) VALUES('ARGENTINA','Río Negro');
INSERT INTO CIUDAD (PAIS, PROVINCIA) VALUES('ARGENTINA','Chubut');
INSERT INTO CIUDAD (PAIS, PROVINCIA) VALUES('ARGENTINA','Córdoba');
INSERT INTO CIUDAD (PAIS, PROVINCIA) VALUES('ARGENTINA','Mendoza');
INSERT INTO CIUDAD (PAIS, PROVINCIA) VALUES('ARGENTINA','La Rioja');
INSERT INTO CIUDAD (PAIS, PROVINCIA) VALUES('ARGENTINA','Catamarca');
INSERT INTO CIUDAD (PAIS, PROVINCIA) VALUES('ARGENTINA','La Pampa');
INSERT INTO CIUDAD (PAIS, PROVINCIA) VALUES('ARGENTINA','Santiago del Estero');
INSERT INTO CIUDAD (PAIS, PROVINCIA) VALUES('ARGENTINA','Corrientes');
INSERT INTO CIUDAD (PAIS, PROVINCIA) VALUES('ARGENTINA','Santa Fe');
INSERT INTO CIUDAD (PAIS, PROVINCIA) VALUES('ARGENTINA','Tucumán');
INSERT INTO CIUDAD (PAIS, PROVINCIA) VALUES('ARGENTINA','Neuquén');
INSERT INTO CIUDAD (PAIS, PROVINCIA) VALUES('ARGENTINA','Salta');
INSERT INTO CIUDAD (PAIS, PROVINCIA) VALUES('ARGENTINA','Chaco');
INSERT INTO CIUDAD (PAIS, PROVINCIA) VALUES('ARGENTINA','Formosa');
INSERT INTO CIUDAD (PAIS, PROVINCIA) VALUES('ARGENTINA','Jujuy');
INSERT INTO CIUDAD (PAIS, PROVINCIA) VALUES('ARGENTINA','Ciudad Autónoma de Buenos Aires');
INSERT INTO CIUDAD (PAIS, PROVINCIA) VALUES('ARGENTINA','Tierra del Fuego, Antártida e Islas del Atlántico Sur');

INSERT INTO CARACTERISTICA(CAJA, CONSUMO, MODELO, PUERTAS, TIPO_MOTOR) VALUES('MANUAL', 'NAFTA', '2009', 4, 'AUTOMATICO' );
INSERT INTO AUTO (DESCRIPCION, DISPONIBLE_PARA_ALQUILAR, PRECIO, CARACTERISTICA_ID, CATEGORIA_ID, CIUDAD_ID) VALUES ('DESCRIPCION PRUEBA', TRUE, 5, 1, 1, 1);

INSERT INTO IMAGEN(TITULO, URL) VALUES('modelo_1', 'https://cdn-images.motor.es/image/m/720w/fotos-noticias/2021/08/chevrolet-onix-ventas-sudamerica-202180513-1629451453_3.jpg');
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES('modelo_2', 'https://www.megautos.com/wp-content/uploads/2019/09/chevrolet-onix-plus-premier-2020-delantera.jpg', 1);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES('modelo_3', 'https://www.autoweb.com.ar/wp-content/uploads/2020/09/Onix-RS-17.jpg',1);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES('modelo_4', 'https://www.autoweb.com.ar/wp-content/uploads/2021/12/chevrolet-joy-1024x682.jpeg',1);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES('modelo_5', 'https://cdn.motor1.com/images/mgl/02LE2/s3/critica-chevrolet-onix-1-0-turbo-ltz-automatico.jpg',1);
INSERT INTO IMAGEN(TITULO, URL, AUTO_ID) VALUES('modelo_6', 'https://autotest.com.ar/wp-content/uploads/2021/03/CHEVROLET-ONIX-RS-1.jpg',1);

