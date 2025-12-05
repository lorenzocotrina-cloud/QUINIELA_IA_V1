# Quiniela IA ⚽🤖

Predicciones de Quiniela potenciadas por Inteligencia Artificial y Big Data.

## Características

-   **Predicciones IA**: Algoritmo que analiza clasificación, forma, rachas y goleadores.
-   **Datos en Tiempo Real**: Scraping de Mundo Deportivo, AS.com y ESPN.
-   **Pleno al 15**: Probabilidades detalladas para el partido decisivo.
-   **PWA**: Instalable en Android/iOS como una app nativa.
-   **Actualización Instantánea**: Botón "Recargar Datos" para obtener la última información al momento.

## Cómo Usar

### Localmente

1.  Instalar dependencias:
    ```bash
    npm install
    ```
2.  Ejecutar el scraper (para obtener datos iniciales):
    ```bash
    npm run scrape
    ```
3.  Iniciar la aplicación:
    ```bash
    npm run dev
    ```

### Despliegue (Recomendado: Vercel)

Para disfrutar de la funcionalidad de **Scraping bajo demanda**, despliega en Vercel:

1.  Sube este código a un repositorio de GitHub.
2.  Importa el repositorio en [Vercel](https://vercel.com).
3.  ¡Listo! Vercel detectará automáticamente la configuración.

### Despliegue (GitHub Pages)

Si prefieres GitHub Pages (sin scraping bajo demanda, solo actualización diaria):

1.  Ve a `Settings > Pages` en tu repositorio.
2.  Selecciona la rama `gh-pages` como fuente.

## Automatización

El proyecto incluye un GitHub Action (`.github/workflows/scrape-and-deploy.yml`) que:
-   Ejecuta el scraper todos los días a las 08:00 UTC.
-   Actualiza los datos del repositorio automáticamente.
