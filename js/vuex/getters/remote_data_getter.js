import axios from 'axios';
export default {
	recommendGoods: state =>{
		console.log("recommendGoods");
		axios.get('http://www.fanqianzhushou.com/tj/day.htm')
			.then(function(response){
				console.log(response);
			})
	}
}