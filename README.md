# CACEL - Simulador de Lógica Cableada (versión multi-navegador)

Este proyecto ha sido corregido para funcionar en cualquier navegador moderno
(Chrome, Firefox, Edge), sin necesitar Internet Explorer ni modo de compatibilidad.

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub (público).
2. Sube el contenido de esta carpeta (CACEL1 y Evaluacion) a la raíz del repositorio.
3. Ve a Settings → Pages → Source, selecciona la rama "main" y carpeta "/ (root)".
4. Guarda. GitHub te dará una URL tipo:
   https://tuusuario.github.io/tu-repositorio/CACEL1/index.htm

## Cómo probarlo localmente con VS Code

1. Instala la extensión "Live Server" en VS Code.
2. Abre esta carpeta en VS Code.
3. Click derecho sobre CACEL1/index.htm → "Open with Live Server".

## Qué se corrigió

- Se eliminó el bloqueo que forzaba a usar Internet Explorer.
- Se corrigió la función de apertura/cierre de paneles (Esquema, Materiales, etc.)
  para que funcione sin depender de tecnología exclusiva de IE.
