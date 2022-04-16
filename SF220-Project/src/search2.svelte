<script>
    import logo from './assets/logo.png'
    import searchlogo from './assets/search.png'
    import plus from './assets/plus.png'
    import { mode, islogin} from './data.js'
    import { vicha, list_subject} from './listSJ.js'
    
    function logout() {
        $islogin = false;
        $mode = '';
    }

// Choose Subject
    let searchSJ = '';
    let chooseSJ = '';

    let resultSJ = '';
    let resultSF2102nd = '';
    function checkSJ(searchSJ) {    
      if($vicha[searchSJ].name == "SF210"){
        var img = plus;
        resultSJ =  
        `<div id="sec">
            <h2>${$vicha[searchSJ].sec1}
                <span>${$vicha[searchSJ].num_student1}/${$vicha[searchSJ].max_student}
                    <img src={img} alt="plus" id="plus">
                </span>
            </h2>
         </div> 
         <div id="detail">
            <span id="day">Day: ${$vicha[searchSJ].day}
                <span id="prof">${$vicha[searchSJ].prof}</span>
            </span>
            <br>
            <span id="time">Time: ${$vicha[searchSJ].time1}
                <span id="credit">Credit: ${$vicha[searchSJ].credit}</span>
            </span>
        </div>
        <style>
            #sec {
                width: 1100px;
                height: 60px;
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
            #prof {
                font-family: 'Mulish';
                font-style: normal;
                font-weight: 400;
                font-size: 25px;
                line-height: 45px;
                margin-left: 19%;
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
        </style>`
        
        resultSF2102nd = 
        `<div id="sec">
            <h2>${$vicha[searchSJ].sec2}
                <span>${$vicha[searchSJ].num_student2}/${$vicha[searchSJ].max_student}
                    <img src={img} alt="plus" id="plus">
                </span>
            </h2>
         </div> 
         <div id="detail">
            <span id="day">Day: ${$vicha[searchSJ].day}
                <span id="prof">${$vicha[searchSJ].prof}</span>
            </span>
            <br>
            <span id="time">Time: ${$vicha[searchSJ].time2}
                <span id="credit">Credit: ${$vicha[searchSJ].credit}</span>
            </span>
        </div>
        <style>
            #sec {
                width: 1100px;
                height: 60px;
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
            #prof {
                font-family: 'Mulish';
                font-style: normal;
                font-weight: 400;
                font-size: 25px;
                line-height: 45px;
                margin-left: 19%;
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
        </style>` 
      }
      else if($vicha[searchSJ].name){
        resultSJ = 
        `<div id="sec">
            <h2>${$vicha[searchSJ].sec}
                <span>${$vicha[searchSJ].num_student}/${$vicha[searchSJ].max_student}
                    <img src={plus} alt="plus" id="plus">
                </span>
            </h2>
         </div> 
         <div id="detail">
            <span id="day">Day: ${$vicha[searchSJ].day}
                <span id="prof">${$vicha[searchSJ].prof}</span>
            </span>
            <br>
            <span id="time">Time: ${$vicha[searchSJ].time}
                <span id="credit">Credit: ${$vicha[searchSJ].credit}</span>
            </span>
        </div>
        <style>
            #sec {
                width: 1100px;
                height: 60px;
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
            #prof {
                font-family: 'Mulish';
                font-style: normal;
                font-weight: 400;
                font-size: 25px;
                line-height: 45px;
                margin-left: 20%;
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
                margin-left: 7%;

                color: #000000;

                mix-blend-mode: normal;
            }
        </style>`
        resultSF2102nd = ''
      }
    }

</script>


<main>
    <div class="side-bar">
        <img src={logo} alt="logo" id="logo" on:click={() =>$mode = 'main'}>
        <hr id="line">
        <button id="search" on:click={()=>$mode = 'search'}>ค้นหารายวิชา</button>
        <button id="quota" on:click={() =>$mode = 'quota'}>ผลการขอโควตา</button>
        <button id="payment" on:click={() =>$mode = 'payment'}>ชำระเงิน</button>
        <button id="logout" on:click={logout}>ออกจากระบบ</button>
    </div>
    <div>
        <h1 id="university">Thammasat University</h1>
        <h3 id="subject">ระบบค้นหาข้อมูลรายวิชา</h3>
    </div>

    <!-- Search -->
    <div class="search-bg">
        <input type="text" placeholder="Search" id="search-area"  bind:value={searchSJ}>
        <img src={searchlogo} alt="search-logo" id="search-logo" on:click={() => {checkSJ(searchSJ)}}>
        <div class="check_vicha">{@html resultSJ}</div>
        <br>
        <br>
        <div class="checkSF2102nd">{@html resultSF2102nd}</div>
    </div>
</main>

<style>
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

<!--     /* Content in Web page */ -->
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

    .check_vicha {
      margin-top: 13.5%;
    }
    .checkSF2102nd {
      margin-top: 0%;
    }
    
</style>