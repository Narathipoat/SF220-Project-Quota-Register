<script>
    import logo from './assets/logo.png'
    import searchlogo from './assets/search.png'
    import plus from './assets/plus.png'
    import { account, mode, islogin, narathip, wasawat, phatthira, yongyut, chaibancha} from './data.js'
    import { current_credit_C, current_credit_N, current_credit_P, current_credit_W, current_credit_Y} from './credit.js'
    import { vicha} from './listSJ.js'
    import { Today, Final } from './date.js'
    import { time } from './time.js'
    import './style/search_style.css'
    
    function logout() {
        $islogin = false;
        $mode = '';
    }

// Choose Subject
    let searchSJ = '';
    let chooseSJ = '';
    let check = false;
    let sf210_2 = 'SF210_2';

    let before = 'sec';
    let before1 = 'sec';
    let before2 = 'sec';

    let sec = 'em';

    let name_credit = "";
    let current_credit = 0;

    let today = $Today.getDate();
    let final = $Final.getDate();

    let basket = [];

    if ($account == "6410742412"){
        basket = $narathip;
        name_credit = "oat";
        current_credit = $current_credit_N;

    } else if ($account == "6410742735"){ 
        basket = $wasawat;
        name_credit = "moowan";
        current_credit = $current_credit_W;

    } else if ($account == "6410742453"){
        basket = $phatthira;
        name_credit = "kim";
        current_credit = $current_credit_P;

    } else if ($account == "6410742693"){
        basket = $yongyut;
        name_credit = "co";
        current_credit = $current_credit_Y;

    } else {
        basket = $chaibancha;
        name_credit = "sk";
        current_credit = $current_credit_C;

    }

    function checkSJ (){
        chooseSJ = searchSJ;
        check = true;
        before = 'sec';
        sec = "sj" + searchSJ.slice(2);
    }
    function select_SF210_sec1 () {
        if ($vicha[chooseSJ].num_student1 == 0) {
            alert("ไม่สามารถขอโควตาได้")
        } else {
            if (current_credit < 21){
                $vicha[chooseSJ].num_student1 -= 1;
                basket.push(chooseSJ)
                before1 = 'sec-after';
                current_credit += 3

                if (name_credit =="oat") {
                    $current_credit_N = current_credit;
                } else if (name_credit == "moowan") {
                    $current_credit_W = current_credit;
                } else if (name_credit == "kim") {
                    $current_credit_P = current_credit;
                } else if (name_credit == "co") {
                    $current_credit_Y = current_credit;
                } else {
                    $current_credit_C = current_credit;
                }

            }else {
                alert("หน่วยกิตของคุณไม่เพียงพอ")
            }
        }
    }
    function select_SF210_sec2 () {
        if ($vicha[chooseSJ].num_student2 == 0) {
            alert("ไม่สามารถขอโควตาได้")
        } else {
            if (current_credit < 21){
                $vicha[chooseSJ].num_student2 -= 1;
                current_credit += 3
                basket.push(sf210_2)
                before2 = 'sec-after';

                if (name_credit == "oat") {
                    $current_credit_N = current_credit;
                } else if (name_credit == "moowan") {
                    $current_credit_W = current_credit;
                } else if (name_credit == "kim") {
                    $current_credit_P = current_credit;
                } else if (name_credit == "co") {
                    $current_credit_Y = current_credit;
                } else {
                    $current_credit_C = current_credit;
                }
            }else {
                alert("หน่วยกิตของคุณไม่เพียงพอ")
            }
        }
    }
    function select_subject () {
        if ($vicha[chooseSJ].num_student == 0) {
            alert("ไม่สามารถขอโควตาได้")
        } else {
            if (current_credit < 21){
                $vicha[chooseSJ].num_student -= 1;
                current_credit += 3
                basket.push(chooseSJ)
                before = 'sec-after';

                if (name_credit == "oat") {
                    $current_credit_N = current_credit;
                } else if (name_credit == "moowan") {
                    $current_credit_W = current_credit;
                } else if (name_credit == "kim") {
                    $current_credit_P = current_credit;
                } else if (name_credit == "co") {
                    $current_credit_Y = current_credit;
                } else {
                    $current_credit_C = current_credit;
                }
            }else {
                alert("หน่วยกิตของคุณไม่เพียงพอ");
            }
        }
    }
    const formatter = new Intl.DateTimeFormat('en', {
		  hour12: true,
		  hour: 'numeric',
		  minute: '2-digit',
		  second: '2-digit'
	});
    
    console.log(name_credit);
    console.log("oat" + " " +  $current_credit_N);
    console.log("kim" + " " + $current_credit_P);
</script>


