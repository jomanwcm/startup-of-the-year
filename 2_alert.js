'use strict';

window.addEventListener('load', function(){
	var button = document.getElementById('alert-trigger');
	button.addEventListener('click', addAlert);
});

function addAlert(){
	var example = document.getElementById('example');
	var template = document.getElementById('alert-template').innerHTML;
	example.innerHTML = template;
}