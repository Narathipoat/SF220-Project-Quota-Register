<script>
    import Login from './login.svelte'
    import { islogin, mode } from './data.js'
    import Main from './main.svelte'
    // import Search from './search.svelte'
    import Search3 from './search3.svelte'
    import Quota from './quota.svelte'
    import Payment from './payment.svelte'
</script>

{#if !$islogin}
    <Login></Login>
{:else}
    {#if $mode == 'main'}
        <Main></Main>
    {:else if $mode == 'search'}
        <Search3></Search3>
    {:else if $mode == 'quota'}
        <Quota></Quota>
    {:else if $mode == 'payment'}
        <Payment></Payment>
    {/if}
{/if}