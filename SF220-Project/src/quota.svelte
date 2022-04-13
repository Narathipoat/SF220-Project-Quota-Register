<script>
    import logo from './assets/logo.png'
    import qr from './assets/qrcode.jpg'
    import { mode, islogin, n } from './data.js';
    import { sub } from './subject.js';
    function logout() {
        $islogin = false;
        $mode = '';
    }
    let c = 0;
    let total = 0;
    function calculate(node) {
        c += 3;
        total += 5400;
    }
</script>

<main>
    <div class="side-bar">
        <img src={logo} alt="logo" id="logo" on:click={() =>$mode = 'main'}>
        <hr id="line1">
        <button id="search" on:click={()=>$mode = 'search'}>ค้นหารายวิชา</button>
        <button id="quota" on:click={() =>$mode = 'quota'}>ผลการขอโควตา</button>
        <button id="payment" on:click={() =>$mode = 'payment'}>ชำระเงิน</button>
        <button id="logout" on:click={logout}>ออกจากระบบ</button>
    </div>
    <div class="top-content">
        <h1>Thammasat University</h1>
        <h3>ผลการขอโควตา</h3>
    </div>
    <div class="main-content">
       {#each $n as name}
           <h1>
               {#if ($sub[name].name) == 'TU107' || ($sub[name].name) == 'TU109'}
                    <span id='item1'>{$sub[name].name}</span>
                    <span id='item2'>{$sub[name].sec}</span>
                    <span id='item3' use:calculate><b>Credit:</b> {$sub[name].credit}</span>
<!--           จะแก้เป็น function + -          <span id='item4'>{$sub[name].cost}</span> -->
                {:else}
                    <span id='item5'>{$sub[name].name}</span>
                    <span id='item6'>{$sub[name].sec}</span>
                    <span id='item7' use:calculate><b>Credit:</b> {$sub[name].credit}</span>
<!--                     <span id='item8'>{$sub[name].cost}</span> -->
                {/if}
           </h1>
       {/each}
      <button id="payment2" on:click={() =>$mode = 'payment'}>ยืนยันและชำระเงิน</button>
    </div>
  
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
    #line1 {
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
    /* Top content */
    .top-content h1 {
        position: absolute;
        width: 1095px;
        height: 160px;
        left: 438px;
        top: 0px;
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 96px;
        line-height: 120px;
        align-items: center;
        color: #FF0000;
    }
    .top-content h3 {
        position: absolute;
        width: 1095px;
        height: 120px;
        left: 438px;
        top: 80px;
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 600;
        font-size: 72px;
        line-height: 120px;
        align-items: center;
        color: #245564;;
    }
    /* Main content */
    .main-content {
        position: absolute;
        width: 1311.65px;
        height: 73.35px;
        left: 438px;
        top: 312.95px;
        background: rgba(245, 245, 245, 0.75);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        transform: rotate(-0.12deg);
    }
    #item1 {
        padding-left: 30px;
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
    }
    #item2 {
        padding-left: 205px;
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
    }
    #item3 {
        padding-left: 210px;
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
    }
    #item4 {
        padding-left: 210px;
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
    }
    #item5 {
        padding-left: 30px;
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
    }
    #item6 {
        padding-left: 210px;
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
    }
    #item7 {
        padding-left: 210px;
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
    }
    #item8 {
        padding-left: 210px;
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
    }
    #line2 {
        margin-top: 100px;
        border: 2px solid black;
    }
    #payment2 {
        position: absolute;
        width: 300px;
        height: 50px;
        left: 42px;
        top: 671px;
        color: #fff000;
        border: #1eff00;
        background: #00ff33;
        border-radius: 31.5px;
    }
/*   #logout {
        position: absolute;
        width: 300px;
        height: 50px;
        left: 42px;
        top: 981px;
        border: #FFFFFF;
        background: #FFFFFF;
        border-radius: 31.5px;
    } */
</style>    