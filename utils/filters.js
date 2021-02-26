import Vue from 'vue'
// {{data | type}}
Vue.filter("formatDate",(data)=>{
	const nDate=new Date(data);
	const year = nDate.getFullYear().toString().padStart(2,0);
	const month = (nDate.getMonth()+1).toString().padStart(2,0);
	const day = nDate.getDate().toString().padStart(2,0);
	return year +'-'+ month +'-'+ day
})