<script>
  // @ts-ignore
  import logo from './assets/logo.png'
  // @ts-ignore
  import userid from './assets/userid.png'
  // @ts-ignore
  import password from './assets/password.png'
  import { accounts, account, islogin, mode } from './data.js'

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

<style>
  @media screen and (max-width:2560px) {
    /* Top bar */
    .top-bar {
      background-color: #E40B00;
      position: absolute;
      width: 100%;
      height: 216px;
      left: 0px;
      top: 0px;
    }

    /* Logo */
    #logo {
      position: absolute;
      width: 180px;
      height: 185.61px;
      left: 13.5%;
      top: 15px;
    }

    /* Text in top bar */
    .top-bar h1{
      color: #FBFF25;
      position: absolute;
      width: 1070px;
      height: 183px;
      left: 21%;
      top: -10px;
      
      font-family: 'Mulish';
      font-style: normal;
      font-weight: 400;
      font-size: 96px;
      line-height: 120px;
      display: block;
      align-items: center;
      text-align: center;
    }

    /* Login */
    .login {
      position: absolute;
      width: 777px;
      height: 471px;
      left: 25%;
      top: 304px;

      background: #E40B00;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 30px;
    }

    /* User ID */
    #id {
      position: absolute;
      width: 38.1px;
      height: 50px;
      left: 128px;
      top: 106px;
    }
    #id-area {
      position: absolute;
      width: 400px;
      height: 70px;
      left: calc(50% - 400px/2);
      top: calc(50% - 70px/2 - 105px);

      background: #FFFFFF;
      border: #FFFFFF;
      border-radius: 31.5px;
      line-height: 30;
    }
    #id-area[type="text"] {
      font-size: 20px;
      padding-left: 30px;    
    }
    #id-area::-webkit-input-placeholder {
      position: absolute;
      left: 30px;
      top: 20px;

      font-family: 'Mulish';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      align-items: center;

      color: #241C1C;
    }

    /* Password */
    #password {
      position: absolute;
      width: 42.03px;
      height: 50px;
      left: 126px;
      top: 201px;
    }
    #password-area {
      position: absolute;
      width: 400px;
      height: 70px;
      left: calc(50% - 400px/2);
      top: calc(50% - 70px/2 - 10px);

      background: #FFFFFF;
      border: #FFFFFF;
      border-radius: 31.5px;
    }
    #password-area[type="password"] {
      font-size: 20px;
      padding-left: 30px;
    }
    #password-area::-webkit-input-placeholder {
      position: absolute;
      left: 30px;
      top: 20px;

      font-family: 'Mulish';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;

      color: #241C1C;
    }

    /* Button login */
    #login {
      position: relative;
      width: 400px;
      height: 70px;
      left: 188px;
      top: 286px;
      background-color: #241C1C;
      border: #241C1C;
      border-radius: 31.5px;
    }
    #login span {
      left: 137.93px;
      font-family: 'Mulish';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
      color: #E8E7E7;
    }

    /* Forgot password */
    #forget {
      position: absolute;
      width: 212px;
      height: 30px;
      left: 290px;
      top: 400px;
      background: #E40B00;
      border: none;

      font-family: 'Mulish';
      font-style: normal;
      font-weight: 800;
      font-size: 24px;
      line-height: 30px;
      display: flex;
      align-items: center;
      text-align: center;

      color: #000000;
    }
  }
  @media screen and (min-width:1920px) and (max-width:2500px) and (max-height:1200px){
    /* Top bar */
    .top-bar {
      background-color: #E40B00;
      position: absolute;
      width: 1920px;
      height: 216px;
      left: 0px;
      top: 0px;
    }

    /* Logo */
    #logo {
      position: absolute;
      width: 180px;
      height: 185.61px;
      left: 344px;
      top: 15px;
    }

    /* Text in top bar */
    .top-bar h1{
      color: #FBFF25;
      position: absolute;
      width: 1070px;
      height: 183px;
      left: 506px;
      top: -10px;
      
      font-family: 'Mulish';
      font-style: normal;
      font-weight: 400;
      font-size: 96px;
      line-height: 120px;
      display: block;
      align-items: center;
      text-align: center;
    }

    /* Login */
    .login {
      position: absolute;
      width: 777px;
      height: 471px;
      left: 572px;
      top: 304px;

      background: #E40B00;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 30px;
    }

    /* User ID */
    #id {
      position: absolute;
      width: 38.1px;
      height: 50px;
      left: 128px;
      top: 106px;
    }
    #id-area {
      position: absolute;
      width: 400px;
      height: 70px;
      left: calc(50% - 400px/2);
      top: calc(50% - 70px/2 - 105px);

      background: #FFFFFF;
      border: #FFFFFF;
      border-radius: 31.5px;
      line-height: 30;
    }
    #id-area[type="text"] {
      font-size: 20px;
      padding-left: 30px;    
    }
    #id-area::-webkit-input-placeholder {
      position: absolute;
      left: 30px;
      top: 20px;

      font-family: 'Mulish';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      align-items: center;

      color: #241C1C;
    }

    /* Password */
    #password {
      position: absolute;
      width: 42.03px;
      height: 50px;
      left: 126px;
      top: 201px;
    }
    #password-area {
      position: absolute;
      width: 400px;
      height: 70px;
      left: calc(50% - 400px/2);
      top: calc(50% - 70px/2 - 10px);

      background: #FFFFFF;
      border: #FFFFFF;
      border-radius: 31.5px;
    }
    #password-area[type="password"] {
      font-size: 20px;
      padding-left: 30px;
    }
    #password-area::-webkit-input-placeholder {
      position: absolute;
      left: 30px;
      top: 20px;

      font-family: 'Mulish';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;

      color: #241C1C;
    }

    /* Button login */
    #login {
      position: relative;
      width: 400px;
      height: 70px;
      left: 188px;
      top: 286px;
      background-color: #241C1C;
      border: #241C1C;
      border-radius: 31.5px;
    }
    #login span {
      left: 137.93px;
      font-family: 'Mulish';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
      color: #E8E7E7;
    }

    /* Forgot password */
    #forget {
      position: absolute;
      width: 212px;
      height: 30px;
      left: 290px;
      top: 400px;
      background: #E40B00;
      border: none;

      font-family: 'Mulish';
      font-style: normal;
      font-weight: 800;
      font-size: 24px;
      line-height: 30px;
      display: flex;
      align-items: center;
      text-align: center;

      color: #000000;
    }
  }
</style>