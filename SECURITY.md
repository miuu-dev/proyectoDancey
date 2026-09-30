# Política de Seguridad y Buenas Prácticas

## 1. Protección de Datos Sensibles
En este repositorio se excluyen ciertos tipos de archivos mediante el fichero `.gitignore` por las siguientes razones:
* **Credenciales y ficheros de configuración local (`.env`, `config.json`):** Contienen claves secretas, contraseñas o tokens de API que no deben exponerse públicamente para evitar brechas de seguridad.
* **Ficheros temporales y del sistema (`.log`, `.DS_Store`):** No aportan valor al código fuente y evitan ruido innecesario en el control de versiones.
* **Binarios y compilaciones (`bin/`, `dist/`, `*.exe`):** Se generan de forma local en cada entorno de desarrollo para asegurar que siempre se trabaja con compilaciones limpias y actualizadas.

---

## 2. Buenas Prácticas de Seguridad para la Documentación y el Código

Para garantizar la integridad y confidencialidad del proyecto, se siguen las siguientes medidas de seguridad en el flujo de trabajo de GitHub:

* **Uso de ramas protegidas (*Protected Branches*):**
  La rama principal (`main`) está configurada con restricciones estrictas. Está prohibido realizar *pushes* directos sobre ella. Todo cambio, mejora o documentación debe desarrollarse en una rama independiente (*feature branch*).

* **Revisión obligatoria de Pull Requests:**
  Para integrar cualquier modificación en la rama principal, es obligatorio abrir un *Pull Request* y contar con la revisión y aprobación explícita de al menos un compañero del equipo de desarrollo (*Code Review*), asegurando así una doble validación de los cambios introducidos.

* **Copias de seguridad y redundancia:**
  Se fomenta la sincronización frecuente del repositorio local en los equipos de los colaboradores mediante copias de seguridad locales y clonación de respaldo.

---

## 3. Recuperación del Repositorio ante Pérdida de Datos o Errores Graves

En caso de que ocurriera una pérdida de datos en el servidor remoto o un error crítico que corrompiera el repositorio principal en GitHub, la recuperación se garantiza mediante los siguientes mecanismos:

1. **Naturaleza distribuida de Git:** 
   Cada desarrollador que haya clonado el repositorio en su máquina local almacena una copia exacta e histórica de todo el proyecto (incluyendo ramas y commits). Si el repositorio remoto sufriera un fallo, se puede restaurar por completo subiendo una copia local mediante un `git push --mirror` a un nuevo repositorio remoto.
2. **Historial de versiones y reversión de errores:**
   Ante errores graves en código o documentación subidos por error a la rama principal, el sistema permite la trazabilidad completa, posibilitando el uso de comandos de control de versiones (`git revert` o la interfaz de GitHub) para devolver el proyecto a un estado estable anterior de manera inmediata.
