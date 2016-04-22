app.service("toggleStatus",function(){
    this.status=false;
    this.yes=function(){
        this.status=true;
    }
    this.no=function(){
        this.status=false;
    }
    this.toggle=function(){
        this.status=!this.status;
    }
})


app.service("userData",function(){
    if(localStorage.user){
        return JSON.parse(localStorage.user);
    }else{
        this.username="JeLewine";
        this.listgroup=[];
    }
})

app.factory("selectgroup",function(){
    return  {
        index:0
    }    
})

app.factory("selecttask",function(){
    return{
        groupindex:0,
        taskindex:0
    }
})