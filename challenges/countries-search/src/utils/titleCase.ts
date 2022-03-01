const titleCase = (text: string) => {
	return text.toLowerCase().split(' ').map((word) => {
		
		if(typeof word[0] !== 'undefined'){
			return word[0].toUpperCase() + word.slice(1);
		}else{
			return
		}
			
		}).join(' ')
};

export default titleCase;