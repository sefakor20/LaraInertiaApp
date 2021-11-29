<template>
    <Layouts>
        <h1 class="text-3xl">Users</h1>
    </Layouts>

    <!-- Preserve page scroll -->
    <div style="margin-top: 500px">
        The current time is: {{ time }}.
    </div>
    <Link href="/users" class="text-blue-500" preserve-scroll>Refresh</Link>
</template>

<script>
    import  Layouts  from '../Shared/Layouts';
    import { Link } from '@inertiajs/inertia-vue3';

    export default {
        components: { Link, Layouts },

        props: {
            time: String
        }
    }
</script>
