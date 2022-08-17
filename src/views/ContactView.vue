<template>
    <transition name="fade">
    <div class="form" v-if="!answered">
            <form @submit="onSubmit">
                <div class="inputBox">
                    <input type="text" id="username" required="required" v-model="user.name" placeholder=" ">
                    <span>name</span>
                    <i></i>
                </div>
                <div class="inputBox">
                    <input type="email" id="email" required="required" v-model="user.email" placeholder=" ">
                    <span>e-mail</span>
                    <i></i>
                </div>
                <div class="inputBox">
                    <textarea  id="msg" required="required" v-model="user.msg" placeholder=" "></textarea>
                    <span>message</span>
                    <i></i>
                </div>
                <div class="buttons">
                    <input type="submit" value="Send" class="submitButton" @click.prevent="onSubmit()">
                    <input type="button" value="Cancel" class="submitButton" @click.prevent="onCancel()">
                </div>
            </form>
            <footer><span>All information given will be used ONLY by the website author for the ONLY purpose of replying your message.</span></footer>
        </div>
        <div class="thank-you" v-else>
            <p>Thank you!</p>
        </div>
    </transition>
</template>

<script setup>
    import { ref } from 'vue';
    import {useRouter} from "vue-router"
    import {db} from '@/firebase/index'
    import { collection, addDoc } from "firebase/firestore"

    const user = ref({
        name:'',
        email: '',
        msg:''
    })

    const answered = ref(false);

    const router = useRouter()

    const onSubmit = async (e)=>{
        if(!user.value.name){
            alert('Please write your name.')
            return
        }else if(!user.value.email){
            alert('Please write your e-mail.')
            return
        }else if(!user.value.msg){
            alert('Please write your message.')
            return
        }
        try {
            const docRef = await addDoc(collection(db, "messages"), {
                Name: user.value.name,
                Msg: user.value.msg,
                Email: user.value.msg,
                Answered: false,
                Read: false
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        user.value.name = ''
        user.value.msg = ''
        user.value.email = ''
        answered.value = true;
        setTimeout(()=>{
		    router.push({name:'home'})
        }, 5000)
    }

    const onCancel = (e)=>{
		router.push({name:'home'})
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap');

.thank-you{
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
    width: 100vw;
    height: 100vh;
    font-family: 'Noto Sans';
    font-size: 3em;
    font-weight: 100;
}

footer{
    color:#fff;
    position: absolute;
    bottom: 10px;
    font-size: 0.7em;
    text-align: center;
}

.form{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    flex-direction: column;
    background: #000;
}

.inputBox{
    position: relative;
    width: 250px;
    padding-bottom: 30px;
}
.inputBox input{
    width: 100%;
    background: transparent;
    color:#fff;
    border: none;
    outline: none;
    box-shadow: none;
    font-size: 1em;
    letter-spacing: 0.1em;
    padding: 10px 0 5px;
}
.inputBox textarea{
    height: 20px;
    width: 100%;
    background: transparent;
    color:#fff;
    border: none;
    outline: none;
    box-shadow: none;
    font-size: 1em;
    letter-spacing: 0.1em;
    padding: 3px 0 5px;
    transition: 0.5s;
    resize: none;
    overflow: hidden;
    box-sizing: border-box;
}

.inputBox span{
    position: absolute;
    left:0;
    padding: 0px 0 5px;
    color: rgba(255,255,255,0.5);
    text-transform: uppercase;
    pointer-events: none;
    letter-spacing: 0.1em;
    transition: 0.5s;
}

.inputBox input:valid ~ span,
.inputBox input:focus ~ span{
    color:#2196f3;
    transform: translateY(-18px);
    font-size:0.65em;
}
.inputBox input:invalid:not(:placeholder-shown) ~ span{
    color:#ff1b69;
    transform: translateY(-18px);
    font-size:0.65em;
}
.inputBox textarea:valid ~ span,
.inputBox textarea:focus ~ span{
    color:#2196f3;
    position:absolute;
    transform: translateY(-18px);
    top: 0;
    font-size:0.65em;
}

.inputBox textarea:valid,
.inputBox textarea:focus{
    height: 250px;
    background: #111;
    transform: translateY(10px);
    font-size: 1em;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 5px;
    overflow: auto;
}


.inputBox input ~ i{
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 30px;
    left: 0;
    background: #fff;
    overflow: hidden;
}

.inputBox textarea ~ i{
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 22px;
    left: 0;
    background: #fff;
    overflow: hidden;
}

.inputBox i::before{
    content: '';
    position: absolute;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #ff1b69, #ff0, #2196f3, #9c27b0, #ff1b69);
    animation: animate 2s linear infinite;
    transition: 0.5s;
}

.inputBox input:valid ~ i::before,
.inputBox input:focus ~ i::before{
    left: 0;
}
.inputBox input:invalid:not(:placeholder-shown) ~ i::before{
    background: #ff1b69;
    left: 0;
}
.inputBox textarea:valid ~ i::before,
.inputBox textarea:focus ~ i::before{
    left: 0;
}
.inputBox textarea:invalid:not(:placeholder-shown) ~ i::before{
    background: #ff1b69;
    left: 0;
}

.buttons{
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.submitButton{
    width: 60px;
    height: 30px;
    background: #000;
    color: #aaa;
    font-size: 1em;
    font-weight: 100;
    border-radius: 5px;
    border:1px solid whitesmoke;
    margin: 0px 10px;
}

@keyframes animate{
    0%{
        background-position-x: 0;
    }
    100%{
        background-position-x: 250px;
    }
}

.fade-enter-active,
.fade-leave-active{
    transition: all 2s ease-in-out;
}
.fade-leave-to,
.fade-enter-from{
    opacity: 0;
}


</style>