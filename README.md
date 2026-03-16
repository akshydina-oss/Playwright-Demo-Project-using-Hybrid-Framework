# Playwright Demo Project - Hybrid Framework

![Playwright Tests](https://github.com/akshydina-oss/Playwright-Demo-Project-using-Hybrid-Framework/actions/workflows/playwright.yml/badge.svg)

## 🚀 Overview
This project is a professional-grade automation framework built using **Playwright** and **TypeScript**. It utilizes a **Hybrid Framework** approach, combining the **Page Object Model (POM)** with custom fixtures and organized locator grouping for maximum maintainability.

## 🛠️ Tech Stack
* **Language:** TypeScript
* **Test Runner:** Playwright
* **Reporting:** Allure Report & Playwright HTML Report
* **CI/CD:** GitHub Actions

## 🏗️ Architecture Highlights
* **Grouped Locators:** Organized UI elements into logical sections (e.g., `nav`, `products`) to reduce cognitive load and improve readability.
* **Custom Fixtures:** Implemented a `baseFixture` to handle page initialization, making tests cleaner and more robust.
* **Risk-Based Testing:** Includes a dedicated suite for high-priority business flows like "In Stock" validation and Cart management.

## 📊 Reporting
I use **Allure Report** for rich, visual feedback.
* **Steps:** Every test uses `test.step()` for clear documentation of actions.
* **Artifacts:** Screenshots and traces are automatically captured on failure.

## 💻 How to Run Locally

1. **Clone the repo:**
   ```bash
   git clone [https://github.com/akshydina-oss/Playwright-Demo-Project-using-Hybrid-Framework.git](https://github.com/akshydina-oss/Playwright-Demo-Project-using-Hybrid-Framework.git)