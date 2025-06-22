# Demoblaze E2E – Playwright + Allure

Automatización **end‑to‑end** del sitio [demoblaze.com](https://www.demoblaze.com/) usando **Playwright Test**, **Page Object Model (POM)** y reportes **Allure**.

> El proyecto cubre los tres flows sugeridos en el challenge y corre en CI via **GitHub Actions**.

---

## Stack

| Componente        | Versión       | Rol                          |
| ----------------- | ------------- | ---------------------------- |
| Node.js           | ≥ 18.20 (LTS) | Runtime JS                   |
| Playwright Test   | latest        | Runner + Browser automation  |
| Faker & UUID      | latest        | Genera data aleatoria        |
| Allure Playwright | latest        | Reportes HTML                |
| GitHub Actions    | ubuntu‑latest | CI cloud                     |

---

## Instalación y ejecución 

```bash
# Clonar el repo y entrar
git clone <URL‑del‑repo>
cd qa-challenge-demoblaze-e2e

# Instalar dependencias
npm ci

# Descargar navegadores 
npx playwright install

# Ejecutar todos los tests headless
npm run test:e2e

# Abrir el inspector UI
npm run test:ui
```

### Reportes con Allure

```bash
# Generar el HTML
npm run report  # desp de correr los test
```

---

## Flujos cubiertos

| Spec                   | Tags                | Descripción                                  |
| ---------------------- | ------------------- | -------------------------------------------- |
| `add-to-cart.spec.js`  | `@smoke @addToCart` | Agrega un producto al carrito y valida total |
| `checkout.spec.js`     | `@e2e @checkout`    | Flujo completo de compra y confirmación      |
| `signup-login.spec.js` | `@e2e @auth`        | Crea usuario random y verifica login         |

> **Tags**: para filtrarse o usar en CI con `--grep "@smoke"` o combinaciones (`--grep "@e2e & @checkout"`).

---

## Estructura del repo

```
├─ .github/workflows/ci.yml      # Pipeline CI
├─ src/
│  ├─ fixtures/                  # Fixtures JSON
│  ├─ pages/                     # Page Objects (POM)
│  └─ utils/                     # Faker helpers
├─ tests/                        # Specs E2E
├─ playwright.config.js          # Config global Playwright
└─ README.md
```

---

## CI/CD ( GitHub Actions )

`ci.yml` dispara en cada **push** / **pull‑request** a `master`:

1. Cachea `npm` y descarga browsers.
2. Ejecuta los tests.
3. Publica artefacto **Allure report**.
4. Falla el job si un test falla.

---

## Notas 

* **Page Object Model**: selectores centralizados→ mantenibilidad.
* **Data random** con Faker.
* Uso de **tags** para smoke vs regression pipelines.

---