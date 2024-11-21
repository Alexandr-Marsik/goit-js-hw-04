/**
 *Объект profile описывает профиль пользователя на игровой платформе. В его свойствах хранится имя профиля username и количество активных часов playTime, проведенных в игре.
 Метод changeUsername(newName) должен принимать строку (новое имя) в параметр newName и изменять значение свойства username на новое. Ничего не возвращает.
 Метод updatePlayTime(hours) должен принимать число (количество часов) в параметр hours и увеличить на него значение свойства playTime. Ничего не возвращает.
 Метод getInfo() должен возвращать строку формата <Username> has <amount> active hours!, где <Username> - это имя профиля, а <amount> - количество игровых часов.
 */
const profile = {
  userName: 'Jacob',
  playTime: 300,
  changeUsername(newName) {
    this.userName === newName;
  },
  updatePlayTime(hours) {
    this.playTime += hours;
  },
  getInfo() {
    return `${this.Username} has ${this.playTime} active hours!`;
  },
};
console.log(profile.getInfo()); // "Jacob has 300 active hours!"
profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"
profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
