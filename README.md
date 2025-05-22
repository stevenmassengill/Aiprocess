# AI Agent Factory Process Evaluator

This repository contains a simple React + TypeScript application to help financial services organizations identify business processes that are good candidates for AI enablement. The app follows the methodology outlined in the repository issue, scoring each process on criteria such as complexity, frequency, data availability, manual effort, compliance, and impact.

The UI includes tooltips explaining each criterion so evaluators can quickly reference the methodology while entering scores.

## Running locally

1. Install Node.js (version 18 or later).
2. Navigate to the `app` folder and install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser.

## Building

```
npm run build
```
The production build will be located in `app/dist`.

## Deploying to Azure

A Bicep template is provided in the `deploy` folder to deploy the app as an **Azure Static Web App**. Update the parameters as needed and deploy using Azure CLI:

```
az deployment sub create \
  --location <location> \
  --template-file deploy/main.bicep \
  --parameters appName=<unique-name> repositoryUrl=<repo-url>
```

The template will configure the build to run `npm run build` in the `app` directory and host the output.
