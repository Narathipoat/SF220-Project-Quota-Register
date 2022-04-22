<script>
  import logo from './assets/logo.png'
  import { accounts, account , mode, islogin } from './data.js'
  import './style/forgot_style.css'

  let UserEmail = '';
  let NewPassword1 = '';
  let NewPassword2 = '';
  let check_pass = '';
  let mail_name = '';

  
  function checkNewPass() {
    if (UserEmail == 'student1@gmail.com') {
      mail_name = '6410742412';
    } else if (UserEmail == 'student2@gmail.com'){
      mail_name = '6410742230';
    }else if (UserEmail == 'student3@gmail.com'){
      mail_name = '6410742453';
    }else if (UserEmail == 'student4@gmail.com'){
      mail_name = '6410742693';
    }else if (UserEmail == 'student5@gmail.com'){
      mail_name = '6410742735';
    } else {
      if (UserEmail == ''){
        alert('Please Enter Your Email.')
      } else {
        alert('Wrong Email');
      }
    }
    
    if( $accounts[mail_name].email ) {
      if (NewPassword1 == NewPassword2){
      $accounts[mail_name].password = NewPassword1;
      alert('Password Changed!');
      $mode = 'login';
      $islogin = true;
      } 
      else {
      alert('Password Doesn\'t Match')
      UserEmail = '';
      NewPassword1 = '';
      NewPassword2 = '';
      }
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

  <!-- Change Password -->
  <div class = "change_pass">
    <span id = "email">Email:</span><input type ="text" name ="email_box" id ="email_box" bind:value={UserEmail}>
    <span id = "new_pass">New Password:</span><input type ="password" name ="new_pass_box" id ="new_pass_box" bind:value={NewPassword1}>
    <span id = "con_pass">Confirm Password:</span><input type ="password" name ="con_pass_box" id ="con_pass_box" bind:value={NewPassword2}>
    <button id = "changePassButton" on:click={checkNewPass}><span id="changePass">Change Password</span></button>
  </div>
  
</main>

