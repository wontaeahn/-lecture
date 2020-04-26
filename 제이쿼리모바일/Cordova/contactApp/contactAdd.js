﻿function addContact(){
  
  //새로운 연락처 객체 생성
  var newContact = navigator.contacts.create();
  
  //연락처 표시 이름 
  var newContact.displayName = $('#fullname').val();
  
  //전화번호
  var phoneNums = [2];
  phoneNums[0] = newContactField('work',$('#workPhone').val(), false);
  phoneNums[1] = newContactField('mobile',$('#mobilePhone'.val(), true);
  newContact.phoneNumbers = phoneNums;
}

//주소
var emailAddresses = [1];
address[0] = new ContactAddress();
address[0].type = "work";
address[0].streetAddress = '';
address[0].locality = $ ('#workAddress').val();
address[0].postalCode = '';
address[0].country = '';

address[1] = new ContactAddress();
address[1].type = 'home';
address[1].locality = $('#homeAddress').val();

newContact.addresses = address;

//장치에 저장
newContact.save (onContactSaveSuccess, onContactSaveError);
}

function onContactSaveSuccess(){
  navigator.notification.alert($('#fullName').val() + '연락처 목록 저장 성공');
}

function onContactSaveError(){
  navigator.notification.alert('오류번호 : ' + err.code + ' / 오류 메시지 :' + err.message,null, '연락처 저장 오류');
}