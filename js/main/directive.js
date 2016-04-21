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
                angular.element(".header-inner").find("div").eq(1).removeClass("col-xs-7").addClass("col-xs-5");
                angular.element(".header-inner").find("div").eq(2).removeClass("col-xs-3").addClass("col-xs-5");
            })
        }
    }
})

app.directive("recoversearch",function(){
    return{
        restrict:"A",
        link:function(scope,element,attrs){
            element.click(function(){
                angular.element(".header-inner").find("div").eq(1).removeClass("col-xs-5").addClass("col-xs-7");
                angular.element(".header-inner").find("div").eq(2).removeClass("col-xs-5").addClass("col-xs-3");
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
            
        }
    }
})