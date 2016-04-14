var app=angular.module("app",[]);


app.controller("taskCtrl",function ($scope) {
    $scope.jshow=false;
    $scope.tasklist=[];
    
    $scope.addTask=function() {
        $scope.jshow=true;
    }
    
    $scope.removeTask=function(){
        
    }
})


app.directive("addon",function(){
    return {
        restrict:"E",
        replace:true,
        template:"<div class='task-box'><input type='text' class='form-control' placeholder='Descripition of your new task' ng-model='taskName'/><button class='btn btn-xs btn-primary addsure'>add</button><button class='btn btn-xs btn-default addcancel'>cancel</button></div>",
        link:function(scope,element,attrs){
            angular.element(".addcancel").click(function(){
                scope.jshow=false;
                scope.$apply();
            })
            
            angular.element(".addsure").click(function(){
                if(scope.taskName){
                    scope.tasklist.push({
                        "name":scope.taskName
                    })
                    scope.taskName="";
                    scope.jshow=false;
                    scope.$apply();
                }else{
                    alert("任务名不能为空");
                }
            })
        }
    }
})

