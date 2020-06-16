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

Balance.prototype.deposit = function() {
  this.deposit = deposit;
  this.newBalance.push(parseInt(this.initialBalance) - parseInt(this.deposit));
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
  $("form#new-account").submit(function(event) {
    event.preventDefault();
    const inputtedFirstName = $("input#first-name").val();
    const inputtedLastName = $("input#last-name").val();
    let inputtedInitialDeposit = $("input#initial-balance").val();
    let inputtedWithdraw = $("input#withdraw").val();
    let inputtedDeposit = $("input#deposit").val();
    $("input#first-name").val("");
    $("input#last-name").val("");
    $("input#initial-balance").val("");
    $("input#withdraw").val("");
    $("input#deposit").val("");
    let newBalance = new Balance(inputtedInitialDeposit, inputtedWithdraw, inputtedDeposit)
    let newAccount = new Account(inputtedFirstName, inputtedLastName, newBalance)
  })
})