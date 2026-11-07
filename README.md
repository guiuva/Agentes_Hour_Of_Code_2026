# Taller de programación agéntica con Google Antigravity

Material para un taller práctico de 90 a 120 minutos. El objetivo es pasar de una carpeta inicial a una pequeña aplicación web, aprender a dirigir y revisar un agente y crear una skill reutilizable.

## Resultado de aprendizaje

Al terminar, podrás:

- distinguir un chatbot, un asistente de código y un agente;
- configurar Antigravity con políticas de revisión prudentes;
- trabajar mediante objetivo, contexto, plan, ejecución y verificación;
- revisar planes, cambios y resultados antes de aceptarlos;
- diferenciar reglas, workflows, skills y MCP;
- crear y activar una skill de proyecto;
- reconocer operaciones que requieren especial atención.

## Antes del taller

Sigue [Preparación previa](docs/00-preparacion.md). Necesitarás Google Antigravity, Chrome, una cuenta personal de Google y, de forma recomendable, Git.

## Recorrido rápido

1. Abre este repositorio como carpeta en Antigravity IDE.
2. Lee la [guía de instalación](docs/01-instalacion-y-configuracion.md).
3. Abre `proyecto-inicial/`.
4. Sigue el [taller paso a paso](docs/03-taller-paso-a-paso.md).
5. Consulta los prompts en [prompts/prompts-taller.md](prompts/prompts-taller.md).
6. Ejecuta la skill incluida en `.agents/skills/revisar-web-asociacion/`.
7. Si te bloqueas, compara con `proyecto-final/`, pero intenta no abrirlo antes.

## Presentación del curso

Abre `presentacion-curso-antigravity.html` en Chrome, Edge o Firefox. Incluye navegación con flechas, espacio, Page Up/Page Down y gestos táctiles. Pulsa `F` para entrar en pantalla completa y `?` para ver la ayuda. También puedes imprimirla o guardarla como PDF desde el navegador.

## Estructura

```text
.
├── .agents/skills/             Skill que Antigravity descubre en el proyecto
├── prompts/                    Prompts listos para copiar
├── proyecto-inicial/           Punto de partida de la práctica
├── proyecto-final/             Posible solución
└── presentacion-curso-antigravity.html
```

## Cómo abrir las aplicaciones

No necesitan dependencias. Puedes abrir `index.html` directamente en el navegador. Si ya tienes Python instalado, también puedes servir la carpeta:

```bash
python -m http.server 8000
```

Después visita `http://localhost:8000`.

## Aviso

Las interfaces, nombres y límites de las herramientas agénticas cambian con frecuencia. Comprueba la documentación oficial antes de impartir el taller y evita utilizar credenciales o proyectos importantes durante las demostraciones.

