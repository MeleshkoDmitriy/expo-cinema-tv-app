import { TAvatar } from '@/types';

export const Avatars: TAvatar[] = [
  { id: 'qa', name: 'QA', image: require('../../assets/avatars/avatar-qa.png') },
  { id: 'web', name: 'Web', image: require('../../assets/avatars/avatar-web.png') },
  { id: 'mobile', name: 'Mobile', image: require('../../assets/avatars/avatar-mobile.png') },
  { id: 'backend', name: 'Backend', image: require('../../assets/avatars/avatar-backend.png') },
  { id: 'design', name: 'Design', image: require('../../assets/avatars/avatar-design.png') },
  { id: 'devops', name: 'DevOps', image: require('../../assets/avatars/avatar-devops.png') },
  { id: 'smart-tv', name: 'Smart TV', image: require('../../assets/avatars/avatar-smart-tv.png') },
];

const UNKNOWN_AVATAR_ID = 'unknown';
const UnknownAvatarImage = require('../../assets/avatars/avatar-unknown.png');

export const UnknownAvatar: TAvatar = {
  id: UNKNOWN_AVATAR_ID,
  name: 'Unknown',
  image: UnknownAvatarImage,
}