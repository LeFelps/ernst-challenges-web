import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug, faCartShopping, faChartPie, faDatabase, faEthernet, faFingerprint, faGlobe, faKey, faListCheck, faLock, faMessage, faNetworkWired, faPlusCircle, faServer, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function App() {

  const [activePage, setActivePage] = useState('challenge')

  return (
    <div className="app">
      <div className="app-header">
        <div className="header-content">
          <p className={`nav-link${activePage === 'challenge' ? `-active` : ''}`}
            onClick={() => {
              setActivePage('challenge')
            }}>
            Challenges
          </p>
          <p className={`nav-link${activePage === 'jobs' ? `-active` : ''}`}
            onClick={() => {
              setActivePage('jobs')
            }}>
            Jobs
          </p>
          <img src={logo} className="nav-profile" alt="Small profile" style={{ borderColor: '#188EB9' }}
            onClick={() => {
              setActivePage('profile')
            }} />
        </div>
      </div>
      {activePage === 'challenge' ?
        <div className='content'>
          <div className="content-description">
            <p className='text-title'>
              Career challenges
            </p>
            <p className='text-secondary'>
              Challenges that help you test and improve your technical skills
            </p>
          </div>
          <div className='challenge-container'>
            <p className="group-title" style={{ color: '#188EB9' }}>
              Front-end development
            </p>
            <div className='card-group'>
              <div className='card'>
                <FontAwesomeIcon icon={faCartShopping} className="card-image" style={{ color: '#188EB9' }} />
                <div className='card-description'>
                  <p>
                    Shopping list
                  </p>
                  <p>
                    Build a working shopping list
                  </p>
                </div>
              </div>
              <div className='card'>
                <FontAwesomeIcon icon={faMessage} className="card-image" style={{ color: '#188EB9' }} />
                <div className='card-description'>
                  <p>
                    Chat
                  </p>
                  <p>
                    Build a working chat
                  </p>
                </div>
              </div>
              <div className='card'>
                <FontAwesomeIcon icon={faListCheck} className="card-image" style={{ color: '#188EB9' }} />
                <div className='card-description'>
                  <p>
                    To-Do List
                  </p>
                  <p>
                    Build a working To-Do List
                  </p>
                </div>
              </div>
              <div className='card'>
                <FontAwesomeIcon icon={faBug} className="card-image" style={{ color: '#188EB9' }} />
                <div className='card-description'>
                  <p>
                    Bug Bounty
                  </p>
                  <p>
                    Find and fix some of the most common bugs
                  </p>
                </div>
              </div>
              <div className='card'>
                <FontAwesomeIcon icon={faChartPie} className="card-image" style={{ color: '#188EB9' }} />
                <div className='card-description'>
                  <p>
                    Graphs
                  </p>
                  <p>
                    Manipulate and graph collections of data
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='challenge-container'>
            <p className="group-title" style={{ color: '#E05263' }}>
              Back-end development
            </p>
            <div className='card-group'>
              <div className='card'>
                <FontAwesomeIcon icon={faUser} className="card-image" style={{ color: '#E05263' }} />
              </div>
              <div className='card'>
                <FontAwesomeIcon icon={faLock} className="card-image" style={{ color: '#E05263' }} />
              </div>
              <div className='card'>
                <FontAwesomeIcon icon={faBug} className="card-image" style={{ color: '#E05263' }} />
              </div>
              <div className='card'>
                <FontAwesomeIcon icon={faKey} className="card-image" style={{ color: '#E05263' }} />
              </div>
              <div className='card'>
                <FontAwesomeIcon icon={faFingerprint} className="card-image" style={{ color: '#E05263' }} />
              </div>
              <div className='card'>
                <FontAwesomeIcon icon={faDatabase} className="card-image" style={{ color: '#E05263' }} />
              </div>
              <div className='card'>
                <FontAwesomeIcon icon={faServer} className="card-image" style={{ color: '#E05263' }} />
              </div>
            </div>
          </div>
          <div className='challenge-container'>
            <p className="group-title" style={{ color: '#37AE49' }}>
              Infrastructure
            </p>
            <div className='card-group'>
              <div className='card'>
                <FontAwesomeIcon icon={faNetworkWired} className="card-image" style={{ color: '#37AE49' }} />
              </div>
              <div className='card'>
                <FontAwesomeIcon icon={faEthernet} className="card-image" style={{ color: '#37AE49' }} />
              </div>
              <div className='card'>
                <FontAwesomeIcon icon={faGlobe} className="card-image" style={{ color: '#37AE49' }} />
              </div>
              <div className='card'>
                <FontAwesomeIcon icon={faServer} className="card-image" style={{ color: '#37AE49' }} />
              </div>
              <div className='card'>
                <FontAwesomeIcon icon={faDatabase} className="card-image" style={{ color: '#37AE49' }} />
              </div>
            </div>
          </div>
        </div>
        : activePage === 'jobs' ?
          <div className='content'>
            <div className="content-description">
              <p className='text-title'>
                Job Opportunities
              </p>
              <p className='text-secondary'>
                Here you will find job openings that fit you an that you'll fit in
              </p>
            </div>
            <div className='job-container'>
              <div className='job-card' style={{ borderLeftColor: '#E05263' }}>
                <div className='job-title' style={{ color: '#E05263' }}>
                  Desenvolvedor Back-end • Junior
                </div>
                <div className='job-info'>
                  <img src={logo} alt="" className='company-logo' />
                  <div className='align-center'>
                    <p className='job-info-name'>Koalify</p>
                    <p className='job-info-value'>R$ 4000,00</p>
                    <div className='job-info-extra'>
                      <FontAwesomeIcon className='icon-margin-right' icon={faPlusCircle} color='#188EB9' />
                      <p>
                        Benefícios
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className='job-container'>
              <div className='job-card' style={{ borderLeftColor: '#E05263' }}>
                <div className='job-title' style={{ color: '#E05263' }}>
                  Desenvolvedor Back-end • Sênior
                </div>
                <div className='job-info'>
                  <img src={logo} alt="" className='company-logo' />
                  <div className='align-center'>
                    <p className='job-info-name'>Koalify</p>
                    <p className='job-info-value'>R$ 14000,00</p>
                    <div className='job-info-extra'>
                      <FontAwesomeIcon className='icon-margin-right' icon={faPlusCircle} color='#188EB9' />
                      <p>
                        Benefícios
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='job-container'>
              <div className='job-card' style={{ borderLeftColor: '#37AE49' }}>
                <div className='job-title' style={{ color: '#37AE49' }}>
                  Server Manager • Junior
                </div>
                <div className='job-info'>
                  <img src={logo} alt="" className='company-logo' />
                  <div className='align-center'>
                    <p className='job-info-name'>Koalify</p>
                    <p className='job-info-value'>R$ 4000,00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='job-container'>
              <div className='job-card' style={{ borderLeftColor: '#188EB9' }}>
                <div className='job-title' style={{ color: '#188EB9' }}>
                  Desenvolvedor Front-end • Junior
                </div>
                <div className='job-info'>
                  <img src={logo} alt="" className='company-logo' />
                  <div className='align-center'>
                    <p className='job-info-name'>Koalify</p>
                    <p className='job-info-value'>R$ 4000,00</p>
                    <div className='job-info-extra'>
                      <FontAwesomeIcon className='icon-margin-right' icon={faPlusCircle} color='#188EB9' />
                      <p>
                        Benefícios
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='job-container'>
              <div className='job-card' style={{ borderLeftColor: '#E05263' }}>
                <div className='job-title' style={{ color: '#E05263' }}>
                  Desenvolvedor Back-end • Junior
                </div>
                <div className='job-info'>
                  <img src={logo} alt="" className='company-logo' />
                  <div className='align-center'>
                    <p className='job-info-name'>Koalify</p>
                    <p className='job-info-value'>R$ 4000,00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          : activePage === "profile" ?
            <div className='content'>
              <div className='profile-info'>
                <img src={logo} alt="" className='profile-picture' style={{ borderColor: '#188EB9' }} />
                <div className='align-center'>
                  <p className='profile-info-name' >Fellipe Corominas Pereira</p>
                  <p className='profile-info-position' >Front-End Developer • Junior</p>
                  <div className='profile-info-extra'>
                  </div>
                </div>
              </div>
              <div className='profile-call-to-action'>
                <button className='profile-apply-button'>
                  <p>
                    I am available!
                  </p>
                </button>
              </div>
              <div className='profile-section'>
                <p className="group-title">
                  Inventory
                </p>
              </div>
              <div className='profile-section'>
                <p className="group-title">
                  Work Experience
                </p>
                <div className="form-card">

                </div>
              </div>
              <div className='profile-section'>
                <p className="group-title">
                  Education
                </p>
                <div className="form-card">

                </div>
              </div>
              <div className='profile-section'>
                <p className="group-title">
                  Your skills
                </p>
                <div className="skills">
                  <div className="profile-skill">
                    <input type="checkbox" name="check1" id="check1" />
                    <label for="check1">Javascript</label>
                  </div>
                  <div className="profile-skill">
                    <input type="checkbox" name="check2" id="check2" />
                    <label for="check2">ReactNative</label>
                  </div>
                  <div className="profile-skill">
                    <input type="checkbox" name="check3" id="check3" />
                    <label for="check3">IOS</label>
                  </div>
                  <div className="profile-skill">
                    <input type="checkbox" name="check4" id="check4" />
                    <label for="check4">CSS</label>
                  </div>
                </div>
              </div>
              <div className='profile-card-preview'>
              </div>
            </div>
            : <></>}
      <div className='footer'>

      </div>
      <div className='background-fade' />
    </div>
  );
}

export default App;
