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
    alert('ประกาศเรื่อง การขอโควตารายวิชา สามารถขอโควตาได้ตั้งแต่ บัดนี้ - 30 เมษายน 2565 ');
</script>

<main>
    <div class="side-bar">
        <img src={logo} alt="logo" id="LoGo">
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
