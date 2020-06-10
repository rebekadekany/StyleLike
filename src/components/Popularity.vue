<template>
    <div class="stats-number" :style="myStyles" > {{number}}
    </div>
</template>

<script>
export default {

    data() {
        return {
            myStyles: {
                color: '#F60051'
            }
        }
    },    
    props: {
        number: String,
        title: String
    }
}
</script>

<style lang="scss" >

.stats-container {
    display: grid;
    grid-template-columns: 126px 126px;
    grid-gap: 1em;
    grid-auto-rows: 55px;  
    place-content: center;
}
.stats-number {
    text-align: center;
    border: solid 1px #D9D9D9;
    border-radius: 5%;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    
    .stats-number:focus {
    background-color:#F60051;
    }


    :nth-child(1) {
        color: #F60051;
        font-size: 1.12rem;
    }
    :nth-child(2) {
        color: #C6C6C6;
        font-size: 0.5rem;       
    }
}
</style>