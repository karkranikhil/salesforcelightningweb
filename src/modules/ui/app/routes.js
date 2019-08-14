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
        title: 'Introduction',
        value: 'introduction',
        classlist: 'active',
        selected: true
    },
    {
        title: 'Why LWC',
        value: 'whyLwc',
        classlist: '',
        selected: false
    },
    {
        title: 'Advantages of LWC',
        value: 'advantage',
        classlist: '',
        selected: false
    },
    {
        title: 'Browser Support',
        value: 'browserSupport',
        classlist: '',
        selected: false
    },
    {
        title: 'Environment Setup',
        value: 'setup',
        classlist: '',
        selected: false
    },
    {
        title: 'Data binding',
        value: 'singleDataBinding',
        classlist: '',
        selected: false
    },
    {
        title: 'Two way data binding',
        value: 'dualDataBinding',
        classlist: '',
        selected: false
    }
];
export const selectedRoute = {
    introduction: {
        selected: true
    },
    whyLwc: {
        selected: false
    },
    advantage: {
        selected: false
    },
    browserSupport: {
        selected: false
    },
    setup: {
        selected: false
    },
    singleDataBinding: {
        selected: false
    },
    dualDataBinding: {
        selected: false
    }
};
