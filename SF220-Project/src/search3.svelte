<script>
    import logo from './assets/logo.png'
    import searchlogo from './assets/search.png'
    import plus from './assets/plus.png'
    import { mode, islogin} from './data.js'
    import { vicha, list_subject} from './listSJ.js'
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


    let today = $Today.getDate();
    let final = $Final.getDate();

    function checkSJ (){
        chooseSJ = searchSJ;
        check = true;
        before = 'sec';
    }
    function select_SF210_sec1 () {
        if ($vicha[chooseSJ].num_student1 == 0) {
            alert("ไม่สามารถขอโควตาได้")
        } else {
        $vicha[chooseSJ].num_student1 -= 1;
        $list_subject.push(chooseSJ)
        before1 = 'sec-after';
        }
    }
    function select_SF210_sec2 () {
        if ($vicha[chooseSJ].num_student2 == 0) {
            alert("ไม่สามารถขอโควตาได้")
        } else {
        $vicha[chooseSJ].num_student2 -= 1;
        $list_subject.push(sf210_2)
        before2 = 'sec-after';
        }
    }
    function select_subject () {
        if ($vicha[chooseSJ].num_student == 0) {
            alert("ไม่สามารถขอโควตาได้")
        } else {
        $vicha[chooseSJ].num_student -= 1;
        $list_subject.push(chooseSJ)
        before = 'sec-after';
        }
    }
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

<!-- Search -->
    <div class="search-bg">
        <input type="text" placeholder="Search" id="search-area"  bind:value={searchSJ}>
        <img src={searchlogo} alt="search-logo" id="search-logo" on:click={checkSJ}>
        {#if final < today}
            {#if check == true}
                <div class="subject">
                    <!-- SF210 -->
                    {#if chooseSJ == "SF210"}
                            <div id= {before1}>
                                <h2>{$vicha[chooseSJ].sec1} 
                                    <span>{$vicha[chooseSJ].num_student1}/{$vicha[chooseSJ].max_student}
                                        {#if before1 == "sec"}
                                            {#if before2 == "sec-after"}
                                                <img src={plus} alt="plus" id="plus">
                                            {:else}    
                                                <img src={plus} alt="plus" id="plus" on:click={select_SF210_sec1}>
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
                                <h2>{$vicha[chooseSJ].sec2} 
                                    <span>{$vicha[chooseSJ].num_student2}/{$vicha[chooseSJ].max_student}
                                        {#if before2 == "sec"}
                                            {#if before1 == "sec-after"}
                                                <img src={plus} alt="plus" id="plus">
                                            {:else}    
                                                <img src={plus} alt="plus" id="plus" on:click={select_SF210_sec2}>
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
                            <h2>{$vicha[chooseSJ].sec} 
                                <span>{$vicha[chooseSJ].num_student}/{$vicha[chooseSJ].max_student}
                                    {#if before == "sec"}
                                        <img src={plus} alt="plus" id="plus" on:click={select_subject}>
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
        {/if}
    </div>
</main>
