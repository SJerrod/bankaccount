//Business Logic for Account
function Account() {
  this.userAccount = [];
  this.currentBalance = currentBalance;
}

Account.prototype.addAccount = function(user) {
  this.userAccount.push(user);
}

// Business Logic for Balance
function Balance(initialBalance) {
  this.initialBalance = [];
  this.newBalance = [];
}

Balance.prototype.initialBalance = function(initialDeposit) {
  this.initialDeposit = initialDeposit;
  this.initialBalance.push(initialDeposit);
}

Balance.prototype.withdraw = function() {
  this.withdraw = withdraw;
  this.newBalance.push(parseInt(this.initialBalance) - parseInt(this.withdraw));
}

// Business Logic for User

function User (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

User.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

//User interface Logic
$(document).ready(function() {
  $()
})