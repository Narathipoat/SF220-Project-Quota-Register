<script>
  // @ts-ignore
  import logo from './assets/logo.png'
  // @ts-ignore
  import userid from './assets/userid.png'
  // @ts-ignore
  import password from './assets/password.png'
  import { accounts, account, islogin, mode } from './data.js'
  import './style/login_style.css'

  let UserID = '';
  let Password = '';
  
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
    <button id="forget">forget password?</button>
  </div>
</main>
