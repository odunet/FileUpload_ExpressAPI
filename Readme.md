# File Upload API - NodeJS | Express

The is an API built using the Express framework. This stores locally uploaded data in a local folder *recievedfiles*.

## Usage

```
// Sample JavaScript code to consume API using Fetch-API

    // This fetch API sends the image (or any other document) to the server
    fetch('http://localhost:5000/api/saveImage', {
        method: 'POST',
        body: formData,
        // files: formData,
        }).then(response => console.log("File Sent"))
        .catch(err => console.log(err))
```

```python
#Web App Runs at localhost:5000. Code above starts App

npm start 

```

## License
[MIT](https://choosealicense.com/licenses/mit/)