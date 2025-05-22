param location string = resourceGroup().location
param appName string
param repositoryUrl string
param branch string = 'main'
param sku string = 'Free'

resource staticSite 'Microsoft.Web/staticSites@2022-09-01' = {
  name: appName
  location: location
  sku: {
    name: sku
    tier: sku
  }
  properties: {
    repositoryUrl: repositoryUrl
    branch: branch
    buildProperties: {
      appLocation: 'app'
      apiLocation: ''
      outputLocation: 'dist'
      appBuildCommand: 'npm install && npm run build'
    }
  }
}

output staticSiteHostname string = staticSite.properties.defaultHostname
