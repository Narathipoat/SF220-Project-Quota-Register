<script>
  import logo from './assets/logo.png'
  import { accounts, account , mode, islogin } from './data.js'
  import Login from './login.svelte'
  import './style/forgot_style.css'

  let UserID = '';
  let NewPassword1 = '';
  let NewPassword2 = '';
  let check_pass = '';
  let citizen_name = '';
  let backlog = '';
  
  function checkNewPass() {
    if (UserID == '6410742412000') {
      citizen_name = '6410742412';
    }else if (UserID == '6410742230000'){
      citizen_name = '6410742230';
    }else if (UserID == '6410742453000'){
      citizen_name = '6410742453';
    }else if (UserID == '6410742693000'){
      citizen_name = '6410742693';
    }else if (UserID == '6410742735000'){
      citizen_name = '6410742735';
    }else { 
      if (UserID == ''){
        alert('Please Enter Your Citizen ID')
      } else {
        alert('Wrong Citizen ID');
      }
    } 
    
    if( $accounts[citizen_name].citizen ) {
      if (NewPassword1 == NewPassword2){
      $accounts[citizen_name].password = NewPassword1;
      alert('Password Changed!');
      $mode = 'login';
      $islogin = true;
      } 
      else {
      alert('Password Doesn\'t Match')
      NewPassword1 = '';
      NewPassword2 = '';
      }
    }
  }
 function BackLogin() {
  backlog = 'backlogin';
  } 
  
</script>

<main>
  <!-- Top bar -->
  <div class="top-bar">
    <!-- Logo -->
    <img src={logo} alt="logo" id="logo_forgot">
    <!-- Text in Top bar -->
    <h1>Thammasat University</h1>
  </div>

  <!-- Change Password -->
  <div class = "change_pass">
    <span id = "citizenID">Citizen ID :</span><input type ="text" placeholder="Citizen ID " name ="citizenID_box" id ="citizenID_box" maxlength="13" bind:value={UserID}>
    <span id = "new_pass">New Password :</span><input type ="password" placeholder="Password" name ="new_pass_box" id ="new_pass_box" bind:value={NewPassword1}>
    <span id = "con_pass">Confirm Password :</span><input type ="password" placeholder="Confirm Password" name ="con_pass_box" id ="con_pass_box" bind:value={NewPassword2}>
    <button id = "changePassButton" on:click={checkNewPass}><span id="changePass">Change Password</span></button>
    
    <button id = "BackButton" on:click={BackLogin}><span id="BackText">Back</span></button> 
  </div>
  {#if backlog == 'backlogin'}
    <Login></Login>
  {/if}
  
</main>