Pregunta de la página 13:

Veamos los resultados y pensemos ¿Qué significa className en React? ¿las props tienen un limite? ¿Quién define las props?

Respuestas:

¿Qué significa className en React?
En React usamos className en lugar de class para asignar estilos CSS, ya que class es una palabra reservada en JavaScript. Al final, className se traduce al atributo class en el HTML renderizado.

¿Las props tienen un límite?
No existe un límite estricto en la cantidad o tipo de props, ya que son un objeto de JavaScript. Sin embargo, pasar demasiadas props puede afectar la claridad del código y el rendimiento de la aplicación.

¿Quién define las props?
Las props son definidas por el componente padre cuando invoca al componente hijo. El hijo solo las recibe como valores de solo lectura y no debe modificarlas directamente.