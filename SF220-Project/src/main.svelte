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
            height: 465px;
            left: 350px;
            top: 50px;

            font-family: 'Mulish';
            font-style: normal;
            font-weight: 400;
            font-size: 96px;
            line-height: 120px;
            align-items: center;

            color: #FF0000;

            mix-blend-mode: normal;
        }
        #welcome {
            position: absolute;
            width: 1100px;
            height: 465px;
            left: 350px;
            top: 160px;

            font-family: 'Mulish';
            font-style: normal;
            font-weight: 400;
            font-size: 96px;
            line-height: 120px;
            align-items: center;

            color: #245564;

            mix-blend-mode: normal;
        }
        #line2 {
            position: absolute;
            width: 1100px;
            height: 0px;
            left: 350px;
            top: 400px;

            border: 3px solid #000000;
        }
        #name {
            position: absolute;
            width: 1100px;
            height: 465px;
            left: 350px;
            top: 250px;

            font-family: 'Mulish';
            font-style: normal;
            font-weight: 600;
            font-size: 36px;
            line-height: 45px;
            display: flex;
            align-items: center;

            color: #000000;

            mix-blend-mode: normal;
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
    @media screen and (min-width:1920px) and (max-width:2500px) {
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

        /* Content in Web page */
        #university {
            position: absolute;
            width: 1019px;
            height: 465px;
            left: 450px;
            top: 50px;

            font-family: 'Mulish';
            font-style: normal;
            font-weight: 400;
            font-size: 96px;
            line-height: 120px;
            align-items: center;

            color: #FF0000;

            mix-blend-mode: normal;
        }
        #welcome {
            position: absolute;
            width: 1019px;
            height: 465px;
            left: 450px;
            top: 160px;

            font-family: 'Mulish';
            font-style: normal;
            font-weight: 400;
            font-size: 96px;
            line-height: 120px;
            align-items: center;

            color: #245564;

            mix-blend-mode: normal;
        }
        #line2 {
            position: absolute;
            width: 1300px;
            height: 0px;
            left: 450px;
            top: 400px;

            border: 3px solid #000000;
        }
        #name {
            position: absolute;
            width: 1019px;
            height: 465px;
            left: 450px;
            top: 250px;

            font-family: 'Mulish';
            font-style: normal;
            font-weight: 600;
            font-size: 36px;
            line-height: 45px;
            display: flex;
            align-items: center;

            color: #000000;

            mix-blend-mode: normal;
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