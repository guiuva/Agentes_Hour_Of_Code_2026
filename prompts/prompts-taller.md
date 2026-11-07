# Prompts del taller

## 1. Inspección de solo lectura

```text
Inspecciona proyecto-inicial sin modificar archivos. Resume:
1. su estructura;
2. cómo se ejecuta;
3. qué funcionalidad existe;
4. qué falta para convertirlo en una web de eventos útil.
Separa hechos observados de suposiciones.
```

## 2. Plan de implementación

```text
Propón un plan para completar la aplicación de eventos universitarios.

Usuarios: estudiantes que consultan actividades desde móvil y ordenador.

Requisitos:
- HTML, CSS y JavaScript sin frameworks ni dependencias nuevas.
- Mostrar al menos seis eventos de ejemplo.
- Búsqueda por título, lugar o descripción.
- Filtro por categoría combinable con la búsqueda.
- Poder marcar eventos favoritos.
- Persistir favoritos y tema en localStorage.
- Modo claro y oscuro.
- Diseño adaptable a móvil.
- Estado vacío comprensible cuando no haya resultados.
- Uso básico mediante teclado y foco visible.

Restricciones:
- Trabaja únicamente dentro de proyecto-inicial.
- Mantén index.html, styles.css y app.js.
- No implementes todavía.

Entrega un plan breve con archivos afectados, decisiones, riesgos y criterios
de aceptación. Espera mi aprobación antes de modificar archivos.
```

## 3. Feedback al plan

```text
Actualiza el plan: los filtros deben generarse a partir de los datos y los
botones de favorito deben comunicar su estado mediante aria-pressed.
Incluye una verificación manual a 375 px. Sigue sin implementar.
```

## 4. Implementación

```text
Plan aprobado. Implementa por incrementos pequeños. No añadas dependencias ni
modifiques archivos fuera de proyecto-inicial. Al terminar, revisa el diff y
explica cualquier desviación respecto al plan.
```

## 5. Verificación

```text
Verifica la aplicación sin asumir que funciona. Comprueba búsqueda, categorías,
combinación de filtros, favoritos, persistencia, tema, estado vacío, teclado y
vista móvil. Explica cada prueba, el resultado observado y cualquier limitación.
Corrige únicamente errores claros dentro del alcance aprobado.
```

## 6. Revisión mediante skill

```text
Usa la skill revisar-web-asociacion para auditar proyecto-inicial.
No modifiques archivos. Devuelve primero el informe priorizado definido por la
skill y distingue comprobaciones de código de pruebas ejecutadas.
```

## 7. Cambio mínimo

```text
Elige el problema de mayor prioridad del informe y propón el cambio mínimo para
resolverlo. Indica archivos afectados, criterios de aceptación y pruebas.
Espera mi aprobación antes de implementar.
```

## 8. Reflexión final

```text
Resume esta sesión en cuatro apartados: decisiones humanas, acciones del agente,
verificaciones realizadas y riesgos pendientes. Señala una instrucción que
debería convertirse en regla y otra que merecería una skill reutilizable.
```

