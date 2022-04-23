<script>
    import logo from './assets/logo.png'
    import { account, mode, islogin, narathip, wasawat, phatthira, yongyut, chaibancha, click_N, click_W, click_P, click_C, click_Y } from './data.js';
    import { current_credit_C, current_credit_N, current_credit_P, current_credit_W, current_credit_Y} from './credit.js'
    import { vicha } from './listSJ.js'
    import { Today, Final } from './date.js'
    import { time } from './time.js';
    import './style/quota_style.css'

    function logout() {
        $islogin = false;
        $mode = '';
    }

    let basket = [];
    let click = "";

    let name_Credit = "";

    if ($account == "6410742412"){
        basket = $narathip;
        click = $click_N;
        name_Credit = "oat";
    } else if ($account == "6410742735"){ 
        basket = $wasawat;
        click = $click_W;
        name_Credit = "moowan";
    } else if ($account == "6410742453"){
        basket = $phatthira;
        click = $click_P;
        name_Credit = "kim";
    } else if ($account == "6410742693"){
        basket = $yongyut;
        click = $click_Y;
        name_Credit = "co";
    } else {
        basket = $chaibancha;
        click = $click_C;
        name_Credit = "sk";
    }

    function remove_item (name){
        const index = basket.indexOf(name);
        if (index > -1) {
            basket.splice(index, 1);
        }
        if (name_Credit == "oat") {
            $current_credit_N -= 3;
        } else if (name_Credit == "moowan") {
            $current_credit_W -= 3;
        } else if (name_Credit == "kim") {
            $current_credit_P -= 3;
        } else if (name_Credit == "co") {
            $current_credit_Y -= 3;
        } else {
            $current_credit_C -= 3;
        }
        $vicha[name].num_student += 1;
    }
    function remove_item_sec1 (name){
        const index = basket.indexOf(name);
        if (index > -1) {
            basket.splice(index, 1);
        }
        if (name_Credit == "oat") {
            $current_credit_N -= 3;
        } else if (name_Credit == "moowan") {
            $current_credit_W -= 3;
        } else if (name_Credit == "kim") {
            $current_credit_P -= 3;
        } else if (name_Credit == "co") {
            $current_credit_Y -= 3;
        } else {
            $current_credit_C -= 3;
        }
        $vicha["SF210"].num_student1 += 1;
    }
    function remove_item_sec2 (name){
        const index = basket.indexOf(name);
        if (index > -1) {
            basket.splice(index, 1);
        }
        if (name_Credit == "oat") {
            $current_credit_N -= 3;
        } else if (name_Credit == "moowan") {
            $current_credit_W -= 3;
        } else if (name_Credit == "kim") {
            $current_credit_P -= 3;
        } else if (name_Credit == "co") {
            $current_credit_Y -= 3;
        } else {
            $current_credit_C -= 3;
        }
        $vicha["SF210"].num_student2 += 1;
    }
    let today = $Today.getDate();
    let final = $Final.getDate();

    function payment () {
        if ($account == "6410742412"){
            $click_N = "yes";
        } else if ($account == "6410742735"){ 
            $click_W = "yes";
        } else if ($account == "6410742453"){
            $click_P = "yes";
        } else if ($account == "6410742693"){
            $click_Y = "yes";
        } else {
            $click_C = "yes";
        }
        $mode = 'payment'
    }
    const formatter = new Intl.DateTimeFormat('en', {
		  hour12: true,
		  hour: 'numeric',
		  minute: '2-digit',
		  second: '2-digit'
	});
    console.log(name_Credit);
    console.log("oat" + " " + $current_credit_N);
    console.log("kim" + " " + $current_credit_P);
</script>

