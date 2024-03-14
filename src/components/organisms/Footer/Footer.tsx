import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  Logo,
  TextHighlight,
  TextParagraph,
  YoutubeLogo,
} from 'components';
import { contactList, doorMatNavigationList } from 'data';

import classes from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={`${classes['Footer']} container-max-width`}>
      <header className={classes['Footer_header']}>
        <Logo />
        <TextHighlight text={`© Little Lemon ${new Date().getFullYear()}`} />
      </header>
      <article>
        <TextHighlight text='Doormat Navigation' />
        <ul>
          {doorMatNavigationList.map(({ href, title }, idx) => (
            <li key={`${title}_${idx}`}>
              <a href={href}>
                <TextParagraph text={title} />
              </a>
            </li>
          ))}
        </ul>
      </article>
      <article>
        <TextHighlight text='Contact' />
        <ul>
          {contactList.map(({ href, title }, idx) => (
            <li key={`${title}_${idx}`}>
              <a href={href}>
                <TextParagraph text={title} />
              </a>
            </li>
          ))}
        </ul>
      </article>
      <article>
        <TextHighlight text='Social Media' />
        <ul>
          <li>
            <a href='/' target='_blank'>
              <FacebookLogo width={35} height={35} />
            </a>
          </li>
          <li>
            <a href='/' target='_blank'>
              <InstagramLogo width={35} height={35} />
            </a>
          </li>
          <li>
            <a href='/' target='_blank'>
              <YoutubeLogo width={35} height={35} />
            </a>
          </li>
          <li>
            <a href='/' target='_blank'>
              <LinkedinLogo width={35} height={35} />
            </a>
          </li>
        </ul>
      </article>
    </footer>
  );
};
