app.directive("dateselect",function(){
    return{
        restrict:"A",
        link:function(scope,element,attrs){
            element.datepicker();
        }
    }
})