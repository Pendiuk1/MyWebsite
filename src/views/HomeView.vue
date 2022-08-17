<script setup>
  import {titleGitHub, descGitHub, linkedInIcon, fCCIcon, closedBookIcon, openedBookIcon, gitHubIcon, titleFCC, titleLinkedIn, contactIcon} from '@/global';
  import ExtMe from '@/components/ExtMe.vue';
  import {RouterLink} from "vue-router";
</script>

<template>
  <main>
    <h1 unselectable="on">GUILHERME PENDIUK</h1>

    <h2 unselectable="on">Web Developer</h2>

    <div class="extMeLinks">
      <a href="https://github.com/Pendiuk1" target="_blank">
        <ExtMe class="extLinks l2" :text="titleGitHub" :icon="gitHubIcon"/>
      </a>

      <RouterLink to="/contact" class="link-contact">
        <ExtMe class="extLinks l4" text="Talk to Me!" :icon="contactIcon"/>
      </RouterLink>

      <a href="https://www.linkedin.com/in/pendiukg/" target="_blank">
        <ExtMe class="extLinks l3" :text="titleLinkedIn" :icon="linkedInIcon"/>
      </a>
    </div>

    <RouterLink to="/portfolio" class="link-portfolio">
      <awesomeIcon :icon="closedBookIcon"></awesomeIcon>
      <p>PORTFOLIO</p>
    </RouterLink>
    
  </main>
</template>

<style>
  main{
    position: relative;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 100vh;
    width: 100vw;
    color:cornsilk;
    background:#000 url('@/assets/backgroundHome.jpg')no-repeat;
    background-size: cover;
    background-position: center;
  }

  .link-portfolio{
    position: fixed;
    bottom: 10px;
    text-align: center;
    right: auto;
    left: auto;
    background: #000;
    box-shadow: 0px 3px 3px rgba(253, 237, 191, 0.651);
    padding: 5px;
    margin-top: 4vh;

    font-size: 0.9rem;
    font-weight: 100;
    color:white;
    text-decoration: none;
    letter-spacing: 2px;
  }

  .fa-book{
    font-size: 1.1rem;
  }

  .extMeLinks{
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top:5vh;
    margin-bottom: 4vh;
  }

  .extLinks{
    margin: 0px 2vw;
  }

  main h1{
    font-size: 2em;
    margin:0;
    user-select: none;
  }
  main h2{
    font-size: 1.5em;
    margin-top: 10px;
    user-select: none;
  }
 
  .extMe {
    position: relative;
    width: 15vw;
    height: 15vw;
    display: flex;
    justify-content: center;
    align-content: center;
    transition: 0.5s;
    background: #060c21;
  }

  .extMe .icon {
    position: absolute;
    width: 10vw;
    height: 10vw;
    padding: 2vw;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-content: center;
    max-width: 100%;
    transition: 0.5s;
    font-size: 8vw;
    color:#ccc;
  }

  .extMe:before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    opacity: 0.2;
  }

  .extMe:after {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    opacity: 0.9;
    filter: blur(30px);
  }

  .extMe .content {
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
    height: 50px;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: 0.2s;
  }

  .extMe .content > h3 {
    color: #fff;
    font-weight: 500;
    text-align: center;
    line-height: 20px;
    letter-spacing: 1px;
    font-size: 20px;
  }

  .extMe .content > h4 {
    color: #fff;
    font-weight: 500;
    text-align: center;
    line-height: 20px;
    letter-spacing: 1px;
    font-size: 14px;
  }
  
  .l4:before,
  .l4:after,
  .l1:before,
  .l1:after {
    background: linear-gradient(235deg, #70cf03, #222e55, #01b1c9);
    animation: rotates 8s linear infinite, blurFlash 1s linear infinite;
    background-size: 300%;
  }
  
  .l2:before,
  .l2:after {
    background: linear-gradient(235deg, #d44c7e, #010615, #d3d603);
    animation: rotates 12s linear infinite, blurFlash 1s linear infinite;
    background-size: 300%;
  }
  
  .l3:before,
  .l3:after {
    background: linear-gradient(235deg, #9256fa, #010615, #0088f8);
    animation: rotates 10s linear infinite, blurFlash 1s linear infinite;
    background-size: 300%;
  }
  
  @keyframes rotates{
      0%{
          background-position: 0 0;
      }
      50%{
          background-position: 100% 0;
      }
      100%{
          background-position: 0 0;
      }
  }
  
  @keyframes blurFlash{
      0%{
          filter: blur(30px);
      }
      50%{
          filter: blur(35px);
      }
      100%{
          filter: blur(30px);
      }
  }

  /* Stop increasing size of things */
  @media only screen and (min-width: 534px){
    .extMe .icon{
      font-size:40px;
      width: 54px;
      height: 54px;
      padding: 10px;
    }

    .extMe{
      width: 80px;
      height: 80px;
    }
  }

  /* Stop decreasing size of things -> width  */
  @media only screen and (max-width: 350px){
    main{
      position: absolute;
      width: 350px;
      overflow-x: scroll;
    }

    .extLinks{
      margin: 0px 7px;
    }

    main h1{
      font-size: 32px;
    }
    main h2{
      font-size: 26px;
    }
  
    .extMe {
      width: 53px;
      height: 53px;
      display: flex;
    }

    .extMe .icon {
      width: 35px;
      height: 35px;
      padding: 7px;
      font-size: 29px;
    }
  }

  /* Stop decreasing size of things -> height  */
  @media only screen and (max-height: 340px){
  main{
      position: absolute;
      height: 340px;
      overflow-y: scroll;
    }

    .link-portfolio{
      position: absolute;
      margin-top: 14px;
      font-size: 14px;
    }

    .fa-book{
      font-size: 18px;
    }

    .extMeLinks{
      margin-top:17px;
      margin-bottom: 14px;
    }

    .extLinks{
      margin: 0px 10px;
    }

    main h1{
      font-size: 32px;
    }
    main h2{
      font-size: 26px;
      margin-top: 10px;
    }
    
    .extMe {
      width: 68px;
      height: 68px;
    }

    .extMe .icon {
        width: 35px;
        height: 35px;
        padding: 7px;
        font-size: 29px;
    }
  }

  /* Allow hover effects */
  @media only screen and (any-hover){
      
        .link-portfolio:hover{
          animation: down 3s ease 2;
        }
      
        @keyframes down{
          0%{
            transform: translate(0, 0);
          }
          12%{
            transform: translate(0, 10px);
          }
          24%{
            transform: translate(0, 0);
          }
          36%{
            transform: translate(0, 10px);
          }
          48%{
            transform: translate(0, 0);
          }
        }
      
        .l4:hover,
        .l1:hover{
          height: 130px;
          width: 200px;
        }
      
        .l2:hover{
          height: 130px;
          width: 120px;
        }
      
        .l3:hover{
          height: 130px;
          width: 120px;
        }
      
        .extMe:hover .content {
          opacity: 1;
          z-index: 5;
        }
      
        .extMe:hover .icon{
          opacity: 1;
          z-index: 1;
          color:white;
        }
      
  }


</style>
