<template>
<div class="header-container">
    <p id="brand">StyleLike</p>
    <div class="header">
        <div class="header-menu-icon">
            <div class="header-menu-icon__middle">

            </div>
        </div>
    </div>

    <ul class="header-list">
        <li> <a href="">CAMPAIGNS</a> </li>
        <li> <a href="">INFLUENCERS</a> </li>
        <li> <a href="">STATISTICS</a> </li>
    </ul>
    <div class="messages">
        <a> <img :src = mail ></a>
        <a> <img :src = nike ></a>
        <a href="">My Profile</a>
    </div>
</div>
</template>

<script>
    export default {
        data: () => ({
            mail: require('@/assets/mail.png'),
            nike: require('@/assets/nike.png')
        })
    }
</script>

<style lang="scss">

//menu bar for mobile
.header {
    margin-top: -5px;  
    position: absolute;
    right:10px;
    cursor: pointer;
}
.header-menu-icon {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 10px;
        right: 10px;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 20px;
            height: 3px;
            background-color: black;
            transform-origin: 0 0;
            transition: transform .3s ease-out;
        }

        &__middle {
            position: absolute;
            top: 8px;
            left: 0;
            width: 20px;
            height: 3px;
            background-color: black;
            transition: all .3s ease-out;
        }

        &::after {
            content: "";
            position: absolute;
            top: 16px;
            left: 0;
            width: 20px;
            height: 3px;
            background-color: black;
            transform-origin: 0 100%;
            transition: transform .3s ease-out;
        }

        @include md {
            display: none;
        }
    }

    //end of it

.header-container {
    display: flex;
    height: 70px;
    padding: 20px 20px 0 20px;

    @include md {
        padding: 20px 100px 0 100px;
    }
    
    #brand {
        flex:1;
        font-size: 1.3rem;
        font-weight: 600;
        
}
    .messages {
        flex:1;
        text-align: right;
        display: inline;

        a {
            padding-right: 10px;  
            display:none;

            @include md {
                display:inline;
            }
        }
    }

    .header-list {
        text-align: center;
        flex:1;

        li {  
            display: inline;
            padding-right: 10px;      
            padding-left: 10px;  
            display:none;

            @include md {
                display:inline;
            }   

            a {  
                font-size:0.9rem;                
            }
        }
    }
}
</style>>
