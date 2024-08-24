import {bem} from "@/shared/lib/bem";
import styles from "@/features/AboutMeBlock/ui/AboutMeBlock.module.scss";
import myProfile from "@/features/AboutMeBlock/assets/my-profile.jpeg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const b = bem('about-me', styles)
import {
  faGithub,
  faTelegram,
  faVk,
} from '@fortawesome/free-brands-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

const MyLinks = [
  {
    icon: faGithub,
    link: 'https://github.com/SergeyBat',
  },
  {
    icon: faTelegram,
    link: 'https://t.me/sbatagov',
  },
  {
    icon: faVk,
    link: 'https://vk.com/sbatagov03',
  }
]

export const AboutMeBlock = () => {
  return (
    <article className={b('')}>
      <section className={b('greeting')}>
        <svg className={b('greeting-text')} viewBox="0 0 1000 300">
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="Times New Roman"
          >
            Привет!
          </text>
        </svg>
      </section>
      <section className={b('my-profile')}>
        <div className={b('left-side')}>
          <header className={b('profile-header')}>
            <h1 className={b('my-name')}>
              Меня зовут Батагов Сергей <br/>
              Я Frontend Developer
            </h1>
          </header>
          <article className={b('about-me')}>
            <p className={b('about-me-preview-text')}>
              Я занимаюсь решением сложных задач<br/>
              пользовательского интерфейса, создавая<br/>
              интуитивно понятные и эффективные решения <br/>
              на базе React, которые обеспечивают<br/>
              исключительный пользовательский опыт.
            </p>
          </article>
          <aside>
            <ul className={b('social-links')}>
              <li>
                <a
                  className={b('curriculum-vitae-link')}
                  href="https://taganrog.hh.ru/resume/f3e2f39fff0ceb11900039ed1f69576b56306b"
                  target="_blank"
                  rel="noreferrer"
                >
                  Моё cv на hh.ru
                  <FontAwesomeIcon icon={faArrowRight}/>
                </a>
              </li>
              {MyLinks.map(({link, icon}) => (
                <li key={link}>
                  <a
                    className={b('social-link')}
                    href={link}
                    target="_blank" rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={b('social-link-icon')}
                      icon={icon}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <figure className={b('my-photo-wrapper')}>
          <img
            className={b('my-photo')}
            src={myProfile}
            alt="Фото профиля Батагова Сергея"
          />
        </figure>
      </section>
    </article>
  )
}

