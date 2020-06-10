<template>
  <div class="campaign-container">
      <div class="campaigns" v-for="campaign in campaigns" :key="campaign.id">
        <div class="campaigns__image">         
            <img :src="campaign.img" alt="Ongoing Campaigns">
            <img class="insta" :src="campaign.insta" alt="instagram">
        </div>
        <div class="campaigns__content">
                <div class="status"><button>{{campaign.status}}  </button><p>Closes in {{campaign.days}} days</p></div>
                <p class="pink-color"> {{campaign.influencer}} INFLUENCERS</p>
                <p class="campaign-title">{{campaign.title}}</p>
        </div>
        <div class="campaigns__popularity">
                <button>{{campaign.number1}}</button>
                <button>{{campaign.number2}}</button>
                <button>{{campaign.number3}}</button>
                <button>{{campaign.number4}}</button>
                <button>{{campaign.number5}}</button>
                <button>{{campaign.number6}}</button>
        </div>
      </div>
  </div>
</template>

<script>

    export default {
   
     data: () => ({
            campaigns: [
                {id:1, img: require('@/assets/campaign1.png'), insta: require('@/assets/instagram.png'), notification: require('@/assets/notification.png'), status:'ACTIVE',days:"3", influencer:'9', title:'NIKE Sneaker Campaign Summer II', number1:'12 567', number2:'1 789', number3:'876', number4:'10 782', number5:'789', number6:'67%'},
                {id:2, img: require('@/assets/campaign2.png'), insta: require('@/assets/instagram.png'), status:'ACTIVE' , days:"8", influencer:'11', title:'#DOYOUYOGA Campaign', number1: '34 567', number2:'5 789', number3:'234'}
            ],
            image1: require('@/assets/campaign1.png'),
            image2: require('@/assets/campaign2.png'),
            myStyles: {
                border: 'none'
            }
    })
} 

</script>

<style lang="scss" scoped >

.campaign-container {
    width: 420px;
    max-height: 240px;
    margin-bottom:30px;
    
    @include md {
    width: 620px;
    max-height: 240px;
    }
}

.campaigns {
    width: 420px;
    height: 115px;
    box-shadow: 0 2px 4px #8A8787;
    display: flex;
    flex-direction: row;
    margin-bottom:10px;

    @include md {
        width: 620px;
    }

    &__image {
    flex:1;
    position: relative;

        .insta {
            position: absolute;
            left:10px;
            bottom:10px; 
            cursor: pointer;       
        }
    }

    &__content {
        flex:3; 
        margin:auto;
        padding-left:10px;
            
            .pink-color {
            font-size:0.6rem;
            font-weight: 800;
            color: $primary;
            padding: 3px 0;
        }
        .status {
            font-size:0.8rem;         
        }
        .campaign-title {
            cursor: pointer;
        }
    }

    &__popularity {
        grid-template-columns: 100px 100px 100px ;
        flex:2;
        text-align: left;
        align-self: center;
        
            button {
                background-color: transparent;
                color: $primary;
                padding:10px;
                font-weight: 600;
                cursor: pointer;
                border: none;
            }
    }
}

</style>