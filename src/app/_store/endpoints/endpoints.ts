const endpoint = {
    url: 'https://coronavirus-19-api.herokuapp.com'
}

export const covidEndpoint = {
    GET_OVERALL_DETAIL: `${endpoint.url}/all`,
    GET_COUNTRY_DETAIL: `${endpoint.url}/countries`
}