import Vue from "vue";

function created (){
    console.log("created!!");
}

const app = new Vue({
    el: '#app-1',
    data: {
      message: "msg"
    },
    created: created //ここでアローを使ってはいけない
})
