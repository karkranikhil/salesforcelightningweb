// const routesList = {
//     hello: {
//         title: 'Hello',
//         value: 'hello',
//         visible:true,
//         selected:true
//     },
//     composition: {
//         title: 'Composition',
//         value: 'composition',
//         visible:false,
//         selected:false
//     }
// };

// const navigationElements = [
//     'hello',
//     'composition'
// ];

// export { routesList, navigationElements };


export const routesList = [
    {
        title: 'Hello',
        value: 'hello',
        classlist:'active',
        selected:true
    },
    {
        title: 'Nello',
        value: 'nello',
        classlist:'',
        selected:false
    },
    {
        title: 'Pello',
        value: 'pello',
        classlist:'',
        selected:false
    }
]
export const selectedRoute = {
    hello:{
        selected:true
    },
    nello:{
        selected:false
    },
    pello:{
        selected:false
    }
}
