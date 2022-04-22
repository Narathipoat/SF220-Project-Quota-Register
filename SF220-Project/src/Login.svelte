<script>
  // @ts-ignore
  import logo from './assets/logo.png'
  // @ts-ignore
  import userid from './assets/userid.png'
  // @ts-ignore
  import password from './assets/password.png'
  import Forgot from './forgot.svelte'
  import { accounts, account, islogin, mode } from './data.js'
  import './style/login_style.css'

  let UserID = '';
  let Password = '';
  let forgot = '';
  
  function checkLogin() {
    if (!(UserID in $accounts) || $accounts[UserID].password != Password){
      alert('Incorrect StudentID or Password!');
    } else {
      $islogin = true;
      $mode = 'main';
      $account = UserID;
      UserID = '';
      Password = '';
    }
  }

  function forgotPassword(){
    forgot = 'forgotpass';
   }
</script>

<main>
  <!-- Top bar -->
  <div class="top-bar">
    <!-- Logo -->
    <img src={logo} alt="logo" id="logo">

    <!-- Text in Top bar -->
    <h1>Thammasat University</h1>
  </div>

  <!-- Login -->
  <div class="login">

    <!-- User ID -->
    <img src={userid} alt="" id="id">
    <input type="text" placeholder="StudentID / User ID" id="id-area" maxlength="10" bind:value={UserID}>

    <!-- Password -->
    <img src={password} alt="" id="password">
    <input type="password" placeholder="Password" id="password-area" maxlength="13" bind:value={Password}>

    <!-- Button login -->
    <button id="login" on:click={checkLogin}>
      <span>LOG IN</span>
    </button>

    <!-- Forgot password -->
    <button id="forget" on:click={forgotPassword}>forget password?</button>
  </div>
    {#if forgot == 'forgotpass'}
      <Forgot></Forgot>
    {/if}
</main>

<style>
  @media screen and (max-width:2560px) {
    /* Logo */
    #logo {
      position: absolute;
      width: 180px;
      height: 185.61px;
      margin-left: 10%;
      margin-top: -12.5px;
    }

  }
@media screen and (min-width:1920px) and (max-width:2500px) and (max-height:1200px){
    /* Logo */
    #logo {
      position: absolute;
      width: 180px;
      height: 185.61px;
      margin-left: 16.5%;
      margin-top: -12.5px;
    }
  }
</style>