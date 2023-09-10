const express = require('express')

const app = express()

// app.use(express.json())

const port = process.env.PORT || 5000


//function to get current day of the week
function current_day (){
    const day = new Date().getDay()
    const days_of_the_week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const today = days_of_the_week[day]
    return today
}


//Function which returns the full date and time in this format -> "utc_time": "2023-08-21T15:04:05Z
function utcTime() {
    const time = new Date().toISOString()
    return time
}




//Creating endpoint
app.get('/api', (req, res) => {
    
    //Get parameters
    const slack_name = req.query.slack_name
    const track = req.query.track
    
    //checking if the parameters are provided
    if (!slack_name || !track) {
        return res.status(400).json({ error: "Both slack_name and track parameters are required." });
    }

    //Status code based on response
    const status_code = res.statusCode

    // Getting current day and time dynamically
    const today = current_day()
    const currentTime = utcTime()

    //Required endpoint information 
    const information = {
             "slack_name": slack_name,
             "current_day": today,
             "utc_time": currentTime,
             "track": track,
             "github_file_url": "https://github.com/Technicalqit/HNG-Stage-One/blob/main/index.js",
             "github_repo_url": "https://github.com/Technicalqit/HNG-Stage-One",
             "status_code": status_code
    }
    //tested the endpoint and coverted the information to JSON format 
    console.log(information)
    res.json(information)
    
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})
