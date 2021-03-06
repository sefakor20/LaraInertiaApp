import { createApp, h } from 'vue'
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import Layouts from "./Shared/Layouts";

createInertiaApp({
    resolve: name => {
        let page = require(`./Pages/${name}`).default;

        // if (! page.layout) {
        //     page.layout = Layouts;
        // }
        page.layout ??= Layouts;

        return page;
    },

    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)

            // global components registration
            .component('Link', Link)
            .component('Head', Head)

            .mount(el)
    },

    // set default title 
    title: title => `My App | ${title}`,
})

InertiaProgress.init({
    color: 'red',
    showSpinner: true,
})
