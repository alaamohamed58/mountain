// login
const username = 'Coordination';
const password = 'Aa25637958';
function login(div){
  var name = div.querySelectorAll('input')[0],
      pass = div.querySelectorAll('input')[1];
      errP = div.querySelector('p');

  if(name.value === "" && pass.value === ""){
    errP.innerHTML = 'لا تترك حقول فارغه';
  }else if(name.value === username && pass.value === password){
    document.querySelector('.login').classList.add('hidden');
    document.cookie = 'login=logined;';
  }else{
    errP.innerHTML = 'البيانات غير صحيحه';
  }
}

// 
var logined = document.cookie.split('login=')[1];
logined = logined !== undefined ? logined.split(';')[0] : "";
if(logined === 'logined'){
  document.querySelector('.login').classList.add('hidden');
}else{
  document.querySelector('.login').classList.remove('hidden');
  document.querySelector('.login').classList.add('ease');
}

function dlt(id, div){
  var xml = new XMLHttpRequest()

  xml.open('GET', `server.php?delete&id=${id}`, true);
  xml.send();

  xml.onreadystatechange = function (){
    if(this.readyState === 4 && this.status === 200){
      if(this.responseText === 'DONE'){
        div.parentElement.remove();

        if(document.querySelectorAll('.my-container > section > div').length === 0){
          window.location.reload();
        }
      }
    }
  }
}