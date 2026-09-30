# Protección de Datos Sensibles
En este repositorio se excluyen ciertos tipos de archivos mediando el fichero .gitignore por las siguientes razones:
- **Credenciales y ficheros de configuración local (.env, config.json):** Contienen claves secretas, contraseñas de bases de datos o tokens de API. Subirlos públicamente o al control de versiones expone el sistema a brechas de seguridad y accesos no autorizados
- **Ficheros temporales del sistema (.log, .DS_Store):** No aportan valor al código fuente, ocupan espacio innecesario y pueden generar conflictos innecesarios entre diferentes sistemas operativos.
- **Binarios y compilaciones (bin/, dist/, /*.exe):** Son archivos generados automáticamente a partir del código fuente. Deben compilarse de manera local en el entorno de cada desarrollador para garantizar que siempre se trabaja con versiones actualizadas y limpias.
