# HNG STAGE ONE PROJECT -> CREATE AND HOST AN ENDPOINT 

## Project Requirements

### Endpoint should take two Get request parameters and return specific information in JSON format.

# Informations: 
* -  Slack name
* - Current UTC time (with Validation of +/-1)
* - Track
* - The Github URL of the file being run
* - The Github URL of the full source code
* - A status Code of success

## Endpoint link format
* - http://api?slack_name=" "&track=" "
* - http://localhost/api?slack_name=Collins_Omanudhowo&track=Backend


## Required Output Sample
{
 - "slack_name": "example_name",
 - "current_day": "Monday",
 - "utc_time": "2023-08-21T15:04:05Z",
 - "track": "backend",
 - "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
 - "github_repo_url": "https://github.com/username/repo",
 - “status_code”: 200
 
}