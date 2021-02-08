import React,{useState} from 'react';
import { encode } from "base-64";

const SchdeluleList = () => {
	const requestOption = {
        method :'GET',
	    headers: {
	      // "X-CSRFToken": getCookie("csrftoken"),
	      // "credentials": "",
	      // "Authorization": {
	      // 	"username":"hello1@gmail.com",
	      // 	"password":"munower123"
	      // },
	      "Authorization": "Token 98687017e35b66cee15a02c3251a12ae8a9b42f5",
	      "Accept": "application/json",
	      "Content-Type": "application/json",
	      // "mode": "cors", 
	    },
	    // body:JSON.stringify(data)
	}
	fetch('http://127.0.0.1:8000/api/',requestOption)
	.then(res => res.json())
	.then(data => {
		console.log(data)
	})

	return (
		<h1>SchdeluleList</h1>
	)
}

export default SchdeluleList