import * as React from 'react';
import styles from './SocialLinks.module.scss';
import { ISocialLinksProps } from './ISocialLinksProps';
import { WebPartTitle } from '@pnp/spfx-controls-react';
import { DisplayMode } from '@microsoft/sp-core-library';

const SocialLinks: React.FC<ISocialLinksProps> = ({
  showTwitter,
  twitterLink,
  showLinkedin,
  linkedinLink,
  showYouTube,
  youTubeLink,
  showFacebook,
  facebookLink,
  showInstagram,
  instagramLink,
  showPinterest,
  pinterestLink,
  showSnapchat,
  snapchatLink,
  showReddit,
  redditLink,
  showTikTok,
  tikTokLink,
  title,
  updateTitle
}) => {
  const Link: React.FC<{ show: boolean; link: string; icon: string }> = ({
    show,
    link,
    icon
  }) => {
    if (!show) return null;

    return (
      <div className={styles.linkZone}>
        <a href={link} target='_blank' rel='noreferrer'>
          <img
            src={require(`../assets/${icon}.png`)}
            width='36px'
            height='36px'
            alt='icon'
          />
        </a>
      </div>
    );
  };

  return (
    <section className={styles.socialLinks}>
      <WebPartTitle
        displayMode={DisplayMode.Edit}
        title={title}
        updateProperty={updateTitle}
        placeholder='Add a title'
      />
      <ul className={styles.links}>
        <Link show={showTwitter} link={twitterLink} icon={'x_twitter'} />
        <Link show={showLinkedin} link={linkedinLink} icon={'linkedin'} />
        <Link show={showYouTube} link={youTubeLink} icon={'youtube'} />
        <Link show={showFacebook} link={facebookLink} icon={'facebook'} />
        <Link show={showInstagram} link={instagramLink} icon={'instagram'} />
        <Link show={showPinterest} link={pinterestLink} icon={'pinterest'} />
        <Link show={showSnapchat} link={snapchatLink} icon={'snapchat'} />
        <Link show={showReddit} link={redditLink} icon={'reddit'} />
        <Link show={showTikTok} link={tikTokLink} icon={'tiktok'} />
      </ul>
    </section>
  );
};

export default SocialLinks;
