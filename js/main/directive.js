app.directive("dateselect",function(){
    return{
        restrict:"A",
        link:function(scope,element,attrs){
            element.datepicker();
        }
    }
})

app.directive("changesearch",function(){
    return{
        restrict:"A",
        link:function(scope,element,attrs){
            element.click(function(){
                element.css({
                    width:"90%",
                    transition: "width 0.5s"
                });
            })
        }
    }
})

app.directive("recoversearch",function(){
    return{
        restrict:"A",
        link:function(scope,element,attrs){
            element.click(function(){
                angular.element(".searchtxt").css({
                    "width":"40%",
                    transition: "width 0.5s"
                });
            })
        }
    }
})

app.directive("togglesidebar",function(){
    return{
        restrict:"A",
        link:function(scope,element,attrs) {
            element.click(function(){
                var ele=angular.element(".sidebar-box");
                if(!scope.sidebarStatus){
                    ele.css({
                        "left":0
                    }); 
                    scope.sidebarStatus=true;
                    scope.$apply();
                }else{
                    ele.css({
                        "left":"-80%"
                    });
                    scope.sidebarStatus=false;
                    scope.$apply(); 
                }
            })
        }
    }
})

app.directive("modifytask",function(){
    return{
        restrict:"A",
        link:function(scope,element,attrs){
            element.click(function(){
                var ele=angular.element(".task-modify");
                
                if(ele.css("left")!="0px"){
                    angular.element(".task-modify").css({
                        left:0
                    })    
                }else{
                    angular.element(".task-modify").css({
                        left:"100%"
                    })
                }
            })
        }
    }
})