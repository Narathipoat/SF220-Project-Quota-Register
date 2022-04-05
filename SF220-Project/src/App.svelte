<script>
    // @ts-ignore
    import Login from './login.svelte'
    // @ts-ignore
    import { islogin, mode } from './data.js'
    import Main from './main.svelte'
    import Search from './search.svelte'
    import Quota from './quota.svelte'
    import Payment from './payment.svelte'
</script>

{#if !$islogin}
    <Login></Login>
{:else}
    {#if $mode == 'main'}
        <Main></Main>
    {:else if $mode == 'search'}
        <Search></Search>
    {:else if $mode == 'quota'}
        <Quota></Quota>
    {:else if $mode == 'payment'}
        <Payment></Payment>
    {/if}
{/if}