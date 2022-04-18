<script>
    import logo from './assets/logo.png'
    import { mode, islogin} from './data.js';
    import { vicha, list_subject} from './listSJ.js'
    import { Today, Final } from './date.js'
    import { time } from './time.js';
    import './style/quota_style.css'
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

    const formatter = new Intl.DateTimeFormat('en', {
		  hour12: true,
		  hour: 'numeric',
		  minute: '2-digit',
		  second: '2-digit'
	  });
</script>

<main>
    <div class="side-bar">
        <img src={logo} alt="logo" id="logo" on:click={() =>$mode = 'main'}>
        <hr id="line1">
        <button id="search" on:click={()=>$mode = 'search'}>ค้นหารายวิชา</button>
        <button id="quota" on:click={() =>$mode = 'quota'}>ผลการขอโควตา</button>
        <button id="payment" on:click={() =>$mode = 'payment'}>ชำระเงิน</button>
        <button id="logout" on:click={logout}>ออกจากระบบ</button>
        <span id = "time-bar">{formatter.format($time)}</span>
    </div>
    <div class="top-content">
        <h1>Thammasat University</h1>
        <h3>ผลการขอโควตา</h3>
    </div>
    <div class="Main-content">
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
    @media screen and (max-width:2560px) {
        /* Main content */
        .Main-content {
            position: absolute;
            width: 1100px;
            height: 78px;
            left: 350px;
            top: 312.95px;
        }
    }
    @media screen and (min-width:1920px) and (max-width:2500px) {
        /* Main content */
        .Main-content {
            position: absolute;
            width: 1311.65px;
            height: 73.35px;
            left: 438px;
            top: 312.95px;
        }
    }
</style>    