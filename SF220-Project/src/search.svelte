<script>
    import logo from './assets/logo.png'
    import searchlogo from './assets/search.png'
    import plus from './assets/plus.png'
    import { mode, islogin} from './data.js'
    import { vicha, list_subject} from './listSJ.js'
    import { Today, Final } from './date.js'
    import { time } from './time.js';
    
    function logout() {
        $islogin = false;
        $mode = '';
    }

// Choose Subject
    let searchSJ = '';
    let chooseSJ = '';
    let check = false;
    let sf210_2 = 'SF210_2';

    let select_210 = '';
    let select_220 = '';
    let select_230 = '';
    let select_107 = '';
    let select_109 = '';

    let today = $Today.getDate();
    let final = $Final.getDate();

    function checkSJ (){
        chooseSJ = searchSJ;
        check = true;
    }
    function select_SF210_sec1 () {
        $vicha[chooseSJ].num_student1 -= 1;
        $list_subject.push(chooseSJ)
        select_210 = 'sec1';
    }
    function select_SF210_sec2 () {
        $vicha[chooseSJ].num_student2 -= 1;
        $list_subject.push(sf210_2)
        select_210 = 'sec2';
    }
    function select_SF220 () {
        $vicha[chooseSJ].num_student -= 1;
        $list_subject.push(chooseSJ)
        select_220 = '220';
    }
    function select_SF230 () {
        $vicha[chooseSJ].num_student -= 1;
        $list_subject.push(chooseSJ)
        select_230 = '230';
    }
    function select_TU107 () {
        $vicha[chooseSJ].num_student -= 1;
        $list_subject.push(chooseSJ)
        select_107 = '107';
    }
    function select_TU109 () {
        $vicha[chooseSJ].num_student -= 1;
        $list_subject.push(chooseSJ)
        select_109 = '109';
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
                    <!-- SF210 After Select -->
                        {#if select_210 == 'sec1'}
                            <div id="sec-after">
                                <h2>{$vicha[chooseSJ].sec1} 
                                    <span>{$vicha[chooseSJ].num_student1}/{$vicha[chooseSJ].max_student}</span>
                                </h2>
                            </div>
                            <div id="detail-after">
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
                            <div id="sec">
                            <h2>{$vicha[chooseSJ].sec2} 
                                <span>{$vicha[chooseSJ].num_student2}/{$vicha[chooseSJ].max_student}
                                    <img src={plus} alt="plus" id="plus">
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
                    <!-- SF210 After Select2 -->
                        {:else if select_210 == 'sec2'}
                            <div id="sec">
                                <h2>{$vicha[chooseSJ].sec1} 
                                    <span>{$vicha[chooseSJ].num_student1}/{$vicha[chooseSJ].max_student}
                                        <img src={plus} alt="plus" id="plus">
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
                            <div id="sec-after">
                            <h2>{$vicha[chooseSJ].sec2} 
                                <span>{$vicha[chooseSJ].num_student2}/{$vicha[chooseSJ].max_student}</span>
                            </h2>
                            </div>
                            <div id="detail-after">
                                <span id="day">Day: {$vicha[chooseSJ].day}
                                    <span id="prof-210">{$vicha[chooseSJ].prof}</span>
                                </span>
                                <br>
                                <span id="time">Time: {$vicha[chooseSJ].time2}
                                    <span id="credit">Credit: {$vicha[chooseSJ].credit}</span>
                                </span>
                            </div>
                    <!-- SF210 Before Select -->
                        {:else if select_210 == ''}
                            <div id="sec">
                                <h2>{$vicha[chooseSJ].sec1} 
                                    <span>{$vicha[chooseSJ].num_student1}/{$vicha[chooseSJ].max_student}
                                        <img src={plus} alt="plus" id="plus" on:click={select_SF210_sec1}>
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
                            <div id="sec">
                                <h2>{$vicha[chooseSJ].sec2} 
                                    <span>{$vicha[chooseSJ].num_student2}/{$vicha[chooseSJ].max_student}
                                        <img src={plus} alt="plus" id="plus" on:click={select_SF210_sec2}>
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
                        {/if}
                    <!-- SF220 -->
                        {:else if chooseSJ == "SF220"}
                        <!-- SF220 After Select -->
                            {#if select_220 == '220'}
                                <div id="sec-after">
                                    <h2>{$vicha[chooseSJ].sec} 
                                        <span>{$vicha[chooseSJ].num_student}/{$vicha[chooseSJ].max_student}</span>
                                    </h2>
                                </div>
                                <div id="detail-after">
                                    <span id="day">Day: {$vicha[chooseSJ].day}
                                        <span id="prof-220">{$vicha[chooseSJ].prof}</span>
                                    </span>
                                    <br>
                                    <span id="time">Time: {$vicha[chooseSJ].time}
                                        <span id="credit">Credit: {$vicha[chooseSJ].credit}</span>
                                    </span>
                                </div>
                        <!-- SF220 Before Select -->
                            {:else if select_220 == ''}
                                <div id="sec">
                                    <h2>{$vicha[chooseSJ].sec} 
                                        <span>{$vicha[chooseSJ].num_student}/{$vicha[chooseSJ].max_student}
                                            <img src={plus} alt="plus" id="plus" on:click={select_SF220}>
                                        </span>
                                    </h2>
                                </div>
                                <div id="detail">
                                    <span id="day">Day: {$vicha[chooseSJ].day}
                                        <span id="prof-220">{$vicha[chooseSJ].prof}</span>
                                    </span>
                                    <br>
                                    <span id="time">Time: {$vicha[chooseSJ].time}
                                        <span id="credit">Credit: {$vicha[chooseSJ].credit}</span>
                                    </span>
                                </div>
                            {/if}
                    <!-- SF230 -->
                        {:else if chooseSJ == "SF230"}
                        <!-- SF230 After Select -->
                            {#if select_230 == '230'}
                                <div id="sec-after">
                                    <h2>{$vicha[chooseSJ].sec} 
                                        <span>{$vicha[chooseSJ].num_student}/{$vicha[chooseSJ].max_student}
                                        </span>
                                    </h2>
                                </div>
                                <div id="detail-after">
                                    <span id="day">Day: {$vicha[chooseSJ].day}
                                        <span id="prof-230">{$vicha[chooseSJ].prof}</span>
                                    </span>
                                    <br>
                                    <span id="time">Time: {$vicha[chooseSJ].time}
                                        <span id="credit">Credit: {$vicha[chooseSJ].credit}</span>
                                    </span>
                                </div>
                        <!-- SF230 Before Select -->
                            {:else if select_230 == ''}
                                <div id="sec">
                                    <h2>{$vicha[chooseSJ].sec} 
                                        <span>{$vicha[chooseSJ].num_student}/{$vicha[chooseSJ].max_student}
                                            <img src={plus} alt="plus" id="plus" on:click={select_SF230}>
                                        </span>
                                    </h2>
                                </div>
                                <div id="detail">
                                    <span id="day">Day: {$vicha[chooseSJ].day}
                                        <span id="prof-230">{$vicha[chooseSJ].prof}</span>
                                    </span>
                                    <br>
                                    <span id="time">Time: {$vicha[chooseSJ].time}
                                        <span id="credit">Credit: {$vicha[chooseSJ].credit}</span>
                                    </span>
                                </div>
                            {/if}
                    <!-- TU107 -->
                        {:else if chooseSJ == "TU107"}
                        <!-- TU107 After Select -->
                            {#if select_107 == '107'}
                                <div id="sec-after">
                                    <h2>{$vicha[chooseSJ].sec} 
                                        <span>{$vicha[chooseSJ].num_student}/{$vicha[chooseSJ].max_student}
                                        </span>
                                    </h2>
                                </div>
                                <div id="detail-after">
                                    <span id="day">Day: {$vicha[chooseSJ].day}
                                        <span id="prof-107">{$vicha[chooseSJ].prof}</span>
                                    </span>
                                    <br>
                                    <span id="time">Time: {$vicha[chooseSJ].time}
                                        <span id="credit">Credit: {$vicha[chooseSJ].credit}</span>
                                    </span>
                                </div>
                            <!-- TU107 Before Select -->
                            {:else if select_107 == ''}
                                <div id="sec">
                                    <h2>{$vicha[chooseSJ].sec} 
                                        <span>{$vicha[chooseSJ].num_student}/{$vicha[chooseSJ].max_student}
                                            <img src={plus} alt="plus" id="plus" on:click={select_TU107}>
                                        </span>
                                    </h2>
                                </div>
                                <div id="detail">
                                    <span id="day">Day: {$vicha[chooseSJ].day}
                                        <span id="prof-107">{$vicha[chooseSJ].prof}</span>
                                    </span>
                                    <br>
                                    <span id="time">Time: {$vicha[chooseSJ].time}
                                        <span id="credit">Credit: {$vicha[chooseSJ].credit}</span>
                                    </span>
                                </div>
                            {/if}
                    <!-- TU109 -->
                        {:else if chooseSJ == "TU109"}
                        <!-- TU109 After Select -->
                            {#if select_109 == '109'}
                                <div id="sec-after">
                                    <h2>{$vicha[chooseSJ].sec} 
                                        <span>{$vicha[chooseSJ].num_student}/{$vicha[chooseSJ].max_student}
                                        </span>
                                    </h2>
                                </div>
                                <div id="detail-after">
                                    <span id="day">Day: {$vicha[chooseSJ].day}
                                        <span id="prof-109">{$vicha[chooseSJ].prof}</span>
                                    </span>
                                    <br>
                                    <span id="time">Time: {$vicha[chooseSJ].time}
                                        <span id="credit">Credit: {$vicha[chooseSJ].credit}</span>
                                    </span>
                                </div>
                            <!-- TU109 Before Select -->
                            {:else if select_109 == ''}
                                <div id="sec">
                                    <h2>{$vicha[chooseSJ].sec} 
                                        <span>{$vicha[chooseSJ].num_student}/{$vicha[chooseSJ].max_student}
                                            <img src={plus} alt="plus" id="plus" on:click={select_TU109}>
                                        </span>
                                    </h2>
                                </div>
                                <div id="detail">
                                    <span id="day">Day: {$vicha[chooseSJ].day}
                                        <span id="prof-109">{$vicha[chooseSJ].prof}</span>
                                    </span>
                                    <br>
                                    <span id="time">Time: {$vicha[chooseSJ].time}
                                        <span id="credit">Credit: {$vicha[chooseSJ].credit}</span>
                                    </span>
                                </div>
                            {/if}
                    {/if}
                </div>
            {/if}
        {:else if (!(final < today))}
            {#if check == true}
                <div class="subject">
                <!-- SF210 -->
                    {#if chooseSJ == "SF210"}
                    <!-- SF210 After Select -->
                        {#if select_210 == 'sec1'}
                            <div id="sec-after">
                                <h2>{$vicha[chooseSJ].sec1} 
                                    <span>{$vicha[chooseSJ].num_student1}/{$vicha[chooseSJ].max_student}</span>
                                </h2>
                            </div>
                            <div id="detail-after">
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
                            <div id="sec">
                            <h2>{$vicha[chooseSJ].sec2} 
                                <span>{$vicha[chooseSJ].num_student2}/{$vicha[chooseSJ].max_student}
                                    <img src={plus} alt="plus" id="plus">
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
                    <!-- SF210 After Select2 -->
                        {:else if select_210 == 'sec2'}
                            <div id="sec">
                                <h2>{$vicha[chooseSJ].sec1} 
                                    <span>{$vicha[chooseSJ].num_student1}/{$vicha[chooseSJ].max_student}
                                        <img src={plus} alt="plus" id="plus">
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
                            <div id="sec-after">
                            <h2>{$vicha[chooseSJ].sec2} 
                                <span>{$vicha[chooseSJ].num_student2}/{$vicha[chooseSJ].max_student}</span>
                            </h2>
                            </div>
                            <div id="detail-after">
                                <span id="day">Day: {$vicha[chooseSJ].day}
                                    <span id="prof-210">{$vicha[chooseSJ].prof}</span>
                                </span>
                                <br>
                                <span id="time">Time: {$vicha[chooseSJ].time2}
                                    <span id="credit">Credit: {$vicha[chooseSJ].credit}</span>
                                </span>
                            </div>
                    <!-- SF210 Before Select -->
                        {:else if select_210 == ''}
                            <div id="sec">
                                <h2>{$vicha[chooseSJ].sec1} 
                                    <span>{$vicha[chooseSJ].num_student1}/{$vicha[chooseSJ].max_student}
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
                            <div id="sec">
                                <h2>{$vicha[chooseSJ].sec2} 
                                    <span>{$vicha[chooseSJ].num_student2}/{$vicha[chooseSJ].max_student}
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
                        {/if}
                    <!-- SF220 -->
                        {:else if chooseSJ == "SF220"}
                        <!-- SF220 After Select -->
                            {#if select_220 == '220'}
                                <div id="sec-after">
                                    <h2>{$vicha[chooseSJ].sec} 
                                        <span>{$vicha[chooseSJ].num_student}/{$vicha[chooseSJ].max_student}</span>
                                    </h2>
                                </div>
                                <div id="detail-after">
                                    <span id="day">Day: {$vicha[chooseSJ].day}
                                        <span id="prof-220">{$vicha[chooseSJ].prof}</span>
                                    </span>
                                    <br>
                                    <span id="time">Time: {$vicha[chooseSJ].time}
                                        <span id="credit">Credit: {$vicha[chooseSJ].credit}</span>
                                    </span>
                                </div>
                        <!-- SF220 Before Select -->
                            {:else if select_220 == ''}
                                <div id="sec">
                                    <h2>{$vicha[chooseSJ].sec} 
                                        <span>{$vicha[chooseSJ].num_student}/{$vicha[chooseSJ].max_student}
                                        </span>
                                    </h2>
                                </div>
                                <div id="detail">
                                    <span id="day">Day: {$vicha[chooseSJ].day}
                                        <span id="prof-220">{$vicha[chooseSJ].prof}</span>
                                    </span>
                                    <br>
                                    <span id="time">Time: {$vicha[chooseSJ].time}
                                        <span id="credit">Credit: {$vicha[chooseSJ].credit}</span>
                                    </span>
                                </div>
                            {/if}
                    <!-- SF230 -->
                        {:else if chooseSJ == "SF230"}
                        <!-- SF230 After Select -->
                            {#if select_230 == '230'}
                                <div id="sec-after">
                                    <h2>{$vicha[chooseSJ].sec} 
                                        <span>{$vicha[chooseSJ].num_student}/{$vicha[chooseSJ].max_student}
                                        </span>
                                    </h2>
                                </div>
                                <div id="detail-after">
                                    <span id="day">Day: {$vicha[chooseSJ].day}
                                        <span id="prof-230">{$vicha[chooseSJ].prof}</span>
                                    </span>
                                    <br>
                                    <span id="time">Time: {$vicha[chooseSJ].time}
                                        <span id="credit">Credit: {$vicha[chooseSJ].credit}</span>
                                    </span>
                                </div>
                        <!-- SF230 Before Select -->
                            {:else if select_230 == ''}
                                <div id="sec">
                                    <h2>{$vicha[chooseSJ].sec} 
                                        <span>{$vicha[chooseSJ].num_student}/{$vicha[chooseSJ].max_student}
                                        </span>
                                    </h2>
                                </div>
                                <div id="detail">
                                    <span id="day">Day: {$vicha[chooseSJ].day}
                                        <span id="prof-230">{$vicha[chooseSJ].prof}</span>
                                    </span>
                                    <br>
                                    <span id="time">Time: {$vicha[chooseSJ].time}
                                        <span id="credit">Credit: {$vicha[chooseSJ].credit}</span>
                                    </span>
                                </div>
                            {/if}
                    <!-- TU107 -->
                        {:else if chooseSJ == "TU107"}
                        <!-- TU107 After Select -->
                            {#if select_107 == '107'}
                                <div id="sec-after">
                                    <h2>{$vicha[chooseSJ].sec} 
                                        <span>{$vicha[chooseSJ].num_student}/{$vicha[chooseSJ].max_student}
                                        </span>
                                    </h2>
                                </div>
                                <div id="detail-after">
                                    <span id="day">Day: {$vicha[chooseSJ].day}
                                        <span id="prof-107">{$vicha[chooseSJ].prof}</span>
                                    </span>
                                    <br>
                                    <span id="time">Time: {$vicha[chooseSJ].time}
                                        <span id="credit">Credit: {$vicha[chooseSJ].credit}</span>
                                    </span>
                                </div>
                            <!-- TU107 Before Select -->
                            {:else if select_107 == ''}
                                <div id="sec">
                                    <h2>{$vicha[chooseSJ].sec} 
                                        <span>{$vicha[chooseSJ].num_student}/{$vicha[chooseSJ].max_student}
                                        </span>
                                    </h2>
                                </div>
                                <div id="detail">
                                    <span id="day">Day: {$vicha[chooseSJ].day}
                                        <span id="prof-107">{$vicha[chooseSJ].prof}</span>
                                    </span>
                                    <br>
                                    <span id="time">Time: {$vicha[chooseSJ].time}
                                        <span id="credit">Credit: {$vicha[chooseSJ].credit}</span>
                                    </span>
                                </div>
                            {/if}
                    <!-- TU109 -->
                        {:else if chooseSJ == "TU109"}
                        <!-- TU109 After Select -->
                            {#if select_109 == '109'}
                                <div id="sec-after">
                                    <h2>{$vicha[chooseSJ].sec} 
                                        <span>{$vicha[chooseSJ].num_student}/{$vicha[chooseSJ].max_student}
                                        </span>
                                    </h2>
                                </div>
                                <div id="detail-after">
                                    <span id="day">Day: {$vicha[chooseSJ].day}
                                        <span id="prof-109">{$vicha[chooseSJ].prof}</span>
                                    </span>
                                    <br>
                                    <span id="time">Time: {$vicha[chooseSJ].time}
                                        <span id="credit">Credit: {$vicha[chooseSJ].credit}</span>
                                    </span>
                                </div>
                            <!-- TU109 Before Select -->
                            {:else if select_109 == ''}
                                <div id="sec">
                                    <h2>{$vicha[chooseSJ].sec} 
                                        <span>{$vicha[chooseSJ].num_student}/{$vicha[chooseSJ].max_student}
                                        </span>
                                    </h2>
                                </div>
                                <div id="detail">
                                    <span id="day">Day: {$vicha[chooseSJ].day}
                                        <span id="prof-109">{$vicha[chooseSJ].prof}</span>
                                    </span>
                                    <br>
                                    <span id="time">Time: {$vicha[chooseSJ].time}
                                        <span id="credit">Credit: {$vicha[chooseSJ].credit}</span>
                                    </span>
                                </div>
                            {/if}
                    {/if}
                </div>
            {/if}
        {/if}
    </div>
</main>


<style>
    @media screen and (max-width:2560px) {
        /* Side bar */
    .side-bar {
        position: absolute;
        width: 300px;
        height: 1080px;
        left: 0px;
        top: 0px;

        background: #DC0B00;
    }
    #logo {
      position: absolute;
      width: 180px;
      height: 185.61px;
      left: 60px;
      top: 30px;
    }
     #line {
        position: absolute;
        width: 300px;
        height: 0px;
        left: 0px;
        top: 240px;

        border: 2px solid #FFFFFF;
    }
    #search {
        position: absolute;
        width: 200px;
        height: 50px;
        left: 50px;
        top: 290px;
        font-size: 17px;

        border: #FFFFFF;
        background: #FFFFFF;
        border-radius: 31.5px;
    }
    #quota {
        position: absolute;
        width: 200px;
        height: 50px;
        left: 50px;
        top: 365px;
        font-size: 17px;
      
        border: #FFFFFF;
        background: #FFFFFF;
        border-radius: 31.5px;
    }
    #payment {
        position: absolute;
        width: 200px;
        height: 50px;
        left: 50px;
        top: 440px;
        font-size: 17px;

        background: #FFFFFF;
        border: #FFFFFF;
        border-radius: 31.5px;
    }
    #logout {
        position: absolute;
        width: 200px;
        height: 50px;
        left: 50px;
        top: 981px;
        font-size: 17px;

        border: #FFFFFF;
        background: #FFFFFF;
        border-radius: 31.5px;
    }

    /* Content in Web page */
    #university {
        position: absolute;
        width: 1100px;
        height: 160px;
        left: 350px;
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
        width: 1100px;
        height: 120px;
        left: 350px;
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
      width: 1100px;
      height: 100px;
      left: 350px;
      top: 300px;

      background: rgba(255, 92, 92, 0.75);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      transform: rotate(-0.12deg);
    }

    #search-area {
      position: absolute;
      width: 965px;
      height: 60px;
      left: 12px;
      top: 16.5px;

      background: #FFFFFF;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;

      font-family: 'Mulish';
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 30px;
    }
    #search-area[type="text"] {
        padding-left: 20px;
    }

    #search-logo {
      position: absolute;
      width: 75px;
      height: 63px;
      left: 1010px;
      top: 18.5px;
    }

    /* Choose Subject */
    .subject {
        margin-top: 150px;
    }
    #sec {
        width: 1100px;
        height: 60px;
        left: 12px;
        top: 500px;
        border: 2px solid rgba(255, 92, 92, 0.75);
        border-radius: 10px;
        background: rgba(255, 92, 92, 0.75);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    #sec h2{
        position: fixed;
        margin-top: 1.5%;
        padding-left: 20px;
        font-weight: 300;
    } 
    #sec h2 span {
        position: fixed;
        margin-left: 70%;
    }
    #plus {
        position: fixed;
        width: 44px;
        height: 48px;
        margin-top: -1%;
        margin-left: 3%;
    }
    #detail {
        width: 1100px;
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
        font-size: 25px;
        line-height: 80px;
        padding-left: 20px;
        
        color: #000000;
        
        mix-blend-mode: normal;
    }
    #prof-210 {
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 45px;
        margin-left: 19%;

        color: #000000;

        mix-blend-mode: normal;
    }
    #prof-220 {
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 45px;
        margin-left: 18%;

        color: #000000;

        mix-blend-mode: normal;
    }
    #prof-230 {
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 45px;
        margin-left: 18.3%;

        color: #000000;

        mix-blend-mode: normal;
    }
    #prof-107 {
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 45px;
        margin-left: 18.7%;

        color: #000000;

        mix-blend-mode: normal;
    }
    #prof-109 {
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 45px;
        margin-left: 16%;

        color: #000000;

        mix-blend-mode: normal;
    }
    #time {
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 45px;
        padding-left: 20px;

        color: #000000;

        mix-blend-mode: normal;
    }
    #credit {
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 45px;
        margin-left: 6.75%;

        color: #000000;

        mix-blend-mode: normal;
    }
    #sec-after {
        width: 1100px;
        height: 60px;
        left: 12px;
        top: 500px;
        border: 2px solid rgba(92, 255, 109, 0.6);
        border-radius: 10px;
        background: rgba(92, 255, 109, 0.6);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    #sec-after h2{
        position: flex;
        margin-top: 1.5%;
        padding-left: 20px;
        font-weight: 300;
    }
    #sec-after h2 span {
        margin-left: 70%;
    }
    #detail-after {
        width: 1100px;
        height: 151.14px;
        left: 12px;
        top: 510px;

        background: rgba(92, 255, 109, 0.1);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px
    }
    #time-bar {
      position: absolute;
      width: 300px;
      height:50px;
      left: 70px;
      top: 930px;
      
      font-size: 30px;
      color: #fff000;
        }
    }
    @media screen and (min-width:1920px) and (max-width:2500px) and (max-height:1200px){
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

 /* Content in Web page  */
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

    /* Choose Subject */
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
    #sec h2{
        position: fixed;
        margin-top: 1%;
        padding-left: 20px;
        font-weight: 300;
        font-size: 36px;
    }
    #sec h2 span {
        position: fixed;
        margin-left: 70%;
    }
    #plus {
        position: fixed;
        width: 44px;
        height: 48px;
        margin-top: -0.5%;
        margin-left: 3%;
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
    #prof-210 {
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        margin-left: 19%;

        color: #000000;

        mix-blend-mode: normal;
    }
    #prof-220 {
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        margin-left: 18%;

        color: #000000;

        mix-blend-mode: normal;
    }
    #prof-230 {
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        margin-left: 18.3%;

        color: #000000;

        mix-blend-mode: normal;
    }
    #prof-107 {
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        margin-left: 18.7%;

        color: #000000;

        mix-blend-mode: normal;
    }
    #prof-109 {
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        margin-left: 16%;

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
    #sec-after {
        width: 1500px;
        height: 69px;
        left: 12px;
        top: 500px;
        border: 2px solid rgba(92, 255, 109, 0.6);
        border-radius: 10px;
        background: rgba(92, 255, 109, 0.6);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    #sec-after h2{
        margin-top: 1%;
        padding-left: 20px;
        font-weight: 300;
        font-size: 36px;
    }
    #sec-after h2 span {
        margin-left: 70%;
    }
    #detail-after {
        width: 1500px;
        height: 151.14px;
        left: 12px;
        top: 510px;

        background: rgba(92, 255, 109, 0.1);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px
    }
    #time-bar {
        position: absolute;
        width: 300px;
        height:50px;
        left: 115px;
        top: 930px;
        
        font-size: 30px;
        color: #fff000;
        }
    }
</style>