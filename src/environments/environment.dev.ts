/* This configuration is to serve and deploy the app in the DEV environment */

export const environment = {
	production: false,
	SERVER_ENDPOINT: 'https://cym-dev-apim.azure-api.net/cymapp/',
	SOCKET_ENDPOINT: 'https://cymsocketdev.azurewebsites.net',
	AIML_ENDPOINT: 'https://cym-dev-apim.azure-api.net/cym-layout/',
	APIM_SUBSCRIPTION_KEY: 'b63abda2e8384cfdab6d3b58f0a720a7'
}
