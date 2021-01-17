(function manageTotalUsers() {
  let totalUsers = String(getRandom(100000, 200000));
  totalUsers = addComma(totalUsers);

  addToTotalUsers(totalUsers);

  function addToTotalUsers(currentValue) {
    let num = Number(currentValue.replace(",", ""));
    num++;
    num = String(num);
    num = addComma(num);
    $("#total-users").html(num);
    setTimeout(function () {
      addToTotalUsers(num);
    }, getRandom(100, 2000));
  }

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function addComma(num) {
    return num.slice(0, 3) + "," + num.slice(3, 6);
  }
})();
