import {FC} from 'react'
import {bem} from "@/shared/lib/bem";
import styles from './Footer.module.scss';
import {AppLink} from "@/shared/ui/AppLink";
import {useTheme} from "@/shared/lib/hooks/useTheme/useTheme";
import {Theme} from "@/shared/const/theme";
import {GET_AGE, MY_LINKS, NAV_LIST} from "@/widgets/Footer/ui/constants";
const b = bem('footer', styles);

export interface IFooterProps {
  className?: string;
}



export const Footer: FC<IFooterProps> = (props) => {
  const {
    className,
  } = props;

  const {theme} = useTheme();

  return (
    <footer className={b('', {}, [className])}>
      <div className={b('container')}>
        <section className={b('title')}>
          <h2 className={b('title-name')}>Батагов Сергей Сергеевич, {GET_AGE()} года</h2>
          <span className={b('title-text')}>Frontend Developer</span>
        </section>
        <address className={b('address')}>
          <h3 className={b('section-title')}>Контакты:</h3>
          <ul className={b('contact-list')}>
            <li>
              <a
                className={b('contact-link')}
                href="mailto:sergey.bat2001@yandex.ru"
              >
                sergey.bat2001@yandex.ru
              </a>
            </li>
            <li>
              <a
                className={b('contact-link')}
                href="mailto:sergey.bat2001@yandex.ru"
              >
                sergey.030901@mail.ru
              </a>
            </li>
          </ul>
        </address>
        <section className={b('navigation')}>
          <h3 className={b('section-title')}>Навигация:</h3>
          <nav>
            <ul className={b('link-list')}>
              {NAV_LIST.map(({link, title, subList}) => (
                <li key={link}>
                  <AppLink
                    className={b('link')}
                    to={link}
                    variant='primary'
                    activeClassName={b('active')}
                    withoutActive
                  >
                    {title}
                  </AppLink>
                  <ul className={b('sub-link-list')}>
                    {subList?.map(({link, title}) => (
                      <li key={link}>
                        <AppLink
                          className={b('sub-link')}
                          to={title}
                          variant={'secondary'}
                          activeClassName={b('active')}
                          withoutActive
                        >
                          {title}
                        </AppLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        </section>
        <section className={b('social')}>
          <h3 className={b('section-title')}>Соц. сети:</h3>
          <ul className={b('social-links')}>
            {MY_LINKS.map(({link, src, alt, withInverted, themeInverted}) => (
              <li key={link}>
                <a
                  className={b('social-link')}
                  href={'https://setka.ru/accounts/45340'}
                  target="_blank" rel="noreferrer"
                >
                  <img
                    className={b(
                      'social-link-icon',
                      {inverted: withInverted && theme === themeInverted}
                    )}
                    src={src}
                    alt={alt}
                  />
                </a>
              </li>
            ))}
          </ul>
        </section>
        <div className={b('copyright')}>
          <p>&copy; CV-2024 Батагов Сергей Сергеевич. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
