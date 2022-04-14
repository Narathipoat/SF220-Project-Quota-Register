<script>
    import logo from './assets/logo.png'
    import searchlogo from './assets/search.png'
    import plus from './assets/plus.png'
    import { accounts, account, mode, islogin, n } from './data.js'
    import { vicha, name_subject} from './listSJ.js';
    
    function logout() {
        $islogin = false;
        $mode = '';
    }

// Choose Subject
    let searchSJ = '';
    let chooseSJ = '';
    let check = false;
    function checkSJ (){
        $name_subject.push(searchSJ)
        check = true;
    }
    function remove_item (node) {
        $name_subject.shift()
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
        <input type="text" placeholder="Search" id="search-area"  bind:value={searchSJ}>
        <img src={searchlogo} alt="search-logo" id="search-logo" on:click={checkSJ}>
        {#if check == true}
            <div class="subject">
                {#each $name_subject as name_sub}
                    {#if name_sub == "SF210"}
                        <div id="sec">
                            <h1>{$vicha[name_sub].sec1} 
                                <span>{$vicha[name_sub].num_student}/{$vicha[name_sub].max_student}
                                    <img src={plus} alt="plus" id="plus">
                                </span>
                            </h1>
                        </div>
                        <div id="detail">
                            <span id="day">Day: {$vicha[name_sub].day}
                                <span id="prof">{$vicha[name_sub].prof}</span>
                            </span>
                            <br>
                            <span id="time">Time: {$vicha[name_sub].time1}
                                <span id="credit">Credit: {$vicha[name_sub].credit}</span>
                            </span>
                        </div>
                        <br>
                        <br>
                        <div id="sec">
                            <h1>{$vicha[name_sub].sec2} 
                                <span>{$vicha[name_sub].num_student}/{$vicha[name_sub].max_student}
                                    <img src={plus} alt="plus" id="plus">
                                </span>
                            </h1>
                        </div>
                        <div id="detail">
                            <span id="day">Day: {$vicha[name_sub].day}
                                <span id="prof">{$vicha[name_sub].prof}</span>
                            </span>
                            <br>
                            <span id="time">Time: {$vicha[name_sub].time2}
                                <span id="credit" use:remove_item>Credit: {$vicha[name_sub].credit}</span>
                            </span>
                        </div>
                    {/if}
                {/each}
            </div>
        {/if}
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
    #subject {
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
        color: #245564;
    }

    /* Search */
  
    .search-bg {
      position: absolute;
      width: 1500px;
      height: 119.05px;
      left: 412.76px;
      top: 300px;

      background: rgba(255, 92, 92, 0.75);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      transform: rotate(-0.12deg);
    }

    #search-area {
      position: absolute;
      width: 1364px;
      height: 72px;
      left: 12px;
      top: 20px;

      background: #FFFFFF;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;

      font-family: 'Mulish';
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 30px;
    }
    #search-area[type="text"] {
        padding-left: 20px;
    }

    #search-logo {
      position: absolute;
      width: 86px;
      height: 72px;
      left: 1410px;
      top: 24px;
    }
    .subject {
        margin-top: 150px;
    }
    #sec {
        width: 1500px;
        height: 69px;
        left: 12px;
        top: 500px;
        border: 2px solid rgba(255, 92, 92, 0.75);
        border-radius: 10px;
        background: rgba(255, 92, 92, 0.75);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    #sec h1{
        margin-top: 0%;
        padding-left: 20px;
        font-weight: 300;
    }
    #sec h1 span {
        margin-left: 70%;
    }
    #plus {
        width: 44px;
        height: 48px;
        margin-left: 5%;
        
    }
    #detail {
        width: 1500px;
        height: 151.14px;
        left: 12px;
        top: 510px;

        background: rgba(255, 242, 242, 0.75);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px
    }
    #day {
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        padding-left: 20px;

        color: #000000;

        mix-blend-mode: normal;
    }
    #prof {
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        margin-left: 20%;

        color: #000000;

        mix-blend-mode: normal;
    }
    #time {
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        padding-left: 20px;

        color: #000000;

        mix-blend-mode: normal;
    }
    #credit {
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        margin-left: 6%;

        color: #000000;

        mix-blend-mode: normal;
    }
</style>