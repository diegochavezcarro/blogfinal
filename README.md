# blogfinal
tour of heroes final mas blog de libro "angular na pratica" (https://github.com/danielschmitz/angular2-codigos) 

# pruebas en postman:

1. Acceder a http://localhost:3001/api/users usando metodo GET. No se va a permitir el acceso.
2. Crear usuario accediendo a la misma url usando POST, dentro de Body utilizar "raw", JSON y agregar:
**{
	"name": "Nombre Apellido",
	"login": "nombreusuario",
	"password":"password"
}**
3. Login con http://localhost:3001/api/login usando metodo POST y agregar:
** {
	"login": "nombreusuario",
	"password":"password"
} **
4. Utilizando el token dado anteriormente repetir el paso 1 agregandolo dentro de un header llamado x-access-token
Se deberia poder acceder correctamente
