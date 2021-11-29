<template>
    <nav>
        <ul class="flex list-disc space-x-4 list-inside">
            <li>
                <NavLink href="/" :active="$page.component == 'Home'">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink href="/settings" :active="$page.component == 'Settings'">
                    Settings
                </NavLink>
            </li>
            <li>
                <NavLink href="/users" :active="$page.component == 'Users'">
                    Users
                </NavLink>
            </li>
            <!-- <li>
                <Link
                 href="/logout" method="post" as="button" class="text-blue-500 hover:underline">Logout</Link>
            </li> -->
        </ul>
    </nav>
</template>

<script>
    import NavLink from './NavLink';

    export default {
        components: { NavLink }
    }
</script>
