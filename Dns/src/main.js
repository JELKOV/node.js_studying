import dns from 'dns';

//lookup
dns.lookup('google.com', (err, address, family)=>{
	if(err) throw err;
	
	console.log("IP주소:", address);
	console.log("IP버전:", family);
})

// 옵션 콜백 처리

const op1 ={
	family: 4
};

dns.lookup('google.com', op1, (err, address, family)=>{
	console.log("IP주소v4:", address);
})

const op2 ={
	family: 6
};

dns.lookup('google.com', op2, (err, address, family)=>{
	console.log("IP주소v6:", address);
})



// resolve4
dns.resolve4('naver.com', (err, addresses) => {
	if(err) throw err;
	
	console.log("IPv4 주소목록:", addresses);
})

//resolveMx
dns.resolveMx('gmail.com', (err, addresses) => {
  if (err) throw err;

  console.log('MX 레코드:', addresses);
});
