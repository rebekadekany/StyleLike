<template>
    <div class="one-width">
        <div class="weeklyMonthly">
            <button class="btn">Weekly</button>
            <button class="btn">Monthly</button>
        </div>

        <div class="campaignOptions">
            <p>Choose campaign:</p>

            <label class="dropdown">
                <div class="dropdown-btn">All</div>

                <input type="checkbox" class="dropdown-input">

                <ul class="dropdown-menu">
                    <li>Nuru</li>
                    <li>Liligo</li>
                    <li>Bebino</li>
                </ul>
            </label>
        </div>
        <div class="chart-container" >
            <appLineChart :styles="myStyles" :chart-data="datacollection" :options="chartOptions"/>
        </div>
        <div class="stats-container">
            <popularity number = '123'> </popularity>
            <popularity number = '5 789'></popularity>
            <popularity number = '34 567'></popularity>
            <popularity number = '5 789'></popularity>
        </div>
    </div>
</template>

<script>
import LineChart from './LineChart.js'

export default {
    name: 'LineChartContainer',
    components: {
        'appLineChart': LineChart,
    },
    data() {
        return {
            datacollection: null,
            dataaxis: null,
            loaded: false,
            myStyles: {
                height: '110px',
                width: '300px',
                position:'relative'
            },
            chartOptions: {
                legend: {
                    display: false
                },
                responsive:true,
                maintainAspectRatio: false,
                scales: {
                        xAxes: [{
                            gridLines: {
                                display: false,
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginatZero: true,
                                stepSize: 25,
                                max: 100
                            }
                        }]
                    }
            }
        }
    },
    mounted() {
        this.fillData()
    },
    methods: {
        fillData() {
            this.datacollection = {
                labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
                datasets: [{
                    data: [0, 25, 15, 60, 25, 100, 50],
                    lineTension: 0,
                    borderColor: '$primary',
                    backgroundColor: 'transparent',
                    }]
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.campaignOptions{
    display: flex;
    height: 40px;
    margin: 10px;

    p{
        flex:1;
        font-size: 0.75rem;
        padding: 10px 0;
        text-align: center;
        font-weight: 600;
    }
}

.dropdown {
    flex:1;
    display: block;
    position: relative;

.dropdown-btn {
        border: 1px solid gray;
        border-radius: 4px;
        cursor: pointer;
        padding:  7px;
}

.dropdown-:after {
            content: '';
            position: relative;
            top: 50%;
            right: 15px;
            transform: translateY(-50%);
            width: 0; 
            height: 0; 
        }
    
.dropdown-input {
        display:none;        
    }

.dropdown-input + .dropdown-menu {
         display: none;
    } 

.dropdown-input:checked + .dropdown-menu {
            display:block;
        }

.dropdown-menu {
        position: absolute;
        top: 100%;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: solid 1px grey;
        background-color: #ffffff;
        list-style-type: none;

        li {
            padding: 10px;
            cursor: pointer;
        }

        li:hover {
            background-color: $primary;
            cursor: pointer;
        }
    }
}

.chart-container {
    margin:auto;
}

.one-width {
    width: 300px;
    height: 353px;
}

.weeklyMonthly{
    border-bottom: solid 3px #D9D9D9;
    display: flex;
    justify-content: center;
    height: 40px;

    .btn {
        background-color: transparent;
        border: none;
        color: #484848;
        box-shadow: none;
        text-transform: inherit;
        font-size: 0.8rem;
        font-weight: 600;

    }
    .btn:focus {
            border-bottom: solid 3px $primary;
            box-shadow: 0px 0px 1px $primary;
        }

    button:nth-child(1) {
        flex:1;
    }
    button:nth-child(2) {
        flex:1;

    
    }
}

</style>