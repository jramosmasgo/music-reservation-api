# Music Reservation

Una node js api para poder crear reservas de salas de ensayo.

## PASOS

**Note**  
`La aplicación fue construida a partir de tecnologias como node js, mysql, sequelize, typescript.`

## Descargar y construir el proyecto en su maquina local.

### 1) Clone el repositorio y instale los node packages.

```
//en su equipo
git clone https://github.com/jramosmasgo/music-reservation-api
cd music-reservation-api
npm install
```

### 2) Una vez descargado el repositorio asegurese de tener instalado en su maquina local la base de datos de mysql y configure el archivo .env

**Note**  
Si no desea instalar `mysql` puede usar una conexión remota como Planet Scale.

```
// Configuración de variables de entorno
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_DRIVER=
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
JWT_AUTH_SECRET=
EMAIL_SENDER=
EMAIL_PASSWORD=
URL_FRONTEND=
DB_HOST_TEST=
DB_USER_TEST=
DB_PASSWORD_TEST=
```

### 3) Una vez configurado lo previamente mencionado ejecutar el siguiente comando para poder correr la aplicacion

```

npm run dev
```

Abra su navegador preferido y acceda a la siguiente ruta :  
`http://localhost:4000`

### 4) Ya verificado que la aplicacion este funcionando correctamente ya podemos probar los endpoints.

**Nota:**  
Para poder comprobar los endpoints es nesesario instalar un cliente rest como [POSTMAN](https://www.postman.com/downloads/)
