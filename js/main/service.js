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

