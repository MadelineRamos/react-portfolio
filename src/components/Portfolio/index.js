import React from 'react';
import bohdeMarketplace from '../../assets/project-images/bohde-marketplace.png';
import codingQuiz from '../../assets/project-images/coding-quiz.png';
import noteTaker from '../../assets/project-images/note-taker.png';
import weatherDashboard from '../../assets/project-images/weather-dashboard.png';
import monied from '../../assets/project-images/monied.png';

function Portfolio() {
  return (
    <div>
      <section id='work' className='jobs'>
        <div className='flex-row'>
          <h2 className='section-title secondary-border'>Work</h2>
        </div>

        <div className='job'>
          <div className='job-info'>
            <div className='job-img'>
              <a href='https://aqueous-scrubland-12058.herokuapp.com/ '>
                {' '}
                <img
                  src={monied}
                  className='my-2'
                  style={{ width: '100%' }}
                  alt='Monied'
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>Monied</h4>
              <p>
              Monied is a fundraising platform for nonprofit organizations. The goal is to help ambitious ideas be brought to life. Monied will allow users to create projects with donation goals, donate to projects, and keep track of their donations.

              </p>
            </div>
          </div>
        </div>

        <div className='job'>
          <div className='job-info'>
            <div className='job-img'>
              <a href='https://github.com/MadelineRamos/Bohde-Marketplace'>
                {' '}
                <img
                  src={bohdeMarketplace}
                  className='my-2'
                  style={{ width: '100%' }}
                  alt='Bohde-Marketplace-Application'
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>Bohde Marketplace</h4>
              <p>
              This application will be a marketplace where all users can buy and sell items. When a user creates an account, a certain amount of fake money will be added to their profile which they will be able to use to purchase items and add to their digital collection.
              Users will also be able to add items to the marketplace that other users will be able to purchase.
              </p>
            </div>
          </div>
        </div>

        <div className='job'>
          <div className='job-info'>
            <div className='job-img'>
              <a href='https://madelineramos.github.io/Coding-Quiz/'>
                {' '}
                <img
                  src={codingQuiz}
                  className='my-2'
                  style={{ width: '100%' }}
                  alt='Coding-Quiz-Application'
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>Coding Quiz</h4>
              <p>
              This application is a coding quiz that give the user a series of questions that have to be completed within 75 seconds. When the user starts the quiz the timer starts to count down from 75. If a question is answered incorrectly, 10 seconds will be taken off the timer. The quiz will end when the user either runs out of time or completes all 5 questions.
              Once the quiz is over, the user will be asked to enter their initials to save the score. Once the "Submit" button is clicked it will show other initials and scores if the quiz was taken more than once and scores were saved. The user also has to option to clear any scores that have been saved and start from scratch.
              </p>
            </div>
          </div>
        </div>

        <div className='job'>
          <div className='job-info'>
            <div className='job-img'>
              <a href='https://github.com/MadelineRamos/Note_Taker'>
                {' '}
                <img
                  src={noteTaker}
                  className='my-2'
                  style={{ width: '100%' }}
                  alt='Note-Taker-Application'
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>Note Taker</h4>
              <p>
              This application is used to create notes that can be saved and deleted. This is done by using Express.js back end that will save and retrieve data from a JSON file.
              </p>
            </div>
          </div>
        </div>

        <div className='job'>
          <div className='job-info'>
            <div className='job-img'>
              <a href='https://madelineramos.github.io/weather-dashboard/'>
                {' '}
                <img
                  src={weatherDashboard}
                  className='my-2'
                  style={{ width: '100%' }}
                  alt='Weather-Dashboard-Application'
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>Weather Dashboard</h4>
              <p>
              This application is a weather dashboard. It works when a user inputs a city in which they would like to see todays weather as well as a 5 day forecast. Once the user hits the search button, that days weather is displayed as well as a 5 day forecast of the upcoming days.
              After the user searches a city, that city is then added to a list below the search button. This will house any city's that the user searches so they have a quick and easy access to previous city searches.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;