<script>
    import logo from './assets/logo.png'
    import { accounts, account, mode, islogin } from './data.js';
    import { time } from './time.js';
    import './style/main_style.css'
    function logout() {
        $islogin = false;
        $mode = '';
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
        <img src={logo} alt="logo" id="logo">
        <hr id="line">
        <button id="search" on:click={()=>$mode = 'search'}>ค้นหารายวิชา</button>
        <button id="quota" on:click={() =>$mode = 'quota'}>ผลการขอโควตา</button>
        <button id="payment" on:click={() =>$mode = 'payment'}>ชำระเงิน</button>
        <button id="logout" on:click={logout}>ออกจากระบบ</button>
        <span id = "time-bar">{formatter.format($time)}</span>
    </div>
    <div>
        <h1 id="university">Thammasat University</h1>
        <h3 id="welcome">ยินดีต้อนรับเข้าสู่ระบบ</h3>
        <hr id="line2">
        <span id="name">คุณ {$accounts[$account].name} : {$accounts[$account].userid}</span>
    </div>
</main>

<style>
    @media screen and (max-width:2560px) {
    #logo {
        position: absolute;
        width: 180px;
        height: 185.61px;
        margin-left: 0px;
        top: 30px;
    }
}
@media screen and (min-width:1920px) and (max-width:2500px) {
    #logo {
        position: absolute;
        width: 180px;
        height: 185.61px;
        margin-left: 0px;
        top: 26px
    }
}
</style>