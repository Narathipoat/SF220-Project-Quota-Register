<script>
    import logo from './assets/logo.png'
    import searchlogo from './assets/search.png'
    import { accounts, account, mode, islogin, n } from './data.js'
    import {vicha} from './listSJ.js';
    
    function logout() {
        $islogin = false;
        $mode = '';
    }

// Choose Subject
    let Search = '';
    let chooseSJ = '';
    function searchdata() { 
      // {#each $vicha as check}
      // {#if {check.name} == Search}
      // {chooseSJ} = {check}
    }
  
</script>


<main>
    <div class="side-bar">
        <img src={logo} alt="logo" id="logo" on:click={() =>$mode = 'main'}>
        <hr id="line">
        <button id="search" on:click={()=>$mode = 'search'}>ค้นหารายวิชา</button>
        <button id="quota" on:click={() =>$mode = 'quota'}>ผลการขอโควตา</button>
        <button id="payment" on:click={() =>$mode = 'payment'}>ชำระเงิน</button>
        <button id="logout" on:click={logout}>ออกจากระบบ</button>
    </div>
    <div>
        <h1 id="university">Thammasat University</h1>
        <h3 id="subject">ระบบค้นหาข้อมูลรายวิชา</h3>
    </div>

<!-- Search -->
    <div class="search-bg">
      
    <input type="text" placeholder="Search" id="search-area"  bind:value={Search}>
      
    <img src={searchlogo} alt="search-logo" id="search-logo"
      on:click={searchdata}>
      
    </div>
  
<!--     <div class="choose">
      section {chooseSJ.sec}
      <br>วัน: {chooseSJ.day}     อาจารย์ผู้สอน: {chooseSJ.prof}
      <br>เวลา: {chooseSJ.time}  หน่วยกิต: {chooseSJ.credit}
    </div> -->
  
</main>


<style>
    /* Side bar */
    .side-bar {
        position: absolute;
        width: 384px;
        height: 1080px;
        left: 0px;
        top: 0px;

        background: #DC0B00;
    }
    #logo {
        position: absolute;
        width: 180px;
        height: 185.61px;
        left: 89px;
        top: 26px
    }
    #line {
        position: absolute;
        width: 384px;
        height: 0px;
        left: 0px;
        top: 240px;

        border: 3px solid #FFFFFF;
    }
    #search {
        position: absolute;
        width: 300px;
        height: 50px;
        left: 42px;
        top: 280px;

        border: #FFFFFF;
        background: #FFFFFF;
        border-radius: 31.5px;
    }
    #quota {
        position: absolute;
        width: 300px;
        height: 50px;
        left: 42px;
        top: 365px;

        border: #FFFFFF;
        background: #FFFFFF;
        border-radius: 31.5px;
    }
    #payment {
        position: absolute;
        width: 300px;
        height: 50px;
        left: 42px;
        top: 450px;

        background: #FFFFFF;
        border: #FFFFFF;
        border-radius: 31.5px;
    }
    #logout {
        position: absolute;
        width: 300px;
        height: 50px;
        left: 42px;
        top: 981px;

        border: #FFFFFF;
        background: #FFFFFF;
        border-radius: 31.5px;
    }

<!--     /* Content in Web page */ -->
    #university {
        position: absolute;
        width: 1019px;
        height: 465px;
        left: 450px;
        top: 50px;

        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 96px;
        line-height: 120px;
        align-items: center;

        color: #FF0000;

        mix-blend-mode: normal;
    }
    #subject {
        position: absolute;
        width: 1019px;
        height: 465px;
        left: 450px;
        top: 160px;

        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 96px;
        line-height: 120px;
        align-items: center;

        color: #245564;

        mix-blend-mode: normal;
    }

    /* Search */
  
    .search-bg {
      position: absolute;
      width: 1500px;
      height: 119.05px;
      left: 412.76px;
      top: 400px;

      background: rgba(255, 92, 92, 0.75);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      transform: rotate(-0.12deg);
    }

    #search-area {
      position: absolute;
      width: 1364px;
      height: 72px;
      left: 20px;
      top: 20px;

      background: #FFFFFF;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;

      font-family: 'Mulish';
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 30px;
      align-items: center;
      left: 100px
    }

    #search-logo {
      position: absolute;
      width: 86px;
      height: 72px;
      left: 1400px;
      top: 24px;
    }
  
</style>