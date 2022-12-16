import React from 'react';
import bohdeMarketplace from '../../assets/project-images/bohde-marketplace.png';
import codingQuiz from '../../assets/project-images/coding-quiz.png';
import noteTaker from '../../assets/project-images/note-taker.png';
import weatherDashboard from '../../assets/project-images/weather-dashboard.png';

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
              <a href='https://github.com/MadelineRamos/Bohde-Marketplace'>
                {' '}
                <img
                  src={bohdeMarketplace}
                  className='my-2'
                  style={{ width: '100%' }}
                  alt='Work-Day-Scheduler-Daily-Planner'
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>Bohde Marketplace</h4>
              <p>
                Add text here
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
                  alt='Password-Generator-Automaton'
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>Coding Quiz</h4>
              <p>
                Add text here
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
                  alt='Note_Taker'
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>Note Taker</h4>
              <p>
                Add text here
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
                  alt='Weather_Dashboard'
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>Weather Dashboard</h4>
              <p>
                Add text here
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;