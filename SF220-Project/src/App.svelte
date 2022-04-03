<script>
    // @ts-ignore
    import Login from './Login.svelte'
    // @ts-ignore
    import { islogin, mode } from './data.js'
    import Main from './main.svelte'
</script>

{#if !$islogin}
    <Login></Login>
{:else}
    {#if $mode == 'main'}
        <Main></Main>
    {/if}
{/if}