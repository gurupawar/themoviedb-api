# 💼 Themoviedb api

An Unofficial API for themoviedb to fetch all movies & tv shows from Themoviedb.org

# 🏷️ Description

This API currently supports 7 routes.

1. **/search** - fetch list of movies/shows based on user input.

2. **/job** - get details of seleted job.

# 📃 Usage

# /search

Make a `GET` request to `https://indeed-api.vercel.app/search?title={job title}&location={job location}`

**Example** - https://indeed-api.vercel.app/search?title=java&location=pune

#### Response Format

The response JSON Object looks something like this -

```JSON
{
  "result": [
    {
      "id": "bdbb454bfcecaaf4",
      "title": "Java backend Developer",
      "company_name": "Redbytes Software",
      "company_location": "Pune, Maharashtra•Temporarily Remote",
      "url": "https://in.indeed.com/company/Redbytes-Software/jobs/Java-Backend-Developer-bdbb454bfcecaaf4?fccid=23cffaae984a6c12&vjs=3",
      "salary": "₹22,376 to ₹1,10,757 a month",
      "timestamp": "Today",
      "description": [
        "Desired Candidate Profile Must have 2 to 8 years of relevant work experience in Java, J2EE, Spring Framework, Spring Boot, Hibernate, MVC, Design Patterns and J…"
      ]
    },
  ]
}

```

# /job

Make a `GET` request to `https://indeed-api.vercel.app/job?id={job id}`

**Example** - https://indeed-api.vercel.app/job?id=42b5eb1e40f8515e

#### Response Format

The response JSON Object looks something like this -

```JSON
{
  "details": [
    {
      "title": "PHP Developer",
      "comapanyName": "Bizotics Tech Consultancy & Services Pvt. Ltd.",
      "companyLocation": "Mumbai, Maharashtra",
      "salary": "₹20,000 - ₹35,000 a month",
      "jobDescription": [
        "Responsibilities",
        "Requirements",
        "Job Type: Full-time",
        "Salary: ₹20,000.00 - ₹35,000.00 per month",
        "Schedule:",
        "COVID-19 considerations:Remote Work till situation improves.",
        "Education:",
        "Experience:",
        "Work Remotely:",
        "Speak with the employer+91 09819939971"
      ]
    }
  ]
}

```

## Development

### Run locally

- Clone the Repo

  ```
  git clone https://github.com/gurupawar/indeed-api

  cd indeed-api
  ```

- Install the dependencies

  ```
  npm install
  ```

- Start development server

  ```
  npm start
  ```

- Deploy to your vercel account

  ```
  npm run deploy
  ```
