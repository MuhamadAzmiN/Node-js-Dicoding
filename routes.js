const routes = [
    
    {
        method : 'GET',
        path : '/',
        handler : (request, h) => {
            return "HomePage"
        }
    },
    
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name } = request.params;
            const { lang } = request.query

            if(lang === "id"){
                return `halo ${name}`
            }
            return `Hello ${name}`;
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'AboutPage';
        },
    },


    {
        method : 'POST', 
        path : '/user',
        handler : (request, h) => {
            return h.response('created').code(201)
        }
    }
];

module.exports = routes;