export default class DisplayAuthor {
  static on() {
    this.fName = 'Дмитрий';
    this.sName = 'Демидов';
    console.log(`Разработчик: ${this.fName} ${this.sName}`);
    // Выводим на главную страницу
    const body = document.getElementsByTagName("body")[0];
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const img = document.createElement('img');
    const p = document.createElement('p');

    h3.innerText = 'Разработчик:';
    img.alt = 'Здесь должно быть фото!';
    img.src =  'https://via.placeholder.com/150/0000FF/808080%20?Text=Digital.com';
    p.innerText = 'Дмитрий Демидов';
    div.onclick = function () {
      alert(new Date());
    }

    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(p);
    body.appendChild(div);
  }
}