/* This configuration is to serve and deploy the app in the QA environment */

export const environment = {
	production: false,
	SERVER_ENDPOINT: 'https://cym-dev-apim.azure-api.net/cymnodeqaapp/',
	SOCKET_ENDPOINT : 'cymsocketqa.azurewebsites.net',
	AIML_ENDPOINT : 'https://cym-dev-apim.azure-api.net/layout-qa/',
	APIM_SUBSCRIPTION_KEY: 'b63abda2e8384cfdab6d3b58f0a720a7'
}
