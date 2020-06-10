<template>
  <div id="todo-container">
    <div class="todos" v-for="todo in todos" :key="todo.id">
        <div class="todos__header-container">
            <a class="name-color">{{todo.name}}</a>
            <span>{{todo.activity}}</span>
            <span>{{todo.title}}</span>
        </div>
        <div class="todos__content-container">
            <img :src="todo.img" alt="My to do's">
            <p class="date">{{todo.date}}</p> <br>
            <p>{{todo.comment}}</p>
            <p class="hashtag">{{todo.hashtag}}</p>
            <div class="todos__content-container__second">
                <p class="name">{{todo.name2}}</p>
                <div class="instagram-followers">
                    <p class="numbers1">{{todo.number}}</p>
                    <p class="followers1">{{todo.follower}}</p>
                </div>
                <div class="snapchat-followers">
                    <p class="numbers2">{{todo.number2}}</p>
                    <p class="followers2">{{todo.follower2}}</p>
                </div>
            </div>
        </div>     
        <div class="todos__btn-container">
            <button :style="btnStyle">ACCEPT</button>
            <button :style="btnStyle">DECLINE</button>
        </div>
    </div>
  </div>
  
</template>

<script>   


export default {
    name: 'ToDos',
    data() {
        return {
            btnStyle: {   
                'color': '$primary',
                'background-color' : "transparent",
                'font-size': '0.62rem',
                'padding':'10px',
                'font-weight': '700',
                'border-radius': '5px',
                'cursor': 'pointer'
                },
        todos: [
        {
            id: 1,
            name: 'Ellaria Dorne',
            activity: "uploaded instagram contet for proof to your campign",
            title: " 'Nike Sneaker Campaign II'",
            date: "02.07.2016",
            comment: "Who sasy you can't be elegant in sneakers?! :)",
            hashtag: "#nike #sneakers #morningoutfit #liveyourlife #fashion #dailyfashion #fashionista",
            img: require('@/assets/toDo1.png')        
        },
        { 
            id: 2,
            name: 'Amy Champeon',
            activity: "just applied to your open campaign",
            title: "'Tennis clothing for men'",
            name2: "Amy Champeon",
            number: "34 567", 
            number2: "3 567",
            follower: "INSTAGRAM FOLLOWERS",
            follower2: "SNAPCHAT FOLLOWERS",
            img: require('@/assets/toDo2.png')        
        },
        {
            id: 3,
            name: 'Mike Jones',
            activity: " published content to instagram for campign",
            title: "'#DOUYOUYOGA'",
            date: "02.07.2016",
            comment: "My new yoga pants from Nike has arrived, I adore it! ",
            hashtag: "#nike #yoga #sun  #namaste #liveyourlife #fashion #dailyfashion #sport #sporty #nature",
            img: require('@/assets/toDo3.png')        
        }
    ]
}
}}

</script>

<style lang="scss" scoped>

.name-color{
    color: $primary;
    font-weight: 800;
}

#todo-container {
    height: 640px;
    width: 320px;
    overflow: scroll;
}

.todos {
    grid-template-columns: 100px 100px 100px ;
    grid-template-rows: 55px 200px 55px;
    grid-template-areas: 
    "header header header"
    "main main main"
    "button button button";
    border: solid 10px #D8D8D8;
    row-gap: 10px;
    display:inline-block;

    &__btn-container {
        grid-area: button;
        display:block;
        text-align: center;
        padding: 10px;
        display: grid;
        margin: 0 20px;

        button {
            width: 100px;
            height: 34px;
            grid-row:1;         
        }
    }

    &__content-container{
        grid-area: main;
        font-size: 0.62rem;
        display:block;
        padding: 10px;
        border-bottom: solid 1px #D8D8D8;
        height: 120px;

        .date, .hashtag {
            color: #C6C6C6;
            font-size: 0.5rem;
        }
    
        img {
        text-align: left;
        padding: 0 10px 10px 0;
        float:left;
        cursor: pointer;
        }

        &__second {
            display:inline-block;
 
            .followers1, .followers2 {                
                color: #C6C6C6;
                font-size: 0.5rem;
                }

            .numbers1, .numbers2 {
                color: $primary;
                font-size: 0.9rem;
            }

            .snapchat-followers {
               float:right;
                width: 80px;
            }
             .instagram-followers {
               float:left;
                width: 80px;
            }
    
            .name {
                font-size: 0.8rem;
                grid-area:name;

            }
            .numbers2 {
                color: $primary;
                font-size: 0.9rem;
            }
        }
    }

    &__header-container{
        grid-area: header;
        font-size: 0.75rem;
        background-color: #F4F4F4;
        padding: 10px;
        
        span {
            margin-left: 0.5em;        
        }
        span:nth-child(3){
            font-weight: 800;
        }
    }
}

</style>