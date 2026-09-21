import base from './base';
import auth from './auth';
import common from './common';
import forum from './forum';
import home from './home';
import players from './players';
import profile from './profile';
import resources from './resources';
import site from './site';
import video from './video';

const zhCN = { ...base, ...common, ...home, ...resources, ...forum, ...video, ...players, ...auth, ...profile, ...site } as const;
export default zhCN;