<main>
    <div class="side-bar">
        <img src={logo} alt="logo" id="lOgo" on:click={() =>$mode = 'main'}>
        <hr id="line">
        <button id="search" on:click={()=>$mode = 'search'}>ค้นหารายวิชา</button>
        <button id="quota" on:click={() =>$mode = 'quota'}>ผลการขอโควตา</button>
        <button id="payment" on:click={() =>$mode = 'payment'}>ชำระเงิน</button>
        <button id="logout" on:click={logout}>ออกจากระบบ</button>
        <span id = "time-bar">{formatter.format($time)}</span>
    </div>
    <div>
        <h1 id="university">Thammasat University</h1>
        <h3 id="subject">ระบบค้นหาข้อมูลรายวิชา</h3>
    </div>
    <div>
        <span id ="mecredit"> Credit : {current_credit}/22</span>
    </div>

<!-- Search -->
    <div class="search-bg">
        <input type="text" placeholder="Search" id="search-area"  bind:value={searchSJ}>
        <img src={searchlogo} alt="search-logo" id="search-logo" on:click={checkSJ}>
        {#if check == true}
            <div class="subject">
                <!-- SF210 -->
                {#if chooseSJ == "SF210"}
                        <div id= {before1}>
                            <h2>{$vicha[chooseSJ].sec1}  {$vicha[chooseSJ].sj}
                                <span id= {sec}>{$vicha[chooseSJ].num_student1}/{$vicha[chooseSJ].max_student}
                                    {#if today < final}
                                        {#if before1 == "sec"}
                                            {#if before2 == "sec-after"}
                                                <img src={plus} alt="plus" id="plus">
                                            {:else}    
                                                <img src={plus} alt="plus" id="plus" on:click={select_SF210_sec1}>
                                            {/if}
                                        {/if}
                                    {/if}
                                </span>
                            </h2>
                        </div>
                        <div id="detail">
                            <span id="day">Day: {$vicha[chooseSJ].day}
                                <span id="prof-210">{$vicha[chooseSJ].prof}</span>
                            </span>
                            <br>
                            <span id="time">Time: {$vicha[chooseSJ].time1}
                                <span id="credit">Credit: {$vicha[chooseSJ].credit}</span>
                            </span>
                        </div>
                        <br>
                        <br>
                        <div id= {before2}>
                            <h2>{$vicha[chooseSJ].sec2} {$vicha[chooseSJ].sj}
                                <span id= {sec}>{$vicha[chooseSJ].num_student2}/{$vicha[chooseSJ].max_student}
                                    {#if today < final}
                                        {#if before2 == "sec"}
                                            {#if before1 == "sec-after"}
                                                <img src={plus} alt="plus" id="plus">
                                            {:else}    
                                                <img src={plus} alt="plus" id="plus" on:click={select_SF210_sec2}>
                                            {/if}
                                        {/if}
                                     {/if}
                                </span>
                            </h2>
                        </div>
                        <div id="detail">
                            <span id="day">Day: {$vicha[chooseSJ].day}
                                <span id="prof-210">{$vicha[chooseSJ].prof}</span>
                            </span>
                            <br>
                            <span id="time">Time: {$vicha[chooseSJ].time2}
                                <span id="credit">Credit: {$vicha[chooseSJ].credit}</span>
                            </span>
                        </div>
                {:else}
                     <div id= {before}>
                        <h2>{$vicha[chooseSJ].sec} {$vicha[chooseSJ].sj}
                            <span id= {sec}>{$vicha[chooseSJ].num_student}/{$vicha[chooseSJ].max_student}
                                {#if today < final}
                                    {#if before == "sec"}
                                        <img src={plus} alt="plus" id="plus" on:click={select_subject}>
                                    {/if}
                                {/if}
                            </span>
                        </h2>
                    </div>
                    <div id="detail">
                        <span id="day">Day: {$vicha[chooseSJ].day}
                            {#if chooseSJ == "SF220"}
                                <span id="prof-220">{$vicha[chooseSJ].prof}</span>
                            {:else if chooseSJ == "SF230"}
                                <span id="prof-230">{$vicha[chooseSJ].prof}</span>
                            {:else if chooseSJ == "TU107"}
                                <span id="prof-107">{$vicha[chooseSJ].prof}</span>
                            {:else if chooseSJ == "TU109"}
                                <span id="prof-109">{$vicha[chooseSJ].prof}</span>
                            {:else if chooseSJ == "TU105"}
                                <span id="prof-105">{$vicha[chooseSJ].prof}</span>
                            {:else if chooseSJ == "TU050"}
                                <span id="prof-050">{$vicha[chooseSJ].prof}</span>
                            {:else if chooseSJ == "MA111"}
                                <span id="prof-111">{$vicha[chooseSJ].prof}</span>
                            {:else if chooseSJ == "TU104"}
                                <span id="prof-104">{$vicha[chooseSJ].prof}</span>
                            {:else if chooseSJ == "SC135"}
                                <span id="prof-135">{$vicha[chooseSJ].prof}</span>
                            {:else if chooseSJ == "CN311"}
                                <span id="prof-311">{$vicha[chooseSJ].prof}</span>
                            {/if}
                        </span>
                        <br>
                        <span id="time">Time: {$vicha[chooseSJ].time}
                            <span id="credit">Credit: {$vicha[chooseSJ].credit}</span>
                        </span>
                    </div>
                {/if}
            </div>
        {/if}
    </div>
</main>
