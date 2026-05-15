1. Quina és la diferència entre docker run i docker compose up?

-docker run se utiliza para crear e iniciar un único contenedor de forma individual pasando todos los parámetros por línea de comandos.

-docker compose up es una herramienta de orquestación que permite levantar múltiples servicios (como nuestra BD y su interfaz web) simultáneamente usando un único archivo de configuración YAML.

2. Per a què serveix la instrucció depends_on? Garanteix que el servei estigui completament operatiu?

-Sirve para definir el orden de inicio de los contenedores (por ejemplo, que Mongo Express no intente arrancar antes que la base de datos).

-No garantiza que el servicio esté operativo; solo indica que el contenedor principal se ha iniciado. La base de datos podría tardar unos segundos más en estar lista para recibir conexiones reales.

3. Diferència entre xarxa bridge per defecte i xarxa personalitzada a Docker Compose.

-La red personalizada (como nuestra xarxa-botiga) permite que los contenedores se comuniquen entre ellos usando sus nombres de servicio (DNS interno) y ofrece un aislamiento mucho mayor y más seguro que la red bridge por defecto.