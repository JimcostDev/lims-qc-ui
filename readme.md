# ✨ Astro + Tailwind Template
**Plantilla personal para proyectos web usando [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com)**, pensada para acelerar el desarrollo y servir de referencia. 

> [!NOTE]
> Esta plantilla refleja mis preferencias (JimcostDev). No garantiza que cubra todas las mejores prácticas, pero puede ser un excelente punto de partida.

> [!TIP]
> Además, como es un template de GitHub, también puedes utilizarlo haciendo clic en el botón correspondiente para crear un nuevo repositorio basado en esta plantilla.

## Instrucciones de Uso

1. **Clona este repositorio** ejecutando el siguiente comando:

    ```bash
    git clone https://github.com/JimcostDev/jimcostdev-astro-template.git
    ```
           

2. **Instala las dependencias requeridas**:
    - Instalar todas con `npm`:
        ```bash
        npm install
        ```
3. **Ejecuta el servidor**:

    Inicia el servidor en modo de desarrollo:

    - Modo **desarrollo**:
        ```bash
        npm run dev         
        ```
    
> [!TIP] 
> !Si te resulta útil este proyecto, apóyalo con una ⭐! Tu apoyo nos motiva a crear más contenido y mejorar los recursos disponibles. ¡Gracias! :octocat:

---

# 🔄 Actualizar dependencias en proyectos Node / Astro

Este documento explica cómo revisar y actualizar las dependencias de un proyecto.

---

## 📌 Ver dependencias desactualizadas

Ejecutar:

```bash
npm outdated
```

Esto muestra una tabla con:

* **Current** → versión instalada actualmente
* **Wanted** → versión más alta permitida por `package.json`
* **Latest** → última versión publicada en npm

---

## 📌 Actualizar dentro de los rangos de `package.json`

```bash
npm update
```

Esto sube las dependencias a la versión **más nueva posible**, pero **sin saltar de major version** (ej: `5.x` → `5.y`, pero no `6.x`).

---

## 📌 Actualizar a las últimas versiones (incluyendo major)

1. Usar [npm-check-updates](https://www.npmjs.com/package/npm-check-updates):

```bash
npx npm-check-updates -u
```

Esto reescribe `package.json` con las versiones más recientes (incluso major).

2. Instalar las nuevas dependencias:

```bash
npm install
```

---

## 📌 Verificar proyecto después de actualizar

```bash
npm run dev
npm run build
```

Asegúrate de que no haya errores y revisa si alguna dependencia requiere cambios de configuración (por breaking changes).

---

## 📌 Manejar vulnerabilidades

* Revisar vulnerabilidades:

  ```bash
  npm audit
  ```

* Arreglar automáticamente (seguro):

  ```bash
  npm audit fix
  ```

* Forzar el fix (puede traer breaking changes):

  ```bash
  npm audit fix --force
  ```

---

✅ Recomendación: Antes de actualizar dependencias, hacer un **commit de respaldo** en Git:

```bash
git add .
git commit -m "chore: backup antes de actualizar dependencias"
```
   



