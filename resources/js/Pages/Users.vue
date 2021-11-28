<template>
    <h1>Users</h1>
    <Nav />

    <div style="margin-top: 500px">
        The current time is: {{ time }}.
    </div>
    <Link href="/users" class="text-blue-500" preserve-scroll>Refresh</Link>
</template>

<script>
    import  Nav  from '../Shared/Nav'
    import {Link} from '@inertiajs/inertia-vue3'
    export default {
        components: { Nav, Link },

        props: {
            time: String
        }
    }
</script>
