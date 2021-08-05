 //remove hyphen
		const newJobName = jobName.replace('-','');
		//split with no empty items
		const searchTermWords = newJobName.split(' ').filter(i => i.length>2);
		
		

		const createKeywords = name => {
		const arrName = [];
		let curName = '';
		name.split('').forEach(letter => {
			curName += letter;
			arrName.push(curName);
		});
		return arrName;
		}


		const generateKeywords = names => {
		const [first, middle, last, sfx] = names;
		const suffix = sfx.length > 0 ? `${sfx}` : '';
		const keywordMiddleName = createKeywords(`${middle}`);
		const keywordNameWidthoutMiddleName = createKeywords(`${first} ${last} ${suffix}`);
		const keywordFullName = createKeywords(`${first} ${middle} ${last} ${suffix}`);
		const keywordLastNameFirst = createKeywords(`${last} ${first} ${middle} ${suffix}`);
		const keywordSuffix = createKeywords(`${suffix}`);
		
		return [
			...new Set([
				...keywordMiddleName,
				...keywordFullName,
				...keywordLastNameFirst,
				...keywordNameWidthoutMiddleName,
				...keywordSuffix
			])
		];
		}
