export interface ISocialLinksProps {
  showTwitter: boolean;
  twitterLink: string;
  showLinkedin: boolean;
  linkedinLink: string;
  showYouTube: boolean;
  youTubeLink: string;
  showFacebook: boolean;
  facebookLink: string;
  showInstagram: boolean;
  instagramLink: string;
  showPinterest: boolean;
  pinterestLink: string;
  showSnapchat: boolean;
  snapchatLink: string;
  showReddit: boolean;
  redditLink: string;
  showTikTok: boolean;
  tikTokLink: string;
  title: string;
  updateTitle: (value: string) => void;
}