<main>
    <div class="side-bar">
        <img src={logo} alt="logo" id="loGo" on:click={() =>$mode = 'main'}>
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
        {#if basket.length > 0}
                {#each basket as name}
                    <div class="background">
                        <h1>
                            {#if ($vicha[name].name) == 'TU107' || ($vicha[name].name) == 'TU109'}
                                <span id='item1'>{$vicha[name].name}</span>
                                <span id='item2'>{$vicha[name].sec}</span>
                                <span id='item3'><b>Credit:</b> {$vicha[name].credit} </span>
                                <span id='item4'> {$vicha[name].num_student}/{$vicha[name].max_student}</span>
                                {#if today < final && click == "no"}
                                    <button id="cancel" on:click={() => {remove_item(name)}}><span>ยกเลิก</span></button>
                                {/if}
                            {:else if name == "TU105" || name == "TU050"}
                                <span id='item1'>{$vicha[name].name}</span>
                                <span id='item9'>{$vicha[name].sec}</span>
                                <span id='item10'><b>Credit:</b> {$vicha[name].credit} </span>
                                <span id='item4'> {$vicha[name].num_student}/{$vicha[name].max_student}</span>
                                {#if today < final && click == "no"}
                                    <button id="cancel" on:click={() => {remove_item(name)}}><span>ยกเลิก</span></button>
                                {/if}
                            {:else if name == 'SF210'}
                                <span id='item5'>{$vicha[name].name}</span>
                                <span id='item6'>{$vicha[name].sec1}</span>
                                <span id='item7'><b>Credit:</b> {$vicha[name].credit} </span>
                                <span id='item8'> {$vicha[name].num_student1}/{$vicha[name].max_student}</span>
                                {#if today < final && click == "no"}
                                    <button id="cancel" on:click={() => {remove_item_sec1(name)}}><span>ยกเลิก</span></button>
                                {/if}
                            {:else if name == 'SF210_2'}
                                <span id='item5'>{$vicha[name].name}</span>
                                <span id='item6'>{$vicha[name].sec2}</span>
                                <span id='item7'><b>Credit:</b> {$vicha["SF210"].credit} </span>
                                <span id='item8'> {$vicha["SF210"].num_student2}/{$vicha["SF210"].max_student}</span>
                                {#if today < final && click == "no"}
                                    <button id="cancel" on:click={() => {remove_item_sec2(name)}}><span>ยกเลิก</span></button>
                                {/if}
                            {:else}
                                <span id='item5'>{$vicha[name].name}</span>
                                {#if name == "MA111"}
                                    <span id='item11'>{$vicha[name].sec}</span>
                                {:else if name == "CN311"}
                                    <span id='item12'>{$vicha[name].sec}</span>
                                {:else if name == "SC135"}
                                    <span id='item13'>{$vicha[name].sec}</span>
                                {:else if name == "TU104"}
                                    <span id='item17'>{$vicha[name].sec}</span>
                                {:else}
                                    <span id='item6'>{$vicha[name].sec}</span>
                                {/if}
                                {#if name == "MA111"}
                                    <span id='item14'><b>Credit:</b> {$vicha[name].credit} </span>
                                {:else if name == "CN311"}
                                    <span id='item15'><b>Credit:</b> {$vicha[name].credit} </span>
                                {:else if name == "SC135"}
                                    <span id='item16'><b>Credit:</b> {$vicha[name].credit} </span>
                                {:else if name == "TU104"}
                                    <span id='item18'><b>Credit:</b> {$vicha[name].credit} </span>
                                {:else}
                                    <span id='item7'><b>Credit:</b> {$vicha[name].credit} </span>
                                {/if}
                                <span id='item8'> {$vicha[name].num_student}/{$vicha[name].max_student}</span>
                                {#if today < final && click == "no"}
                                    <button id="cancel" on:click={() => {remove_item(name)}}><span>ยกเลิก</span></button>
                                {/if}
                            {/if}
                        </h1>
                    </div>
                {/each}
            {#if today < final && click == "no"}
                <button id="payment2" on:click={() => payment()}>ยืนยันและชำระเงิน</button>
            {/if}
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