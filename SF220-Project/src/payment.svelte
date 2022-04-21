<script>
    import logo from './assets/logo.png'
    import qr from './assets/qrcode.jpg'
    import { account, mode, islogin, narathip, wasawat, phatthira, yongyut, chaibancha } from './data.js';
    import { vicha, list_subject } from './listSJ.js'
    import { time } from './time.js';
    import './style/payment_style.css'

    function logout() {
        $islogin = false;
        $mode = '';
    }

    let basket = [];

    if ($account == "6410742412"){
        basket = $narathip;
    } else if ($account == "6410742735"){ 
        basket = $wasawat;
    } else if ($account == "6410742453"){
        basket = $phatthira;
    } else if ($account == "6410742693"){
        basket = $yongyut;
    } else {
        basket = $chaibancha;
    }

    let c = 0;
    let total = 0;
    function calculate(node) {
        c += 3;
        total += 5400;
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
        <hr id="Line1">
        <button id="search" on:click={()=>$mode = 'search'}>ค้นหารายวิชา</button>
        <button id="quota" on:click={() =>$mode = 'quota'}>ผลการขอโควตา</button>
        <button id="payment" on:click={() =>$mode = 'payment'}>ชำระเงิน</button>
        <button id="logout" on:click={logout}>ออกจากระบบ</button>
        <span id = "time-bar">{formatter.format($time)}</span>
    </div>
    <div class="Top-content">
        <h1>Thammasat University</h1>
        <h3>ชำระเงิน</h3>
    </div>
    <div class="mAin-content">
       {#each basket as name}
           <h1>
               {#if ($vicha[name].name) == 'TU107' || ($vicha[name].name) == 'TU109'}
                    <span id='Item1'>{$vicha[name].name}</span>
                    <span id='Item2'>{$vicha[name].sec}</span>
                    <span id='Item3' use:calculate><b>Credit:</b> {$vicha[name].credit}</span>
                    <span id='Item4'>{$vicha[name].cost}</span>
                {:else if name == 'SF210'}
                    <span id='Item1'>{$vicha[name].name}</span>
                    <span id='Item9'>{$vicha[name].sec1}</span>
                    <span id='Item3' use:calculate><b>Credit:</b> {$vicha[name].credit}</span>
                    <span id='Item4'>{$vicha[name].cost}</span>
                {:else if name == 'SF210_2'}
                    <span id='Item1'>{$vicha[name].name}</span>
                    <span id='Item9'>{$vicha[name].sec2}</span>
                    <span id='Item3' use:calculate><b>Credit:</b> {$vicha["SF210"].credit}</span>
                    <span id='Item4'>{$vicha["SF210"].cost}</span>
                {:else}
                    <span id='Item5'>{$vicha[name].name}</span>
                    {#if name == "TU104"}
                        <span id='Item10'>{$vicha[name].sec}</span>
                    {:else if name == "TU105" || name == "TU050"}
                        <span id='Item11'>{$vicha[name].sec}</span>
                    {:else if name == "MA111"}
                        <span id='Item12'>{$vicha[name].sec}</span>
                    {:else if name == "SC135"}
                        <span id='Item13'>{$vicha[name].sec}</span>
                    {:else if name == "CN311"}
                        <span id='Item14'>{$vicha[name].sec}</span>
                    {:else}
                        <span id='Item6'>{$vicha[name].sec}</span>
                    {/if}
                    <span id='Item7' use:calculate><b>Credit:</b> {$vicha[name].credit}</span>
                    <span id='Item8'>{$vicha[name].cost}</span>
                {/if}
           </h1>
       {/each}
        <hr id="Line2">
        <h1>
            <span id="total-payment"><b>รวม</b></span>
            <span id="total-credit"><b>Credit:</b> {c}</span>
            {#if total >= 10000}
                {#if total > 20000}
                    <span id="total3">{String(total).slice(0, 2)},{String(total).slice(2)} BAHT</span>
                {:else} 
                    <span id="total1">{String(total).slice(0, 2)},{String(total).slice(2)} BAHT</span>
                {/if}
            {:else if total >= 5400 && total < 10000}
                <span id="total2">{String(total)[0]},{String(total).slice(1)} BAHT</span>
            {:else}
                <span id="total2">{String(total)[0]} BAHT</span>
            {/if}
        </h1>
        {#if basket.length == 1}
            <img src={qr} alt="qrcode" id="qrcode-1">
        {:else if basket.length == 2}
            <img src={qr} alt="qrcode" id="qrcode-2">
        {:else if basket.length == 3}
            <img src={qr} alt="qrcode" id="qrcode-3">
        {:else if basket.length == 4}
            <img src={qr} alt="qrcode" id="qrcode-4">
        {:else if basket.length == 5}
            <img src={qr} alt="qrcode" id="qrcode-5">
        {:else if basket.length == 6}
            <img src={qr} alt="qrcode" id="qrcode-6">
        {:else if basket.length == 7}
            <img src={qr} alt="qrcode" id="qrcode-7">
        {/if}
        
    </div>
</main>