<script>
    import logo from './assets/logo.png'
    import { mode, islogin} from './data.js';
    import { vicha, list_subject} from './listSJ.js'
    import { Today, Final } from './date.js'
    function logout() {
        $islogin = false;
        $mode = '';
    }
    function remove_item (name){
        const index = $list_subject.indexOf(name);
        if (index > -1) {
            $list_subject.splice(index, 1);
        }
        $vicha[name].num_student += 1;
    }
    function remove_item_sec1 (name){
        const index = $list_subject.indexOf(name);
        if (index > -1) {
            $list_subject.splice(index, 1);
        }
        $vicha["SF210"].num_student1 += 1;
    }
    function remove_item_sec2 (name){
        const index = $list_subject.indexOf(name);
        if (index > -1) {
            $list_subject.splice(index, 1);
        }
        $vicha["SF210"].num_student2 += 1;
    }
    let today = $Today.getDate();
    let final = $Final.getDate();
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
        {#if $list_subject.length > 0}
            {#if final < today}
                {#each $list_subject as name}
                    <div class="background">
                        <h1>
                            {#if ($vicha[name].name) == 'TU107' || ($vicha[name].name) == 'TU109'}
                                <span id='item1'>{$vicha[name].name}</span>
                                <span id='item2'>{$vicha[name].sec}</span>
                                <span id='item3'><b>Credit:</b> {$vicha[name].credit} </span>
                                <span id='item4'> {$vicha[name].num_student}/{$vicha[name].max_student}</span>
                                <button id="cancel" on:click={() => {remove_item(name)}}><span>ยกเลิก</span></button>
                            {:else if name == 'SF210'}
                                <span id='item5'>{$vicha[name].name}</span>
                                <span id='item6'>{$vicha[name].sec1}</span>
                                <span id='item7'><b>Credit:</b> {$vicha[name].credit} </span>
                                <span id='item8'> {$vicha[name].num_student1}/{$vicha[name].max_student}</span>
                                <button id="cancel" on:click={() => {remove_item_sec1(name)}}><span>ยกเลิก</span></button>
                            {:else if name == 'SF210_2'}
                                <span id='item5'>{$vicha[name].name}</span>
                                <span id='item6'>{$vicha[name].sec2}</span>
                                <span id='item7'><b>Credit:</b> {$vicha["SF210"].credit} </span>
                                <span id='item8'> {$vicha["SF210"].num_student2}/{$vicha["SF210"].max_student}</span>
                                <button id="cancel" on:click={() => {remove_item_sec2(name)}}><span>ยกเลิก</span></button>
                            {:else}
                                <span id='item5'>{$vicha[name].name}</span>
                                <span id='item6'>{$vicha[name].sec}</span>
                                <span id='item7'><b>Credit:</b> {$vicha[name].credit} </span>
                                <span id='item8'> {$vicha[name].num_student}/{$vicha[name].max_student}</span>
                                <button id="cancel" on:click={() => {remove_item(name)}}><span>ยกเลิก</span></button>
                            {/if}
                        </h1>
                    </div>
                {/each}
            {:else}
                {#each $list_subject as name}
                    <div class="background">
                        <h1>
                            {#if ($vicha[name].name) == 'TU107' || ($vicha[name].name) == 'TU109'}
                                <span id='item1'>{$vicha[name].name}</span>
                                <span id='item2'>{$vicha[name].sec}</span>
                                <span id='item3'><b>Credit:</b> {$vicha[name].credit} </span>
                                <span id='item4'> {$vicha[name].num_student}/{$vicha[name].max_student}</span>
                            {:else if name == 'SF210'}
                                <span id='item5'>{$vicha[name].name}</span>
                                <span id='item6'>{$vicha[name].sec1}</span>
                                <span id='item7'><b>Credit:</b> {$vicha[name].credit} </span>
                                <span id='item8'> {$vicha[name].num_student1}/{$vicha[name].max_student}</span>
                            {:else if name == 'SF210_2'}
                                <span id='item5'>{$vicha[name].name}</span>
                                <span id='item6'>{$vicha[name].sec2}</span>
                                <span id='item7'><b>Credit:</b> {$vicha["SF210"].credit} </span>
                                <span id='item8'> {$vicha["SF210"].num_student2}/{$vicha["SF210"].max_student}</span>
                            {:else}
                                <span id='item5'>{$vicha[name].name}</span>
                                <span id='item6'>{$vicha[name].sec}</span>
                                <span id='item7'><b>Credit:</b> {$vicha[name].credit} </span>
                                <span id='item8'> {$vicha[name].num_student}/{$vicha[name].max_student}</span>
                            {/if}
                        </h1>
                    </div>
                {/each}
            {/if}
            <button id="payment2" on:click={() =>$mode = 'payment'}>ยืนยันและชำระเงิน</button>
        {/if}
    </div>
  
</main>

<style>
    /* Side bar */
    .side-bar {
        position: absolute;
        width: 384px;
        height: 1080px;  /* fixไว้*/
    /*    height: 100vh;  ยืดได้*/
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
        color: #245564;
    }
    /* Main content */
    .main-content {
        position: absolute;
        width: 1311.65px;
        height: 73.35px;
        left: 438px;
        top: 312.95px;
        
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
        padding-left: 170px;
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
        padding-left: 170px;
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
    }
    .background {
        border: 2px none rgba(245, 245, 245, 0.75);
        margin-bottom: 20px;
        width: 1311.65px;
        height: 73.35px;
        left: 438px;
        top: 312.95px;
        background: rgba(245, 245, 245, 0.75);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        transform: rotate(-0.12deg);
    }
    .background h1{
        padding-top: 20px;
    }
    #cancel {
        position: absolute;
        width: 120px;
        height: 40px;
        left: 1180px;
        padding-top: 5px;

        background: #000000;
        border: #000000;
        border-radius: 31.5px;
    }
    #cancel:hover {
        background-color: #A50000;
    }
    #cancel span {
        color: #fff;
    }
    #payment2 {
        position: absolute;
        width: 300px;
        height: 50px;
        left: 500px;
        top: 671px;
        color: #fff;
        border: #30B900;
        background: #30B900;
        border-radius: 31.5px;
    }
</style>    