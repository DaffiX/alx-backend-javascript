const fs = require('fs');

try {
	//read the file synchronously
	const content = fs.readFileSync('database.csv', 'utf8');

	//process the content
	console.log(content);
} catch (error) {
	console.log('Error reading the file:', error.message);
}
