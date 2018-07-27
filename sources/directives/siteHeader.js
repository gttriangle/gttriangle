angular.module('gt-tri').directive('siteHeader', function () {
        return {
            restrict: "E",
            controller: ['$scope', '$state', 'authSvc', function($scope, $state, authSvc) {
                $scope.loggedIn = authSvc.loggedIn();
                $scope.loggedInUser = ($scope.loggedIn) ? authSvc.loggedInUser() : {permission: 'unregistered'};
                $scope.permission = $scope.loggedInUser.permission;
                $scope.$on('loginChange', function(event, loggedIn, user) {
                    $scope.loggedIn = loggedIn;
                    if (!loggedIn) {
                        $scope.permission = 'unregistered';
                    } else {
                        $scope.loggedInUser = user;
                        $scope.permission = user.permission;
                    }
                    $scope.$apply();
                    return;
                });
                $scope.login = function () {
                    $state.go('Login');
                }
                $scope.logout = function () {
                    authSvc.logoutUser();
                }

                $scope.goToHome = function () {
                    $state.go('Home');
                };

                $scope.goToCalendar = function () {
                    $state.go('Calendar');
                };

                $scope.goToEventDiagnostics = function () {
                    $state.go('EventDiagnostics');
                };

                $scope.goToEventPolicies = function () {
                    $state.go('EventPolicies');
                };

                $scope.goToMyAccount = function () {
                    $state.go('Account');
                };

                $scope.goToBudget  = function () {
                    $state.go('Budget');
                };

                $scope.goToTransactions = function () {
                    $state.go('Transactions');
                };

                $scope.goToFinancialStatus = function () {
                    $state.go('FinancialStatus');
                };

                $scope.goToFamilyTrees = function () {
                    $state.go('FamilyTrees');
                };
            }],
            template: `<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <div class="col-md-11 container">
                <a class="navbar-brand" ng-click="goToHome()">
                    <img src="/sources/images/logo.png" class="rounded navbar-logo"
                        height="37">
                    <font color="Grey">Triangle @ GT</font>
                </a>
                <div class="collapse navbar-collapse" id="mainNavbar">
                    <ul class="nav navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" ng-click="goToHome()">
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" ng-click="goToCalendar()">
                                Calendar
                            </a>
                        </li>
                        <li class="nav-item" ng-show="permission === 'chair' || permission === 'officer' || permission === 'financial officer' || permission === 'admin'">
                            <a class="nav-link" ng-click="goToEventDiagnostics()">
                                Event Diagnostics
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" ng-click="goToEventPolicies()">
                                Event Policies
                            </a>
                        </li>
                        <li class="nav-item" ng-show="permission === 'alumni' || permission === 'candidate' || permission === 'brother' || permission === 'chair' || permission === 'officer' || permission === 'financial officer' || permission === 'admin'">
                            <a class="nav-link" ng-click="goToMyAccount()">
                                My Account
                            </a>
                        </li>
                        <li class="nav-item" ng-show="permission === 'alumni' || permission === 'candidate' || permission === 'brother' || permission === 'chair' || permission === 'officer' || permission === 'financial officer' || permission === 'admin'">
                            <a class="nav-link" ng-click="goToBudget()">
                                Budget
                            </a>
                        </li>
                        <li class="nav-item" ng-show="permission === 'chair' || permission === 'officer' || permission === 'financial officer' || permission === 'admin'">
                            <a class="nav-link" ng-click="goToTransactions()">
                                Transactions
                            </a>
                        </li>
                        <li class="nav-item" ng-show="permission === 'financial officer' || permission === 'admin'">
                            <a class="nav-link" ng-click="goToFinancialStatus()">
                                Financial Status
                            </a>
                        </li>
                        <li class="nav-item" ng-show="permission === 'alumni' || permission === 'candidate' || permission === 'brother' || permission === 'chair' || permission === 'officer' || permission === 'financial officer' || permission === 'admin'">
                            <a class="nav-link" ng-click="goToFamilyTrees()">
                                Family Trees
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="nav navbar-nav navbar-right">
                    <button class="btn btn-primary" ng-show="!loggedIn" ng-click="login()">Login</button>
                    <div class="text-right" ng-show="loggedIn">
                        <font color="Grey">Welcome, {{loggedInUser.name}}</font>
                        <button class="btn btn-primary" ng-click="logout()">Logout</button>
                    </div>
                </div>
            </div>
        </nav>`
        }
    });
