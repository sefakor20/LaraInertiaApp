<template>
    <h1 class="text-3xl">Users</h1>

    <!-- Preserve page scroll -->
    <div style="margin-top: 500px">
        The current time is: {{ time }}.
    </div>
    <Link href="/users" class="text-blue-500" preserve-scroll>Refresh</Link>

</template>

<script>
    import { Link } from '@inertiajs/inertia-vue3';

    export default {
        components: {
            Link,
        },
        props: { time: String}
    }

</script>
