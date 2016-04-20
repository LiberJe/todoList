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

app.value("selectgroup",0);