var nums = document.querySelectorAll('.num') //select the number
var eql = document.querySelector('.eql') //select the evaulate
var clear = document.querySelector('.clears')
var input = document.querySelector('.input')
var output = document.querySelector('.output')
var his = document.getElementById('h')
var del = document.querySelector('.delete')
// console.log(his.textContent = 'hello')


let display = []
//to clear the input screen
clear.addEventListener('click',function(){
	display = ['']
	output.innerHTML = ''
	input.innerHTML = ''
	// his.innerHTML = ''


})
//take the numbers
nums.forEach(function(num){
	// console.log(num)
	num.addEventListener('click',function(){
		display.push(num.value)
		// console.log(display)
		input.innerHTML = display.join('')
		//to evaluvate in real time
		// if(num.classList.contains('number')){
		// 	input.innerHTML = eval(display.join(''))
		// }

		//for evaluvate
		if(num.classList.contains('eql')){
			output.innerHTML = eval(display.join(''))
			console.log(his.innerHTML += display.join('')+"="+eval(display.join(''))+'<br>')
		}
		//to prevent error in screen
		if(typeof eval(display.join(''))==='undefined'){
			output.innerHTML = ''
		}
	// 	// del.addEventListener('click',()=>{
	// 	// // display.pop(num.)
	// 	// console.log('h')
	// })

	})
	
})
del.addEventListener('click',()=>{
		// display.pop(num.)
		console.log(display.pop())
		display.slice()
		var delNum = display.join('')
		input.innerHTML = delNum
	})
function clearhistory(){
	his.innerHTML = ''
	console.log('hi')

}
document.addEventListener('keydown',function(e){
	// console.log(e.currentTarget)
	display +=e.key
	console.log(e.key)
	output.innerHTML = ''
	input.innerHTML = display
})













































// var input = document.getElementById('input')
// var btns = document.querySelectorAll('.num')
// var opr =  document.querySelectorAll('.opr')
// var eql = document.querySelector('.eql')


// btns.forEach(function(btn){
// 	// console.log(btn.innerHTML)
// 	btn.addEventListener('click',function(){
		
		
// 		 input.value+=btn.innerHTML
// 		// console.log(number)
// 		  // input.value+=number
// 		  var numm=input.value
// 		  console.log(numm)

// 		  // eql.addEventListener('click',function(){
// 		  // 	input.value = eval('numm+numm')
// 		  // 	console.log(numm)
// 		  // })
		  
// 		  document.getElementById('demo').innerHTML = numm

// 	})
// })


// opr.forEach(function(cal){
// 	// console.log(cal.innerHTML)
// 	cal.addEventListener('click',function(){
// 		if(cal.innerHTML==='clear'){
// 			input.value=''

			
// 		}else{
// 			input.value= ''

// 		}
// 		// input.value+=cal.innerHTML
// 		// 	// input.value=Math.
// 	})
// })





