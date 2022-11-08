export const getJSON = (
    route = '',
    site = 'https://jsonplaceholder.typicode.com'
) => fetch(site + route).then((response) => response.json())
