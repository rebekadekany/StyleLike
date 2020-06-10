<template>
      <div id="influencer-container">
          <div class="influencer" v-for="tweet in tweets" :key="tweet.id">
                <figure class="influencer-img-container">
                    <img :src="tweet.img" alt="Top influencer">
                </figure>
                <ul class="middle-container">
                    <li>{{tweet.name}}</li>
                    <li> {{tweet.rate}}</li>
                </ul>
                <div class="influencer-btn-container">
                <button :style="btnStyle"> {{tweet.likes}}</button>
                </div>
          </div>   
    </div>
</template>

<script>

export default {
    name: 'TopInfluencers',
    data() {
        return {
          btnStyle: {   
            'color': '#F60051',
            'background-color' : "transparent",
            'font-size': '0.62rem',
            'padding':'10px',
            'font-weight': '700',
            'border-radius': '5px',
            'cursor': 'pointer'
            },
        tweets: [
  {
    id: 1,
    name: 'Mildred Estrada',
    rate: "Engagement rate: 25%",
    likes: "ADD TO FAVOURITES",
    img: require('@/assets/influencer5.png')
  },
  { 
    id: 2,
    name: 'Charlotte Morris',
    rate: 'Engagement rate: 20%',
    likes: "ADD TO FAVOURITES",
    img: require('@/assets/influencer4.png')
  },
  {
    id: 3,
    name: 'Sadie Brooks',
    rate: 'Engagement rate: 18%',
    likes: "ADD TO FAVOURITES",
    img: require('@/assets/influencer3.png')
  },
    {
    id: 4,
    name: 'Mary Nichols',
    rate: 'Engagement rate: 18%',
    likes: "ADD TO FAVOURITES",
    img: require('@/assets/influencer2.png')
  },
    {
    id: 5,
    name: 'Teresa Austin',
    rate: 'Engagement rate: 17%',
    likes: "ADD TO FAVOURITES",
    img: require('@/assets/influencer1.png')
  }
]
}}
}

</script>


<style lang="scss" scoped>

#influencer-container {
    width: 300px;
    height: 353px;    
}
.influencer {
    display:flex;
    flex:1;
    justify-content: center;
    align-self: center;
    padding:10px;
    text-align: center;
    border-bottom: solid 2px #D9D9D9;
}

.influencer:last-child { border-bottom: none;}

.influencer-btn-container{
    flex:1;
}

.influencer-img-container {
    flex:1;
    margin: 0;
}

.middle-container{
     flex:2;
     text-align: left;;

        li:nth-child(1) {
            font-size: 0.8rem;
        }
       li:nth-child(2) {
            font-size: 0.62rem;
        }
}
</style>