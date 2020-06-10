<template>
  <div id="app">
      <app-navbar class="background-color"></app-navbar>
    <div class="wrapper">
      <div class="dashboard-site">
        <h5 class="app-titles">MY DASHBOARD</h5> <button>CREATE A NEW CAMPAIGN</button>
    </div>
    <div class="campaign-layout">
      <h5 class="app-titles align-middle">Ongoing Campaigns</h5>
      <app-campaigns class="background-color"></app-campaigns>
    </div>
    <div class="statistics-layout"> 
      <h5 class="app-titles align-middle">Statistics Overview</h5>
      <app-linechart class="background-color align-middle"></app-linechart>
    </div>  
      <div class=" influencer-layout"> 
        <h5 class="app-titles align-middle">Top Influencers</h5>
        <app-influencer class="background-color"></app-influencer>
      </div>  
      <div class="todos-layout">   
        <h5 class="app-titles align-middle">My to-do's (3)</h5>
        <app-todos class="background-color"></app-todos>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from './components/LineChart.vue'
import Header from './components/Header.vue'
import OngoingCampaigns from './components/OngoingCampaigns.vue'
import Influencers from './components/Influencers.vue'
import ToDos from './components/ToDos.vue'

export default {
  name: 'App',
  components: {
    'app-navbar': Header,
    'app-linechart': LineChart,
    'app-campaigns': OngoingCampaigns,
    'app-influencer': Influencers,
    'app-todos': ToDos
  }
}
</script>

<style lang="scss" >

* {
  font-family: 'Lato', sans-serif;
  margin:0;
  padding:0;
  box-sizing: border-box;
  color: #484848;
  text-decoration: none;
}

a {
    color: #484848;
    }

#app {
  display: relative;
}

.app-titles {
  margin-bottom:10px;
  width: 300px;
}

.background-color {
  background-color: #FFF;
}

button {
    border: solid 1px #D9D9D9;
}

body {
  height: 100%;
  overflow-x: hidden;
  background-color: #EAE9EB;
}

.campaign-layout{
  margin: 10px auto 0 auto;

    @include md {
      margin-left:0;
      margin-right:0;
    }
}

.dashboard-site {
  display:inline-block;
  margin: 10px auto 30px auto;
  text-align: center;
  font-size:1.2rem;

  @include md {
    margin: 10px 0 30px 0;
  }

  h5 {
    margin-right: 20px;
      display:inline;
  }
  button {
    background-color: $primary;
    color:white;
    padding:10px;
    border-radius: 5px;
    font-weight: 600;
    float:right;
    cursor: pointer;
  }
}

.influencer-layout {
 margin-top:10px;

   @include md {
    margin-left: 0;
    margin-right: 0;
    position:absolute;
    top:425px;
    left: 500px;
  }
}

.statistics-layout {
 margin-top:10px;
}

.todos-layout {
  position: relative;
  margin-top:10px;

  @include md {
    position:absolute;
    left:840px;
    top:125px;
  }
}

.wrapper {
  position:relative;
  padding-right:20px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom:100px;

  @include md { 
  padding-right:100px;
  padding-left: 100px;
  padding-top: 50px;
  padding-bottom:100px;
   }
  
  @include lg { 
  padding-right:180px;
  padding-left: 180px;
  padding-top: 50px;
  padding-bottom:100px;
   }
}
</style>
