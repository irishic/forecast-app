# Forecast app
## Notes
### Date
April, 4, 2021
### Location of deployed application
https://open-weather-forecast.herokuapp.com/
### Time spent
7h
### Assumptions made
- The city name is always has to be entered. When no city is entered, the result is empty.
- Units are metric.
- Not all the information from weather response is needed. Used the most common ones.
### Shortcuts/Compromises made
- More extended error handling.
- Test coverage.
- Texts like button text, header, other are harcoded. In a real app I would use react-intl for keeping them as a vocab.
- Indication that user has to change search value to make another search request.
### Stretch goals attempted
I wanted to use react router to help with searching(city name goes to params) which I did
But then I had to clear it every time for better experience with the error handling and just more expected behavior
So in a sense it's not that useful because user cannot come to the app with a city name in the URL
Would think it through for a real app so that would be possible, I'm sure there is a way.
### Instructions to run assignment locally
1. set your api key(openweathermap) to `REACT_APP_APP_ID` in `.env`
2. `npm i`
3. `npm run start`
4. open `http://localhost:3000`
### What did you not include in your solution that you want us to know about?
I thought about search suggestions of five last requests; then decided that this was overthinking.
### Your feedback on this technical challenge
That was cool, thanks) The only thing is that the api key for open weather doesnt work right away(at least didnt for me)
Maybe it's worth notifying about that in the instructions.
So people could create an account a bit in advance of the time they start with the challenge.
(Quote: Your API key is not activated yet. Within the next couple of hours, it will be activated and ready to use.
Source: https://openweathermap.org/faq, API calls return an error 401)