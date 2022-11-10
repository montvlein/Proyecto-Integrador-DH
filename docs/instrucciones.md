# Como levantar el entorno y correr el proyecto de forma local

## PARA EL FRONTEND

### 1. Requisitos

- `node`
- `npm`

### 2. Instalación

```
    # 1. Moverse al directorio client
    cd client

    # 2. Instalar dependencias
    npm install
```

### 3. Configuración
```
    # Hot Reload -> Cada cambio que hagas, va a levantar el servidor para ver los cambios.
    # 3. Para correr en desarrollo
    npm run dev

    # 4. Cuando finalizas el desarrollo, para construir
    npm run build
```
___

## PARA EL BACKEND

### 1. Requisitos

- `openjdk-18`
- `maven`

### 2. Ejecución

```
    # 1. Moverse al directorio del proyecto
    cd DigitalBooking

    # 2. compilar para desarrollo
    ./mvnw clean package

    # 2.1 compilar para produccion
    # agregar el tag -P
    ./mvnw clean install -Pprod

    # 3. correr
    java -jar DigitalBookin/target/DigitalBooking-0.0.1-SNAPSHOT.jar
```
